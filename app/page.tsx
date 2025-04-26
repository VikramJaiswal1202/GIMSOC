"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-start w-screen h-screen bg-gradient-to-tr from-sky-300 to-sky-50 overflow-hidden">

      {/* Animated Logo */}
      {!showMainContent && (
        <motion.div
          initial={{ scale: 7, x: 0, y: 0, opacity: 1 }}
          animate={{
            scale: 3,
            x: "-38.70vw",
            y: "-44.5vh",
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
            delay:1,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40"
          onAnimationComplete={() => setShowMainContent(true)} // <--- KEY PART
        >
          <Image
            src="/gimsoc_no_bg.png"
            alt="Gimsoc"
            width={100}
            height={50}
            className="rounded-lg"
          />
        </motion.div>
      )}

      {/* Main Content (Navbar + Page) */}
      {showMainContent && (
        <>
          {/* Navbar */}
          <Navbar />

          {/* Page Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="flex flex-col items-center justify-center mt-32 px-6 z-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
              Welcome to Gimsoc
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl text-center mb-8">
              Your content here - this will appear after the loading animation completes.
            </p>
            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:opacity-90 transition">
                Get Started
              </button>
              <button className="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition">
                Learn More
              </button>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}
