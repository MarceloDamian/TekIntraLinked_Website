import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const ContactInfo = () => (
  <div className="footer-link-items">
    <h3>
      TekIntralinked Ltd. Liability Co. © 2025 | Privacy Policy | Terms of
      Service |{<Link href="/ContactUs"> Contact Us | </Link>}
      {
        <Link
          className="social-icon-link github"
          href="https://github.com/MarceloDamian?tab=repositories"
        >
          <FaGithub color="#87CEFA" size={22} /> Github |{" "}
        </Link>
      }
      {
        <Link
          className="social-icon-link linkedin"
          href="https://www.linkedin.com/in/erick-c-"
        >
          <FaLinkedin color="#87CEFA" /> Linkedin
        </Link>
      }
    </h3>
  </div>
);

// make this responsive with hooks and eventlisteners that change the size.

export default ContactInfo;
