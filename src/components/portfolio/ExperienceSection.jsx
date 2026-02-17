import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';

export default function ExperienceSection() {
  const responsibilities = [
    'Actively involved in designing and developing live production systems, contributing to both planning and implementation phases',
    'Backend development using PHP and the Symfony framework, building controllers, services, and business logic',
    'Design, manage, and interact with relational databases (PostgreSQL and MS SQL)',
    'Develop front-end interfaces using HTML, CSS, JavaScript, Twig templates, and Vite',
    'Integrate front-end components with backend APIs to ensure smooth data flow',
    'Perform testing, debugging, and issue resolution on live systems',
    'Building Symfony bundles and configuring forms/workflows for client demos',
    'Building bundles for online TAS (Town Application System) for CoJ',
    'Document CRM systems and draw architecture diagrams',
    'Compare different CRM platforms for debt collection management solutions',
    'Use Git to commit, pull and push to/from Bitbucket repository',
  ];

  return (
    <section id="experience" className="py-32 relative">
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
            Career
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work Experience
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-teal-500 to-transparent" />

          <div className="relative pl-8 md:pl-0 md:pr-0">
            <div className="md:w-1/2 md:pr-12">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-cyan-500 rounded-full -translate-x-1.5 md:-translate-x-1.5 ring-4 ring-slate-950" />
              
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20">
                    <Briefcase className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Full Stack Developer Intern</h3>
                    <p className="text-cyan-400 font-medium">Mfundo Pedia</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-6 text-sm">
                  <span className="flex items-center gap-2 text-slate-400">
                    <Calendar className="w-4 h-4" />
                    Aug 2025 – Present
                  </span>
                  <span className="flex items-center gap-2 text-slate-400">
                    <MapPin className="w-4 h-4" />
                    Sandton, South Africa
                  </span>
                </div>

                <div className="space-y-3">
                  {responsibilities.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                      className="flex items-start gap-3 text-slate-400 text-sm"
                    >
                      <ChevronRight className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/10">
                  {['PHP', 'Symfony', 'PostgreSQL', 'MS SQL', 'JavaScript', 'Twig', 'Vite', 'Git'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}