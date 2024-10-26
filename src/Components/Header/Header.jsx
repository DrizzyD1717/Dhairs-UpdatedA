import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./header.css";

const Header = () => {
  return (
    <motion.header
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 1.5,
        type: "spring",
        when: "beforeChilden",
        staggerChildren: 0.4,
      }}
    >
      <div className="logo">
        <h1>DHAIRS</h1>
      </div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </motion.header>
  );
};

export default Header;
