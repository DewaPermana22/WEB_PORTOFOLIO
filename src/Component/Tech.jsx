import { ReactTyped } from "react-typed";
import ListTechStack from "./TechStackList";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const Tech = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false });

    const hrVariants = {
        hidden: { opacity: 0, width: 0 },
        visible: { 
            opacity: 1, 
            width: '300px', // Sesuaikan dengan lebar yang diinginkan
            transition: { duration: 0.5 } 
        },
    };

    return (
        <motion.div
            ref={ref}
            className="bg-slate-100 ps-9 flex flex-col pb-11 gap-3 dark:bg-gray-900 transition-colors duration-300 ease-in-out"
        >
            <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{
                    opacity: inView ? 1 : 0,
                    y: inView ? 0 : 10
                }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold font-Inter dark:text-purple-600 transition-colors duration-300 ease-in-out"
            >
                Tech <span className="text-purple-600 dark:text-white transition-colors duration-300 ease-in-out">Stack</span>
            </motion.h1>
            <ReactTyped
                className="dark:text-white transition-colors duration-300 ease-in-out text-left md:text-[20px] text-wrap font-Nunito font-semibold"
                strings={["The technologies I use include various platforms, frameworks, and tools that <br /> enable optimal application development, from front-end to back-end."]}
                typeSpeed={40}
                backSpeed={30}
                backDelay={3000}
                loop
            />
            <ListTechStack />
            <motion.hr
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={hrVariants}
                onAnimationComplete={() => {
                    if (inView) {
                        hrVariants.hidden = { opacity: 0, width: 0 }; // Reset untuk animasi ulang
                        hrVariants.visible = { 
                            opacity: 1, 
                            width: '300px', 
                            transition: { duration: 0.5 } 
                        };
                    }
                }}
                className="border-2 mx-auto dark:border-gray-500 transition-colors duration-300 ease-in-out border-purple-600 md:w-[500px] w-[300px] rounded-sm"
            />
        </motion.div>
    );
}

export default Tech;
