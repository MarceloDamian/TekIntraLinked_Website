import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


import './BottomFooter.css';

function BottomFooter() 
{
  return (

    
    
    
    // !! add wrapper and div from bottomfooter




    <div className='footer-container'>
      <div className='footer-links'>
          <div className='footer-link-items'>
            <Link to='/ContactUs'>
              <h2><u>Contact Me</u></h2>
            </Link>
            <h4>ErickDamian@TekIntralinked.com</h4>
            <h3> TekIntralinked Ltd. Liability Co.</h3>
          </div>
          {/* Make email bigger and responsive to mobile. Also center the words*/}
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2><u>Social</u></h2>
                  
            <Link
              className='social-icon-link github'
              to="https://github.com/MarceloDamian?tab=repositories"
              target='_blank' // whats blank?
              aria-label='github'
            >
            <FaGithub color='#87CEFA' />Github
            
            </Link>

            <Link
              className='social-icon-link Linkedin'
              to="https://www.linkedin.com/in/erick-c-"
              target='_blank' // whats blank?
              aria-label='LinkedIn'
            >
            <FaLinkedin color="#87CEFA"/>Linkedin
            </Link>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default BottomFooter;
