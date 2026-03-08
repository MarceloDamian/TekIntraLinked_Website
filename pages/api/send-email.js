
// This is the frontend code using resend directly.
import {Resend} from 'resend';



const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export default async function EmailHandler(req, res) 
{

  const { to, subject, html } = req.body;

  if (req.method !== 'POST') 
  {
    res.setHeader('Allow', ['POST']);

    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }


  if (!to || !subject || !html) 
  {
    res.status(400).json({ message: 'Missing required fields: to, subject, html' });
    return;
  }
  
  try 
  {
    const {data} = await resend.emails.send
    (
      {
        from:"no-reply@tekintralinked.com",
        to,
        subject,
        html,
      }
    );
    
    
    res.status(200).json({ message: 'Email sent', data });

  } catch (error) {
    
    res.status(500).json({ message: error.message });

    return console.error({ error });
  }
  

}

