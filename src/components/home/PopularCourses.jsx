import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { instituteConfig } from '../../config/institute.config';
import { getCourseWhatsAppLink } from '../../utils/whatsapp';
import { 
  Clock, 
  Calendar, 
  BookOpen, 
  ArrowRight, 
  MessageCircle, 
  Sparkles,
  CheckCircle2,
  Tag
} from 'lucide-react';

export const PopularCourses = ({ onOpenEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter only enabled categories from config
  const enabledCategories = instituteConfig.courseCategories.filter((cat) => cat.enabled);

  // Filter courses based on active category
  const filteredCourses = instituteConfig.courses.filter((course) => {
    if (activeCategory === 'all') return true;
    return course.category === activeCategory;
  });

  // Highlight popular courses first or limit to 6 for home preview
  const displayCourses = filteredCourses.slice(0, 6);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
            <span>Targeted Academic Programs</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Popular Courses & Admissions
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Carefully structured curriculums designed to maximize conceptual mastery, speed, and scoring precision for national competitive exams and school boards.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {enabledCategories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? 'bg-brand-primary text-white shadow-md'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayCourses.map((course) => {
            const courseWaUrl = getCourseWhatsAppLink(course.name);

            return (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Card Top: Header & Badges */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-brand-primary/10 text-brand-primary">
                      {course.targetExam || course.category}
                    </span>
                    {course.badge && (
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-brand-accent text-white shadow-sm">
                        {course.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading font-bold text-xl text-slate-900 group-hover:text-brand-primary transition-colors leading-snug">
                    {course.name}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
                    {course.shortDescription}
                  </p>

                  {/* Course Details List */}
                  <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-4 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-brand-accent shrink-0" />
                      <span>
                        <strong className="text-slate-800">Subjects:</strong> {course.subjects.join(', ')}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-brand-accent shrink-0" />
                      <span>
                        <strong className="text-slate-800">Duration:</strong> {course.duration}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-brand-accent shrink-0" />
                      <span>
                        <strong className="text-slate-800">Batch Timing:</strong> {course.batchTiming}
                      </span>
                    </div>

                    {course.fees && (
                      <div className="flex items-center gap-2">
                        <Tag className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>
                          <strong className="text-slate-800">Fee:</strong>{' '}
                          <span className="font-bold text-emerald-700">{course.fees}</span>
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Highlights Bullet Preview */}
                  {course.features && course.features.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                        Course Highlights
                      </div>
                      <ul className="space-y-1 text-xs text-slate-600">
                        {course.features.slice(0, 2).map((feat, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Card Bottom: Action CTAs */}
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
                  {/* WhatsApp Enquiry Button */}
                  <a
                    href={courseWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>

                  {/* Enquire Now Modal Button */}
                  <button
                    onClick={() => onOpenEnquiry && onOpenEnquiry(course.name, false)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-brand-primary hover:bg-brand-primary-light shadow-sm transition-all"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Courses Link */}
        <div className="text-center mt-12">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-primary text-white font-semibold text-sm hover:bg-brand-primary-light shadow-md transition-all group"
          >
            <span>Explore Full Course Catalog & Syllabi</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PopularCourses;
