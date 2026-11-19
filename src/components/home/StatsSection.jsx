import React from 'react';
import { instituteConfig } from '../../config/institute.config';
import { Users, Award, BookOpen, Trophy, Info } from 'lucide-react';

export const StatsSection = () => {
  const iconMap = {
    students: Users,
    experience: Award,
    courses: BookOpen,
    selections: Trophy,
  };

  return (
    <section className="relative -mt-10 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-card border border-slate-100 p-6 sm:p-8">
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {instituteConfig.stats.map((stat, idx) => {
            const Icon = iconMap[stat.id] || Award;
            return (
              <div 
                key={stat.id} 
                className={`flex flex-col items-center text-center px-4 ${idx > 0 ? 'pt-4 sm:pt-0' : ''}`}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-primary/5 text-brand-accent flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-brand-primary tracking-tight">
                  {stat.value}
                </div>
                <div className="font-heading font-bold text-xs sm:text-sm text-slate-800 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>

        {/* Ethical Transparency Disclaimer */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center">
          <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span>
            Note: Figures shown above are template demonstration placeholders. Customize with your verified records in <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-600">institute.config.js</code>.
          </span>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
