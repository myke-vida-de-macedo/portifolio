import * as React from "react";
import { motion } from "framer-motion";
import Styled from "./style";

import { Link } from "react-router-dom"

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
};

const Icon = () => (
  <Link to="/home">
    <Styled className="container"
      initial={{y:"-100%"}}
      animate={{y:"0%"}}
      transition={{duration:0.5}}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="item"
      >
        <motion.path
          d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 1.5, ease: "easeInOut" },
            fill: { duration: 1.5, ease: [1, 0, 0.8, 1] }
          }}
        />
      </motion.svg>
    </Styled>
  </Link>
);

export default Icon