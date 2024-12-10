import React, { useState } from 'react';
import { ChevronDown, Lightbulb, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PathSelectorProps {
  onPathSelect: (path: string) => void;
}

const PathSelector: React.FC<PathSelectorProps> = ({ onPathSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Discover Your Path");

  const paths = [
    {
      id: 'innovator',
      title: 'For Innovators',
      description: 'Find funding and mentorship',
      icon: Lightbulb,
      value: 'innovator'
    },
    {
      id: 'investor',
      title: 'For Investors',
      description: 'Explore visionary projects',
      icon: TrendingUp,
      value: 'investor'
    }
  ];

  const handleSelect = (value: string) => {
    const path = paths.find(p => p.value === value);
    if (path) {
      setSelected(path.title);
      setIsOpen(false);
      onPathSelect(value);
    }
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-between w-72 px-6 py-4 text-white bg-white/10 backdrop-blur-md rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
      >
        <span className="text-lg">{selected}</span>
        <ChevronDown
          className={`ml-2 h-5 w-5 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute mt-2 w-72 rounded-xl bg-white/90 backdrop-blur-md shadow-xl z-50 overflow-hidden"
          >
            {paths.map(({ id, title, description, icon: Icon, value }) => (
              <motion.button
                key={id}
                whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                onClick={() => handleSelect(value)}
                className="flex items-start w-full p-4 text-left border-b border-gray-100 last:border-0"
              >
                <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg mr-3">
                  <Icon className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">{title}</div>
                  <div className="text-sm text-gray-600">{description}</div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PathSelector;