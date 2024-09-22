import React, { useState, useEffect } from 'react';
import { FaCode } from "react-icons/fa";
import { motion } from 'framer-motion';

const Loading = () => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="flex justify-center items-center min-h-screen"
      initial={{ opacity: 1 }} 
      animate={isComplete ? { y: -200, opacity: 0 } : { y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="text-xl md:text-[100px] font-bold transition-colors duration-300 ease-in-out flex items-center">
        <motion.span
          className="mr-2 mb-2 md:text-[90px] text-purple-600"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        >
          <FaCode />
        </motion.span>
        <h1 className="font-Baloo text-gray-900 dark:text-gray-100">
          Shadewa<span className="text-purple-600">.</span>dev
        </h1>
      </div>
    </motion.div>
  );
};

export default Loading;
