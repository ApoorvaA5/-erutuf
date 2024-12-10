import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Eye, Users } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: LineChart,
      title: "Transparency through the investment process",
      description: "Track every step of your investment journey with real-time updates and detailed reporting.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Eye,
      title: "Visible investment alternative",
      description: "Access a diverse range of pre-vetted investment opportunities across multiple sectors.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Largest CXO/Professional network",
      description: "Connect with an extensive network of industry leaders, experts, and successful entrepreneurs.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
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
            className="absolute -inset-1/2 border border-white/5 rounded-full"
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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl transform transition-transform group-hover:scale-105" />
                <div className="relative p-8 text-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className={`w-20 h-20 mx-auto mb-6 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}
                  >
                    <Icon className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  {/* Decorative elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl group-hover:opacity-75 transition-opacity duration-500" />
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-2xl group-hover:opacity-75 transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;