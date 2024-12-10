import React from 'react';
import { ArrowRight } from 'lucide-react';
import Background from './Background';
import PathDiscovery from '../PathDiscovery/PathDiscovery';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="relative min-h-screen flex flex-col overflow-hidden">
      <Background />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-48">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Innovate
            </span>{' '}
            with Future Minds
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto animate-slideUp">
            Empowering the next generation of technological breakthroughs
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 flex items-center group backdrop-blur-sm"
          >
            Get Started
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-white/80 text-white rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Path Discovery Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative z-10 mt-auto"
        >
          <PathDiscovery />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;