import React from 'react';
import { Layers, BarChart3, Code2, BookOpen, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 light:text-emerald-700">
          Core Competencies
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-100 light:text-slate-900 mt-1">
          Skills & Toolkit
        </h2>
        <p className="text-sm text-slate-400 light:text-slate-600 mt-2">
          Multidisciplinary skill set spanning product thinking, data analytics, business strategy, and rapid prototyping.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Product Management */}
        <div className="p-6 sm:p-7 rounded-2xl glass-card flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 light:text-emerald-700 border border-emerald-500/20">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-slate-100 light:text-slate-900">
                  Product Management
                </h3>
                <p className="text-xs text-slate-400 light:text-slate-500">
                  Strategy, UX & Discovery
                </p>
              </div>
            </div>

            <div className="space-y-2.5">
              {portfolioData.skills.product.map((skill, i) => (
                <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/50 light:bg-slate-50 border border-slate-800/80 light:border-slate-200">
                  <span className="text-xs font-medium text-slate-200 light:text-slate-800">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 light:text-emerald-700 border border-emerald-500/20">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Business & Analytical */}
        <div className="p-6 sm:p-7 rounded-2xl glass-card flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 light:text-teal-700 border border-teal-500/20">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-slate-100 light:text-slate-900">
                  Business & Strategy
                </h3>
                <p className="text-xs text-slate-400 light:text-slate-500">
                  Growth, GTM & Economics
                </p>
              </div>
            </div>

            <div className="space-y-2.5">
              {portfolioData.skills.business.map((skill, i) => (
                <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/50 light:bg-slate-50 border border-slate-800/80 light:border-slate-200">
                  <span className="text-xs font-medium text-slate-200 light:text-slate-800">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-400 light:text-teal-700 border border-teal-500/20">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack & Tools */}
        <div className="p-6 sm:p-7 rounded-2xl glass-card flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 light:text-cyan-700 border border-cyan-500/20">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-slate-100 light:text-slate-900">
                  Tech Stack & Data
                </h3>
                <p className="text-xs text-slate-400 light:text-slate-500">
                  Analytics, SQL & Design
                </p>
              </div>
            </div>

            <div className="space-y-2.5">
              {portfolioData.skills.technical.map((skill, i) => (
                <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/50 light:bg-slate-50 border border-slate-800/80 light:border-slate-200">
                  <span className="text-xs font-medium text-slate-200 light:text-slate-800">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 light:text-cyan-700 border border-cyan-500/20">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Relevant Courses Bar */}
      <div className="mt-8 p-6 rounded-2xl bg-slate-900/60 light:bg-slate-50 border border-slate-800 light:border-slate-200">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-emerald-400 light:text-emerald-600 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-slate-100 light:text-slate-900">
                Key Academic & Specialized Coursework
              </h4>
              <p className="text-xs text-slate-400 light:text-slate-500">
                Formal training in Product Strategy, Machine Learning, and Computer Vision at IIT Guwahati.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {portfolioData.skills.courses.map((course, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-950 light:bg-white text-emerald-400 light:text-emerald-700 border border-slate-800 light:border-slate-300"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
