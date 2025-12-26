

import React from 'react';
import { Button } from './Button';
import PropTypes from 'prop-types';
import './TopFooter.css';

const SubscriptionSection = ({
  header,
  buttonText,
  buttonStyle,
  buttonSize,
  footer,
}) => (
  <section className="footer-subscription">
    {/* <p className='footer-subscription-heading'>
      {header}
    </p> */}

    <div className="footer-button-div">
      <Button buttonStyle={buttonStyle} buttonSize={buttonSize}>
        {(buttonText = "Let's Chat")}
      </Button>
    </div>

    <p className="footer-subscription-heading"> {footer}</p>
    
    <div className="footer-subscription-input">

      <input
        className="input--resume"
        type="Email"
        placeholder="Your Email"
        // value = {email}
        // onChange={(e) => setEmail(e.target.value) }
      />

      {/* <div className="footer-subscription-button-div"> */}
        <Button buttonStyle={buttonStyle} buttonSize={"btn--Large"}>
          {" "}
          {(buttonText = "Send It Now")}
        </Button>
      {/* </div> */}

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
