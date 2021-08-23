import React from 'react';
import AboutSection from '../components/AboutSection.jsx'
import ServicesSection from '../components/ServicesSection.jsx';
import FaqSection from '../components/FaqSection.jsx';

import { motion } from 'framer-motion';
import { pageAnimation } from '../animation.js';
import ScrollTop from "../components/ScrollTop";



const AboutUs = () => {
  return (
    <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
}

export default AboutUs;