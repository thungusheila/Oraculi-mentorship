import React from "react";

function Footer() {
  return (
    <footer>
      <nav>
        <a href="/">Home</a> | <a href="/about">About Us</a> | <a href="/features">Programs</a> | <a href="/success-stories">Success Stories</a> | <a href="/faqs">FAQs</a> | <a href="/contact">Contact Us</a>
      </nav>
      <p>Email: support@oraculi.com | Phone: (123) 456-7890</p>
      <div className="social-icons">
        <a href="https://facebook.com">Facebook</a> | <a href="https://twitter.com">Twitter</a> | <a href="https://linkedin.com">LinkedIn</a> | <a href="https://instagram.com">Instagram</a>
      </div>
      <p>© {new Date().getFullYear()} Oraculi. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
