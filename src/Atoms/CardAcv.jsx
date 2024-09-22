import React from 'react'
import { GiAchievement } from "react-icons/gi";
import { motion } from 'framer-motion';
function CardAcv({text}) {
  return (
    <motion.div whileHover={{translateY: -12}} className='dark:border-dasharray dark:border-purple-700 dark:border-spacing-32 flex flex-col w-[400px] border rounded-lg bg-slate-100 dark:bg-gray-900 border-gray-900 transition-colors duration-300 ease-in-out p-9 '>
        <div className='flex items-center gap-2'>
        <GiAchievement className="text-[70px] relative -top-4 text-purple-600"/>
        <h1 className='text-[15px] font-semibold font-Inter dark:text-white transition-colors duration-300 ease-in-out'>
            {text}
        </h1>
        </div>
        <a href="" className='dark:bg-gray-900 dark:hover:text-purple-700 dark:hover:border-gray-800 dark:border-purple-700 bg-blend-darken hover:text-purple-600 hover:bg-slate-100 border-2 border-slate-100 ms-8 mt-5 ps-3 text-[13px] w-[100px] font-semibold font-Poppins_semibold dark:text-white transition-colors duration-300 ease-in-out bg-purple-500 text-white p-2 rounded-md hover:border-purple-600 shadow-md'>View more</a>
    </motion.div>
  )
}

export default CardAcv