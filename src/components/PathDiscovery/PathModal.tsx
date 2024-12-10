import React from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface PathData {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  content: string;
  features: string[];
}

interface PathModalProps {
  path: PathData;
  onClose: () => void;
}

const PathModal: React.FC<PathModalProps> = ({ path, onClose }) => {
  const Icon = path.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 400 }}
        className="bg-white rounded-2xl p-6 max-w-md w-full relative overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
        
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors duration-300"
        >
          <X size={24} />
        </button>

        <div className="flex items-center space-x-4 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg">
            <Icon size={32} className="text-blue-500" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              {path.title}
            </h3>
            <p className="text-gray-600">{path.description}</p>
          </div>
        </div>

        <p className="text-gray-700 mb-6">{path.content}</p>

        <div className="space-y-3">
          <h4 className="font-semibold text-gray-900">Key Features:</h4>
          {path.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-3"
            >
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                <Check size={12} className="text-blue-600" />
              </div>
              <span className="text-gray-700">{feature}</span>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
        >
          Get Started
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default PathModal;