import React from 'react';
import { motion } from 'framer-motion';
import CardAcv from "../Atoms/CardAcv";

const Achievement = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.5 } 
        },
    };
    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.5 } 
        },
    };
    const hrVariants = {
        hidden: { opacity: 0, width: 0 },
        visible: { 
            opacity: 1, 
            width: '220px', 
            transition: { duration: 0.5 } 
        },
    };
    return (
        <div className="bg-slate-100 dark:bg-gray-900 transition-colors duration-300 ease-in-out pt-10 pb-24">
            <motion.h1 
                className="text-2xl md:text-3xl font-bold text-center font-Inter dark:text-white transition-colors duration-300 ease-in-out"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                variants={titleVariants}
            >
                Achievements
            </motion.h1>
            <motion.hr 
                className="border-2 mx-auto dark:border-purple-900 transition-colors duration-300 ease-in-out border-purple-600 mt-3 rounded-sm"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                variants={hrVariants}
            />
            <motion.div 
                className="flex max-sm:flex-col items-center justify-center md:px-5 gap-11 pt-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                variants={containerVariants}
            >
                <motion.div variants={itemVariants}>
                    <CardAcv text={"Finalist in national level web programming competition (EPIM TI 2024) Politeknik Negeri Jember"} />
                </motion.div>
                <motion.div variants={itemVariants}>
                    <CardAcv text={"The most supportive team at EPIM TI 2024 Politeknik Negeri Jember"} />
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Achievement;
