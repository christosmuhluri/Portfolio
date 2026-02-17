import React from 'react';
import { motion } from 'framer-motion';
import { Award, Cloud, Network, Code } from 'lucide-react';

export default function CertificationsSection() {
  const certifications = [
    {
      title: 'Huawei Data Link Layer Network Technology',
      issuer: 'Huawei',
      type: 'Micro Certificate',
      icon: Network,
      color: 'from-red-500 to-orange-500',
    },
    {
      title: 'Huawei Cloud Service Computing',
      issuer: 'Huawei',
      type: 'Micro Certificate',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Introduction to C++',
      issuer: 'Sololearn',
      type: 'Certificate',
      icon: Code,
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section id="certifications" className="py-32 relative">
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
            Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Certifications
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 text-center">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon className="w-8 h-8 text-white" />
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 text-slate-400 text-xs mb-4">
                  <Award className="w-3 h-3" />
                  {cert.type}
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                  {cert.title}
                </h3>

                <p className="text-slate-500 text-sm">
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}