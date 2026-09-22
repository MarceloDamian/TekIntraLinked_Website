
// Contact form endpoint. Replaces the previous browser-to-EmailJS call, which
// shipped three credentials to every visitor and could not be rate limited.
// The message always goes to the site owner; the caller cannot choose a
// recipient, so this route cannot be used to send mail to third parties.
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = 'no-reply@tekintralinked.com';
const TO = process.env.CONTACT_TO || 'erickcabrera1909@gmail.com';

const PER_IP_MAX = 3;
const PER_IP_WINDOW_MS = 60 * 60 * 1000;         // 3 messages per IP per hour
const PER_SENDER_MAX = 3;
const PER_SENDER_WINDOW_MS = 24 * 60 * 60 * 1000; // 3 per sender address per day
const GLOBAL_MAX = 100;
const GLOBAL_WINDOW_MS = 24 * 60 * 60 * 1000;

const MAX_NAME = 100;
const MAX_MESSAGE = 5000;

const ipHits = new Map();
const senderHits = new Map();
let globalHits = [];

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

// The message is visitor-supplied and lands in an HTML email, so escape it.
const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

// Nothing is recorded unless every cap passes, so a rejected request does not
// count against the others. Returns null when allowed.
const limitExceeded = (ip, sender) => {
  const now = Date.now();

  globalHits = globalHits.filter((t) => now - t < GLOBAL_WINDOW_MS);
  if (globalHits.length >= GLOBAL_MAX) return 'global';

  const ipRecent = (ipHits.get(ip) || []).filter((t) => now - t < PER_IP_WINDOW_MS);
  if (ipRecent.length >= PER_IP_MAX) {
    ipHits.set(ip, ipRecent);
    return 'ip';
  }

  const senderRecent = (senderHits.get(sender) || []).filter(
    (t) => now - t < PER_SENDER_WINDOW_MS
  );
  if (senderRecent.length >= PER_SENDER_MAX) {
    senderHits.set(sender, senderRecent);
    return 'sender';
  }

  ipRecent.push(now);
  ipHits.set(ip, ipRecent);
  senderRecent.push(now);
  senderHits.set(sender, senderRecent);
  globalHits.push(now);

  if (ipHits.size > 5000) prune(ipHits, PER_IP_WINDOW_MS, now);
  if (senderHits.size > 5000) prune(senderHits, PER_SENDER_WINDOW_MS, now);

  return null;
};

export default async function ContactHandler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  const { name, email, message } = req.body || {};

  if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
    return res.status(400).json({ message: 'Name, email and message are required' });
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim().toLowerCase();
  const cleanMessage = message.trim();

  if (!cleanName || !cleanMessage) {
    return res.status(400).json({ message: 'Name, email and message are required' });
  }
  if (cleanName.length > MAX_NAME || cleanMessage.length > MAX_MESSAGE) {
    return res.status(400).json({ message: 'Name or message is too long' });
  }
  if (cleanEmail.length > 254 || !emailPattern.test(cleanEmail)) {
    return res.status(400).json({ message: 'A valid email address is required' });
  }

  const hit = limitExceeded(clientIp(req), cleanEmail);
  if (hit) {
    return res.status(429).json({ message: 'Too many messages, please try again later' });
  }

  try {
    const html = `
      <p><strong>From:</strong> ${escapeHtml(cleanName)} (${escapeHtml(cleanEmail)})</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(cleanMessage).replace(/\n/g, '<br/>')}</p>
    `;

    const { data } = await resend.emails.send({
      from: FROM,
      to: [TO],
      // Lets you reply straight to the visitor from your inbox.
      replyTo: cleanEmail,
      subject: `Contact form: ${cleanName}`,
      html,
    });

    return res.status(200).json({ message: 'Message sent', id: data?.id });
  } catch (error) {
    console.error({ error });
    return res.status(500).json({ message: 'Unable to send message' });
  }
}
