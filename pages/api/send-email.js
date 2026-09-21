
// Server-side email endpoint for the subscribe form.
// The caller supplies only a recipient address; the subject and body are fixed
// here so this route cannot be used to send arbitrary mail from our domain.
import { Resend } from 'resend';
import ReactDOMServer from 'react-dom/server';
import EmailTemplate from '../../src/components/EmailTemplate.jsx';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = 'no-reply@tekintralinked.com';
const SUBJECT = 'Tekintralinked';

// Rate limits, enforced per process. nginx limits by IP in front of this;
// these caps also bound the Resend bill if that layer is ever bypassed.
const PER_IP_MAX = 3;
const PER_IP_WINDOW_MS = 60 * 60 * 1000;      // 3 sends per IP per hour
const PER_EMAIL_MAX = 2;
const PER_EMAIL_WINDOW_MS = 24 * 60 * 60 * 1000; // 2 sends per address per day
const GLOBAL_MAX = 100;
const GLOBAL_WINDOW_MS = 24 * 60 * 60 * 1000; // 100 sends per day total

const ipHits = new Map();
const emailHits = new Map();
let globalHits = [];

// Drop entries whose timestamps have all aged out, so a long-running process
// does not accumulate one map entry per address seen.
const prune = (map, windowMs, now) => {
  for (const [key, times] of map) {
    if (times.every((t) => now - t >= windowMs)) map.delete(key);
  }
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

// Trusts X-Forwarded-For only because nginx sets it; port 3000 is not public.
const clientIp = (req) => {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim();
  }
  return req.socket?.remoteAddress || 'unknown';
};

// Checks the global, per-IP and per-address caps together. Nothing is recorded
// unless every cap passes, so a request rejected by one limit does not count
// against the others. Returns null when allowed, otherwise which cap was hit.
const limitExceeded = (ip, email) => {
  const now = Date.now();

  globalHits = globalHits.filter((t) => now - t < GLOBAL_WINDOW_MS);
  if (globalHits.length >= GLOBAL_MAX) return 'global';

  const ipRecent = (ipHits.get(ip) || []).filter((t) => now - t < PER_IP_WINDOW_MS);
  if (ipRecent.length >= PER_IP_MAX) {
    ipHits.set(ip, ipRecent);
    return 'ip';
  }

  // Keyed on the address itself, so rotating IPs cannot mailbomb one recipient.
  const emailRecent = (emailHits.get(email) || []).filter(
    (t) => now - t < PER_EMAIL_WINDOW_MS
  );
  if (emailRecent.length >= PER_EMAIL_MAX) {
    emailHits.set(email, emailRecent);
    return 'email';
  }

  ipRecent.push(now);
  ipHits.set(ip, ipRecent);
  emailRecent.push(now);
  emailHits.set(email, emailRecent);
  globalHits.push(now);

  if (ipHits.size > 5000) prune(ipHits, PER_IP_WINDOW_MS, now);
  if (emailHits.size > 5000) prune(emailHits, PER_EMAIL_WINDOW_MS, now);

  return null;
};

export default async function EmailHandler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  // Accept a bare string or a single-element array; anything else is a bulk send.
  const raw = req.body?.to;
  const to = Array.isArray(raw) ? raw[0] : raw;

  if (Array.isArray(raw) && raw.length !== 1) {
    return res.status(400).json({ message: 'Exactly one recipient is allowed' });
  }

  if (typeof to !== 'string' || to.length > 254 || !emailPattern.test(to)) {
    return res.status(400).json({ message: 'A valid recipient address is required' });
  }

  // Normalized so casing and stray whitespace cannot be used to reset the cap.
  const recipient = to.trim().toLowerCase();

  const hit = limitExceeded(clientIp(req), recipient);
  if (hit) {
    const message =
      hit === 'email'
        ? 'This address has already been sent the maximum number of emails today'
        : 'Too many requests, please try again later';
    return res.status(429).json({ message });
  }

  try {
    const html = ReactDOMServer.renderToStaticMarkup(EmailTemplate());

    const { data } = await resend.emails.send({
      from: FROM,
      to: [recipient],
      subject: SUBJECT,
      html,
    });

    return res.status(200).json({ message: 'Email sent', id: data?.id });
  } catch (error) {
    // Log server-side; do not return provider details to the caller.
    console.error({ error });
    return res.status(500).json({ message: 'Unable to send email' });
  }
}
