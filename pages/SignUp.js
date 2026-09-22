// Import React and useState hook for state management
import React from "react";
import { useState } from "react";
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
      {/* Form container with background video */}
      <div className="FormtoSend">
        <video autoPlay loop muted playsInline webkit-playsinline={true.toString()}>
          <source src="https://videosdirectory.s3.us-east-2.amazonaws.com/videos/BackgroundVideo1_.mp4" type="video/mp4" />
        </video>

        {/* Email form with conditional success message */}
        <form onSubmit={handleSubmit} className="emailForm">
          {status === 'OK' ? (
            <div className="successMessage">
              {/* Success message displayed after email sent */}
              <h2>Thank you! Your message has been sent.</h2>
            </div>
            ) : (
              <>
                {/* Input for name */}
                <div className="InnerBox">
                  <h2>Email Me:</h2>
                  <h3>Name:</h3>
                  <input
                    className="Bubble"
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* Input for email */}
                <div className="InnerBox">
                  <h3>Email:</h3>
                  <input
                    className="Bubble"
                    type="Email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Textarea for message */}
                <div className="MessageBox">
                  <h3>Message:</h3>
                  <textarea
                    cols="30"
                    rows="10"
                    className="Rectangletxtbox"
                    type="Message"
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