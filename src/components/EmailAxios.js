// Client component: uses hooks and client-side rendering
'use client';
import axios from 'axios';
import React, { useState } from "react";
import Button from "./Button_";
import PropTypes from "prop-types";

const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
};

// EmailSender sends an email using the Next.js API route and a rendered HTML email template
const EmailSender = (
  { buttonText,
    buttonStyle,
    buttonSize,
    footer,
  }
) => {

  // Local state for recipient email and submission status
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  
  // Send email handler: renders EmailTemplate to HTML and posts to /api/send-email
  const sendEmail = async (e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    try {
      // Only the recipient is sent; the subject and body are fixed server-side.
      const response = await axios.post("/api/send-email", { to: email });

      if (response.status === 200)
      {
        setStatus('OK');
      }
    } catch (error) {
      if (error.response?.status === 429) {
        alert('Too many requests. Please try again later.');
      } else {
        alert('Sorry, we could not send that right now. Please try again.');
      }
      console.error('Error sending email:', error);
    }
  };

  const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    if (!validateEmail(email)) 
    {
      alert('Please enter a valid email address');
    return;
    }
    sendEmail(e); 
  }
  };

  // Render CTA button and input form; show success message when email sent
  return (
    <>
      <section className="footer-subscription">
        {/* Always present so the change is announced; a node that appears for
            the first time is not observed by screen readers. */}
        <p className="visually-hidden" role="status" aria-live="polite">
          {status === "OK" ? "Thank you! A copy has been sent." : ""}
        </p>

        {status === "OK" ? (
          <>
            <div className="lets-chat-button">
              <Button
                buttonStyle={buttonStyle}
                buttonSize={buttonSize}
                linkTo="/ContactUs"
              >
                {buttonText}
              </Button>
            </div>

            {/* Footer label hidden once email is sent */}
            <p className="thin-gradient-line"> {(footer = "")}</p>
            <div className="EmailSentSuccess">
              {/* Success message shown after email send */}
              <h2>Thank you! A copy has been sent.</h2>
            </div>
          </>
        ) : (
          <>
            <div className="lets-chat-button">
              <Button
                buttonStyle={buttonStyle}
                buttonSize={buttonSize}
                linkTo="/ContactUs"
              >
                {buttonText}
              </Button>
            </div>

            <p className="thin-gradient-line"> {footer}</p>

            <div className="footer-subscription-input">
              <label className="visually-hidden" htmlFor="subscribe-email">
                Your email address
              </label>
              <input
                id="subscribe-email"
                name="email"
                className="input--resume"
                type="email"
                autoComplete="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
              />

              {/* A plain button, not a Button wrapped in a link. The wrapper
                  previously pointed at "/", so activating the link instead of
                  the inner button navigated away and discarded the address. */}
              <button
                type="button"
                className="btn btn--outline btn--Large"
                onClick={sendEmail}
              >
                Send It Now
              </button>
            </div>
          </>
        )}
      </section>
    </>
  );
};

// PropTypes for EmailSender component
EmailSender.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonStyle: PropTypes.string,
  buttonSize: PropTypes.string,
  footer: PropTypes.string.isRequired,
};
export default EmailSender;