import React from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col  py-4 items-center">
      {links.map((link, index) => (
        <motion.li initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.15*index}} key={index}>
          <NavLink href={link.path} title={link.title} />
        </motion.li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
