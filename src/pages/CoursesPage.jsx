import React, { useState } from 'react';
import SEOHead from '../components/common/SEOHead';
import { instituteConfig } from '../config/institute.config';
import { getCourseWhatsAppLink, getWhatsAppLink } from '../utils/whatsapp';
import BrochureButton from '../components/common/BrochureButton';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  Tag, 
  CheckCircle2, 
  Search, 
  MessageCircle, 
  CalendarCheck, 
  Sparkles,
  Info,
  ChevronDown,
  X,
  Send,
  HelpCircle
} from 'lucide-react';

export const CoursesPage = ({ onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourseForModal, setSelectedCourseForModal] = useState(null);

  // Filter enabled categories
  const enabledCategories = instituteConfig.courseCategories.filter((c) => c.enabled);

  // Filter courses by category and search keyword
  const filteredCourses = instituteConfig.courses.filter((course) => {
    const matchesCategory =
      selectedCategory === 'all' || course.category === selectedCategory;

    const matchesSearch =
      searchQuery.trim() === '' ||
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.subjects.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const generalWaUrl = getWhatsAppLink(instituteConfig.whatsappTemplates.general);

  return (
    <>
      <SEOHead
        title="Courses & Programs"
        description={`Explore comprehensive coaching programs for JEE, NEET, Foundation, and Board exams at ${instituteConfig.identity.name}. Batch timings, syllabus, and fee structures.`}
        path="/courses"
      />

      <main className="bg-slate-50 min-h-screen pb-20">
        
        {/* 1. Header Banner */}
        <section className="bg-brand-primary text-white py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider mb-3">
              Targeted Pedagogy • Structured Syllabi
            </span>
            <h1 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
              Our Academic Programs & Batches
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
              Explore our comprehensive programs tailored for school excellence, engineering & medical entrance exams, and career skill development.
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <BrochureButton variant="white" size="md" />
            </div>
          </div>
        </section>

        {/* 2. Controls & Filter Bar */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 relative z-20">
          <div className="bg-white rounded-2xl shadow-card border border-slate-200/90 p-4 sm:p-6 space-y-4">
            
            {/* Search Input & Info */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search courses by name or subject (e.g. Physics, JEE, NEET)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="text-xs text-slate-500 flex items-center gap-2">
                <span className="font-semibold text-slate-800">
                  Showing {filteredCourses.length} of {instituteConfig.courses.length} courses
                </span>
                {selectedCategory !== 'all' && (
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="text-brand-accent hover:underline font-medium"
                  >
                    (Clear Filter)
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
              {enabledCategories.map((category) => {
                const isActive = selectedCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-brand-primary text-white shadow'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {category.name}
                  </button>
                );
              })}
            </div>

          </div>
        </section>

        {/* 3. Course Cards Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          {filteredCourses.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 max-w-md mx-auto space-y-4">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="font-heading font-bold text-lg text-slate-800">
                No matching courses found
              </h3>
              <p className="text-xs text-slate-500">
                Try searching with a different keyword or reset the category filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 bg-brand-primary text-white text-xs font-semibold rounded-xl"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => {
                const courseWaUrl = getCourseWhatsAppLink(course.name);

                return (
                  <div
                    key={course.id}
                    id={course.id}
                    className="bg-white rounded-2xl border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                  >
                    {/* Top Content */}
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

                      <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                        {course.shortDescription}
                      </p>

                      {/* Course Metadata */}
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

                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>
                            <strong className="text-slate-800">Eligibility:</strong> {course.eligibility}
                          </span>
                        </div>

                        {course.fees && (
                          <div className="flex items-center gap-2 pt-1">
                            <Tag className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>
                              <strong className="text-slate-800">Tuition Fee:</strong>{' '}
                              <span className="font-bold text-emerald-700 text-sm">{course.fees}</span>
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Features Bullet List */}
                      {course.features && course.features.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-slate-100">
                          <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
                            Key Inclusions
                          </div>
                          <ul className="space-y-1.5 text-xs text-slate-600">
                            {course.features.slice(0, 3).map((feat, idx) => (
                              <li key={idx} className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* View Full Syllabus details button */}
                      <button
                        onClick={() => setSelectedCourseForModal(course)}
                        className="mt-4 text-xs font-semibold text-brand-primary hover:text-brand-accent underline inline-flex items-center gap-1"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>View Detailed Syllabus & Course Overview</span>
                      </button>
                    </div>

                    {/* Card Actions */}
                    <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
                      <a
                        href={courseWaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>

                      <button
                        onClick={() => onOpenEnquiry && onOpenEnquiry(course.name, false)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-brand-primary hover:bg-brand-primary-light shadow-sm transition-all"
                      >
                        <CalendarCheck className="w-3.5 h-3.5" />
                        <span>Enquire Now</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* 4. WhatsApp Course Enquiry Section Banner (Mandated Requirement) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="bg-emerald-800 text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl text-center md:text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold uppercase tracking-wider">
                Instant Academic Counseling
              </span>
              <h2 className="font-heading font-black text-2xl sm:text-3xl">
                Need Help Choosing the Right Stream or Batch?
              </h2>
              <p className="text-sm text-emerald-100 leading-relaxed">
                Connect directly with our senior course advisors on WhatsApp. Share your current grade and target exam to receive tailored course brochures, fee schedules, and scholarship criteria.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={generalWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-emerald-900 font-bold text-sm shadow-lg hover:bg-emerald-50 transition-all"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>Chat with Academic Advisor</span>
              </a>

              <BrochureButton variant="outline" size="md" className="border-white text-white hover:bg-white/10" />
            </div>
          </div>
        </section>

        {/* 5. Detailed Course Syllabus Modal (When clicking View Detailed Syllabus) */}
        {selectedCourseForModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 max-w-2xl w-full overflow-hidden flex flex-col max-h-[85vh]">
              {/* Modal Header */}
              <div className="bg-brand-primary text-white p-5 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-brand-accent uppercase tracking-wider mb-1 inline-block">
                    {selectedCourseForModal.targetExam}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-white">
                    {selectedCourseForModal.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCourseForModal(null)}
                  className="text-slate-300 hover:text-white p-1 rounded-lg hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto space-y-5 text-slate-700 text-xs sm:text-sm">
                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-base mb-1">
                    Course Overview
                  </h4>
                  <p className="leading-relaxed text-slate-600">
                    {selectedCourseForModal.fullDescription || selectedCourseForModal.shortDescription}
                  </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Duration</span>
                    <span className="font-bold text-slate-800">{selectedCourseForModal.duration}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Eligibility</span>
                    <span className="font-bold text-slate-800">{selectedCourseForModal.eligibility}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Batch Timings</span>
                    <span className="font-bold text-slate-800">{selectedCourseForModal.batchTiming}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Tuition Fee</span>
                    <span className="font-bold text-emerald-700">{selectedCourseForModal.fees || 'Contact Office'}</span>
                  </div>
                </div>

                {/* Syllabus Highlights */}
                {selectedCourseForModal.syllabusHighlights && (
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-base mb-2">
                      Syllabus & Core Modules
                    </h4>
                    <div className="space-y-2">
                      {selectedCourseForModal.syllabusHighlights.map((topic, i) => (
                        <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                          <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                          <span className="text-slate-800 font-medium">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features & Deliverables */}
                {selectedCourseForModal.features && (
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-base mb-2">
                      Course Features & Deliverables
                    </h4>
                    <ul className="space-y-1.5">
                      {selectedCourseForModal.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Modal Footer CTAs */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
                <a
                  href={getCourseWhatsAppLink(selectedCourseForModal.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center gap-1.5 shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Ask on WhatsApp</span>
                </a>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedCourseForModal(null)}
                    className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-800"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const courseName = selectedCourseForModal.name;
                      setSelectedCourseForModal(null);
                      if (onOpenEnquiry) onOpenEnquiry(courseName, false);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-brand-primary hover:bg-brand-primary-light text-white font-semibold text-xs shadow"
                  >
                    Apply for this Course
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>
    </>
  );
};

export default CoursesPage;
