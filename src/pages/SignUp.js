import React from "react";
import { useState } from "react";
import "./SignUp.css";
import { Submit } from "./../components/Submit";
import axios from "axios";
import { Button } from "./../components/Button";

// Use this website https://www.youtube.com/watch?v=btZII7TXlhk
// add automatic setup using wifi { https://react.email/docs/getting-started/automatic-setup }
// take creative inspiration from www.silverlake.com

function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ! Hide all of these variables into .env.local file
    // ! When submitting to github but them in a git hide folder so it doesnt
    // ! get posted there either. 
    
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID; 
    // use .env variables for this

    const data = 
    {
      service_id: serviceId,
      template_id: templateId,
      user_id: userID,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "Erick Cabrera",
        message: message,
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data,
      );
      console.log(res.data);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      
    }
  };
  return (
    <>
      <div className="FormtoSend">
        <video autoPlay loop muted>
          <source src="../../videos/BackgroundVideo1_.mp4" type="video/mp4" />
        </video>

        <form onSubmit={handleSubmit} className="emailForm">
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

          <div className="Centering-Button">
            <Submit type="submit">Send Email</Submit>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;

{
  /* --------- below is me -------------- */
}

{
  /* <div className="FormtoSend">     */
}

{
  /* <table>
        <td className='Move-LeftTxtbox'> */
}
{
  /* <h1>Contact:</h1>
          <h3>Address:
            30 N Gould St Ste N
            Sheridan, WY 82801
          </h3>
          <h3>Phone Number:
            307-381-1324
          </h3> */
}
{
  /* </td>
      </table> */
}
{
  /* <form onSubmit={handleSubmit} className='emailForm'> */
}
{
  /* <th>
          Email Me:
        </th> */
}

{
  /* <tr>
          <td className='Move-Name'> */
}
{
  /* <h3>Name:</h3>
              <input 
                className='Bubble' 
                type='text' 
                placeholder='Your Name' 
                value ={name}
                onChange={(e) => setName(e.target.value) }
              /> */
}
{
  /* </td>
        </tr> */
}
{
  /* <tr>
          <td className='Move-Email'> */
}
{
  /* <h3>Email:</h3>
              <input 
                className='Bubble' 
                type='Email' 
                placeholder='Your Email' 
                value = {email}
                onChange={(e) => setEmail(e.target.value) }
              /> */
}
{
  /* </td>
        </tr> */
}

{
  /* <tr>
          <td className='Move-Message'> */
}
{
  /* <h3>Message:</h3>
              <textarea 
                cols = '30'
                rows = '10'
                className='Rectangletxtbox' 
                type='Message' 
                placeholder='Your Message' 
                value = {message}
                onChange={(e) => setMessage(e.target.value) }
              /> */
}
{
  /* </td>
        </tr> */
}

{
  /* <td >
          <Submit type="submit" className='Move-Button'>
            Send Email
          </Submit>
        </td> */
}

{
  /* </form>  */
}
{
  /* </div> */
}
