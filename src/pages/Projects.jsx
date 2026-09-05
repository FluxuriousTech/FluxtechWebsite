import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import ProjectsHero from '../components/Projects/ProjectsHero.jsx';
import ProjectsContent from '../components/Projects/ProjectsContent.jsx';
import SEOHead from '../components/SEOHead.jsx';

const Projects = () => {
  return (
    <main className="home-container">
      <SEOHead
        title="Our Projects — Web & Mobile App Portfolio"
        description="Explore our portfolio of custom websites, mobile apps, and backend systems. Real case studies showcasing modern design and engineering excellence."
        canonicalPath="/projects"
      />
      <Navbar />
      <div className="projects-container">
        <ProjectsHero />
        <ProjectsContent />
      </div>
      <Footer />
    </main>
  );
};

export default Projects;
