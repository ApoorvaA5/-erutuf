import React from 'react';
import { motion } from 'framer-motion';
import { Search, Handshake, LineChart } from 'lucide-react';

const InvestmentSteps = () => {
  const steps = [
    {
      icon: Search,
      title: "Discover Opportunities",
      description: "Browse through curated startups matching your investment criteria.",
      step: 1
    },
    {
      icon: Handshake,
      title: "Connect & Evaluate",
      description: "Engage directly with founders and assess potential investments.",
      step: 2
    },
    {
      icon: LineChart,
      title: "Invest & Grow",
      description: "Make informed investment decisions and track portfolio performance.",
      step: 3
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Investment Journey
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 animate-gradient-flow"
          />
        </motion.h2>

        <div className="relative">
          {/* Animated Connection Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2 hidden md:block origin-left animate-gradient-flow"
          />
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl inline-block mb-4 animate-gradient-flow"
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.3 + 0.5 }}
                      className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold animate-pulse-blue"
                    >
                      {step.step}
                    </motion.span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentSteps;