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
    title: "Gaming Social Media",
    img: "gaming.png",
    btnurl: "https://l3gacyrajat.github.io/Gaming-Social-Media/",
    disc: "Dive into a customized gaming social experience powered by HTML, CSS, and JavaScript. Explore interactive features including search and popup notifications, alongside a theme customizer for personalized backgrounds, colors, and fonts.",
  },
  {
    id: 3,
    title: "React Portfolio",
    img: "portfo.png",
    btnurl: "https://rajatkumarsingh.netlify.app/",
    disc: "Crafted my personal portfolio website with ReactJS and Framer Motion, enhancing user experience with dynamic animations. From UI design in Figma to development, explore my projects and journey seamlessly through captivating visuals.",
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
