import React from 'react';
import { ArrowRight, Users, TrendingUp, Lightbulb } from 'lucide-react';
import InvestorCard from '../components/Innovator/InvestorCard';
import HeroSection from '../components/Innovator/HeroSection';
import WhyInnovateSection from '../components/Innovator/WhyInnovateSection';
import InnovationSteps from '../components/Innovator/InnovationSteps';

const InnovatorPage = () => {
  const investors = [
    {
      name: "Hans R",
      location: "India",
      investmentRange: "₹1,000 - ₹250,000",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Lena P",
      location: "New York, USA",
      investmentRange: "$5,000 - $1,000,000",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Christina S",
      location: "London, UK",
      investmentRange: "£5,000 - £500,000",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const stats = [
    { icon: Users, value: "354,789", label: "Active Mentors & Investors" },
    { icon: TrendingUp, value: "$2.1B", label: "Innovation Capital" },
    { icon: Lightbulb, value: "15,000+", label: "Success Stories" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Main Hero Section */}
      <div className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold text-gray-900">
                Transform your ideas with{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Future Minds
                </span>
              </h1>
              <p className="text-xl text-gray-600">
                Join a thriving ecosystem of innovators, mentors, and investors. We provide the resources, guidance, and connections you need to turn your vision into reality.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 flex items-center group">
                  Start Your Journey
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300">
                  Explore Programs
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Featured Mentors & Investors</h3>
                <div className="space-y-6">
                  {investors.map((investor, index) => (
                    <InvestorCard key={index} {...investor} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Turn Ideas Into Reality Section */}
      <HeroSection />

      {/* Why Innovate With Us Section */}
      <WhyInnovateSection />

      {/* Innovation Steps Section */}
      <InnovationSteps />

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="flex items-center space-x-4 p-6 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovatorPage;