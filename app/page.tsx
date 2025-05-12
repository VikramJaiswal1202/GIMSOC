"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/navbar";
import SwipeCarousel from "@/components/SwipeCarousel";

export default function Home() {
  useEffect(() => {
    console.log("Page Loaded");
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-tr from-sky-300 to-sky-50 relative">
      {/* Navbar */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-full h-[450px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden">
          {/* Background Image */}
          <Image
            src="/team.jpeg"
            alt="Team"
            fill
            className="object-cover blur-sm pointer-events-none"
            priority
          />

          {/* Logo & Motto */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4">
            {/* ✅ Animated Central Logo */}
            <motion.div
              initial={{ scale: 0.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              className="w-3/4 max-w-[900px]"
            >
              <Image
                src="/gimsoc_logo.svg"
                alt="central logo"
                width={600}
                height={100}
                className="w-full h-auto"
              />
            </motion.div>

            <div className="sm:w-xl md:w-xl lg:w-xl xl:w-5/6 relative top-[-30px]">
              <p className="text-center text-black text-sm sm:text-base md:text-lg lg:text-xl font-medium mt-4">
                Georgian International Medical Student Society (GIMSOC) is a non-profit
                organization founded in 2023, dedicated to uniting and empowering
                medical students in Georgia. Our mission is to foster excellence,
                innovation, and compassionate care in healthcare. Through interactive
                workshops, intriguing seminars, collaborative projects, networking
                events, and themed competitions, we offer a platform for personal and
                professional growth. At GIMSOC, we prioritize lifelong friendships,
                continuous learning, and research opportunities, shaping the future of
                medicine in Georgia and beyond. Join us on this transformative journey
                towards a healthier and more equitable world.
              </p>
            </div>
          </div>

          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-sky-200 opacity-50 pointer-events-none" />
        </div>

        {/* Carousel Section */}
        <div className="w-full">
          <SwipeCarousel />
        </div>

        {/* Responsive Boxes Section */}
        <div className="mt-12 px-4">
          <div className="text-center text-lg font-semibold text-gray-700">More Content Coming Soon...</div>
          <div className="mt-4 h-40 bg-amber-200 rounded-xl shadow-inner" />
        </div>
      </motion.div>
    </div>
  );
}
