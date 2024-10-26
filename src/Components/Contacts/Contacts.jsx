import React from "react";
import "./contacts.css";
import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <motion.div
      className="contact"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <div className="contactContent">
        <div className="content">
          <h2>
            Ready to elevate your looks.<br></br> Unleash your inner beauty and
            transform your look with the perfect wig, crafted to elevate your
            unique flair.
          </h2>
        </div>
        <form action="">
          <input type="text" placeholder="Your Name Here" required />
          <input type="email" placeholder="Your Email Here" required />
          <select name="interests" id="interests">
            <option value="">What are you interested in?</option>
            <option value="wigs">Wigs</option>
            <option value="SkinCare">Skincare</option>
            <option value="HairProducts">Hair Products</option>
          </select>
          <textarea placeholder="Your Message" rows={10}></textarea>

          <button type="submit">Contact Me</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contacts;
