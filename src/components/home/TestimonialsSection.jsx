import React from 'react';
import { instituteConfig } from '../../config/institute.config';
import { Star, MessageSquareQuote, ShieldCheck } from 'lucide-react';

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
            <MessageSquareQuote className="w-3.5 h-3.5 text-brand-accent" />
            <span>Voices of Trust</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            What Students & Parents Say
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Hear from families whose educational journeys were shaped by our faculty's commitment to academic rigor and empathetic mentoring.
          </p>
        </div>

        {/* Testimonials 3-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instituteConfig.testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 shadow-card border border-slate-200/80 flex flex-col justify-between relative group hover:border-brand-primary/30 transition-all duration-300"
            >
              {/* Demo Badge */}
              {t.isSampleDemo && (
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] font-semibold bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full">
                    Demo Feedback
                  </span>
                </div>
              )}

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{t.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200 shadow-sm"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-heading font-bold text-sm text-slate-900">
                    {t.author}
                  </h4>
                  <div className="text-[11px] text-slate-500">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-8 text-center text-xs text-slate-400 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>Testimonials shown are demo placeholders. Replace with verified client reviews before going live.</span>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
