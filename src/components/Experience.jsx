import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-900/30 light:bg-slate-50/50 border-t border-slate-800/80 light:border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 light:text-emerald-700">
            Work Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-100 light:text-slate-900 mt-1">
            Execution & Roles
          </h2>
          <p className="text-sm text-slate-400 light:text-slate-600 mt-2">
            Proven execution across Founder's Office, Business Development, Market Sizing, and Growth.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-slate-800 light:border-slate-300 ml-4 md:ml-32 space-y-12">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="relative pl-8 sm:pl-10 group">
              
              {/* Dot Icon on line */}
              <div className="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-slate-950 light:bg-white border-2 border-emerald-500 flex items-center justify-center shadow-md">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              </div>

              {/* Date tag on desktop (floating left) */}
              <div className="md:absolute md:-left-44 md:top-2 md:w-36 md:text-right hidden md:block">
                <span className="text-xs font-semibold text-slate-400 light:text-slate-500">
                  {exp.period}
                </span>
                <p className="text-[11px] text-emerald-400 light:text-emerald-700 font-medium">
                  {exp.type}
                </p>
              </div>

              {/* Card */}
              <div className="p-6 sm:p-7 rounded-2xl glass-card border border-slate-800 light:border-slate-200 transition-all hover:border-slate-700 light:hover:border-slate-300">
                
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-slate-100 light:text-slate-900">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-emerald-400 light:text-emerald-700">
                      {exp.company}
                    </p>
                  </div>

                  <div className="md:hidden flex flex-col items-end">
                    <span className="text-xs text-slate-400 light:text-slate-500 font-medium">
                      {exp.period}
                    </span>
                    <span className="text-[11px] text-emerald-400 light:text-emerald-700 font-medium">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 my-4">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300 light:text-slate-700 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 light:text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800/60 light:border-slate-200">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-900/90 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-800 light:border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
