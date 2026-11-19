import React, { useState, useEffect } from 'react';
import { instituteConfig } from '../../config/institute.config';
import { getAdmissionFormWhatsAppLink } from '../../utils/whatsapp';
import { X, CheckCircle, Send, Phone, User, BookOpen, Clock, AlertCircle } from 'lucide-react';

export const EnquiryModal = ({ isOpen, onClose, initialCourse = '', isDemoBooking = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    parentName: '',
    phone: '',
    course: '',
    batch: 'Morning Batch (Flexible)',
    isDemo: isDemoBooking,
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState('');

  // Update initial course or demo booking flag when opened
  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        course: initialCourse || (instituteConfig.courses[0]?.name || ''),
        isDemo: isDemoBooking,
      }));
      setSubmitted(false);
      setErrors({});
    }
  }, [isOpen, initialCourse, isDemoBooking]);

  if (!isOpen) return null;

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
    setGeneratedWhatsAppUrl(waLink);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-slate-100 max-w-lg w-full overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-brand-primary text-white p-5 flex items-center justify-between">
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-accent text-white uppercase tracking-wider mb-1">
              {formData.isDemo ? 'Free Demo Class' : 'Admission Enquiry'}
            </span>
            <h3 className="text-xl font-heading font-bold">
              {formData.isDemo ? 'Book Your Free Demo Class' : 'Take the First Step to Success'}
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              {instituteConfig.identity.name} • {instituteConfig.contact.address.city}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-heading font-bold text-slate-900">
                  Enquiry Prepared Successfully!
                </h4>
                <p className="text-sm text-slate-600 mt-1 max-w-sm mx-auto">
                  Click below to send your enquiry directly to our admissions team on WhatsApp for fastest confirmation.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs space-y-1.5 text-slate-700">
                <div><strong className="text-slate-900">Student:</strong> {formData.name}</div>
                <div><strong className="text-slate-900">Course:</strong> {formData.course}</div>
                <div><strong className="text-slate-900">Preferred Batch:</strong> {formData.batch}</div>
                <div><strong className="text-slate-900">Demo Class:</strong> {formData.isDemo ? 'Requested (2 Days Free)' : 'Standard Admission Enquiry'}</div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={generatedWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-lg gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via WhatsApp Now</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium transition-colors"
                >
                  Close Window
                </button>
              </div>

              {/* Regulatory / Transparency Notice */}
              <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200/70 text-[11px] text-amber-900 flex items-start gap-2 text-left">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Transparency Notice:</strong> Submitting this enquiry does not confirm admission or obligate any payment. Our counselor will discuss eligibility, fee structures, and batch start dates with you.
                </span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Student Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Student Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full pl-9 pr-3 py-2 text-sm rounded-xl border focus:outline-none focus:ring-2 ${
                      errors.name ? 'border-red-400 ring-red-100' : 'border-slate-300 focus:border-brand-primary focus:ring-brand-primary/20'
                    }`}
                  />
                </div>
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>

              {/* Parent Name (Optional) */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Parent / Guardian Name <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="e.g. Mr. Rajesh Sharma"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
                  />
                </div>
              </div>

              {/* Phone / Mobile */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Mobile / WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full pl-9 pr-3 py-2 text-sm rounded-xl border focus:outline-none focus:ring-2 ${
                      errors.phone ? 'border-red-400 ring-red-100' : 'border-slate-300 focus:border-brand-primary focus:ring-brand-primary/20'
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>

              {/* Course Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Select Course / Program <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <BookOpen className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
                  >
                    {instituteConfig.courses.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preferred Batch Timing */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Batch Timing
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <select
                    value={formData.batch}
                    onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
                  >
                    <option value="Morning Batch (8:00 AM - 1:00 PM)">Morning Batch (8:00 AM - 1:00 PM)</option>
                    <option value="Evening Batch (4:00 PM - 8:00 PM)">Evening Batch (4:00 PM - 8:00 PM)</option>
                    <option value="Weekend Batch (Saturday & Sunday)">Weekend Batch (Sat & Sun)</option>
                    <option value="Flexible / Discuss with Counselor">Flexible / Discuss with Counselor</option>
                  </select>
                </div>
              </div>

              {/* Free Demo Class Checkbox */}
              <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3 flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="modal-demo-checkbox"
                  checked={formData.isDemo}
                  onChange={(e) => setFormData({ ...formData, isDemo: e.target.checked })}
                  className="mt-0.5 h-4 w-4 rounded border-amber-300 text-brand-accent focus:ring-brand-accent"
                />
                <label htmlFor="modal-demo-checkbox" className="text-xs text-amber-950">
                  <strong className="block font-semibold">Book 2-Day Free Trial Demo Class</strong>
                  Attend real classroom lectures and interact with faculty before taking final admission.
                </label>
              </div>

              {/* Optional Query / Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Questions or Remarks <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Inquiring about scholarship test date or hostel facility..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
                />
              </div>

              {/* Transparency Notice */}
              <p className="text-[11px] text-slate-500 leading-tight">
                * By submitting, you request academic information. Submitting does not obligate any payment or lock admission.
              </p>

              {/* Submit Buttons */}
              <div className="pt-2 flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white text-xs font-semibold shadow-md transition-all flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit & Connect</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;
