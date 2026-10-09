// Import React and useState hook for state management
import React from "react";
import Head from "next/head";
import { useState, useRef, useEffect } from "react";
// Import Submit button component
import { Submit } from "../src/components/Submit";
// Import axios for HTTP requests
import axios from "axios";
// Import custom Button component
import Button  from "../src/components/Button_";

// Import BottomFooter component
import BottomFooter from "../src/components/BottomFooter";

// SignUp component for user contact form
function SignUp() {
  // State variables for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // State for form submission status
  const [status, setStatus] = useState(null);

  // On success the form unmounts, which would drop focus to <body> and reset
  // the screen reader's reading position. Move focus to the confirmation.
  const successRef = useRef(null);
  useEffect(() => {
    if (status === 'OK' && successRef.current) {
      successRef.current.focus();
    }
  }, [status]);

  // Handle form submit event
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!name || !email || !message)
    {
      setStatus('ERROR');
      alert('Please fill in all fields.');
      return;
    }

    try {
      // Posts to our own API route, which holds the credentials server-side
      // and applies rate limiting. Nothing sensitive reaches the browser.
      const res = await axios.post("/api/contact", { name, email, message });

      if (res.status === 200)
      {
        setStatus('OK');
      }
    }
    catch (error) {
      if (error.response?.status === 429) {
        alert('Too many messages. Please try again later.');
      } else {
        alert('Sorry, your message could not be sent. Please try again.');
      }
      console.error('Error sending message:', error);
    }
  };

  return (
    <>
      <Head>
        <title>Contact | TekIntraLinked</title>
      </Head>
      {/* Form container with background video */}
      <div className="FormtoSend">
        {/* Decorative background: hidden from the accessibility tree. */}
        <video
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline={true.toString()}
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="https://videosdirectory.s3.us-east-2.amazonaws.com/videos/BackgroundVideo1_.mp4" type="video/mp4" />
        </video>

        {/* Email form with conditional success message. The status region is
            always rendered so screen readers announce changes to it; swapping
            the node in and out gives them nothing to observe. */}
        <form onSubmit={handleSubmit} className="emailForm" aria-labelledby="contact-heading">
          {/* h1: this form is the page's main content on both /SignUp and
              /ContactUs, and neither page had a top-level heading. */}
          <h1 id="contact-heading">Email Me:</h1>

          <p className="visually-hidden" role="status" aria-live="polite">
            {status === 'OK'
              ? 'Thank you! Your message has been sent.'
              : status === 'ERROR'
                ? 'Please fill in all fields.'
                : ''}
          </p>

          {status === 'OK' ? (
            <div className="successMessage">
              {/* Success message displayed after email sent. Focused on mount so
                  the reading position follows the change instead of resetting. */}
              <h3 tabIndex={-1} ref={successRef}>Thank you! Your message has been sent.</h3>
            </div>
            ) : (
              <>
                {/* Input for name */}
                <div className="InnerBox">
                  <label className="field-label" htmlFor="contact-name">Name:</label>
                  <input
                    id="contact-name"
                    name="name"
                    className="Bubble"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* Input for email */}
                <div className="InnerBox">
                  <label className="field-label" htmlFor="contact-email">Email:</label>
                  <input
                    id="contact-email"
                    name="email"
                    className="Bubble"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Textarea for message */}
                <div className="MessageBox">
                  <label className="field-label" htmlFor="contact-message">Message:</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    cols="30"
                    rows="10"
                    className="Rectangletxtbox"
                    required
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                {/* Submit button */}
                <div className="Centering-Button">
                  <Submit type="submit">Send Email</Submit>
                </div>
              </>
            )}
        </form>
      </div>
    </>
  );
}

// Export SignUp component as default
export default SignUp;