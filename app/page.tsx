"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link"; // <-- Import Link

export default function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <div className="relative flex flex-col items-center w-screen h-screen overflow-hidden bg-gradient-to-tr from-sky-300 to-sky-50">

      {/* Always show logo */}
      <motion.div
        initial={{ scale: 7 }}
        animate={{ scale: 3, x: "-38.7vw", y: "-44.5vh" }}
        transition={{ duration: 1.5, delay:0.5, ease: "easeInOut" }}
        onAnimationComplete={() => setAnimationComplete(true)}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40"
      >
        <Link href="/">
          <Image
            src="/gimsoc_logo.svg"
            alt="Gimsoc Logo"
            width={100}
            height={50}
            className="rounded-lg cursor-pointer"
            priority
          />
        </Link>
      </motion.div>

      {/* Show Navbar and Content AFTER animation completes */}
      {animationComplete && (
        <>
          {/* Navbar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="w-full"
          >
            <Navbar />
          </motion.div>

          {/* Page Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="flex flex-col items-center justify-center mt-32 px-6 z-10"
          >
            <h1 className="mb-6 text-4xl font-bold text-center text-gray-800 md:text-5xl">
              Welcome to Gimsoc
            </h1>
            <p className="mb-8 text-lg text-center text-gray-600 max-w-2xl">
              Your content here - this will appear after the loading animation completes.
            </p>
            <div className="flex space-x-4">
              <button className="px-6 py-3 font-medium text-white transition bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:opacity-90">
                Get Started
              </button>
              <button className="px-6 py-3 font-medium text-white transition bg-gray-800 rounded-lg hover:bg-gray-700">
                Learn More
              </button>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}
