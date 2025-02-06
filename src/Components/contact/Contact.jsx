import "./contact.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

function Contact() {
  const ref = useRef();
  const formRef = useRef();
  const [erroes, setErrors] = useState(false);
  const [Success, setSuccess] = useState(false);
  const isInView = useInView(ref, { margin: "-100px" });
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2uu9k54", "template_vvqt50x", formRef.current, {
        publicKey: "dmcZ0HYZnPvX4UgBW",
      })
      .then(
        () => {
          setSuccess(true);
          console.log("SUCCESS!");
        },
        (error) => {
          setErrors(true);
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>rajatkumarsingh2002@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>IIIT Sonepat, NCR, India </span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+91 90845 37785</span>
        </motion.div>
      </motion.div>

      <div className="formContainer">
        <motion.div
          className="mailSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg
            // width="450px"
            // height="450px"
            viewBox="-0.5 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M9.00977 21.39H19.0098C20.0706 21.39 21.0881 20.9685 21.8382 20.2184C22.5883 19.4682 23.0098 18.4509 23.0098 17.39V7.39001C23.0098 6.32915 22.5883 5.31167 21.8382 4.56152C21.0881 3.81138 20.0706 3.39001 19.0098 3.39001H7.00977C5.9489 3.39001 4.93148 3.81138 4.18134 4.56152C3.43119 5.31167 3.00977 6.32915 3.00977 7.39001V12.39"
              // stroke="#000000"
              stroke-width="0.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M1.00977 18.39H11.0098"
              // stroke="#000000"
              stroke-width="0.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M1.00977 15.39H5.00977"
              // stroke="#000000"
              stroke-width="0.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M22.209 5.41992C16.599 16.0599 9.39906 16.0499 3.78906 5.41992"
              // stroke="#000000"
              stroke-width="0.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          action=""
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input type="text" placeholder="Name" name="from_name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows="8" placeholder="Message" name="message"></textarea>
          <button>Submit</button>
          {erroes && "Something went wrong!"}
          {Success && "Your message has been sent!"}
        </motion.form>
      </div>
    </motion.div>
  );
}

export default Contact;
