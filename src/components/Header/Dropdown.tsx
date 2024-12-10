import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("I'm looking to...");

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-between w-64 px-4 py-3 text-white bg-white/10 backdrop-blur-md rounded-lg hover:bg-white/20 transition-all duration-300"
      >
        <span>{selected}</span>
        <ChevronDown
          className={`ml-2 h-5 w-5 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-64 rounded-lg bg-white/90 backdrop-blur-md shadow-xl z-50 animate-fadeIn">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className="block w-full text-left px-4 py-3 text-gray-800 hover:bg-blue-50 first:rounded-t-lg last:rounded-b-lg transition-colors duration-200"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;