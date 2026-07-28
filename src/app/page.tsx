'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ShowreelSection from '@/components/ShowreelSection';
import ProjectGallery from '@/components/ProjectGallery';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import TestimonialsBlogSection from '@/components/TestimonialsBlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ShowreelModal from '@/components/3d/ShowreelModal';
import { Project } from '@/lib/types';
import {
  initialProjects,
  initialSkills,
  experienceTimeline,
  initialTestimonials,
  initialBlogPosts,
} from '@/lib/data';

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <main style={{ position: 'relative', zIndex: 1 }}>
      {/* Floating Obsidian Glass Navbar */}
      <Navbar />

      {/* Hero Intro with Interactive Ambient Canvas & Stats */}
      <Hero />

      {/* Flagship Enterprise Case Studies Segment */}
      <ShowreelSection
        featuredProjects={initialProjects}
        onSelectProject={handleOpenModal}
      />

      {/* Comprehensive Filterable Project Gallery */}
      <ProjectGallery
        projects={initialProjects}
        onSelectProject={handleOpenModal}
      />

      {/* Technical Skills & Competencies Matrix */}
      <SkillsSection skills={initialSkills} />

      {/* Interactive Experience & CV Timeline */}
      <ExperienceSection experience={experienceTimeline} />

      {/* Testimonials & Technical Blog */}
      <TestimonialsBlogSection
        testimonials={initialTestimonials}
        blogPosts={initialBlogPosts}
      />

      {/* Contact Section with Live API Form & Direct Details */}
      <ContactSection />

      {/* Dark Footer */}
      <Footer />

      {/* Interactive Enterprise Case Study Modal */}
      {selectedProject && (
        <ShowreelModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </main>
  );
}
