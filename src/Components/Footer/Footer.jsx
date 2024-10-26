import React from "react";
import "./footer.css";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footerContent">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <h2>DHAIRS</h2>
        <div className="contactLinks">
          <Link to="https://wa.me/message/Z7ZXKR6COBRIO1">
            <i className="fa-brands fa-whatsapp"></i>
          </Link>
          <Link to="https://www.instagram.com/dhairs__?igsh=bGhsOGx6MmlwNDJo">
            <i className="fa-brands fa-instagram"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
