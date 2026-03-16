"use client";

import { motion } from "framer-motion";
import { personalData } from "@/lib/data";

export default function About() {
  return (
    <section className="relative w-full py-24 px-8 md:px-16 lg:px-24 bg-[#121212] flex items-center justify-center border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative p-10 md:p-14 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />
          
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-8">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 text-left max-w-3xl mx-auto">
            {personalData.about}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/70">
            <div className="flex items-center gap-2">
              <span className="text-white/40">Email:</span>
              <a href={`mailto:${personalData.email}`} className="hover:text-white transition-colors">
                {personalData.email}
              </a>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-white/40">Phone:</span>
              <a href={`tel:${personalData.phone.replace(/\\s/g, '')}`} className="hover:text-white transition-colors">
                {personalData.phone}
              </a>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-white/40">WhatsApp:</span>
              <a href={`https://wa.me/92${personalData.whatsapp.replace(/\\D/g, '').substring(1)}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                {personalData.whatsapp}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
