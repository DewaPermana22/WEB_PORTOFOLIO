import React from 'react';
import { Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

function TimeLine() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  return (
    <Timeline className='ms-5 mt-5'>
      <motion.div 
        ref={ref} 
        variants={itemVariants} 
        initial="hidden" 
        animate={inView ? "visible" : "hidden"} 
        custom={0}
      >
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>February 2024 - December 2024</Timeline.Time>
            <Timeline.Title>Industrial class with PT Humma Teknologi Indonesia</Timeline.Title>
            <Timeline.Body>
              I joined PT's industrial Class. Humma Teknologi Indonesia (HUMMATECH) In February 2024 to December 2024 <br />
              Malang, East Java
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </motion.div>

      <motion.div 
        ref={ref} 
        variants={itemVariants} 
        initial="hidden" 
        animate={inView ? "visible" : "hidden"} 
        custom={1}
      >
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>December 2024</Timeline.Time>
            <Timeline.Title>BootCamp in PT. UNIVERSAL BIG DATA (UBIG)</Timeline.Title>
            <Timeline.Body>
              8 December 2024 - 3 January 2025, BootCamp in PT. UNIVERSAL BIG DATA (UBIG) <br />
              Malang, East Java 
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </motion.div>

      <motion.div 
        ref={ref} 
        variants={itemVariants} 
        initial="hidden" 
        animate={inView ? "visible" : "hidden"} 
        custom={2}
      >
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>January 2025</Timeline.Time>
            <Timeline.Title>Internship in PT. UNIVERSAL BIG DATA (UBIG)</Timeline.Title>
            <Timeline.Body>
              January 2025 Until June 2025, I interned at PT. UNIVERSAL BIG DATA (UBIG) <br />
              Malang, East Java
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </motion.div>
    </Timeline>
  );
}

export default TimeLine;
