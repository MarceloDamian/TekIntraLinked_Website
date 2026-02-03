import React from 'react';
import Button  from './Button_';
import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import ContactInfo from './ContactInfo';
// import './components/BottomFooter.css';



/* Make email bigger and responsive to mobile. Also center the words*/

const BottomFooter= () =>
{
  return (
    <div className='footer-container'>
        <ContactInfo/>
    </div>
    
  );
}

export default BottomFooter;
