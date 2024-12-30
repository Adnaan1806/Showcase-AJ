import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { RiCss3Line } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { RiHtml5Line } from "react-icons/ri";
import { SiPostman } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiJira } from "react-icons/si";
import { RiJavaLine } from "react-icons/ri";
import { SiApachejmeter } from "react-icons/si";
import { SiSelenium } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import { delay, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 transition-all duration-300"
        >
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 transition-all duration-300"
        >
          <RiCss3Line className="text-5xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 transition-all duration-300"
        >
          <SiMongodb className="text-5xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 transition-all duration-300"
        >
          <RiHtml5Line className="text-5xl text-orange-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 transition-all duration-300"
        >
          <FaNodeJs className="text-5xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(10)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 transition-all duration-300"
        >
          <RiJavascriptLine className="text-5xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 transition-all duration-300"
        >
          <RiJavaLine className="text-5xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 transition-all duration-300"
        >
          <SiSelenium className="text-5xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 transition-all duration-300"
        >
          <SiCypress className="text-5xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 transition-all duration-300"
        >
          <SiJira className="text-5xl text-blue-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(16)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 transition-all duration-300"
        >
          <SiMysql className="text-5xl text-blue-300" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 transition-all duration-300"
        >
          <SiPostman className="text-5xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(10)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 transition-all duration-300"
        >
          <SiApachejmeter className="text-5xl text-red-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 transition-all duration-300"
        >
          <VscAzureDevops className="text-5xl text-blue-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
