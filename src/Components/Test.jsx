import { motion } from "framer-motion";

export default function Test() {
  const variants = {
    visible: {
      opacity: 1,
      x: 100,
      transition: { staggerChildren: 0.7 },
    },
    hidden: { opacity: 0 },
  };

  const items = ["DSA", "Web Dev", "ML", "CP"];

  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item) => (
          <motion.li variants={variants} key={item}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
