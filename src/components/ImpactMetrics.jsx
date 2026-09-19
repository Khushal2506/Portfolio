import React from 'react';
import { TrendingUp, Award, ShieldCheck, DollarSign, Users, Trophy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ImpactMetrics() {
  const getIcon = (label) => {
    if (label.includes("Sponsorships")) return <DollarSign className="w-5 h-5 text-emerald-400" />;
    if (label.includes("Growth")) return <TrendingUp className="w-5 h-5 text-teal-400" />;
    if (label.includes("Inter-IIT")) return <Award className="w-5 h-5 text-amber-400" />;
    if (label.includes("Gross Margin")) return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
    if (label.includes("Case")) return <Trophy className="w-5 h-5 text-emerald-400" />;
    return <Users className="w-5 h-5 text-indigo-400" />;
  };

  return (
    <section id="impact" className="py-16 bg-slate-900/40 light:bg-slate-50/70 border-y border-slate-800/80 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 light:text-emerald-700">
              Proven Track Record
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-100 light:text-slate-900 mt-1">
              Impact by the Numbers
            </h2>
          </div>
          <p className="text-sm text-slate-400 light:text-slate-600 max-w-md mt-2 md:mt-0">
            Measurable results across product strategy, founder's office, revenue generation, and leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolioData.impactMetrics.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl glass-card relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 ${
                item.highlight ? 'border-emerald-500/25 bg-emerald-950/10' : ''
              }`}
            >
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-200">
                  {getIcon(item.label)}
                </div>
                {item.highlight && (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 light:text-emerald-700 border border-emerald-500/30">
                    High Impact
                  </span>
                )}
              </div>

              <div className="font-display text-3xl sm:text-4xl font-extrabold text-slate-100 light:text-slate-900 tracking-tight mb-2 bg-gradient-to-r from-slate-100 to-slate-300 light:from-slate-900 light:to-slate-700 bg-clip-text">
                {item.metric}
              </div>

              <h3 className="text-base font-semibold text-slate-200 light:text-slate-800 mb-1">
                {item.label}
              </h3>

              <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed">
                {item.subtext}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
