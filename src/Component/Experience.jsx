import { motion } from 'framer-motion';
import TimeLine from "../Atoms/TimeLine";

const Experience = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.div
      className="max-sm:pt-24 max-sm:pb-10 bg-slate-100 ps-9 max-sm:pe-9 flex flex-col gap-3 dark:bg-gray-900 transition-colors duration-300 ease-in-out"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
    >
      <motion.h1
        className="text-2xl md:text-4xl font-bold dark:text-purple-600 transition-colors duration-300 ease-in-out pb-12 font-Inter text-center"
        variants={titleVariants}
      >
        Experience
      </motion.h1>
      <TimeLine />
    </motion.div>
  );
};

export default Experience;
