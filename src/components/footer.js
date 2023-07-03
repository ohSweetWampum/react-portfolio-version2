import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { Box } from "@mui/material";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedin,
  faMedium,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#f5f5f5",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Box>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ marginRight: "35px" }}
        >
          <a
            href="https://www.linkedin.com/in/matthew-gibson-6b9b12237/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#333" }}
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </motion.div>
      </Box>

      <Box>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ marginRight: "35px" }}
        >
          <a
            href="https://medium.com/@mtgibson888"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#333" }}
          >
            <FontAwesomeIcon icon={faMedium} size="2x" />
          </a>
        </motion.div>
      </Box>

      <Box>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <a
            href="https://github.com/ohSweetWampum?page=1&tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#333" }}
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </motion.div>
      </Box>
    </footer>
  );
}

export default Footer;
