import React from 'react';
import {useState} from 'react';
import './SignUp.css';
import { Submit } from './../components/Submit';
import axios from 'axios';
import { Button } from './../components/Button';


// Use this website https://www.youtube.com/watch?v=btZII7TXlhk 
// add automatic setup using wifi { https://react.email/docs/getting-started/automatic-setup }
// take creative inspiration from www.silverlake.com

function SignUp () 
{    
    
  const [name,setName] = useState();
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    
    const serviceId = 'service_bgw6dfq';
    const templateId = 'template_prqmg5r';
    const publicKey = 'Sv7KUTk8SvislCFsd'; // use .env variables for this

    const data = 
    {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: 
        {
          from_name: name,
          from_email: email,
          to_name: 'Erick Cabrera',
          message: message,
        }
    };

    try
    {
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      console.log(res.data);
      setName('');
      setEmail('');
      setMessage('');
    }
    catch(error)
    {
        console.error(error);
    }   
  }
  return(
  <>
  <div className="FormtoSend">      
  <form onSubmit={handleSubmit} className='emailForm'>

  <div class="wrapper">

      {/* <div className='row justify-content-center'> */}
        
          <div className="one">
            <h2>Contact:</h2>  
          </div>

          <div className="two">
            <h3>Address:
              30 N Gould St Ste N
              Sheridan, WY 82801
            </h3>
          </div>

          <div className="three">
            <h3>Phone Number:
              307-381-1324
            </h3>        
          </div>
        
          <div className="four">
            <h2>Email Me:</h2>
          </div>
          
          <div className="five">
          <h3>Name:</h3>
            <input 
              className='Bubble' 
              type='text' 
              placeholder='Your Name' 
              value ={name}
              onChange={(e) => setName(e.target.value) }
            />
          </div>

          <div className="six">
            <h3>Email:</h3>
              <input 
                className='Bubble' 
                type='Email' 
                placeholder='Your Email' 
                value = {email}
                onChange={(e) => setEmail(e.target.value) }
              />
          </div> 

          <div className="seven">
            <h3>Message:</h3>
            <textarea 
              cols = '30'
              rows = '10'
              className='Rectangletxtbox' 
              type='Message' 
              placeholder='Your Message' 
              value = {message}
              onChange={(e) => setMessage(e.target.value) }
            />
          </div>
        
          <div className="eight">
            <Submit type="submit">
              Send Email
            </Submit>
          </div>         
      {/* </div> */}

    </div>
  </form> 
</div>

  </>
  );
}

export default SignUp;




  {/* --------- below is me -------------- */}
    
    {/* <div className="FormtoSend">     */}




      {/* <table>
        <td className='Move-LeftTxtbox'> */}
          {/* <h1>Contact:</h1>
          <h3>Address:
            30 N Gould St Ste N
            Sheridan, WY 82801
          </h3>
          <h3>Phone Number:
            307-381-1324
          </h3> */}
        {/* </td>
      </table> */}
      {/* <form onSubmit={handleSubmit} className='emailForm'> */}
        {/* <th>
          Email Me:
        </th> */}

        {/* <tr>
          <td className='Move-Name'> */}
            {/* <h3>Name:</h3>
              <input 
                className='Bubble' 
                type='text' 
                placeholder='Your Name' 
                value ={name}
                onChange={(e) => setName(e.target.value) }
              /> */}
          {/* </td>
        </tr> */}
        {/* <tr>
          <td className='Move-Email'> */}
            {/* <h3>Email:</h3>
              <input 
                className='Bubble' 
                type='Email' 
                placeholder='Your Email' 
                value = {email}
                onChange={(e) => setEmail(e.target.value) }
              /> */}
          {/* </td>
        </tr> */}


        {/* <tr>
          <td className='Move-Message'> */}
            {/* <h3>Message:</h3>
              <textarea 
                cols = '30'
                rows = '10'
                className='Rectangletxtbox' 
                type='Message' 
                placeholder='Your Message' 
                value = {message}
                onChange={(e) => setMessage(e.target.value) }
              /> */}
          {/* </td>
        </tr> */}

        {/* <td >
          <Submit type="submit" className='Move-Button'>
            Send Email
          </Submit>
        </td> */}

      {/* </form>  */}
     {/* </div> */}