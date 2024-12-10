import React from 'react';
import { MapPin, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface InvestmentCardProps {
  name: string;
  category: string;
  stage: string;
  location: string;
  requiredFunding: string;
  logo: string;
}

const InvestmentCard: React.FC<InvestmentCardProps> = ({
  name,
  category,
  stage,
  location,
  requiredFunding,
  logo
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
    >
      <div className="p-6 relative">
        <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <motion.div 
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="flex items-center space-x-4"
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            src={logo}
            alt={name}
            className="w-16 h-16 rounded-xl object-cover animate-pulse-blue"
          />
          <div>
            <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
            <p className="text-gray-600">{category}</p>
          </div>
        </motion.div>
        
        <div className="mt-6 space-y-3">
          <motion.div 
            whileHover={{ x: 5 }}
            className="flex items-center text-gray-600"
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            <span>{stage}</span>
          </motion.div>
          <motion.div 
            whileHover={{ x: 5 }}
            className="flex items-center text-gray-600"
          >
            <MapPin className="w-4 h-4 mr-2" />
            <span>{location}</span>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 pt-6 border-t"
        >
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Required Funding</span>
            <motion.span 
              whileHover={{ scale: 1.1 }}
              className="font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full"
            >
              {requiredFunding}
            </motion.span>
          </div>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-6 w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-flow"
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
};

export default InvestmentCard;