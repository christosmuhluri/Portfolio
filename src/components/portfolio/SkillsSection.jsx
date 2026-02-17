import React from 'react';
import { motion } from 'framer-motion';

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = React.useState(null);
  
  const technicalSkills = [
    { name: 'PHP (Symfony)', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML5 & CSS3', level: 90 },
    { name: 'SQL (PostgreSQL, MS SQL)', level: 85 },
    { name: 'Object-Oriented Programming', level: 88 },
    { name: 'Git Version Control', level: 85 },
    { name: 'RESTful APIs', level: 82 },
    { name: 'Twig & Vite', level: 80 },
    { name: 'Embedded Systems', level: 75 },
    { name: 'IoT & Arduino', level: 78 },
  ];

  const softSkills = [
    'Problem Solving',
    'Fast Learner',
    'Team Collaboration',
    'Clear Communication',
    'Attention to Detail',
    'Time Management',
    'Work Under Pressure',
    'Analytical Thinking',
    'Self-Motivated',
    'Strong Work Ethic',
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="absolute inset-0 bg-slate-950" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4 block">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 rounded" />
              Technical Skills
            </h3>
            <div className="space-y-5">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="group cursor-pointer"
                >
                  <div className="flex justify-between mb-2">
                    <span className={`font-medium transition-colors ${hoveredSkill === skill.name ? 'text-cyan-400' : 'text-slate-300'}`}>
                      {skill.name}
                    </span>
                    <motion.span 
                      className="text-slate-500 text-sm"
                      animate={{ scale: hoveredSkill === skill.name ? 1.1 : 1 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  <div className="h-2.5 bg-slate-800/50 rounded-full overflow-hidden border border-slate-700/50">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 rounded-full relative"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.05 }}
                    >
                      <motion.div 
                        className="absolute inset-0 bg-white/20"
                        animate={{ 
                          x: hoveredSkill === skill.name ? ['0%', '100%'] : '0%',
                        }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-gradient-to-r from-teal-400 to-emerald-400 rounded" />
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:border-teal-500/50 hover:bg-white/10 transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Additional Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/20"
            >
              <h4 className="text-white font-semibold mb-3">Additional Expertise</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  Database design and query optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  Backend & frontend integration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  Software Development Life Cycle (SDLC)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  Basic networking concepts
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  PLC programming & VHDL
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}