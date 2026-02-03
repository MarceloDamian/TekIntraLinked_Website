  
'use client';
import axios from 'axios';
import React, { useState } from "react";
import Button from "./Button_";
import PropTypes from "prop-types";

import EmailTemplate from './EmailTemplate.jsx';
import ReactDOMServer from 'react-dom/server';

// import "./TopFooter.css";

// Resend for incoming emails for next update of this website. 

  // This is the backend code using axios to send an email.
const EmailSender = (
  { buttonText,
    buttonStyle,
    buttonSize,
    footer,
  }
) => {

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  

  const sendEmail = async (e) => {
    
    e.preventDefault();


    try {
      
      const htmlString = ReactDOMServer.renderToStaticMarkup(<EmailTemplate />);

      const response = await axios.post("/api/send-email", {
        from: "erick.cabrera@tekintralinked.com",
        // to: [`officialerickpage@gmail.com`],
        to: [email],
        subject: "Hello World",
        // html:"",
        // html: "<strong>It works!</strong>",
        html: htmlString,
        // EmailTemplate(),
        // Resume(),
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

              <p className="thin-gradient-line"> {footer=""}</p>
              <div className="EmailSentSuccess">
                {/* Success message or styled element */}
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
                />

                <Button
                  buttonStyle={buttonStyle}
                  buttonSize={"btn--Large"}
                  onClick={sendEmail}
                  linkTo = '/'
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

EmailSender.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonStyle: PropTypes.string,
  buttonSize: PropTypes.string,
  footer: PropTypes.string.isRequired,
};
export default EmailSender;

