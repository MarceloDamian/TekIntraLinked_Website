

import React from "react";

function AppMail( InputName_, InputEmail_, InputHtml_ ) {

    const nodeMailer = require ("nodemailer");
    require("dotenv").config();

    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        host: 'imap.gmail.com',
        port: 993, 
        secure:true,
        auth: {
            user: process.env.USERNAME,//  an enviornment variable 
            pass: process.env.APP_PASSWORD, //  an enviornment variable 
        },
    });

    const mailOptions = {
        from: 
        {
            name:'Erick Cabrera', // intake as variabe
            user: "erickcabrera1909@gmail.com"  // intake as variabe
        },
        to: [process.env.USERNAME],
        html: "<p> Hey cabrera </p>", // intake as a variable
    }

    const sendMail = async () => 
    {
        try{
            await transporter.sendMail(mailOptions);
            console.log ('Congrats! We will get to you shortly INPUT NAME .');
        }
        catch (error)
        {
            console.error(error);
        }
    }
    setTimeout
    ( 
        () => 
        {
            sendMail(transporter,mailOptions);
        } , 2000 
    ); // SetTimeout (function, miliseconds)
}


// const randvar1 = 0;
// const randvar2 = 0; 
// const randvar3 = 0;
// AppMail(randvar1,randvar2,randvar3);

export default AppMail;

