// Import React and Next.js Link for navigation
import React from "react";
import Link from "next/link";
// Import social icons
import { FaGithub, FaLinkedin } from "react-icons/fa";

// ContactInfo renders footer links including Contact Us and social profiles
const ContactInfo = () => (
  <div className="footer-link-items">
    <h3>
      {/* Company info and legal links; add real pages for Privacy Policy and Terms */}
      TekIntralinked Ltd. Liability Co. © 2025 | Privacy Policy | Terms of
      Service |
      {/* Link to Contact Us page */}
      {<Link href="/ContactUs"> Contact Us | </Link>}
      {/* Github profile link with icon */}
      {
        <Link
          className="social-icon-link github"
          href="https://github.com/MarceloDamian?tab=repositories"
        >
          <FaGithub color="#87CEFA" size={22} /> Github |{" "}
        </Link>
      }
      {/* Linkedin profile link with icon */}
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

// TODO: Make this responsive with hooks and event listeners that adapt size

export default ContactInfo;
