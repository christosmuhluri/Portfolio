import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';

export default function EducationSection() {
  const subjects = [
    'Object-Oriented Design',
    'Algorithm Design',
    'Data Structures',
    'Problem Solving',
    'Complexity Analysis',
    'Software Engineering',
    'Artificial Intelligence',
    'Networking Systems',
    'Databases (SQL)',
    'Operating Systems',
  ];

  const highlights = [
    'Gained hands-on experience in programming languages such as C/C++ and Python to develop practical and scalable software solutions',
    'Developed strong analytical and problem-solving skills, optimizing algorithms and designing efficient, real-world system solutions',
  ];

  return (
    <section id="education" className="py-32 relative">
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
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 self-start">
                <GraduationCap className="w-10 h-10 text-cyan-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Diploma in Computer System Engineering
                </h3>
                <p className="text-cyan-400 font-medium text-lg mb-4">
                  Tshwane University of Technology
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Feb 2022 – Jun 2026
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Pretoria, South Africa
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                Key Subjects
              </h4>
              <div className="flex flex-wrap gap-2">
                {subjects.map((subject, index) => (
                  <motion.span
                    key={subject}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    className="px-4 py-2 rounded-lg bg-slate-800/50 text-slate-300 text-sm"
                  >
                    {subject}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <h4 className="text-white font-semibold mb-4">Highlights</h4>
              <ul className="space-y-3">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-400">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}