
import React, {useState} from 'react';
import axios from 'axios';




const EmailRestApi = () =>
{

    const [name,setName] = useState('');
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
    return (
            <form onSubmit={handleSubmit} className='emailForm'>
                <input
                    type='text'
                    placeholder='Your Name'
                    value = {name}
                    onChange={(e) => setName(e.target.value) }
                />
                <input
                    type='email'
                    placeholder='Your Email'
                    value = {email}
                    onChange={(e) => setEmail(e.target.value) }
                />
                <textarea
                    cols = '30'
                    rows = '10'
                    placeholder='Your Message'
                    value = {message}
                    onChange={(e) => setMessage(e.target.value) }
                />
                <button type="submit">Send Email</button>
            </form>
    );
}

export default EmailRestApi;