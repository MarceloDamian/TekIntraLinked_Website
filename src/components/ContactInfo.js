// Import React and Next.js Link for navigation
import React from "react";
import Link from "next/link";
// Import social icons
import { FaGithub, FaLinkedin } from "react-icons/fa";

// ContactInfo renders footer links including Contact Us and social profiles
const ContactInfo = () => (
  // This was a single <h3> wrapping the whole footer, so screen readers listed
  // a ~100 character pseudo-heading on every page. It is a paragraph of links.
  <div className="footer-link-items">
    <p className="footer-text">
      {/* Company info and legal links; add real pages for Privacy Policy and Terms */}
      TekIntralinked Ltd. Liability Co. © 2025 | Privacy Policy | Terms of
      Service |
      {/* Link to Contact Us page */}
      {<Link href="/ContactUs"> Contact Us | </Link>}
      {/* Github profile link with icon. Icons are decorative; the link text
          beside them already names the destination. */}
      {
        <Link
          className="social-icon-link github"
          href="https://github.com/MarceloDamian?tab=repositories"
        >
          <FaGithub color="#87CEFA" size={22} aria-hidden="true" /> Github |{" "}
        </Link>
      }
      {/* Linkedin profile link with icon */}
      {
        <Link
          className="social-icon-link linkedin"
          href="https://www.linkedin.com/in/erick-c-"
        >
          <FaLinkedin color="#87CEFA" aria-hidden="true" /> Linkedin
        </Link>
      }
    </p>
  </div>
);

// TODO: Make this responsive with hooks and event listeners that adapt size

export default ContactInfo;
