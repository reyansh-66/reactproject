import React from 'react';
import { motion } from 'framer-motion';

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <motion.div
        className="loading-circle"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.5, 1]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span>R</span>
      </motion.div>
    </div>
  );
}

export default LoadingScreen;