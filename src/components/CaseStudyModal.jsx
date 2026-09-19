import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Sparkles, CheckCircle2, TrendingUp, Cpu, Users, Layers, Award } from 'lucide-react';

export default function CaseStudyModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

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

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 light:bg-white border border-slate-700/80 light:border-slate-300 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 animate-fade-in">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-800 light:border-slate-200 flex items-start justify-between bg-slate-950/50 light:bg-slate-50">
          <div className="pr-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 light:text-emerald-700 border border-emerald-500/30">
                {project.badge || 'Case Study'}
              </span>
              <span className="text-xs text-slate-400 light:text-slate-500 font-medium">
                {project.client} • {project.period}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-100 light:text-slate-900 leading-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 mt-1">
              Role: <strong className="text-slate-200 light:text-slate-800">{project.role}</strong>
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 light:bg-slate-100 hover:bg-slate-700 light:hover:bg-slate-200 text-slate-400 hover:text-slate-100 light:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 light:border-slate-200 px-6 bg-slate-900 light:bg-white overflow-x-auto no-scrollbar">
          {[
            { id: 'overview', label: 'Executive Summary', icon: Sparkles },
            { id: 'problem', label: 'Problem & Research', icon: Users },
            { id: 'solution', label: 'Solution & Architecture', icon: Layers },
            { id: 'impact', label: 'Impact & Results', icon: TrendingUp },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold whitespace-nowrap border-b-2 transition-all ${
                  activeTab === tab.id
                    ? 'border-emerald-400 text-emerald-400 light:border-emerald-600 light:text-emerald-700'
                    : 'border-transparent text-slate-400 light:text-slate-500 hover:text-slate-200 light:hover:text-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-300 light:text-slate-700 leading-relaxed">
          
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((metric, i) => (
              <div key={i} className="p-3 rounded-xl bg-slate-950/60 light:bg-slate-50 border border-slate-800 light:border-slate-200 text-center">
                <span className="text-xs font-semibold text-emerald-400 light:text-emerald-700 block mb-0.5">
                  KPI #{i + 1}
                </span>
                <span className="text-sm font-bold text-slate-100 light:text-slate-900">
                  {metric}
                </span>
              </div>
            ))}
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-base font-bold text-slate-100 light:text-slate-900 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  Project Overview
                </h3>
                <p className="text-slate-300 light:text-slate-600 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/50 light:bg-slate-50 border border-slate-800 light:border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-500 mb-2">
                  Key Value Proposition & Tagline
                </h4>
                <p className="text-slate-200 light:text-slate-800 font-medium">
                  "{project.tagline}"
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-500 mb-3">
                  Frameworks & Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {caseStudy?.stack?.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-700 light:border-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Problem & Research */}
          {activeTab === 'problem' && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-base font-bold text-slate-100 light:text-slate-900 mb-2">
                  1. The Friction & Problem Statement
                </h3>
                <p className="p-4 rounded-xl bg-red-500/5 border border-red-500/20 text-slate-200 light:text-slate-800">
                  {caseStudy?.problem}
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-100 light:text-slate-900 mb-2">
                  2. User Research & Discovery Insights
                </h3>
                <div className="p-4 rounded-xl bg-slate-950/50 light:bg-slate-50 border border-slate-800 light:border-slate-200">
                  <p className="text-slate-300 light:text-slate-600">
                    {caseStudy?.research}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Solution & Architecture */}
          {activeTab === 'solution' && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-base font-bold text-slate-100 light:text-slate-900 mb-2">
                Engineered Solution & Feature Execution
              </h3>
              <div className="space-y-3">
                {caseStudy?.solution?.map((step, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-slate-950/60 light:bg-slate-50 border border-slate-800 light:border-slate-200">
                    <div className="mt-0.5 p-1 rounded-full bg-emerald-500/10 text-emerald-400 light:text-emerald-700 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-slate-200 light:text-slate-800 font-medium">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: Impact & Results */}
          {activeTab === 'impact' && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-base font-bold text-slate-100 light:text-slate-900 mb-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-400" />
                Measurable Impact & Business Outcomes
              </h3>
              <div className="space-y-3">
                {caseStudy?.impact?.map((outcome, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                    <div className="mt-0.5 p-1 rounded-full bg-emerald-500/20 text-emerald-400 light:text-emerald-700 flex-shrink-0">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <p className="text-slate-200 light:text-slate-800 font-medium">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer CTA */}
        <div className="px-6 py-4 border-t border-slate-800 light:border-slate-200 bg-slate-950/70 light:bg-slate-50 flex items-center justify-between">
          <span className="text-xs text-slate-400 light:text-slate-500">
            Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">Esc</kbd> to close
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-colors"
          >
            Done Reading
          </button>
        </div>

      </div>
    </div>
  );
}
