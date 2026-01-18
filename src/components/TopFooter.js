<<<<<<< HEAD
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
=======
import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import SubscriptionSection from "./SubscriptionSection";
import "./TopFooter.css";

const TopFooter = () => {
  return (
    <>
      <SubscriptionSection
        // header="Interested In Working With Me ?"
        // buttonText="Let's Chat"
        buttonText=""
        buttonStyle="btn--outline"
        buttonSize="btn--medium"
        footer="Quick Resume Copy :"
      />
    </>
  );
};

// ! Subscription will be needed for a gym version of the website to send an ebook
// ! Subscription will most likely not be needed for tech website.
>>>>>>> Current-Copy

export default TopFooter;
