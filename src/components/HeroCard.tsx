import React from 'react';
import { motion } from 'framer-motion';

interface HeroCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const HeroCard: React.FC<HeroCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
      whileHover={{ scale: 1.05, rotateY: 5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-blue-600 mb-4 text-3xl">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}