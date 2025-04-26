"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-gradient-to-tr from-sky-300 to-sky-50">
      
      {/* Logo Animation */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Image
          src="/gimsoc_no_bg.png"
          alt="Gimsoc"
          width={400}
          height={200}
          className="rounded-lg"
        />
      </motion.div>

      {/* Loading Bar */}
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="h-full bg-gradient-to-r from-sky-500 to-sky-200 rounded-full"
        />
      </div>

      {/* Loading Text */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-2 text-gray-700 font-medium"
      >
        Loading...
      </motion.p>

    </div>
  );
}
