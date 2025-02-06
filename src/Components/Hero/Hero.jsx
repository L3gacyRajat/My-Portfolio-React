import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.13,
    },
  },

  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      delay: 1,
      duration: 2,
      repeat: Infinity,
    },
  },
};

export default function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>RAJAT KUMAR SINGH</motion.h2>
          <motion.h1 variants={textVariants}>
            Full-Stack Software Developer
          </motion.h1>
          <div className="buttons">
            <motion.button variants={textVariants}>
              <a href="/cv.pdf" target="_blank">
                See My Resume
              </a>
            </motion.button>
            <motion.button variants={textVariants}>
              <a href="#Contact">Get In Touch</a>
            </motion.button>
          </div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <div className="imageContainer">
        <img src="hero1.png" alt="" />
      </div>
    </div>
  );
}
