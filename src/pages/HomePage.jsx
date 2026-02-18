import React from 'react';
import Navbar from '@/components/portfolio/Navbar';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import EducationSection from '@/components/portfolio/EducationSection';
import CertificationsSection from '@/components/portfolio/CertificationsSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Chatbot from '@/components/portfolio/Chatbot';

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-white scroll-smooth">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
      <Chatbot />
    </div>
  );
}
