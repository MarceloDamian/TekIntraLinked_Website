import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function TopFooter() 
{
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Not seeing what you looked for? Shoot me an email!
        </p>
        {/* <p className='footer-subscription-text'>
        </p> */}
        
          <div >
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--medium'
            >
            Lets get in touch !
            </Button>
            {/* MOVE BUTTON TO THE BOTTOM AFTER THEY HAVE ALREADY VIEWED */}
          </div>
      </section>
    </div>
  );
}

export default TopFooter;
