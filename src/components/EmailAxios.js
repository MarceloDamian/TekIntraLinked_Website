// Client component: uses hooks and client-side rendering
'use client';
import axios from 'axios';
import React, { useState } from "react";
import Button from "./Button_";
import PropTypes from "prop-types";

import EmailTemplate from './EmailTemplate.jsx';
import ReactDOMServer from 'react-dom/server';

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
      const htmlString = ReactDOMServer.renderToStaticMarkup(<EmailTemplate />);

      const response = await axios.post("/api/send-email", {
        from: "erick.cabrera@tekintralinked.com",
        // to: [`officialerickpage@gmail.com`],
        to: [email],
        subject: "Tekintralinked",
        html: htmlString,
      });
      
      
      if (response.status === 200) 
      {
        setStatus('OK');
      } 
      console.log('Email sent:', email);
      console.log('Email sent:', response.data);
    } catch (error) {
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
              <input
                className="input--resume"
                type="Email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
              />

              <Button
                buttonStyle={buttonStyle}
                buttonSize={"btn--Large"}
                onClick={sendEmail}
                linkTo="/"
              >
                {(buttonText = "Send It Now")}
              </Button>
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