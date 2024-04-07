import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";

export default function Navbar() {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* <img src="logo1.png" alt="" /> */}
          Rajat
        </motion.span>
        <div className="social">
          <a href="https://github.com/L3gacyRajat" target="blank">
            <img
              style={{ height: "30px", width: "30px" }}
              src="/github.png"
              alt=""
            />
          </a>
          <a href="https://www.instagram.com/_rajat_rj_/" target="blank">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.youtube.com/@RJAnimeofficial/" target="blank">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="https://discord.com/users/l3gacy0811" target="blank">
            <img
              style={{ height: "32px", width: "32px" }}
              src="/discord.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}
