import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import SubscriptionSection from './SubscriptionSection';
import './TopFooter.css';

const TopFooter = () =>
{
  return (
    <div className='.footer-container'>
      <SubscriptionSection
        header="Get In Touch!"
        buttonText="Let's get in touch!"
        buttonStyle='btn--outline'
        buttonSize='btn--medium'
        footer= "Subscribe to My Newsletter : " 
      />
    </div>
  );
}

export default TopFooter;
