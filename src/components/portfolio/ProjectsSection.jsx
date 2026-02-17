import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplets, CreditCard, Sun, Home, UserCheck, ExternalLink, Github, ArrowRight } from 'lucide-react';

export default function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const projects = [
    {
      title: 'Smart Irrigation System',
      description: 'Designed and implemented an automated irrigation system using sensors and a microcontroller to monitor soil moisture and control water flow. Optimizes water usage by activating irrigation only when required.',
      icon: Droplets,
      tags: ['Microcontroller', 'Sensors', 'Automation', 'IoT'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'RFID Student Registration',
      description: 'Developed an RFID-based system to register and track student attendance. Reads RFID cards, records data into a database, and allows administrators to view attendance records.',
      icon: UserCheck,
      tags: ['RFID', 'Database', 'Embedded Systems', 'C++'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Banking Application',
      description: 'Built a desktop banking application using Embarcadero C++. Supports user account creation, secure login, balance management, deposits, withdrawals, and transaction history.',
      icon: CreditCard,
      tags: ['C++', 'Desktop App', 'Security', 'Database'],
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Automated Solar Tracking',
      description: 'Created an automated solar tracking system using a microcontroller and light sensors to adjust the solar panel\'s position, maximizing energy capture throughout the day.',
      icon: Sun,
      tags: ['Solar', 'Automation', 'Sensors', 'Renewable Energy'],
      gradient: 'from-orange-500 to-yellow-500',
    },
    {
      title: 'Smart Home Control System',
      description: 'Developed a smart home system using ESP32 microcontroller to control household devices wirelessly. Allows remote switching of lights and appliances with real-time control.',
      icon: Home,
      tags: ['ESP32', 'IoT', 'Wireless', 'Automation'],
      gradient: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section id="projects" className="py-32 relative">
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
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in embedded systems, IoT, and software development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${project.gradient} opacity-50 blur-xl`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
              
              <div className="relative h-full p-6 rounded-2xl bg-slate-900/80 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                {/* Animated gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <motion.div 
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-5 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <project.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-teal-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-medium group-hover:border-white/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.div 
                    className="flex items-center gap-2 text-cyan-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 5 }}
                  >
                    View Details <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}