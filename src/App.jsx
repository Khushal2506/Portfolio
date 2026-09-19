import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactMetrics from './components/ImpactMetrics';
import Projects from './components/Projects';
import CaseStudyModal from './components/CaseStudyModal';
import Experience from './components/Experience';
import Skills from './components/Skills';
import LeadershipAndAchievements from './components/LeadershipAndAchievements';
import RecruiterSummaryModal from './components/RecruiterSummaryModal';
import ResumeModal from './components/ResumeModal';
import ContactFooter from './components/ContactFooter';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showRecruiterModal, setShowRecruiterModal] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-950 light:bg-slate-50 text-slate-100 light:text-slate-900 transition-colors duration-300">
      
      {/* Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenRecruiterModal={() => setShowRecruiterModal(true)}
        onOpenResumeModal={() => setShowResumeModal(true)}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenRecruiterModal={() => setShowRecruiterModal(true)}
          onOpenResumeModal={() => setShowResumeModal(true)}
        />

        {/* Impact Numbers Bar */}
        <ImpactMetrics />

        {/* Projects & Case Studies */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Experience Timeline */}
        <Experience />

        {/* Core Skills & Toolkit */}
        <Skills />

        {/* Leadership, PORs & Achievements */}
        <LeadershipAndAchievements />
      </main>

      {/* Contact & Placement Footer */}
      <ContactFooter
        onOpenRecruiterModal={() => setShowRecruiterModal(true)}
        onOpenResumeModal={() => setShowResumeModal(true)}
      />

      {/* Interactive Modals */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {showRecruiterModal && (
        <RecruiterSummaryModal
          onClose={() => setShowRecruiterModal(false)}
          onOpenResumeModal={() => {
            setShowRecruiterModal(false);
            setShowResumeModal(true);
          }}
        />
      )}

      {showResumeModal && (
        <ResumeModal onClose={() => setShowResumeModal(false)} />
      )}

    </div>
  );
}
