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

    // Retrieve email service config from environment variables
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID; 

    // Log service config and form data for debugging
    //console.log(serviceId, templateId, userId);
    //console.log(name, email, message);

    // Validate form fields
    if (!name || !email || !message)
    {
      setStatus('ERROR');
      alert('Please fill in all fields.');
      return;
    }

    // Prepare data payload for email service
    const data = 
    {
      service_id: serviceId,
      template_id: templateId,
      user_id: userId,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "Erick Cabrera",
        message: message,
      },
    };


    try {
      // Send email via emailjs API
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      // If successful, update status
      if (res.status === 200) 
      {
        setStatus('OK');
      } 
    } 
    catch (error) {
      // Log any errors
      console.error(error, "Error sending email", error.response.data);
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