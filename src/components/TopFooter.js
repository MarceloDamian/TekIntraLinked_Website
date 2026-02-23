// Import React and supporting components
import React from "react";
import Button from "./Button_";
import Link from "next/link";
import EmailSender from "./EmailAxios";

// TopFooter renders a call-to-action section with an email sender
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

// Notes:
// - Subscription section may be used in a different version (e.g., gym site)
// - Not required for this tech-focused site

export default TopFooter;
