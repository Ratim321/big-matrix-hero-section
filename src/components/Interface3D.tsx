import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Image, FileCode2, BarChart as ChartBar, Dna, Microscope, FlaskConical, Activity, Database } from 'lucide-react';

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
      scale: 1.05,
      rotateX: 5,
      rotateY: 5,
      z: 10,
    }}
    style={{
      transformStyle: "preserve-3d",
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

const FeatureCard: React.FC<{ title: string; icon: React.ReactNode }> = ({ title, icon }) => (
  <motion.div
    className="relative rounded-xl overflow-hidden bg-white/70 backdrop-blur-sm border border-blue-100 group"
    whileHover={{ 
      scale: 1.05,
      rotateX: 10,
      rotateY: 10,
      z: 20,
    }}
    style={{
      transformStyle: "preserve-3d",
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
      <div className="text-blue-600 mb-3">{icon}</div>
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

const ResearchTopic: React.FC<{ title: string; active: boolean }> = ({ title, active }) => (
  <motion.div
    className={`px-4 py-2 rounded-lg ${
      active ? 'bg-blue-500 text-white' : 'bg-white/50 text-gray-600'
    } backdrop-blur-sm`}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 20 }}
    whileHover={{
      scale: 1.05,
      rotateX: 5,
      rotateY: 5,
    }}
    style={{
      transformStyle: "preserve-3d",
    }}
  >
    {title}
  </motion.div>
);

export const Interface3D: React.FC = () => {
  const [currentTopic, setCurrentTopic] = React.useState(0);
  const topics = [
    "Neural Networks",
    "Medical Imaging",
    "Disease Detection",
    "Data Analysis"
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTopic((prev) => (prev + 1) % topics.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Enhanced Background Glow */}
      <motion.div 
        className="absolute -inset-10 bg-gradient-to-r from-blue-200/30 via-purple-200/30 to-blue-200/30 blur-3xl rounded-full"
        animate={{ 
          scale: [1, 1.2, 1],
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
        className="relative bg-white/80 backdrop-blur-xl rounded-2xl border border-blue-100/50 overflow-hidden shadow-lg"
        whileHover={{ 
          scale: 1.02,
          rotateX: 2,
          rotateY: 2,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Top Bar */}
        <motion.div 
          className="p-4 border-b border-blue-100 flex items-center justify-between bg-white/90 backdrop-blur-sm"
          whileHover={{
            backgroundColor: "rgba(255, 255, 255, 1)",
          }}
        >
          <div className="flex items-center gap-2">
            <motion.div 
              whileHover={{ scale: 1.2, z: 20 }} 
              className="w-3 h-3 rounded-full bg-red-400"
              transition={{ type: "spring", stiffness: 400 }}
            />
            <motion.div 
              whileHover={{ scale: 1.2, z: 20 }} 
              className="w-3 h-3 rounded-full bg-yellow-400"
              transition={{ type: "spring", stiffness: 400 }}
            />
            <motion.div 
              whileHover={{ scale: 1.2, z: 20 }} 
              className="w-3 h-3 rounded-full bg-green-400"
              transition={{ type: "spring", stiffness: 400 }}
            />
          </div>
          <div className="flex-1 mx-4">
            <motion.div 
              className="w-full bg-gradient-to-r from-blue-50 to-blue-100/50 backdrop-blur-sm rounded-lg px-4 py-2 text-gray-600 text-sm"
              whileHover={{ 
                scale: 1.01,
                rotateX: 2,
                rotateY: 2,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              Medical Research Platform
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-12 gap-4 p-4">
          {/* Sidebar */}
          <div className="col-span-3 space-y-2">
            <MenuItem icon={<Brain size={18} />} text="Analysis" active />
            <MenuItem icon={<Microscope size={18} />} text="Research" />
            <MenuItem icon={<Dna size={18} />} text="Genomics" />
            <MenuItem icon={<Activity size={18} />} text="Results" />
          </div>

          {/* Main Area */}
          <div className="col-span-9 space-y-4">
            {/* Research Topics */}
            <motion.div 
              className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white relative overflow-hidden group"
              whileHover={{ 
                scale: 1.02,
                rotateX: 5,
                rotateY: 5,
              }}
              style={{
                transformStyle: "preserve-3d",
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
                  className="text-xl font-bold mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  Current Research Topics
                </motion.h2>
                <div className="flex gap-2 flex-wrap">
                  <AnimatePresence mode="wait">
                    {topics.map((topic, index) => (
                      <ResearchTopic
                        key={topic}
                        title={topic}
                        active={index === currentTopic}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Grid Cards */}
            <div className="grid grid-cols-2 gap-4">
              <FeatureCard title="Dataset Analysis" icon={<Database size={24} />} />
              <FeatureCard title="Model Training" icon={<Brain size={24} />} />
              <FeatureCard title="Research Papers" icon={<FileCode2 size={24} />} />
              <FeatureCard title="Lab Results" icon={<FlaskConical size={24} />} />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-blue-100 p-4 bg-white/90 backdrop-blur-sm"
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