import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Flutter Weather App",
    img: "weather2.jpg",
    disc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius at provident ipsa. Dicta impedit qui incidunt, explicabo, repudiandae esse mollitia vero maiores est eos sunt distinctio? Iure nulla nostrum vero tempora doloremque nisi harum enim fugit consequuntur, atque saepe magnam?",
  },
  {
    id: 2,
    title: "Gaming Social Media",
    img: "gaming.png",
    disc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius at provident ipsa. Dicta impedit qui incidunt, explicabo, repudiandae esse mollitia vero maiores est eos sunt distinctio? Iure nulla nostrum vero tempora doloremque nisi harum enim fugit consequuntur, atque saepe magnam?",
  },
  {
    id: 3,
    title: "React Portfolio",
    img: "portfo.png",
    disc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius at provident ipsa. Dicta impedit qui incidunt, explicabo, repudiandae esse mollitia vero maiores est eos sunt distinctio? Iure nulla nostrum vero tempora doloremque nisi harum enim fugit consequuntur, atque saepe magnam?",
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
            <button>See Demo</button>
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
