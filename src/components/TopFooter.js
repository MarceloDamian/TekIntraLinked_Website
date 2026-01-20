import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import SubscriptionSection from "./SubscriptionSection";
import "./TopFooter.css";

const TopFooter = () => {
  return (
    <>
      <SubscriptionSection
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

export default TopFooter;
