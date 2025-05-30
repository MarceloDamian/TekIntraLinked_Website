

import React from 'react';
import { Button } from './Button';
import PropTypes from 'prop-types';
import './SubscriptionSection.css';

const SubscriptionSection = ({ header, buttonText, buttonStyle='btn--primary', buttonSize='btn--medium', footer }) => (
  
  <section className='footer-subscription'>

    <p className='footer-subscription-heading'>
      {header}
    </p>

    <div>
      <Button
        className='btns'
        buttonStyle={buttonStyle}
        buttonSize={buttonSize}
      >
        {buttonText}
      </Button>
    </div>
    
    <div>
    <p className='footer-subscription-heading'>{footer}</p>
        <input 
          className='Bubble' 
          type='Email' 
          placeholder='Your Email' 
          // value = {email}
          // onChange={(e) => setEmail(e.target.value) }
        />
      <button>Send Email</button>
    </div>

  </section>
);

SubscriptionSection.propTypes = {

    header: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    buttonStyle: PropTypes.string,
    buttonSize: PropTypes.string,
    footer: PropTypes.string.isRequired,
};

export default SubscriptionSection;
