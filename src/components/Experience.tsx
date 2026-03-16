"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/lib/data";

export default function Experience() {
  return (
    <section className="relative w-full py-24 px-8 md:px-16 lg:px-24 bg-[#121212]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-white/20 rounded-full" />
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.role + index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              className="relative pl-8 md:pl-10"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-5px] top-1.5 w-[9px] h-[9px] rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              
              <div className="group relative bg-white/5 border border-white/5 rounded-2xl p-6 md:p-8 hover:bg-white/10 hover:border-white/10 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-white/60 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-sm font-medium whitespace-nowrap self-start">
                    {exp.date}
                  </div>
                </div>
                
                <ul className="space-y-3 mt-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start text-white/70">
                      <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
