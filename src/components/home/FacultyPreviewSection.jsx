import React from 'react';
import { Link } from 'react-router-dom';
import { instituteConfig } from '../../config/institute.config';
import { Award, GraduationCap, ArrowRight, Sparkles } from 'lucide-react';

export const FacultyPreviewSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
              <span>Mentorship by Masters</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Learn from Renowned IITian & Medical Educators
            </h2>
            <p className="text-sm text-slate-600">
              Our faculty members don’t just teach shortcuts—they cultivate deep analytical habits, conceptual rigor, and examination endurance.
            </p>
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary hover:text-brand-accent transition-colors shrink-0"
          >
            <span>Meet Full Faculty & Leadership</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instituteConfig.faculty.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col group"
            >
              {/* Faculty Image */}
              <div className="relative aspect-[4/4] overflow-hidden bg-slate-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-brand-accent uppercase tracking-wider">
                    {member.experience}
                  </span>
                </div>
              </div>

              {/* Faculty Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-brand-primary transition-colors">
                    {member.name}
                  </h3>
                  
                  <div className="text-xs font-semibold text-brand-primary mt-0.5">
                    {member.role}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2">
                    <GraduationCap className="w-4 h-4 text-brand-accent shrink-0" />
                    <span>{member.qualification}</span>
                  </div>

                  <p className="text-xs text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  <strong className="text-slate-800">Specialization:</strong> {member.specialization}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FacultyPreviewSection;
