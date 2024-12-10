import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Network, TrendingUp } from 'lucide-react';

const InnovationSteps = () => {
  const steps = [
    {
      icon: PenTool,
      title: "Craft Your Vision",
      description: "Use our intuitive forms to create a professional pitch.",
      step: 1
    },
    {
      icon: Network,
      title: "Connect with Investors",
      description: "Get matched with investors aligned with your industry and goals.",
      step: 2
    },
    {
      icon: TrendingUp,
      title: "Fuel Your Growth",
      description: "Secure funding and access additional resources for sustainable scaling.",
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
          className="text-3xl font-bold text-center mb-12"
        >
          Steps to Innovate
        </motion.h2>
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2 hidden md:block" />
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl inline-block mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationSteps;