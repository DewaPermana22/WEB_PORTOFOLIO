import React, { useRef } from 'react';
import Card from "../Atoms/Card";
import { motion, useInView } from 'framer-motion';
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiReact, } from "react-icons/si";
import { SiExpress,SiBootstrap,SiLaravel,SiFlutter,SiNodedotjs } from "react-icons/si";



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
          logo={<SiHtml5 />}
          ukuran={'text-5xl'}
          warna={'text-orange-500'}
          NamaBahasa={'HTML'}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <Card 
          logo={<SiCss3 />}
          warna={'text-blue-600'}
          ukuran={'text-5xl'}
          NamaBahasa={'CSS'}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <Card 
          logo={<SiJavascript />}
          warna={'text-yellow-300'}
          ukuran={'text-5xl'}
          NamaBahasa={'JavaScript'}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <Card 
          logo={'/public/java.png'}
          alt={'Java'}
          NamaBahasa={'Java'}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <Card 
          logo={'/public/python.png'}
          alt={'Python'}
          NamaBahasa={'Python'}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <Card 
          logo={'/public/c-sharp.png'}
          alt={'C#'}
          NamaBahasa={'C#'}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <Card 
          logo={'/public/icons8-dart-480.png'}
          alt={'dart'}
          NamaBahasa={'Dart'}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <Card 
          logo={'/public/icons8-kotlin-480.png'}
          alt={'Kotlin'}
          NamaBahasa={'Kotlin'}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <Card 
          logo={<SiNodedotjs/>}
          ukuran={'text-5xl'}
          warna={'text-green-600'}
          NamaBahasa={'Node JS'}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <Card 
          logo={<SiExpress />}
          ukuran={'text-5xl'}
          NamaBahasa={'Express JS'}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <Card 
          logo={<SiReact />}
          ukuran={'text-5xl'}
          warna={`text-[#61DAFB]`}
          NamaBahasa={'React JS'}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <Card 
          logo={'/public/dot-net-core-7.svg'}
          alt={'.Net Core'}
          NamaBahasa={'.Net Core'}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <Card 
          logo={<SiTailwindcss />}
          ukuran={'text-5xl'}
          warna={'text-sky-500'}
          NamaBahasa={'Tailwind CSS'}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <Card 
          logo={<SiBootstrap />}
          warna={'text-purple-600'}
          ukuran={'text-5xl'}
          NamaBahasa={'Bootstrap'}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <Card 
          logo={<SiLaravel />}
          warna={'text-red-500'}
          ukuran={'text-5xl'}
          NamaBahasa={'Laravel'}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <Card 
          logo={<SiFlutter />}
          warna={'text-sky-500'}
          ukuran={'text-5xl'}
          NamaBahasa={'Flutter'}
        />
      </motion.div>
    </motion.div>
  );
};

export default ListTechStack;
