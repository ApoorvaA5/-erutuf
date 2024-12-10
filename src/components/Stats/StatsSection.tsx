import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Building, Users, TrendingUp, ArrowRightLeft } from 'lucide-react';

const AnimatedCounter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  React.useEffect(() => {
    const animation = animate(count, value, { duration });
    return animation.stop;
  }, [value, duration]);

  return <motion.span>{rounded}</motion.span>;
};

const StatsSection = () => {
  const stats = [
    {
      icon: Building,
      value: 8073957701,
      label: 'Capital Raised for Startups',
      prefix: '₹',
      gradient: 'from-emerald-400 to-cyan-400'
    },
    {
      icon: TrendingUp,
      value: 260,
      label: 'Deals Invested',
      gradient: 'from-blue-400 to-indigo-400'
    },
    {
      icon: Users,
      value: 23500,
      label: 'Investors on Platform',
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      icon: ArrowRightLeft,
      value: 121,
      label: 'Follow-ons/Exits',
      gradient: 'from-orange-400 to-red-400'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute rounded-full bg-white/5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Future Minds?
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl transform transition-transform group-hover:scale-105" />
                <div className="relative p-6 text-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-4xl font-bold text-white mb-2">
                    {stat.prefix}<AnimatedCounter value={stat.value} />
                  </h3>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;