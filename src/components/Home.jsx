import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <motion.div 
          className="profile-container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/profile.jpg" alt="Reyansh" className="profile-image" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Reyansh
        </motion.h1>

        <motion.div
          className="title-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="animated-text">
            <h2>Computer Science Student</h2>
            <h2>Graphic Designer</h2>
            <h2>Editor</h2>
          </div>
        </motion.div>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Transforming ideas into reality through creativity and technology.
        </motion.p>

        <motion.div 
          className="social-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.a 
            href="https://www.facebook.com/reyans.gautam.39/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <i className="fab fa-facebook"></i>
          </motion.a>
          <motion.a 
            href="https://www.instagram.com/reyansh.66" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <i className="fab fa-instagram"></i>
          </motion.a>
        </motion.div>

        <motion.div
          className="cta-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link to="/contact" className="primary-btn">
            Contact Me
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;