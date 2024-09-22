import React, { useRef } from 'react';
import Card from "../Atoms/Card";
import { motion, useInView } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 }, 
  visible: { opacity: 1, y: 0 }, 
  exit: { opacity: 0, y: -50 },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const ListTechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px 0px' });

  return (
    <motion.div
      ref={ref}
      className="md:flex grid grid-cols-2 gap-4 grid-rows-2 md:flex-wrap md:gap-3 pb-10 max-sm:px-10 md:pt-16 pt-24"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "exit"}
    >
      <motion.div variants={cardVariants}>
        <Card 
          logo={'/assets/html.png'}
          alt={'html'}
          NamaBahasa={'HTML'}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <Card 
          logo={'/assets/social.png'}
          alt={'CSS'}
          NamaBahasa={'CSS'}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <Card 
          logo={'/assets/js.png'}
          alt={'JavaScript'}
          NamaBahasa={'JavaScript'}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <Card 
          logo={'/assets/java.png'}
          alt={'Java'}
          NamaBahasa={'Java'}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <Card 
          logo={'/assets/python.png'}
          alt={'Python'}
          NamaBahasa={'Python'}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <Card 
          logo={'/assets/c-sharp.png'}
          alt={'C#'}
          NamaBahasa={'C#'}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <Card 
          logo={'/assets/icons8-dart-480.png'}
          alt={'dart'}
          NamaBahasa={'Dart'}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <Card 
          logo={'/assets/icons8-kotlin-480.png'}
          alt={'Kotlin'}
          NamaBahasa={'Kotlin'}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <Card 
          logo={'/assets/programing.png'}
          alt={'node'}
          NamaBahasa={'Node JS'}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <Card 
          logo={'/assets/express-109.svg'}
          alt={'express'}
          NamaBahasa={'Express JS'}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <Card 
          logo={'/assets/1174949_js_react js_logo_react_react native_icon.png'}
          alt={'React JS'}
          NamaBahasa={'React JS'}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <Card 
          logo={'/assets/dot-net-core-7.svg'}
          alt={'.Net Core'}
          NamaBahasa={'.Net Core'}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <Card 
          logo={'/assets/icons8-tailwind-css-480.png'}
          alt={'Tailwind CSS'}
          NamaBahasa={'Tailwind CSS'}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <Card 
          logo={'/assets/icons8-bootstrap-480.png'}
          alt={'Bootstrap'}
          NamaBahasa={'Bootstrap'}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <Card 
          logo={'/assets/laravel-2.svg'}
          alt={'Laravel'}
          NamaBahasa={'Laravel'}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <Card 
          logo={'/assets/icons8-flutter-480.png'}
          alt={'Flutter'}
          NamaBahasa={'Flutter'}
        />
      </motion.div>
    </motion.div>
  );
};

export default ListTechStack;
