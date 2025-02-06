import "./about.scss";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const textVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.5,
    },
  },
};

export default function About() {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="about"
      variants={textVariants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="titleContainer" variants={textVariants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}> About </motion.b>
            Me
          </h1>
        </div>
      </motion.div>
      <motion.div className="textContainer" variants={textVariants}>
        <motion.div className="image" variants={textVariants}>
          <img src="hero2.jpg" alt="" />
        </motion.div>

        <motion.div className="text" variants={textVariants}>
          <p>
            I'm Rajat Kumar Singh, a Full Stack Developer | Software Engineer.
            Final-year B.Tech (CSE) student at IIIT Sonepat with expertise in
            the MERN stack, Python, C++, and cloud computing. I gained hands-on
            experience through internships at Ascer Solutions & Wavemetrik,
            working on AI-driven solutions, scalable web applications, and
            optimizing backend infrastructure. Passionate about competitive
            programming (LeetCode 1584 rating) and building impactful projects
            like AI-powered crop prediction and real-time chat apps. Open to
            software development, AI, and cloud roles.
            <br /> 📩 rajatkumarsingh2002@gmail.com <br /> 📍 Gurgaon, India
          </p>
          <p>
            <strong>Experience:</strong>
            <ul>
              <li>
                Intern at <strong>Ascer Solutions</strong>: Developed responsive
                UI components and integrated REST APIs for a wifi-based software
              </li>
              <li>
                Intern at <strong>Wavemetrik</strong>: Designed and developed a
                responsive company landing page, Enhanced features and fixed
                bugs in client software, creating Windows and Linux executables
                for multi-device scalability.
              </li>
            </ul>
          </p>
        </motion.div>
      </motion.div>
      <motion.div className="socialMedia" variants={textVariants}>
        <h3>Connect with Me</h3>
        <div className="socialIcons">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/in/rajat-kumar-singh-44105a225/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/L3gacyRajat"
          >
            <FontAwesomeIcon icon={faGithub} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://leetcode.com/yourprofile"
          >
            <img src="leetcode.svg" alt="LeetCode" className="leetcode-icon" />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}
