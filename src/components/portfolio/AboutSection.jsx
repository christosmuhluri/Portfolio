import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Server, Globe } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    { icon: Code2, label: 'Full Stack', desc: 'PHP, JavaScript, Symfony' },
    { icon: Database, label: 'Databases', desc: 'PostgreSQL, MS SQL' },
    { icon: Server, label: 'Backend', desc: 'RESTful APIs, MVC' },
    { icon: Globe, label: 'Frontend', desc: 'HTML, CSS, Twig, Vite' },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Crafting Digital Experiences
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 text-slate-400 leading-relaxed">
              <p className="text-lg">
                Computer Systems Engineering graduate with strong hands-on experience as a 
                <span className="text-cyan-400"> Full Stack Developer Intern</span> working on live, 
                production-level applications using PHP and the Symfony framework.
              </p>
              <p>
                Actively involved across the full <span className="text-white font-medium">Software Development Life Cycle (SDLC)</span>, 
                including requirements analysis, system design, implementation, unit testing, 
                debugging, deployment support, and ongoing system maintenance.
              </p>
              <p>
                Technically proficient in developing modular, scalable backend systems, building 
                RESTful APIs, implementing MVC architecture, and integrating relational databases 
                using SQL. Experienced in applying object-oriented programming (OOP) principles, 
                clean code practices, and version control using Git in collaborative, Agile-based environments.
              </p>
              <p>
                Possesses a solid engineering foundation in computer systems architecture, operating 
                systems, networking fundamentals, and embedded systems, with practical exposure to 
                <span className="text-teal-400"> IoT solutions, PLC programming, microcontroller-based systems</span>, 
                and automation logic.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold mb-1">{item.label}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}