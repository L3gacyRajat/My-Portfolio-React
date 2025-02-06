import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Flutter Weather App",
    img: "weather3.png",
    btnurl: "https://github.com/L3gacyRajat/Weather-App",
    disc: "Discover global weather instantly with my Realtime Weather App. Using Flutter for sleek design and Open Weather API for live data, stay informed and plan confidently for any destination. Wherever you go, stay ahead with real-time weather updates.",
  },
  {
    id: 2,
    title: "Crop Prediction AI-ML",
    img: "crop.jpg",
    btnurl: "https://github.com/L3gacyRajat/Fasal-Crop-Predictor",
    disc: " Developed a machine-learning-powered crop prediction system to assist farmers with decision-making. Integrated weather APIs and soil data analysis to recommend optimal crops tailored to environmental conditions. Engineered a user-friendly interface in React.js with Tailwind CSS for seamless user interaction. Achieved 95% prediction accuracy using a Random Forest classifier for data-driven insights.",
  },
  {
    id: 3,
    title: "Gaming Social Media - UI",
    img: "gaming.png",
    btnurl: "https://l3gacyrajat.github.io/Gaming-Social-Media/",
    disc: "Dive into a customized gaming social experience powered by HTML, CSS, and JavaScript. Explore interactive features including search and popup notifications, alongside a theme customizer for personalized backgrounds, colors, and fonts.",
  },
  {
    id: 4,
    title: "ChatBuddy - Realtime Chat App",
    img: "chatb.png",
    btnurl: "https://chatbuddy-2lhx.onrender.com/",
    disc: "Created a responsive chat application for real-time communication. Implemented WebSocket-based communication and user authentication. Developed modular components, including message broadcasting and status indicators.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.disc}</p>
            <button>
              <a href={item.btnurl} target="_blank">
                See Demo
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;
