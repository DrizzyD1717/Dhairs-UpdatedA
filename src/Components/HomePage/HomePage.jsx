import React from "react";
import "./homePage.css";
import { motion } from "framer-motion";

import DhairsOwner from "../../assets/Dhairs Owner.jpg";

const HomePage = () => {
  return (
    <motion.div
      className="homePage"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.5, duration: 1.5 }}
    >
      <div className="hero">
        <motion.h1
          initial={{ opacity: "0" }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
        >
          Unleash your inner beauty and transform your look with the perfect
          wig, crafted to elevate your unique flair.
        </motion.h1>
      </div>
      <div className="intro animate__animated addEffect">
        <h2>Welcome to Dhairs Beauty Salon</h2>
        <div className="text">
          Hey Pretty and Handsome, We are thrilled to have you visit Dhairs
          Beauty Salon, where your hair dreams come to life! With over 4 years
          in the business, we pride ourselves on providing affordable,
          high-quality hair products that cater to all your styling needs.
          Whether you’re looking for <span>Virgin, </span>
          <span>Raw Donor or </span>
          <span>Bone Straight Hairs</span> we've got you covered. Our extensive
          range includes straight, wavy, bouncy, curly, pixie styles, and
          lengths from short to medium to long.
        </div>
      </div>
      <div className="about animate__animated addEffect" id="about">
        <div className="content">
          <h2>Your classNameic Lagos Hair Vendor</h2>
          <p>
            <span className="bold">Ms. Olulana Oluwadarafunmi,</span> with four
            years of professional experience, has proudly served women in
            Nigeria and around the world by helping them enhance their
            appearances with a variety of wigs and hair care products.
          </p>
        </div>
        <div className="image">
          <img src={DhairsOwner} alt="Image of Dhairs Owner" />
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
