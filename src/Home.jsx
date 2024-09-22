import React, { useState, useEffect } from 'react';
import Navbar from './Component/Navbar';
import Sosmed from './Component/ListSosmed';
import Tech from './Component/Tech';
import Experience from './Component/Experience';
import Achievement from './Component/Achievement';
import ScrollToTopButton from './Atoms/BtnToTop';
import Footer from './Atoms/Footer';
import Loading from './Component/Loading';
import { motion } from 'framer-motion';

const Home = () => {
   
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      <div className='bg-slate-100 dark:bg-gray-900 min-h-screen transition-colors duration-300 ease-in-out'>
        <Navbar />
        <motion.div
          className='ps-16 pt-40 md:pt-52'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className='text-sm md:text-xl text-start text-purple-600 font-Poppins_semibold dark:text-white transition-colors duration-300 ease-in-out'
            variants={itemVariants}
          >
            Hello everyone Introducing My Self.
          </motion.h1>

          <motion.h1
            className='text-[40px]  text-start text-gray-900 font-Roboto md:pt-2 font-bold md:text-[60px] max-sm:relative max-sm:-top-5 dark:text-white transition-colors duration-300 ease-in-out'
            variants={itemVariants}
          >
            Dewa Permana<span className='text-purple-600 text-[65px]'>.</span>
          </motion.h1>

          <motion.h1
            className=' text-3xl md:text-4xl font-bold text-start text-gray-900 font-Signika dark:text-white transition-colors duration-300 ease-in-out max-sm:relative max-sm:-top-5'
            variants={itemVariants}
          >
            Beginner Mobile and Web Developer!
          </motion.h1>

          <motion.hr
            className='border-2 border-purple-600 w-24 relative md:left-96 md:ms-20 left-12 rounded-sm max-sm:relative max-sm:-top-5'
            variants={itemVariants}
          />
        </motion.div>

        <Sosmed />
      </div>
      <Tech />
      <Experience />
      <Achievement />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default Home;