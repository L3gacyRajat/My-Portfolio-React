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

const slideTextVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
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
            Web developer and UI designer
          </motion.h1>
          <div className="buttons">
            <motion.button variants={textVariants}>
              <a href="/cv.pdf" target="_blank">
                See My CV
              </a>
            </motion.button>
            <motion.button variants={textVariants}>
              <a href="#Contact">Contact Me!!</a>
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
      <motion.div
        variants={slideTextVariants}
        initial="initial"
        animate="animate"
        className="slidingTextContainer"
      >
        Anime Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img src="hero1.png" alt="" />
      </div>
    </div>
  );
}
