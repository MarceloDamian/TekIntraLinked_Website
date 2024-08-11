
import Welcome from "../../../emails/Welcome";
import { Resend } from 'resend';

const resend = new Resend(process.env.API_KEY);


export async function POST()
{
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "officialerickpage@gmail.com",
      subject: "hello Erick C.",
      react: Welcome(),
    });
}
