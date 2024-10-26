import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./mobileNav.css";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="mobileNav">
        <div className="logo">
          <h1>DHAIRS</h1>
        </div>
        <div className="hamburgerMenu" onClick={handleMobileNav}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="actualNav"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <nav onClick={handleMobileNav}>
            <div className="close" onClick={handleMobileNav}>
              <i className="fa-solid fa-x"></i>
            </div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </motion.div>
      )}
    </>

    // <>
    //   <div className="mobileNavigationOpen" ref={navBarRef}>
    //     <div className="logo">
    //       <Link to="/">DHairs</Link>
    //     </div>
    //     <div className="menu">
    //       <button className="openMenu" onClick={handleMobileNav}>
    //         <img src="" alt="Logo" />
    //       </button>
    //     </div>
    //   </div>
    //   {isOpen && (
    //     <div className="mobileMenuLinks">
    //       <button onClick={handleMobileNav} className="closeMenuBtn">
    //         <img src="" alt="Logo" />
    //       </button>
    //       <div className="home">
    //         <NavLink to="/">
    //           <span>00</span>Home
    //         </NavLink>
    //       </div>
    //       <div className="destination">
    //         <NavLink to="/destination">
    //           <span>01</span>Destination
    //         </NavLink>
    //       </div>
    //       <div className="crew">
    //         <NavLink to="/crew">
    //           <span>02</span>Crew
    //         </NavLink>
    //       </div>
    //       <div className="technology">
    //         <NavLink to="/technology">
    //           <span>03</span>Technology
    //         </NavLink>
    //       </div>
    //       <div className="myself">
    //         <p>Made By</p>
    //         <a href="https://github.com/DrizzyD1717">Olulana Oluwadarimisire</a>
    //       </div>
    //     </div>
    //   )}
    // </>
  );
};

export default MobileNav;
