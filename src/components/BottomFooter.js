// Import React and dependencies
import React from 'react';
import Button  from './Button_';
import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

// Import ContactInfo component to display footer content and links
import ContactInfo from './ContactInfo';

/* TODO: Make email larger and responsive on mobile; center the text */

// BottomFooter component renders the footer container with contact information
const BottomFooter= () =>
{
  return (
    <div className='footer-container'>
        {/* Render ContactInfo inside footer container */}
        <ContactInfo/>
    </div>
    
  );
}

// Export BottomFooter component
export default BottomFooter;
