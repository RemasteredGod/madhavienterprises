'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 flex items-center justify-center z-50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative">
            <Image
              src="/logo.svg"
              alt="Madhavi Enterprises"
              width={120}
              height={120}
              className="mx-auto"
            />
            {/* Professional pulse animation instead of spinning */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute inset-0 border-2 border-yellow-400/50 rounded-full"
            ></motion.div>
            {/* Secondary pulse ring */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute inset-0 border border-blue-400/30 rounded-full"
            ></motion.div>
          </div>
        </motion.div>

        {/* Company Name */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Madhavi Enterprises
          </h1>
          <p className="text-blue-200 text-lg">Premium Electronics Store</p>
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center space-x-2"
        >
          <div className="flex space-x-2">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: index * 0.15,
                  ease: "easeInOut"
                }}
                className="w-2 h-2 bg-yellow-400 rounded-full"
              ></motion.div>
            ))}
          </div>
          <span className="text-white ml-4 font-medium">Loading...</span>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 w-64 mx-auto"
        >
          <div className="w-full bg-white/20 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
