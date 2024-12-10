import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, TrendingUp, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PathDiscovery = () => {
  const navigate = useNavigate();
  
  const paths = [
    {
      id: 'innovator',
      icon: Lightbulb,
      title: 'For Innovators',
      description: 'Find funding and mentorship for your next breakthrough',
      href: '/innovate',
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      id: 'investor',
      icon: TrendingUp,
      title: 'For Investors',
      description: 'Discover and support the next generation of innovation',
      href: '/partner',
      gradient: 'from-purple-500 to-pink-400'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-8"
      >
        {paths.map((path, index) => {
          const Icon = path.icon;
          return (
            <motion.button
              key={path.id}
              onClick={() => navigate(path.href)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/10 p-8 transition-all duration-300 w-full text-left"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${path.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className={`p-4 bg-gradient-to-br ${path.gradient} rounded-xl inline-block mb-6`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {path.title}
                </h3>
                <p className="text-gray-300 text-lg group-hover:text-white transition-colors duration-300">
                  {path.description}
                </p>
                
                <div className="mt-6 flex items-center text-white/70 group-hover:text-white transition-colors duration-300">
                  <span className="text-sm font-semibold">Get Started</span>
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl group-hover:opacity-75 transition-opacity duration-500" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-2xl group-hover:opacity-75 transition-opacity duration-500" />
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
};

export default PathDiscovery;