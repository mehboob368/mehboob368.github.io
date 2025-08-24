import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container row">
        <p>© {new Date().getFullYear()} Muhammad Mehboob. All rights reserved.</p>
        <ul className="links">
          <li><a href="mailto:muhammadmehboobz7869@gmail.com">Email</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
