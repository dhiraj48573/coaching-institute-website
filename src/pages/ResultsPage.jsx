import React, { useState } from 'react';
import SEOHead from '../components/common/SEOHead';
import { instituteConfig } from '../config/institute.config';
import { getWhatsAppLink } from '../utils/whatsapp';
import { 
  Trophy, 
  Award, 
  GraduationCap, 
  Sparkles, 
  ShieldAlert, 
  Filter, 
  MessageCircle, 
  CalendarCheck,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export const ResultsPage = ({ onOpenEnquiry }) => {
  const [galleryFilter, setGalleryFilter] = useState('all');

  const galleryCategories = [
    { id: 'all', label: 'All Photos' },
    { id: 'classrooms', label: 'Classrooms & Studies' },
    { id: 'labs', label: 'Labs & CBT Terminals' },
    { id: 'library', label: 'Reading Rooms' },
    { id: 'events', label: 'Seminars & Felicitation' },
  ];

  const filteredGallery = instituteConfig.gallery.filter((item) => {
    if (galleryFilter === 'all') return true;
    return item.category === galleryFilter;
  });

  const whatsappUrl = getWhatsAppLink(instituteConfig.whatsappTemplates.general);

  return (
    <>
      <SEOHead
        title="Results & Campus Gallery"
        description={`Discover student achievements, exam-wise selections, toppers, and campus life gallery at ${instituteConfig.identity.name} in ${instituteConfig.contact.address.city}.`}
        path="/results"
      />

      <main className="bg-slate-50 min-h-screen pb-20">
        
        {/* 1. Header Banner */}
        <section className="bg-brand-primary text-white py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider mb-3">
              Proven Track Record of Ranks
            </span>
            <h1 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
              Results & Campus Photo Gallery
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
              Celebrating our students' dedication, exemplary board & competitive results, and dynamic campus environment in {instituteConfig.contact.address.city}.
            </p>
          </div>
        </section>

        {/* 2. Mandatory Ethical Transparency Notice */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
          <div className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 shadow-md text-xs text-amber-950 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-sm font-bold text-amber-900 mb-0.5">
                Ethical Demonstration Notice:
              </strong>
              <span>
                {instituteConfig.resultsDisclaimer}
              </span>
            </div>
          </div>
        </section>

        {/* 3. Exam-Wise Selection Highlights */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
              Year-on-Year Growth
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
              Exam-Wise Qualification Overview
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {instituteConfig.examHighlights.map((hl, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-card hover:border-brand-primary/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-brand-primary/10 text-brand-primary uppercase tracking-wider">
                    {hl.badge}
                  </span>
                  <div className="font-heading font-black text-xl text-brand-primary mt-3">
                    {hl.headline}
                  </div>
                  <div className="text-xs font-bold text-slate-800 mt-1">
                    {hl.exam}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {hl.subline}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-emerald-600 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Classroom Cohort</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Top Achievers & Rankers */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                Student Testimonies
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
                Toppers & Meritorious Students
              </h2>
            </div>
            <span className="text-xs text-slate-500 italic">
              * Sample student records for demonstration
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {instituteConfig.toppers.map((topper, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Photo & Badge */}
                <div className="relative aspect-square overflow-hidden bg-slate-100">
                  <img
                    src={topper.image}
                    alt={topper.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-xs font-black px-2.5 py-1 rounded bg-brand-accent text-white shadow-md">
                      {topper.scoreOrRank}
                    </span>
                    <span className="text-[10px] font-semibold bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                      {topper.exam}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-base text-slate-900">
                      {topper.name}
                    </h3>
                    <div className="text-xs font-bold text-brand-primary mt-0.5">
                      {topper.collegeAllotted}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      {topper.course}
                    </div>
                  </div>

                  {topper.quote && (
                    <div className="mt-4 pt-3 border-t border-slate-100 text-xs italic text-slate-600 leading-relaxed">
                      "{topper.quote}"
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Filterable Institute Gallery */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
              Life at Career Path Academy
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Classrooms, Seminars & Student Life
            </h2>
            <p className="text-sm text-slate-600">
              A glimpse into daily academic routines, smart infrastructure, guest motivational seminars, and student felicitation events.
            </p>

            {/* Gallery Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {galleryCategories.map((cat) => {
                const isActive = galleryFilter === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setGalleryFilter(cat.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-brand-primary text-white shadow'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Photo Masonry / Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 group flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-brand-primary/80 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase">
                    {item.category}
                  </div>
                </div>

                <div className="p-4 flex-1">
                  <h4 className="font-heading font-bold text-sm text-slate-900">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Enrolment Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="bg-brand-primary text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="font-heading font-black text-2xl sm:text-3xl">
                Aim for the Next Top Rank with Us
              </h3>
              <p className="text-sm text-slate-300 max-w-lg">
                Registrations for target batches are open. Attend a 2-day free demo class to experience our faculty's pedagogy first-hand.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry(null, true)}
                className="px-6 py-3.5 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book 2-Day Free Demo</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Admissions</span>
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default ResultsPage;
