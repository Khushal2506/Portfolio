import React, { useEffect, useState } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  Mail, 
  Phone, 
  Linkedin, 
  FileText, 
  Copy, 
  Check, 
  ArrowRight,
  TrendingUp,
  Award,
  Zap,
  Target
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function RecruiterSummaryModal({ onClose, onOpenResumeModal }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const candidateFit = [
    {
      role: "Associate Product Manager / PM",
      fit: "Strong",
      proof: "Inter-IIT Tech Meet Bronze (Dream11 AI Strategy), WorkLens Enterprise RAG, Top 15% in Product Matters 5.0."
    },
    {
      role: "Founder's Office & Growth",
      fit: "Exceptional",
      proof: "Owned ops for The Integral Cup (800% MoM, ₹1Cr+ raised from Optiver/Jane Street), Clockit Hair D2C founder (76% margin)."
    },
    {
      role: "Strategy, Operations & BD",
      fit: "Proven",
      proof: "Estate Plus (450+ prospects in 8 cities), Snukio ($130B sports market sizing & 120+ VoC framework), 1st Rank Case Comp."
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 light:bg-white border border-slate-700/80 light:border-slate-300 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 animate-fade-in">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-800 light:border-slate-200 bg-slate-950/70 light:bg-slate-50 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400 light:text-emerald-700 border border-emerald-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-400 light:text-emerald-700 border border-emerald-500/20">
                  ⚡ HR & RECRUITER FAST-TRACK
                </span>
              </div>
              <h2 className="text-xl font-bold font-display text-slate-100 light:text-slate-900">
                30-Second Candidate Evaluation
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 light:bg-slate-100 hover:bg-slate-700 light:hover:bg-slate-200 text-slate-400 hover:text-slate-100 light:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-300 light:text-slate-700">
          
          {/* Overview Profile Card */}
          <div className="p-5 rounded-2xl bg-slate-950/60 light:bg-slate-50 border border-slate-800 light:border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <div>
                <h3 className="text-lg font-bold font-display text-slate-100 light:text-slate-900">
                  {portfolioData.personal.name}
                </h3>
                <p className="text-xs text-slate-400 light:text-slate-600">
                  {portfolioData.personal.degree} • <strong className="text-emerald-400 light:text-emerald-700">IIT Guwahati</strong>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 light:text-emerald-700 border border-emerald-500/30">
                  Open for Placements
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed">
              {portfolioData.personal.bio}
            </p>
          </div>

          {/* Core Strengths / Pillars */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-500 mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              Why Khushal is a Top-Decile Hire
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {portfolioData.elevatorPitch.pillars.map((pillar, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-950/40 light:bg-slate-50 border border-slate-800/80 light:border-slate-200">
                  <h5 className="text-xs font-bold text-slate-100 light:text-slate-900 mb-1.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    {pillar.title}
                  </h5>
                  <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Role Alignment Matrix */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-500 mb-3 flex items-center gap-2">
              <Target className="w-4 h-4 text-emerald-400" />
              Role Readiness & Proof Points
            </h4>
            <div className="space-y-2.5">
              {candidateFit.map((item, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-slate-950/50 light:bg-slate-50 border border-slate-800 light:border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold text-slate-200 light:text-slate-800">
                      {item.role}
                    </span>
                    <p className="text-xs text-slate-400 light:text-slate-600">
                      {item.proof}
                    </p>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-emerald-500/10 text-emerald-400 light:text-emerald-700 border border-emerald-500/20 self-start sm:self-center whitespace-nowrap">
                    {item.fit} Match
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Reach Out Action Bar */}
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-slate-100 light:text-slate-900">
                Ready to schedule an interview or conversation?
              </p>
              <p className="text-xs text-emerald-400 light:text-emerald-700">
                Direct lines: {portfolioData.personal.email} • {portfolioData.personal.phone}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-sm"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Email'}</span>
              </button>

              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="px-3 py-1.5 rounded-lg bg-slate-800 light:bg-white text-slate-200 light:text-slate-800 font-semibold text-xs border border-slate-700 light:border-slate-300 flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 light:border-slate-200 bg-slate-950/70 light:bg-slate-50 flex items-center justify-between">
          <button
            onClick={() => {
              onClose();
              if (onOpenResumeModal) onOpenResumeModal();
            }}
            className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 light:text-emerald-700 hover:underline"
          >
            <FileText className="w-4 h-4" />
            <span>Open Complete Printable CV →</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 light:bg-slate-200 text-slate-200 light:text-slate-800 font-semibold text-xs"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
