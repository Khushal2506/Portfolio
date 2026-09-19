import React, { useState, useEffect } from 'react';
import { Sun, Moon, Briefcase, FileText, Menu, X, Sparkles, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ darkMode, setDarkMode, onOpenRecruiterModal, onOpenResumeModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Impact', href: '#impact' },
    { name: 'Projects & Case Studies', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Leadership & Honors', href: '#leadership' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 dark:bg-slate-950/85 light:bg-white/85 backdrop-blur-md border-b border-slate-800/80 light:border-slate-200 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white font-bold font-display shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            KR
          </div>
          <div>
            <span className="font-display font-bold text-lg text-slate-100 light:text-slate-900 tracking-tight flex items-center gap-2">
              {portfolioData.personal.name}
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 light:text-emerald-700 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
                IIT Guwahati
              </span>
            </span>
            <p className="text-xs text-slate-400 light:text-slate-500 hidden md:block">
              Product & Founder's Office
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 light:text-slate-600 hover:text-emerald-400 light:hover:text-emerald-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* 30s HR Snapshot Trigger */}
          <button
            onClick={onOpenRecruiterModal}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 light:text-emerald-700 border border-emerald-500/30 transition-all hover:scale-105 shadow-sm"
            title="Fast 30-second summary for hiring managers"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>30s Recruiter View</span>
          </button>

          {/* Resume View */}
          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 light:bg-slate-100 light:hover:bg-slate-200 text-slate-200 light:text-slate-800 border border-slate-700 light:border-slate-300 transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* Dark / Light Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-100 light:text-slate-600 light:hover:text-slate-900 bg-slate-900/80 light:bg-slate-100 border border-slate-800 light:border-slate-300 transition-colors"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg text-slate-400 light:text-slate-600 bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-300"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 light:text-slate-700 bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-300"
            aria-label="Open Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-slate-950 light:bg-white border-b border-slate-800 light:border-slate-200 mt-2 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800 light:border-slate-200">
            <button
              onClick={() => {
                onOpenRecruiterModal();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-emerald-500/15 text-emerald-400 light:text-emerald-700 border border-emerald-500/30"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>30s HR View</span>
            </button>

            <button
              onClick={() => {
                onOpenResumeModal();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-slate-800 light:bg-slate-100 text-slate-200 light:text-slate-800 border border-slate-700 light:border-slate-300"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </button>
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 light:text-slate-700 hover:bg-slate-850 light:hover:bg-slate-100"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
