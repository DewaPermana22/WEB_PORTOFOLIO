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
          logo={<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
            <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
            </svg>}
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
<<<<<<< HEAD
          logo={<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
            <polygon fill="#0d91d6" points="24,6 17.99,12.35 11.97,18.69 6,25 6,6"></polygon><polygon fill="#f88909" points="24,6 23.96,6 17.97,12.33 11.96,18.68 6,24.97 6,25 6,25.09 6,42 14.69,33.31 20.87,27.13 27.06,20.94 33.25,14.75 42,6"></polygon><polygon fill="#c757bc" points="14.69,33.31 6,42 6,25.09"></polygon><polygon fill="#d3638f" points="20.87,27.13 14.69,33.31 6,25.09 6,25 11.97,18.69"></polygon><polygon fill="#e07063" points="27.06,20.94 20.87,27.13 11.97,18.69 17.99,12.35"></polygon><polygon fill="#ec7d36" points="33.25,14.75 27.06,20.94 17.99,12.35 24,6"></polygon><polygon fill="#f88909" points="42,6 33.25,14.75 24,6"></polygon><polygon fill="#0095d5" points="11.51,19.15 7.99,22.88 6,21 6,13.94"></polygon><polygon fill="#2b88da" points="15.03,15.42 11.51,19.15 6,13.94 6,6.87"></polygon><polygon fill="#557bde" points="18.56,11.7 15.03,15.42 6,6.87 6,6 12.53,6"></polygon><polygon fill="#806ee3" points="22.08,7.97 18.56,11.7 12.53,6 24,6"></polygon><polygon fill="#0095d5" points="23,25 6,42 9.35,42 17.52,42 40,42"></polygon><polygon fill="#2b88da" points="25.68,42 17.52,42 11.76,36.25 15.84,32.17"></polygon><polygon fill="#557bde" points="33.86,42 25.68,42 15.84,32.17 19.92,28.09"></polygon><polygon fill="#806ee3" points="42,42 33.86,42 19.92,28.09 24,24"></polygon>
            </svg>}
=======
          logo1={'./public/icons8-kotlin-480.png'}
>>>>>>> aa5c676d09eb5ba1471d0dfedf90ebda696aebed
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
