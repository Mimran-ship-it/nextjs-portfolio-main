"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {

  return (
    <section className="lg:py-20">
      {console.log('sss',process.env.NEXT_PUBLIC_URL)}
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-2xl sm:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Ibrahim Bajwa",
                1000,
                "Web Developer",
                1000,
                "Desktop App Dev.",
                1000,
                "Software Engr.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-gray-400 text-base sm:text-lg mb-6 lg:text-xl">
          Keen on acquiring new skills, I embrace challenges for continuous learning,<br /> fostering professional growth in my dynamic journey.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-400 to-blue-600 hover:bg-blue-900 text-white"
            >
              Hire Me
            </Link>
            <button
              className="px-1 inline-block py-1 w-full sm:w-fit  rounded-full bg-gradient-to-br from-blue-400 to-blue-600 hover:bg-slate-900 text-white mt-3"
            >
              <Link href={'https://resume.io/r/q3sNWwz2g'} className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                See CV
              </Link>
            </button>

          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full lg:mr-20 bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src='/bajwa.png'
              // src={`${process.env.NEXT_PUBLIC_URL}bajwa.png`}
              alt="hero image"
              className="absolute bg-black md:mt-0 my-5 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
