"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";

export default function Skills() {
  return (
    <section className="relative w-full py-24 px-8 md:px-16 lg:px-24 bg-[#121212] overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Expertise
          </h2>
          <div className="w-24 h-1 bg-white/20 rounded-full mx-auto md:mx-0" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-white/50 group-hover:bg-white transition-colors" />
                  {category.category}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <div 
                      key={i} 
                      className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-white/80 text-sm font-medium group-hover:bg-white/10 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
