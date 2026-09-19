import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Layers, Cpu, TrendingUp, Filter } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Product Management',
    'Growth & Founder\'s Office',
    'AI & Analytics',
    'Case Strategy'
  ];

  const filteredProjects = activeCategory === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.categories.includes(activeCategory));

  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 light:text-emerald-700">
            Selected Works & Products
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-100 light:text-slate-900 mt-1">
            Featured Projects & Case Studies
          </h2>
        </div>
        <p className="text-sm text-slate-400 light:text-slate-600 max-w-md mt-2 md:mt-0">
          Click any project card to inspect the full product discovery teardown, user research, ML pipelines, and quantifiable outcomes.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        <div className="flex items-center gap-1.5 text-xs text-slate-500 mr-2">
          <Filter className="w-3.5 h-3.5" />
          <span>Filter:</span>
        </div>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
              activeCategory === cat
                ? 'bg-emerald-500 text-slate-950 font-semibold shadow-md shadow-emerald-500/20'
                : 'bg-slate-900/80 light:bg-slate-100 text-slate-400 light:text-slate-600 hover:text-slate-200 light:hover:text-slate-900 border border-slate-800 light:border-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group p-6 sm:p-7 rounded-2xl glass-card relative cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/5 flex flex-col justify-between"
          >
            <div>
              {/* Header tags */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 light:text-emerald-700 border border-emerald-500/30">
                    {project.badge}
                  </span>
                  <span className="text-xs text-slate-400 light:text-slate-500 font-medium">
                    {project.period}
                  </span>
                </div>
                
                <div className="w-8 h-8 rounded-full bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-300 flex items-center justify-center text-slate-400 group-hover:text-emerald-400 group-hover:border-emerald-500/30 group-hover:rotate-45 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Title & Organization */}
              <p className="text-xs font-semibold text-slate-400 light:text-slate-500 mb-1">
                {project.client}
              </p>
              <h3 className="text-xl font-bold font-display text-slate-100 light:text-slate-900 group-hover:text-emerald-400 light:group-hover:text-emerald-700 transition-colors mb-3 leading-snug">
                {project.title}
              </h3>

              <p className="text-sm text-slate-400 light:text-slate-600 mb-5 line-clamp-2 leading-relaxed">
                {project.summary}
              </p>

              {/* Key Metric Highlights */}
              <div className="grid grid-cols-2 gap-2 mb-5">
                {project.metrics.slice(0, 2).map((metric, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-slate-950/70 light:bg-slate-50 border border-slate-800/80 light:border-slate-200">
                    <span className="text-xs font-bold text-slate-200 light:text-slate-800 block truncate">
                      {metric}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom tags and CTA */}
            <div className="pt-4 border-t border-slate-800/80 light:border-slate-200 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {project.categories.slice(0, 2).map((cat, i) => (
                  <span key={i} className="text-[11px] text-slate-400 light:text-slate-500">
                    #{cat.replace(/\s+/g, '')}
                  </span>
                ))}
              </div>
              <span className="text-xs font-semibold text-emerald-400 light:text-emerald-700 flex items-center gap-1 group-hover:underline">
                View Case Study →
              </span>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
