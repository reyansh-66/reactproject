import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div 
        className="nav-brand"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        <Link to="/">Home</Link>
      </motion.div>
      
      <Link to="/contact" className="contact-link">Contact</Link>
    </motion.nav>
  );
}

export default Navbar;