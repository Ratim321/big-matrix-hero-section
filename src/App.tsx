import React from 'react';
import { motion } from 'framer-motion';
import { Brain, FileCode2, BookCopy, Microscope, FlaskRound as Flask, Database, Award, Users } from 'lucide-react';
import { HeroCard } from './components/HeroCard';
import { FeatureCard } from './components/FeatureCard';
import { Interface3D } from './components/Interface3D';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 45, 0],
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
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center relative">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
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
            
            <motion.p 
              className="text-xl text-gray-600 relative pl-6 border-l-4 border-blue-500"
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
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-blue-50"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
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

        {/* Stats Section */}
        <motion.div 
          className="mt-24 bg-white/80 backdrop-blur-lg p-8 rounded-2xl border border-blue-100 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/5 to-blue-400/0"
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
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Research Papers Published</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
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