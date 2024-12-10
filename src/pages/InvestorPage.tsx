import React from 'react';
import { ArrowRight, Search, TrendingUp, Target } from 'lucide-react';
import InvestmentCard from '../components/Investor/InvestmentCard';
import HeroSection from '../components/Investor/HeroSection';
import WhyInvestSection from '../components/Investor/WhyInvestSection';
import InvestmentSteps from '../components/Investor/InvestmentSteps';
import InvestorIntroSection from '../components/Investor/InvestorIntroSection';

const InvestorPage = () => {
  const opportunities = [
    {
      name: "MedIntel AI",
      category: "Healthcare AI Startup",
      stage: "Seed stage",
      location: "India",
      requiredFunding: "₹15,000",
      logo: "https://images.unsplash.com/photo-1557100403-7063de4f2d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "HealthMinds",
      category: "ML Scaleup",
      stage: "Break even",
      location: "New York, USA",
      requiredFunding: "$20,000",
      logo: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "OddCrop",
      category: "Food & Beverage",
      stage: "Profitable",
      location: "London, UK",
      requiredFunding: "£10,000",
      logo: "https://images.unsplash.com/photo-1557100403-7063de4f2d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const stats = [
    { icon: Search, value: "1,200+", label: "Active Startups" },
    { icon: TrendingUp, value: "$5.3B", label: "Total Investments" },
    { icon: Target, value: "92%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Main Hero Section */}
      <HeroSection />

      {/* Investor Intro Section */}
      <InvestorIntroSection />

      {/* Why Invest With Us Section */}
      <WhyInvestSection />

      {/* Investment Steps Section */}
      <InvestmentSteps />

      {/* Featured Opportunities Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Opportunities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover promising startups and scale-ups actively seeking investment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {opportunities.map((opportunity, index) => (
              <InvestmentCard key={index} {...opportunity} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 flex items-center mx-auto group">
              View All Opportunities
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="flex items-center space-x-4 p-6 bg-white/10 rounded-2xl backdrop-blur-lg">
                  <div className="p-4 bg-white/20 rounded-xl">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold">{stat.value}</div>
                    <div className="text-white/80">{stat.label}</div>
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

export default InvestorPage;