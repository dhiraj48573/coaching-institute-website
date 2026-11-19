import React, { useState } from 'react';
import SEOHead from '../components/common/SEOHead';
import { instituteConfig } from '../config/institute.config';
import { getAdmissionFormWhatsAppLink, getWhatsAppLink } from '../utils/whatsapp';
import BrochureButton from '../components/common/BrochureButton';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  User, 
  BookOpen, 
  Calendar, 
  HelpCircle,
  ChevronDown,
  Sparkles
} from 'lucide-react';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    parentName: '',
    phone: '',
    course: instituteConfig.courses[0]?.name || '',
    batch: 'Morning Batch (8:00 AM - 1:00 PM)',
    isDemo: true,
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [generatedWaUrl, setGeneratedWaUrl] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Student name is required';
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.course) errs.course = 'Please select a course';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const waLink = getAdmissionFormWhatsAppLink(formData);
    setGeneratedWaUrl(waLink);
    setSubmitted(true);
  };

  const whatsappDirectUrl = getWhatsAppLink(instituteConfig.whatsappTemplates.general);

  return (
    <>
      <SEOHead
        title="Contact & Admission Center"
        description={`Reach ${instituteConfig.identity.name} in ${instituteConfig.contact.address.city}. Admission enquiry, free demo class booking, location map, and helpline.`}
        path="/contact"
      />

      <main className="bg-slate-50 min-h-screen pb-20">
        
        {/* 1. Header Banner */}
        <section className="bg-brand-primary text-white py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider mb-3">
              We are Here to Guide Your Child
            </span>
            <h1 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
              Contact & Admission Counseling
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
              Visit our campus in {instituteConfig.contact.address.city}, schedule a free 2-day classroom trial, or send an enquiry directly to our admissions team.
            </p>
          </div>
        </section>

        {/* 2. Main Two-Column Layout: Contact Cards + Admission Form */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Campus Info Cards & Map */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Center Info Card */}
              <div className="bg-white rounded-2xl shadow-card border border-slate-200/90 p-6 space-y-5">
                <h3 className="font-heading font-bold text-lg text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-brand-accent" />
                  <span>Campus Address & Timings</span>
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold mb-0.5">Physical Location:</strong>
                      <span>{instituteConfig.contact.address.line1}</span>
                      <span className="block">{instituteConfig.contact.address.line2}</span>
                      <span className="block font-medium text-slate-800">
                        {instituteConfig.contact.address.city}, {instituteConfig.contact.address.state} - {instituteConfig.contact.address.pincode}
                      </span>
                      <span className="block text-slate-400 text-xs mt-0.5">
                        Landmark: {instituteConfig.contact.address.landmark}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold mb-0.5">Helpline & Admissions:</strong>
                      <a href={`tel:${instituteConfig.contact.phone}`} className="text-brand-primary font-bold hover:underline block">
                        {instituteConfig.contact.phone}
                      </a>
                      {instituteConfig.contact.altPhone && (
                        <a href={`tel:${instituteConfig.contact.altPhone}`} className="text-slate-500 hover:underline block text-xs mt-0.5">
                          Landline: {instituteConfig.contact.altPhone}
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold mb-0.5">Email Communications:</strong>
                      <a href={`mailto:${instituteConfig.contact.email}`} className="text-brand-primary hover:underline block">
                        {instituteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold mb-0.5">Counseling Hours:</strong>
                      <span>{instituteConfig.contact.timings.weekdays}</span>
                      <span className="block text-slate-500 text-xs mt-0.5">
                        {instituteConfig.contact.timings.sunday}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Desk</span>
                  </a>

                  <BrochureButton variant="outline" size="sm" className="flex-1 justify-center" />
                </div>
              </div>

              {/* Interactive Google Map Embed */}
              <div className="bg-white rounded-2xl shadow-card border border-slate-200/90 overflow-hidden">
                <div className="p-3 bg-slate-50 border-b border-slate-100 text-xs font-semibold text-slate-700 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-accent" />
                    <span>Locate Us on Google Maps</span>
                  </span>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-primary hover:underline text-[11px]"
                  >
                    Open in Maps App
                  </a>
                </div>
                <div className="relative aspect-[16/10] w-full bg-slate-100">
                  <iframe
                    src={instituteConfig.contact.googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${instituteConfig.identity.name} Location Map`}
                    className="absolute inset-0"
                  />
                </div>
              </div>

            </div>

            {/* Right Column: Admission & Free Demo Class Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl shadow-card border border-slate-200/90 p-6 sm:p-8">
                
                <div className="border-b border-slate-100 pb-5 mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
                    <span>Direct Admission Desk</span>
                  </div>
                  <h2 className="font-heading font-black text-2xl text-slate-900 tracking-tight">
                    Enquire for Admission or Book Free Demo Class
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Fill the form below to receive syllabus booklets, fee structures, and secure a 2-day free trial seat.
                  </p>
                </div>

                {submitted ? (
                  <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-heading font-bold text-xl text-slate-900">
                        Thank You, {formData.name}!
                      </h3>
                      <p className="text-sm text-slate-600 max-w-md mx-auto">
                        Your admission enquiry has been formatted. For the fastest response, send your message directly to our senior counselor on WhatsApp:
                      </p>
                    </div>

                    {/* Enquiry Details Card */}
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 max-w-md mx-auto text-left text-xs space-y-2 text-slate-700">
                      <div><strong className="text-slate-900">Student Name:</strong> {formData.name}</div>
                      {formData.parentName && <div><strong className="text-slate-900">Parent Name:</strong> {formData.parentName}</div>}
                      <div><strong className="text-slate-900">Mobile Phone:</strong> {formData.phone}</div>
                      <div><strong className="text-slate-900">Target Course:</strong> {formData.course}</div>
                      <div><strong className="text-slate-900">Preferred Batch:</strong> {formData.batch}</div>
                      <div><strong className="text-slate-900">Demo Class:</strong> {formData.isDemo ? 'Yes (2 Days Free Trial)' : 'Direct Admission Enquiry'}</div>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                      <a
                        href={generatedWaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg transition-all"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send to WhatsApp Now</span>
                      </a>

                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: '',
                            parentName: '',
                            phone: '',
                            course: instituteConfig.courses[0]?.name || '',
                            batch: 'Morning Batch (8:00 AM - 1:00 PM)',
                            isDemo: true,
                            message: '',
                          });
                        }}
                        className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold"
                      >
                        Submit Another Query
                      </button>
                    </div>

                    {/* Regulatory Disclaimer */}
                    <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2 max-w-md mx-auto text-left mt-4">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>
                        <strong>Note:</strong> Submitting this enquiry does not confirm admission or obligate any payment. Our admission team will contact you to confirm batch availability.
                      </span>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Row 1: Student Name & Parent Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Student Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            required
                            placeholder="Student Full Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className={`w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border ${
                              errors.name ? 'border-red-400 ring-2 ring-red-100' : 'border-slate-300 focus:border-brand-primary'
                            } focus:outline-none`}
                          />
                        </div>
                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Parent / Guardian Name <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            placeholder="Parent Name"
                            value={formData.parentName}
                            onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                            className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-brand-primary"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Phone Number & Course */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          WhatsApp / Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="tel"
                            required
                            placeholder="10-digit mobile number"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className={`w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border ${
                              errors.phone ? 'border-red-400 ring-2 ring-red-100' : 'border-slate-300 focus:border-brand-primary'
                            } focus:outline-none`}
                          />
                        </div>
                        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Target Course / Exam <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <BookOpen className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          <select
                            value={formData.course}
                            onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                            className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-brand-primary"
                          >
                            {instituteConfig.courses.map((c) => (
                              <option key={c.id} value={c.name}>
                                {c.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Preferred Batch Timing */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Preferred Batch Timing
                      </label>
                      <div className="relative">
                        <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <select
                          value={formData.batch}
                          onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-brand-primary"
                        >
                          <option value="Morning Batch (8:00 AM - 1:00 PM)">Morning Batch (8:00 AM - 1:00 PM)</option>
                          <option value="Evening Batch (4:00 PM - 8:00 PM)">Evening Batch (4:00 PM - 8:00 PM)</option>
                          <option value="Weekend Batch (Saturday & Sunday)">Weekend Batch (Saturday & Sunday)</option>
                          <option value="Flexible / Need Counseling Advice">Flexible / Need Counseling Advice</option>
                        </select>
                      </div>
                    </div>

                    {/* Free Demo Class Checkbox */}
                    <div className="bg-amber-50/80 border border-amber-200/90 rounded-xl p-3.5 flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="contact-demo-checkbox"
                        checked={formData.isDemo}
                        onChange={(e) => setFormData({ ...formData, isDemo: e.target.checked })}
                        className="mt-0.5 h-4 w-4 rounded border-amber-300 text-brand-accent focus:ring-brand-accent"
                      />
                      <label htmlFor="contact-demo-checkbox" className="text-xs text-amber-950">
                        <strong className="block font-bold">Book a 2-Day Free Trial Demo Class</strong>
                        Sit in ongoing classes, review faculty methodology and examine study notes before taking final admission.
                      </label>
                    </div>

                    {/* Message / Remarks */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Questions, Current School / Marks <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <textarea
                        rows="3"
                        placeholder="Mention current school, class 10/12 percentage, or specific doubts about syllabus..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full p-3 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-brand-primary"
                      />
                    </div>

                    {/* Mandatory Disclaimer Explanation */}
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-500 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>Admission Notice:</strong> Submitting this online enquiry registers your academic interest and does NOT confirm formal admission or payment obligation. Our team will verify batch seats and guide you through subsequent steps.
                      </span>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-accent/30 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Enquiry & Generate WhatsApp Link</span>
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </section>

        {/* 3. Frequently Asked Questions (FAQ) Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
              Clear Answers to Your Queries
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Common questions from parents and students regarding admissions, scholarships, and academic guidelines.
            </p>
          </div>

          <div className="space-y-3">
            {instituteConfig.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-heading font-bold text-sm sm:text-base text-slate-900 hover:text-brand-primary transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-brand-accent' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </main>
    </>
  );
};

export default ContactPage;
