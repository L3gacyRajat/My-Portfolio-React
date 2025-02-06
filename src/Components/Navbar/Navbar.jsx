import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";

export default function Navbar() {
  const items = ["Homepage", "Skills", "Portfolio", "Contact", "About Me"];
  return (
    <div className="navbar">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* <img src="logo1.png" alt="" /> */}
          Rajat
        </motion.span>
        <motion.div
          className="links"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {items.map((item) => (
            <motion.a
              href={`#${item}`}
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
