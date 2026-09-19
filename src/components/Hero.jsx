import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Download, 
  Mail, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  Phone, 
  ExternalLink,
  MapPin,
  GraduationCap
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenRecruiterModal, onOpenResumeModal }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 dark:bg-emerald-500/10 light:bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-teal-500/5 blur-[90px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 light:bg-slate-100 border border-slate-800 light:border-slate-300 text-xs font-medium text-slate-300 light:text-slate-700 mb-6 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{portfolioData.personal.availability}</span>
            <span className="text-slate-600 light:text-slate-400">•</span>
            <span className="text-emerald-400 light:text-emerald-700 font-semibold">IIT Guwahati '27</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100 light:text-slate-900 leading-[1.1] mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">{portfolioData.personal.name}</span>.
            <br />
            <span className="text-slate-300 light:text-slate-800 text-3xl sm:text-5xl lg:text-6xl font-bold">
              Building Products with Data, AI & High Velocity.
            </span>
          </h1>

          {/* Subtitle / Positioning */}
          <p className="text-lg sm:text-xl text-slate-400 light:text-slate-600 max-w-3xl mb-8 leading-relaxed">
            Final-year/Pre-final undergraduate at <strong className="text-slate-200 light:text-slate-800">IIT Guwahati</strong>. Experienced in <span className="text-emerald-400 light:text-emerald-700 font-medium">Product Discovery</span>, <span className="text-emerald-400 light:text-emerald-700 font-medium">0-to-1 Operations</span>, and <span className="text-emerald-400 light:text-emerald-700 font-medium">AI Strategy</span>. Inter-IIT Tech Meet Bronze Medalist & Founder's Office Operator.
          </p>

          {/* CTA Group */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10 w-full">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/25 transition-all hover:scale-105 active:scale-95"
            >
              <span>Explore Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenRecruiterModal}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 light:bg-slate-100 light:hover:bg-slate-200 text-slate-100 light:text-slate-900 border border-slate-700 light:border-slate-300 font-semibold text-sm flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>30-Second Recruiter Pitch</span>
            </button>

            <button
              onClick={onOpenResumeModal}
              className="px-5 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 light:bg-white light:hover:bg-slate-50 text-slate-300 light:text-slate-700 border border-slate-800 light:border-slate-300 font-medium text-sm flex items-center gap-2 transition-all hover:border-slate-600"
            >
              <Download className="w-4 h-4" />
              <span>View CV</span>
            </button>
          </div>

          {/* Social / Direct Contacts Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-slate-800/80 light:border-slate-200 w-full max-w-2xl">
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/70 light:bg-slate-100 hover:bg-slate-800 light:hover:bg-slate-200 border border-slate-800 light:border-slate-300 text-xs text-slate-300 light:text-slate-700 transition-colors"
              title="Click to copy email"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>{portfolioData.personal.email}</span>
              {copied ? (
                <span className="flex items-center gap-1 text-emerald-400 font-semibold text-[11px] bg-emerald-500/10 px-1.5 py-0.5 rounded">
                  <Check className="w-3 h-3" /> Copied
                </span>
              ) : (
                <Copy className="w-3 h-3 text-slate-500" />
              )}
            </button>

            <a
              href={`tel:${portfolioData.personal.phone}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/70 light:bg-slate-100 hover:bg-slate-800 light:hover:bg-slate-200 border border-slate-800 light:border-slate-300 text-xs text-slate-300 light:text-slate-700 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>{portfolioData.personal.phone}</span>
            </a>

            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/70 light:bg-slate-100 hover:bg-slate-800 light:hover:bg-slate-200 border border-slate-800 light:border-slate-300 text-xs text-slate-300 light:text-slate-700 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-400" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/70 light:bg-slate-100 hover:bg-slate-800 light:hover:bg-slate-200 border border-slate-800 light:border-slate-300 text-xs text-slate-300 light:text-slate-700 transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-slate-300 light:text-slate-700" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
