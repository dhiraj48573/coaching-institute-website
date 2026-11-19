import React from 'react';
import { Link } from 'react-router-dom';
import { instituteConfig } from '../../config/institute.config';
import BrochureButton from '../common/BrochureButton';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  GraduationCap, 
  PhoneCall, 
  ShieldCheck,
  CalendarCheck
} from 'lucide-react';

export const HeroSection = ({ onOpenEnquiry }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-brand-primary to-slate-900 text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Decorative background grid and blurs */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Admissions Open Announcement Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold backdrop-blur-sm text-brand-accent-soft">
              <Sparkles className="w-4 h-4 text-brand-accent" />
              <span>Admissions Open for 2025–26 Academic Batches</span>
            </div>

            {/* Main Headline (Mandated Text) */}
            <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15] text-white">
              BUILD YOUR FUTURE WITH THE{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 underline decoration-brand-accent/60 decoration-wavy decoration-2">
                RIGHT GUIDANCE.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              At <strong className="text-white">{instituteConfig.identity.name}</strong>, we empower ambitious students in {instituteConfig.contact.address.city} with disciplined classroom mentorship, top IITian & doctor faculty, and continuous testing to crack JEE, NEET, and Board examinations.
            </p>

            {/* Key Value Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs sm:text-sm text-slate-200 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Small Batches (Max 35 Students)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>IITian & Medical Specialist Faculty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Daily 1-on-1 Doubt Counters</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>2-Day Free Trial Demo Class</span>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              {/* Apply Now Button */}
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry(null, false)}
                className="px-6 py-3.5 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-accent/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <CalendarCheck className="w-5 h-5" />
                <span>Apply Now</span>
              </button>

              {/* Explore Courses Button */}
              <Link
                to="/courses"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm sm:text-base backdrop-blur-sm transition-all flex items-center gap-2"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Download Brochure Button */}
              <BrochureButton variant="white" size="lg" />
            </div>

            {/* Quick Admission Helpline */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <PhoneCall className="w-4 h-4 text-brand-accent" />
                <span>Talk to Admissions: <a href={`tel:${instituteConfig.contact.phone}`} className="font-semibold text-white hover:underline">{instituteConfig.contact.phone}</a></span>
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual with Real Photography & Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Classroom / Student Photography */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-slate-800 aspect-[4/3] sm:aspect-[5/4] group">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
                  alt="Coaching institute students collaborating and learning"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <div className="inline-block bg-brand-primary/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/20 mb-1">
                    Classroom Session @ {instituteConfig.contact.address.city} Campus
                  </div>
                  <p className="text-xs text-slate-200">
                    Interactive digital classrooms equipped with smart visual boards.
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Top Selections */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white text-slate-900 rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3 animate-in fade-in zoom-in duration-500">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  <GraduationCap className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">1,850+ Selections</div>
                  <div className="text-[10px] text-slate-500">In Premier IITs & Medical Seats*</div>
                </div>
              </div>

              {/* Floating Badge 2: Demo Class Free */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-brand-primary text-white rounded-2xl p-3.5 shadow-2xl border border-white/20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-accent text-white flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">2 Days Free Demo</div>
                  <div className="text-[10px] text-brand-accent-soft">Experience before you enrol</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
