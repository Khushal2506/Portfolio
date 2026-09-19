import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  Users, 
  Trophy, 
  Heart, 
  Star, 
  Activity, 
  CheckCircle,
  Building2,
  Medal
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function LeadershipAndAchievements() {
  const [activeView, setActiveView] = useState('all'); // 'all', 'pors', 'awards'

  const getAchievementIcon = (iconName) => {
    switch (iconName) {
      case 'Award': return <Award className="w-5 h-5 text-amber-400" />;
      case 'Trophy': return <Trophy className="w-5 h-5 text-emerald-400" />;
      case 'CheckCircle': return <CheckCircle className="w-5 h-5 text-teal-400" />;
      case 'Star': return <Star className="w-5 h-5 text-yellow-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-cyan-400" />;
      case 'Shield': return <Medal className="w-5 h-5 text-emerald-400" />;
      case 'Heart': return <Heart className="w-5 h-5 text-rose-400" />;
      default: return <Award className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="leadership" className="py-20 bg-slate-900/30 light:bg-slate-50/50 border-t border-slate-800/80 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 light:text-emerald-700">
              Beyond Academics
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-100 light:text-slate-900 mt-1">
              Leadership, Honors & Social Impact
            </h2>
          </div>
          
          {/* Quick toggle */}
          <div className="flex items-center gap-2 mt-4 md:mt-0 p-1 rounded-xl bg-slate-950 light:bg-slate-200 border border-slate-800 light:border-slate-300">
            {[
              { id: 'all', label: 'All' },
              { id: 'pors', label: 'Positions of Responsibility' },
              { id: 'awards', label: 'Awards & Sports' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveView(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeView === tab.id
                    ? 'bg-slate-800 light:bg-white text-slate-100 light:text-slate-900 shadow-sm'
                    : 'text-slate-400 light:text-slate-600 hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          
          {/* 1. Positions of Responsibility */}
          {(activeView === 'all' || activeView === 'pors') && (
            <div>
              <h3 className="text-lg font-bold font-display text-slate-100 light:text-slate-900 mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-emerald-400" />
                Positions of Responsibility
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {portfolioData.positionsOfResponsibility.map((por, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl glass-card border border-slate-800 light:border-slate-200 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-semibold text-emerald-400 light:text-emerald-700 block mb-1">
                        {por.period}
                      </span>
                      <h4 className="text-base font-bold text-slate-100 light:text-slate-900 mb-1">
                        {por.title}
                      </h4>
                      <p className="text-xs font-semibold text-slate-400 light:text-slate-500 mb-3">
                        {por.organization}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                        {por.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800/80 light:border-slate-200">
                      <span className="text-[11px] font-semibold text-slate-400 light:text-slate-500 bg-slate-950/60 light:bg-slate-100 px-2.5 py-1 rounded-md border border-slate-800/60 light:border-slate-200">
                        {por.stats}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. Honors, Awards & Extracurriculars */}
          {(activeView === 'all' || activeView === 'awards') && (
            <div>
              <h3 className="text-lg font-bold font-display text-slate-100 light:text-slate-900 mb-6 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-400" />
                Achievements & Key Milestones
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {portfolioData.achievements.map((item, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-slate-950/60 light:bg-white border border-slate-800 light:border-slate-200 flex items-start gap-4 transition-all hover:border-slate-700 light:hover:border-slate-300"
                  >
                    <div className="p-2.5 rounded-xl bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-200 flex-shrink-0 mt-0.5">
                      {getAchievementIcon(item.icon)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-100 light:text-slate-900 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[11px] font-semibold text-emerald-400 light:text-emerald-700 my-0.5">
                        {item.issuer}
                      </p>
                      <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed mt-1">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
