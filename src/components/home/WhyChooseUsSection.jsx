import React from 'react';
import { instituteConfig } from '../../config/institute.config';
import { 
  Users, 
  Award, 
  FileCheck, 
  Clock, 
  BarChart3, 
  ShieldCheck, 
  CheckCircle,
  Sparkles
} from 'lucide-react';

export const WhyChooseUsSection = () => {
  const iconMap = {
    Users,
    Award,
    FileCheck,
    Clock,
    BarChart3,
    ShieldCheck,
  };

  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
            <span>The Academic Advantage</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            {instituteConfig.whyChooseUs.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {instituteConfig.whyChooseUs.description}
          </p>
        </div>

        {/* Features 6-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instituteConfig.whyChooseUs.features.map((feature, idx) => {
            const Icon = iconMap[feature.icon] || CheckCircle;

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-brand-primary/30 shadow-sm hover:shadow-card transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-brand-primary text-brand-accent group-hover:text-white border border-slate-200 shadow-sm flex items-center justify-center mb-5 transition-all duration-300">
                  <Icon className="w-6 h-6 transition-colors" />
                </div>

                <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-brand-primary transition-colors">
                  {feature.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* 5-Step Methodology Callout Bar */}
        <div className="mt-16 bg-gradient-to-r from-brand-primary via-slate-900 to-brand-primary text-white rounded-2xl p-8 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Our 5-Step Learning Loop
            </span>
            <h3 className="font-heading font-bold text-2xl text-white mt-1">
              From Fundamental NCERT to Advanced Problem Solving
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {instituteConfig.methodology.map((m) => (
              <div 
                key={m.step} 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/20 transition-colors"
              >
                <div className="text-2xl font-heading font-black text-brand-accent mb-1">
                  {m.step}
                </div>
                <div className="font-heading font-bold text-xs sm:text-sm text-white">
                  {m.title}
                </div>
                <div className="text-[11px] text-slate-300 mt-1 line-clamp-3">
                  {m.description}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;
