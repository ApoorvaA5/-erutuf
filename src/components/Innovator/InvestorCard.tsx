import React from 'react';
import { MapPin } from 'lucide-react';

interface InvestorCardProps {
  name: string;
  location: string;
  investmentRange: string;
  avatar: string;
}

const InvestorCard: React.FC<InvestorCardProps> = ({ name, location, investmentRange, avatar }) => {
  return (
    <div className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-colors duration-200">
      <img
        src={avatar}
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900">{name}</h3>
        <div className="flex items-center text-gray-600 text-sm">
          <MapPin className="w-4 h-4 mr-1" />
          {location}
        </div>
      </div>
      <div className="text-right">
        <div className="text-sm font-medium text-gray-900">Investment Range</div>
        <div className="text-sm text-gray-600">{investmentRange}</div>
      </div>
    </div>
  );
};

export default InvestorCard;