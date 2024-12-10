import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ActionButtons = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-xl transition-all duration-300 overflow-hidden"
      >
        <motion.span
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ 
            repeat: Infinity,
            duration: 1.5,
            ease: "linear"
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
        <span className="relative flex items-center">
          Get Started
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </span>
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group px-8 py-4 border-2 border-white/80 text-white rounded-full hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
      >
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 20, opacity: 0.1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 rounded-full bg-white"
          style={{ originX: 0.5, originY: 0.5 }}
        />
        <span className="relative">Learn More</span>
      </motion.button>
    </motion.div>
  );
};

export default ActionButtons;