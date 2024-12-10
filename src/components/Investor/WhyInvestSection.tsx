import React from 'react';
import { motion } from 'framer-motion';
import { Search, Target, TrendingUp } from 'lucide-react';

const WhyInvestSection = () => {
  const benefits = [
    {
      icon: Search,
      title: "Curated Opportunities",
      description: "Access thoroughly vetted startups aligned with your investment criteria."
    },
    {
      icon: Target,
      title: "Strategic Matching",
      description: "Get matched with ventures that complement your expertise and goals."
    },
    {
      icon: TrendingUp,
      title: "Portfolio Growth",
      description: "Track and optimize your investment portfolio with advanced analytics."
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -inset-1/2 border border-blue-200/20 rounded-full"
            style={{
              width: `${150 + i * 20}%`,
              height: `${150 + i * 20}%`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Why Invest With Us?
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"
          />
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl inline-block mb-4"
                >
                  <Icon className="h-6 w-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyInvestSection;