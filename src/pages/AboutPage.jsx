import React from 'react';
import SEOHead from '../components/common/SEOHead';
import { instituteConfig } from '../config/institute.config';
import BrochureButton from '../components/common/BrochureButton';
import { getDemoClassWhatsAppLink } from '../utils/whatsapp';
import { 
  GraduationCap, 
  Target, 
  Compass, 
  Award, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  Users, 
  Building2, 
  BookOpen,
  CalendarCheck,
  MessageCircle,
  Quote
} from 'lucide-react';

export const AboutPage = ({ onOpenEnquiry }) => {
  const demoWaUrl = getDemoClassWhatsAppLink('About Us Page');

  return (
    <>
      <SEOHead
        title="About Us & Faculty"
        description={`Learn about the history, vision, IITian faculty and academic methodology of ${instituteConfig.identity.name} in ${instituteConfig.contact.address.city}.`}
        path="/about"
      />

      <main className="bg-slate-50">
        
        {/* 1. Header Banner */}
        <section className="bg-brand-primary text-white py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider mb-3">
              Established in {instituteConfig.identity.establishedYear}
            </span>
            <h1 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
              Shaping Academic Leaders for Tomorrow
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
              Learn how {instituteConfig.identity.name} grew from a passionate mentoring initiative into {instituteConfig.contact.address.city}'s most trusted competitive preparation institute.
            </p>
          </div>
        </section>

        {/* 2. History & Institute Introduction */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
                  <span>Our Heritage & Journey</span>
                </div>

                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                  A Legacy of Pure Academic Rigor Since {instituteConfig.identity.establishedYear}
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Founded with a singular mission to provide ethical, non-commercial, and result-oriented coaching in Uttarakhand, <strong className="text-slate-900">{instituteConfig.identity.name}</strong> was created by senior academicians who realized that massive classrooms with 200+ students drown individualized potential.
                </p>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Over the past {new Date().getFullYear() - parseInt(instituteConfig.identity.establishedYear, 10)}+ years, we have maintained a strict cap of 35 students per batch. This disciplined pedagogy has enabled students from modest educational backgrounds to secure premier ranks in JEE Advanced, NEET-UG, CBSE Board exams, and national Olympiads.
                </p>

                <div className="pt-2 flex flex-wrap gap-4">
                  <BrochureButton variant="primary" size="md" />
                  <button
                    onClick={() => onOpenEnquiry && onOpenEnquiry(null, true)}
                    className="px-5 py-2.5 rounded-xl border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-semibold text-sm transition-all"
                  >
                    Book Campus Tour & Demo
                  </button>
                </div>
              </div>

              {/* Image Collage */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100 aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80"
                    alt="Classroom education and discussion"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                    <span className="font-bold text-brand-accent uppercase tracking-wider block">Real Classroom Interaction</span>
                    Mentoring students through interactive concept formulation.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Founder / Director Message */}
        <section className="py-20 bg-slate-100 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-4 text-center">
                <div className="relative inline-block">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                    alt="Director Er. Rajesh Verma"
                    className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl object-cover mx-auto shadow-lg border-4 border-brand-accent"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900 mt-4">
                  Er. Rajesh Verma
                </h3>
                <div className="text-xs font-bold text-brand-primary">
                  Founder & Managing Director
                </div>
                <div className="text-[11px] text-slate-500">
                  B.Tech, IIT Roorkee • 15+ Years Mentoring
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <Quote className="w-10 h-10 text-brand-accent/40" />
                <h3 className="font-heading font-bold text-2xl text-slate-900 tracking-tight">
                  "Success in competitive exams is not about memorizing 10,000 problems—it is about knowing 100 core principles so deeply that you can solve any 10,000 problems."
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  When I started Career Path Academy, my pledge was simple: no student should ever feel like a mere roll number in an overcrowded factory hall. True learning happens when a student feels confident to walk up to their teacher, look them in the eye, and say, "Sir, I didn't understand this step."
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We promise you honesty in guidance, unmatched faculty devotion, and an environment that prizes relentless effort above shortcuts. We welcome every determined student to experience our institute.
                </p>
                
                <div className="pt-2 text-xs font-bold text-slate-800">
                  — Er. Rajesh Verma (B.Tech, IIT Roorkee)
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Mission */}
              <div className="p-8 rounded-2xl bg-brand-primary/5 border border-brand-primary/20 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary text-white flex items-center justify-center shadow-md">
                  <Target className="w-6 h-6 text-brand-accent" />
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-brand-primary">
                  Our Mission
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  To democratize access to elite competitive exam preparation by providing the highest standard of academic curriculum, small focused batches, and genuine personal mentoring in tier-2 and tier-3 regions without needing to relocate to distant coaching hubs.
                </p>
                <ul className="space-y-2 text-xs text-slate-600 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Uncompromising concept clarity over superficial cramming</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Zero-tolerance for unattended student doubts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Affordable, ethical, and transparent fee structures</span>
                  </li>
                </ul>
              </div>

              {/* Vision */}
              <div className="p-8 rounded-2xl bg-brand-accent/5 border border-brand-accent/20 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-accent text-white flex items-center justify-center shadow-md">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-slate-900">
                  Our Vision
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  To be acknowledged as the most ethically responsible and academically transformative coaching institution in Northern India—producing not just top rankers in engineering and medicine, but curious, resilient, and scientifically minded nation builders.
                </p>
                <ul className="space-y-2 text-xs text-slate-600 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>100% digitalized testing simulating NTA exam standards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Holistic mental well-being and stress resilience coaching</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Continuous teacher upskilling with latest question patterns</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* 5. Teaching Methodology (5-Step Pedagogy) */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                Pedagogical Framework
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                How We Train Minds to Conquer Competitive Exams
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                A structured, disciplined 5-phase feedback system that systematically elevates an average learner into a high-percentile qualifier.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {instituteConfig.methodology.map((m) => (
                <div
                  key={m.step}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card flex flex-col justify-between"
                >
                  <div>
                    <span className="font-heading font-black text-3xl text-brand-accent">
                      {m.step}
                    </span>
                    <h3 className="font-heading font-bold text-base text-slate-900 mt-2">
                      {m.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-semibold text-brand-primary">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Monitored Daily</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Campus & Infrastructure Gallery */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                Modern Campus Facilities
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Designed for Uninterrupted Focus & Learning
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Our campus in Haridwar provides a serene, noise-free, and high-tech academic environment engineered to maximize study hours.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {instituteConfig.infrastructure.map((facility, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/90 shadow-card group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-base text-slate-900">
                      {facility.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Full Faculty Grid */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                Core Faculty Department Heads
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Meet the Mentors Behind Every Selection
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Every faculty member is a full-time, permanent academic educator dedicated completely to student doubt clearing, lecture preparation, and paper review.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {instituteConfig.faculty.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-card flex flex-col justify-between"
                >
                  <div className="aspect-square relative overflow-hidden bg-slate-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-brand-primary text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                      {member.experience}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-lg text-slate-900">
                        {member.name}
                      </h3>
                      <div className="text-xs font-bold text-brand-primary mt-0.5">
                        {member.role}
                      </div>
                      <div className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                        <GraduationCap className="w-3.5 h-3.5 text-brand-accent" />
                        <span>{member.qualification}</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                        {member.bio}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                      <strong>Focus:</strong> {member.specialization}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Call to Action Banner */}
        <section className="py-16 bg-brand-primary text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="font-heading font-black text-2xl sm:text-4xl">
              Meet Our Faculty in Person at {instituteConfig.contact.address.city} Campus
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              Schedule a personalized academic counseling session for you and your parents with our department heads.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry(null, true)}
                className="px-6 py-3.5 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-sm shadow-lg transition-all"
              >
                Schedule Free Counseling & Demo
              </button>
              <a
                href={demoWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Counselor on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default AboutPage;
