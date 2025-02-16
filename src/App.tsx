import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, FileCode2, BookCopy, Microscope, FlaskConical, Database, Award, Users } from 'lucide-react';
import { HeroCard } from './components/HeroCard';
import { FeatureCard } from './components/FeatureCard';
import { Interface3D } from './components/Interface3D';

function App() {
  const researchTopics = [
    "Neural Networks in Medical Imaging",
    "Deep Learning for Disease Detection",
    "Computer Vision in Pathology",
    "AI-Driven Diagnostic Tools"
  ];

  const [currentTopic, setCurrentTopic] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTopic((prev) => (prev + 1) % researchTopics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 relative">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 45, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [45, 0, 45],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"
            style={{
              background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0) 70%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center relative">
          {/* Left Column - Enhanced Text Content */}
          <div className="space-y-6 relative">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <motion.div
                className="absolute -left-4 -top-4 w-12 h-12 bg-blue-100 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                  z: [0, 50, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <h1 className="text-6xl font-bold text-gray-900 leading-tight relative">
                Accelerate Your Medical Research Journey
              </h1>
            </motion.div>
            
            {/* Animated Research Topics */}
            <div className="relative h-20 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTopic}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <div className="text-xl text-blue-600 font-semibold pl-6 border-l-4 border-blue-500">
                    {researchTopics[currentTopic]}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.p 
              className="text-xl text-gray-600 relative pl-6 border-l-4 border-blue-500 backdrop-blur-sm bg-white/30 p-4 rounded-r-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Transform your medical image datasets into high-impact Q1 publications with our comprehensive research assistance platform.
            </motion.p>

            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold relative overflow-hidden group backdrop-blur-sm"
                whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/50 to-blue-400/0"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <span className="relative">Start Research</span>
              </motion.button>
              
              <motion.button 
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold relative overflow-hidden group backdrop-blur-sm bg-white/30"
                whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-blue-50"
                  initial={false}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative">Learn More</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column - 3D Interface */}
          <div className="relative">
            <Interface3D />
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <motion.div 
          className="mt-24 bg-white/40 backdrop-blur-xl p-8 rounded-2xl border border-blue-100 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{
            scale: 1.02,
            rotateX: 2,
            rotateY: 2,
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <div className="grid grid-cols-3 gap-8 text-center relative">
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
                z: 20,
              }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-blue-100/50"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Research Papers Published</div>
            </motion.div>
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
                z: 20,
              }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-blue-100/50"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </motion.div>
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
                z: 20,
              }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-blue-100/50"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600">Datasets Processed</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;