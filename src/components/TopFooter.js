import React from "react";
import Button from "./Button_";
import Link from "next/link";
// import SubscriptionSection from "./SubscriptionSection";
// import "./TopFooter.css";
import EmailSender from "./EmailAxios";

const TopFooter = () => {
  return (
    <>
      <EmailSender
        buttonText="Let's Chat"
        buttonStyle="btn--outline"
        buttonSize="btn--Extra-Large"
        footer="Email The Resume:"
      />
    </>
  );
};

// ! Subscription will be needed for a gym version of the website to send an ebook
// ! Subscription will most likely not be needed for tech website.

export default TopFooter;
