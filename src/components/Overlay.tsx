"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { personalData } from "@/lib/data";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Layer 1
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.3], [50, -50]);

  // Layer 2
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.6], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.3, 0.6], [50, -50]);

  // Layer 3
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.7, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.6, 0.9], [50, -50]);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-[400vh] pointer-events-none"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center p-8">
        
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute text-center max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4 drop-shadow-lg">
            {personalData.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 drop-shadow-md">
            {personalData.title}
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute text-center max-w-3xl"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4 drop-shadow-lg">
            Strategic Campaigns
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 drop-shadow-md">
            Driving ROI with Meta Ads & WhatsApp Automation
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute text-center max-w-3xl"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4 drop-shadow-lg">
            Digital & Web Creation
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 drop-shadow-md">
            React & WordPress Development with Modern Aesthetics
          </p>
        </motion.div>

      </div>
    </div>
  );
}
