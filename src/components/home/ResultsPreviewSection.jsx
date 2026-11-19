import React from 'react';
import { Link } from 'react-router-dom';
import { instituteConfig } from '../../config/institute.config';
import { Trophy, Award, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

export const ResultsPreviewSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
              <Trophy className="w-3.5 h-3.5 text-brand-accent" />
              <span>Hall of Achievers</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Consistent Results That Speak for Themselves
            </h2>
            <p className="text-sm text-slate-600">
              Transforming effort into stellar competitive ranks across JEE, NEET, and Board Examinations year after year.
            </p>
          </div>

          <Link
            to="/results"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary hover:text-brand-accent transition-colors shrink-0"
          >
            <span>View Full Results & Campus Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Exam Highlights Banner 4-Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {instituteConfig.examHighlights.map((hl, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 hover:border-brand-accent/50 transition-colors"
            >
              <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-brand-accent/15 text-brand-accent uppercase tracking-wider mb-2">
                {hl.badge}
              </span>
              <div className="font-heading font-extrabold text-lg text-brand-primary">
                {hl.headline}
              </div>
              <div className="text-xs font-semibold text-slate-700 mt-1">
                {hl.exam}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                {hl.subline}
              </div>
            </div>
          ))}
        </div>

        {/* Toppers Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instituteConfig.toppers.map((topper, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col group"
            >
              {/* Topper Image with Score Overlay */}
              <div className="relative aspect-[4/4] overflow-hidden bg-slate-100">
                <img
                  src={topper.image}
                  alt={topper.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Score Pill */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-brand-accent text-white shadow-md">
                    {topper.scoreOrRank}
                  </span>
                  <span className="text-[10px] font-medium bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                    {topper.exam}
                  </span>
                </div>
              </div>

              {/* Topper Details */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-base text-slate-900">
                    {topper.name}
                  </h3>
                  <div className="text-xs text-brand-primary font-semibold mt-0.5">
                    {topper.collegeAllotted}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Course: {topper.course}
                  </div>
                </div>

                {topper.quote && (
                  <p className="mt-3 pt-2 border-t border-slate-100 text-[11px] italic text-slate-600 line-clamp-2">
                    "{topper.quote}"
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mandated Ethical Disclaimer Notice */}
        <div className="mt-8 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Ethical Practice Notice:</strong> {instituteConfig.resultsDisclaimer}
          </p>
        </div>

      </div>
    </section>
  );
};

export default ResultsPreviewSection;
