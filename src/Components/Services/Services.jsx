import React from "react";
import "./services.css";
import Accordion from "./Accordion/Accordion";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div
      className="servicesOverall"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <div class="services animate__animated addEffect" id="services">
        <p>
          At Dhairs Beauty Salon, we believe in celebrating the unique beauty of
          every individual. Our mission is to empower you to express yourself
          through our exquisite hair collections. Here's what sets us apart from
          the rest:
        </p>
        <div class="content">
          <div class="content-part animate__animated addEffect">
            <h3>Exclusive Collections</h3>
            <p>
              We offer limited edition hair pieces and bundles that you won't
              find anywhere else. Each collection is curated to reflect the
              latest trends and timeless classics, ensuring you always have the
              best options.
            </p>
          </div>
          <div class="content-part animate__animated addEffect">
            <h3>Custom Wig Services</h3>
            <p>
              Not only do we sell wigs, but we also provide bespoke wig-making
              services. Bring your vision to life with a custom wig tailored to
              your exact specifications, ensuring a perfect fit and style.
            </p>
          </div>
          <div class="content-part animate__animated addEffect">
            <h3>Swift Delivery & Pick-Up Options</h3>
            <p>
              Enjoy swift delivery or convenient pick-up options to suit your
              needs. We guarantee no scams, just seamless service every time.
            </p>
          </div>
          <div class="content-part animate__animated addEffect">
            <h3>Hair Care Education</h3>
            We’re not just about selling products; we’re about educating our
            clients. Our social media pages feature an extensive library of
            tutorials, care tips, and styling guides to help you maintain your
            hair's health and beauty.
          </div>
        </div>
      </div>
      <Accordion></Accordion>
    </motion.div>
  );
};

export default Services;
