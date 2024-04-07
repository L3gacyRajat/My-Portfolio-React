import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -100,
    y: 100,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function Services() {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      //   whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on building beautiful <br /> and performant websites
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="people.webp" alt="" />
          <h1>
            Key
            <motion.b whileHover={{ color: "orange" }}> Skills</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            And
            <motion.b whileHover={{ color: "orange" }}> Expertise In</motion.b>
          </h1>
          <button>
            <a href="#Portfolio">WHAT WE DID?</a>
          </button>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        <motion.div className="boxContainer">
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black", scale: 1.1 }}
          >
            <img src="React.webp" alt="" />
            <p>React</p>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black", scale: 1.1 }}
          >
            <img src="htmlcss.png" alt="" />
            <p>HTML & CSS</p>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black", scale: 1.1 }}
          >
            <img src="JS.png" alt="" />
            <p>JS</p>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black", scale: 1.1 }}
          >
            <img src="nodejs1.png" alt="" />
            <p>Node.js</p>
          </motion.div>

          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black", scale: 1.1 }}
          >
            <img src="mysql.png" alt="" />
            <p>MY SQL</p>
          </motion.div>
        </motion.div>

        <motion.div className="boxContainer">
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black", scale: 1.1 }}
          >
            <img src="C+.png" alt="" />
            <p>C/C++</p>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black", scale: 1.1 }}
          >
            <img src="python.png" alt="" />
            <p>Python</p>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black", scale: 1.1 }}
          >
            <img src="flutter.png" alt="" />
            <p>Flutter</p>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black", scale: 1.1 }}
          >
            <img src="figma.png" alt="" />
            <p>Figma</p>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black", scale: 1.1 }}
          >
            <img src="git.png" alt="" />
            <p>Git</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* FOR MOBILE  */}

      <motion.div className="listContainer1" variants={variants}>
        <motion.div className="boxContainer">
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black", scale: 1.1 }}
          >
            <img src="React.webp" alt="" />
            <p>React</p>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black", scale: 1.1 }}
          >
            <img src="htmlcss.png" alt="" />
            <p>HTML CSS</p>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black", scale: 1.1 }}
          >
            <img src="JS.png" alt="" />
            <p>JS</p>
          </motion.div>
        </motion.div>

        <motion.div className="boxContainer">
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black", scale: 1.1 }}
          >
            <img src="nodejs1.png" alt="" />
            <p>Node.js</p>
          </motion.div>

          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black", scale: 1.1 }}
          >
            <img src="mysql.png" alt="" />
            <p>MY SQL</p>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black", scale: 1.1 }}
          >
            <img src="C+.png" alt="" />
            <p>C/C++</p>
          </motion.div>
        </motion.div>

        <motion.div className="boxContainer">
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black", scale: 1.1 }}
          >
            <img src="python.png" alt="" />
            <p>Python</p>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black", scale: 1.1 }}
          >
            <img src="flutter.png" alt="" />
            <p>Flutter</p>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black", scale: 1.1 }}
          >
            <img src="figma.png" alt="" />
            <p>Figma</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
