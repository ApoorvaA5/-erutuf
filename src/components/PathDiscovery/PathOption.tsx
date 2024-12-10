import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { fadeInUp } from '../../utils/animations';

interface PathData {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  content: string;
  features: string[];
}

interface PathOptionProps {
  path: PathData;
  index: number;
  onClick: () => void;
}

const PathOption: React.FC<PathOptionProps> = ({ path, index, onClick }) => {
  const Icon = path.icon;

  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/10 cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative p-6 z-10">
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
            <Icon size={28} className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
              {path.title}
            </h3>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
              {path.description}
            </p>
          </div>
        </div>
        
        <div className="mt-4 flex items-center text-sm text-blue-300 group-hover:text-blue-200 transition-colors duration-300">
          <span>Learn more</span>
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default PathOption;