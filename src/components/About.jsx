import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Overview</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      I'm a skilled software developer from Kenya, proficient in TypeScript, JavaScript, React, Node.js, and Three.js. I collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
      I am dedicated to delivering high-quality work and take pride in my ability to bring complex ideas to life. Whether you need a new application built from scratch, or an existing system updated and improved, I have the skills and expertise to make it happen.
      </motion.p>
    </>
  );
};

export default About