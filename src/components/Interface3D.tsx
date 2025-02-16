import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Image, FileCode2, BarChart as ChartBar } from 'lucide-react';

interface MenuItemProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, text, active }) => (
  <motion.div 
    className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer relative overflow-hidden ${
      active ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' : 'hover:bg-blue-50'
    }`}
    whileHover={{ 
      scale: 1.02,
      transition: { duration: 0.2 }
    }}
  >
    {!active && (
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-0"
        initial={false}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    )}
    <span className={`relative ${active ? 'text-white' : 'text-blue-600'}`}>{icon}</span>
    <span className={`relative ${active ? 'text-white' : 'text-gray-700'}`}>{text}</span>
  </motion.div>
);

const FeatureCard: React.FC<{ title: string }> = ({ title }) => (
  <motion.div
    className="relative rounded-xl overflow-hidden bg-white border border-blue-100 group"
    whileHover={{ 
      scale: 1.03,
      rotateX: 5,
      rotateY: 5,
    }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 20
    }}
  >
    <motion.div 
      className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-400/0"
      initial={false}
      whileHover={{ 
        background: "linear-gradient(to bottom right, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.2))"
      }}
      transition={{ duration: 0.3 }}
    />
    <div className="h-32 p-6 relative z-10">
      <motion.h3 
        className="text-gray-800 font-semibold text-lg group-hover:text-blue-600 transition-colors duration-300"
        initial={false}
        whileHover={{ scale: 1.05 }}
      >
        {title}
      </motion.h3>
    </div>
  </motion.div>
);

export const Interface3D: React.FC = () => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Glow */}
      <motion.div 
        className="absolute -inset-10 bg-gradient-to-r from-blue-200/30 via-purple-200/30 to-blue-200/30 blur-3xl rounded-full"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
          background: [
            "linear-gradient(to right, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3))",
            "linear-gradient(to right, rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))",
            "linear-gradient(to right, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3))"
          ]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Main Interface Container */}
      <motion.div
        className="relative bg-white/90 backdrop-blur-xl rounded-2xl border border-blue-100/50 overflow-hidden shadow-lg"
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.15)",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
      >
        {/* Top Bar */}
        <motion.div 
          className="p-4 border-b border-blue-100 flex items-center justify-between bg-white/95"
          whileHover={{
            backgroundColor: "rgba(255, 255, 255, 1)",
          }}
        >
          <div className="flex items-center gap-2">
            <motion.div 
              whileHover={{ scale: 1.2 }} 
              className="w-3 h-3 rounded-full bg-red-400"
              transition={{ type: "spring", stiffness: 400 }}
            />
            <motion.div 
              whileHover={{ scale: 1.2 }} 
              className="w-3 h-3 rounded-full bg-yellow-400"
              transition={{ type: "spring", stiffness: 400 }}
            />
            <motion.div 
              whileHover={{ scale: 1.2 }} 
              className="w-3 h-3 rounded-full bg-green-400"
              transition={{ type: "spring", stiffness: 400 }}
            />
          </div>
          <div className="flex-1 mx-4">
            <motion.div 
              className="w-full bg-gradient-to-r from-blue-50 to-blue-100/50 backdrop-blur-sm rounded-lg px-4 py-2 text-gray-600 text-sm"
              whileHover={{ 
                scale: 1.01,
                background: "linear-gradient(to right, rgba(239, 246, 255, 0.8), rgba(219, 234, 254, 0.8))"
              }}
            >
              Medical Image Analysis Platform
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-12 gap-4 p-4">
          {/* Sidebar */}
          <div className="col-span-3 space-y-2">
            <MenuItem icon={<Brain size={18} />} text="Analysis" active />
            <MenuItem icon={<Image size={18} />} text="Datasets" />
            <MenuItem icon={<FileCode2 size={18} />} text="Code" />
            <MenuItem icon={<ChartBar size={18} />} text="Results" />
          </div>

          {/* Main Area */}
          <div className="col-span-9 space-y-4">
            {/* Featured Section */}
            <motion.div 
              className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white relative overflow-hidden group"
              whileHover={{ 
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <div className="relative z-10">
                <motion.h2 
                  className="text-xl font-bold mb-2"
                  whileHover={{ scale: 1.05 }}
                >
                  AI-Powered Analysis
                </motion.h2>
                <p className="text-white/90">Advanced medical image processing</p>
              </div>
            </motion.div>

            {/* Grid Cards */}
            <div className="grid grid-cols-2 gap-4">
              <FeatureCard title="Dataset Processing" />
              <FeatureCard title="Model Training" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-blue-100 p-4 bg-white/95"
          whileHover={{
            backgroundColor: "rgba(255, 255, 255, 1)",
          }}
        >
          <div className="flex items-center gap-4">
            <motion.div 
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1],
                boxShadow: [
                  "0 0 0 0 rgba(74, 222, 128, 0.4)",
                  "0 0 0 4px rgba(74, 222, 128, 0)",
                  "0 0 0 0 rgba(74, 222, 128, 0.4)"
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <span className="text-gray-600 text-sm">System Status: Online</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};