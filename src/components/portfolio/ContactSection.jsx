import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'christosmuhluriey222@gmail.com',
      href: 'mailto:christosmuhluriey222@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+27 81 338 5218',
      href: 'tel:+27813385218',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Winnie Mandela, Tembisa',
      href: null,
    },
  ];

  const socials = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/christosmuhluri',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/christos-muhluri-mashele',
    },
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20">
                      <item.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-4 pt-4"
            >
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  <span className="text-slate-300 group-hover:text-white transition-colors">{social.label}</span>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <div className="w-full p-8 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/30">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Ready to Connect?
                </h3>
                <p className="text-slate-400 mb-6">
                  I'm excited to discuss opportunities and collaborate on innovative projects.
                </p>
                <a
                  href="mailto:christosmuhluriey222@gmail.com"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  <Mail className="w-5 h-5" />
                  Send an Email
                </a>
                <p className="text-slate-500 text-sm mt-6">
                  References available upon request
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-20 pt-10 border-t border-white/10"
        >
          <p className="text-slate-500 text-sm">
            © 2026 Christos Muhluri Mashele. Built with passion.
          </p>
        </motion.div>
      </div>
    </section>
  );
}