import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, gradient }) => {
  return (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`absolute inset-0 rounded-2xl ${gradient} opacity-50 blur-xl group-hover:opacity-70 transition-opacity`} />
      <motion.div
        className="relative bg-black/10 backdrop-blur-xl rounded-2xl p-6 h-full border border-white/10"
        whileHover={{ rotateX: 5, rotateY: 5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="text-white mb-4 text-3xl">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-white/90">{title}</h3>
        <p className="text-white/70">{description}</p>
      </motion.div>
    </motion.div>
  );
}