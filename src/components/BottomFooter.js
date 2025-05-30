import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import ContactInfo from './ContactInfo';
import './BottomFooter.css';


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
