"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectImages = [
  "/Project_Screenshots_Gallery/1.png",
  "/Project_Screenshots_Gallery/2.png",
  "/Project_Screenshots_Gallery/Screenshot 2025-09-11 142650.png",
  "/Project_Screenshots_Gallery/Screenshot 2025-09-11 142737.png",
  "/Project_Screenshots_Gallery/Screenshot 2025-09-11 142805.png",
  "/Project_Screenshots_Gallery/Screenshot 2025-09-11 142907.png",
  "/Project_Screenshots_Gallery/Screenshot 2025-09-11 143054.png",
  "/Project_Screenshots_Gallery/Screenshot 2026-03-16 105725.png",
  "/Project_Screenshots_Gallery/Screenshot 2026-03-16 105737.png",
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="relative w-full py-24 px-8 md:px-16 lg:px-24 bg-[#121212]">
      <div className="max-w-6xl mx-auto">
        
        {/* Title & Intro */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
            My Projects & Data Work
          </h2>
          <div className="w-24 h-1 bg-blue-500/50 rounded-full mb-8" />
          
          <div className="space-y-6 text-lg text-white/80 max-w-3xl">
            <p>
              As a Meta Advertising Specialist, I have managed and optimized high-performing ad campaigns across Facebook, Instagram, and Messenger for multiple companies. My work focuses on data-driven strategies—from audience targeting and budget allocation to creative testing and performance analysis.
            </p>
            <p className="text-white/60">
              Below are screenshots of live campaigns I've executed, along with downloadable Excel files containing real campaign data that demonstrate the results and insights I've delivered for clients.
            </p>
          </div>
        </motion.div>

        {/* Downloads Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Download Data Files
          </h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://docs.google.com/spreadsheets/d/1GS48A7GcCZCmShDGW5zPGxO_T2udiMGH/edit?usp=drive_link&ouid=110579078699556708010&rtpof=true&sd=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-6 py-4 bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-400 hover:text-white border border-emerald-500/30 rounded-xl transition-all duration-300 backdrop-blur-md"
            >
              <svg className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span className="font-medium">Download Company Data File 1 (Excel)</span>
            </a>
            
            <a 
              href="https://docs.google.com/spreadsheets/d/1SswsgYwKB8Nuf_TlyVco6JDMZhc-DTJW/edit?usp=drive_link&ouid=110579078699556708010&rtpof=true&sd=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-6 py-4 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 hover:text-white border border-blue-500/30 rounded-xl transition-all duration-300 backdrop-blur-md"
            >
              <svg className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span className="font-medium">Download Company Data File 2 (Excel)</span>
            </a>
          </div>
        </motion.div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-white/50" />
            Project Screenshots Gallery
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectImages.map((src, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative aspect-video rounded-xl overflow-hidden cursor-pointer border border-white/10 group bg-white/5 backdrop-blur-sm"
                onClick={() => setSelectedImage(src)}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={src} 
                  alt={`Project screenshot ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <span className="text-white font-medium flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    Enlarge Image
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-7xl max-h-[90vh] w-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={selectedImage} 
                alt="Enlarged project screenshot"
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
              />
              
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition-all duration-300 cursor-pointer"
                aria-label="Close lightbox"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
