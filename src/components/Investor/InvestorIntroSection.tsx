import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, LineChart, Handshake } from 'lucide-react';

const InvestorIntroSection = () => {
  const features = [
    {
      icon: Users,
      title: "Access a curated list of promising ventures",
      description: "Connect with pre-vetted startups aligned with your investment goals"
    },
    {
      icon: LineChart,
      title: "Leverage detailed business insights",
      description: "Make informed decisions with comprehensive analytics and metrics"
    },
    {
      icon: Handshake,
      title: "Join a network of like-minded investors",
      description: "Collaborate on co-investment opportunities with experienced partners"
    }
  ];

  return (
    <div className="py-20 bg-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Shape Tomorrow with{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Strategic Investments
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Future Minds connects investors with innovative startups and established businesses, 
            offering opportunities to build impactful portfolios.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl inline-block mb-6">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 flex items-center group"
          >
            Explore Ventures
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300"
          >
            Join Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default InvestorIntroSection;