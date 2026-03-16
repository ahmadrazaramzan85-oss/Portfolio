import Link from "next/link";
import Image from "next/image";

const practicalProjects = [
  {
    id: "project-1",
    title: "Meta Ads Lead Generation Campaign (Pakistan)",
    image: "/project_img/Screenshot 2026-03-16 125319.png",
  },
  {
    id: "project-2",
    title: "Solvo By Ahmad 2/12 - Lead Generation Success",
    image: "/project_img/2.png",
  },
  {
    id: "project-3",
    title: "Natural Glow Messaging Campaign",
    image: "/project_img/3.png",
  },
];

export default function PracticalProjects() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-[#121212] overflow-hidden">
      {/* Optional subtle background gradients if you want to match other sections */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Practical Projects
          </h2>
          
          <div className="space-y-4 text-white/70 text-lg leading-relaxed mb-8">
            <p>
              "Ye projects sirf meri professional skills aur experience ko showcase karne ke liye add kiye gaye hain. Ye mere tamam work ka sirf ek chhota sa part hai. Maine mukhtalif industries aur categories me bohot zyada projects par kaam kiya hai.
            </p>
            <p>
              Development aur design ke ilawa mujhe digital marketing aur paid advertising ka bhi strong experience hai. Maine mukhtalif categories me millions ke ad spend ke sath advertising campaigns manage kiye hain with professional work experience.
            </p>
            <p className="font-medium text-white/90">
              Ye portfolio sirf meri capabilities aur professional work ka ek part hai just."
            </p>
          </div>

          <div className="w-24 h-1 bg-blue-500/50 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {practicalProjects.map((project) => (
            <Link href={`/project/${project.id}`} key={project.id} className="group block">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border border-white/10 flex flex-col h-full group-hover:-translate-y-2">
                <div className="relative aspect-[4/3] w-full bg-white/5 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                <div className="p-6 flex-grow flex items-center justify-center text-center">
                  <h3 className="text-xl font-bold text-white/90 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
