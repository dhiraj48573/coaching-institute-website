import React from 'react';
import { instituteConfig } from '../../config/institute.config';
import { getDemoClassWhatsAppLink } from '../../utils/whatsapp';
import { Calendar, MessageCircle, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export const DemoClassCTA = ({ onOpenEnquiry }) => {
  const demoWaUrl = getDemoClassWhatsAppLink('Classroom Trial');

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-brand-primary via-slate-900 to-brand-primary text-white p-8 sm:p-12 shadow-2xl border-4 border-white/20">
          
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-accent/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Zero Risk • Zero Commitment</span>
              </div>

              <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight leading-snug">
                Experience Our Teaching Before Taking Final Admission.
              </h2>

              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                Attend 2 consecutive live classroom lectures at our {instituteConfig.contact.address.city} center. Meet our faculty, test our study material, and gauge our classroom focus with zero obligation.
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm text-slate-200">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Real batch lectures (no staged demo)</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>1-on-1 counselor doubt session</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Free sample study module included</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry(null, true)}
                className="w-full py-4 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white font-bold text-sm sm:text-base shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Free Demo Class</span>
              </button>

              <a
                href={demoWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book Instantly on WhatsApp</span>
              </a>

              <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                <span>Limited demo seats per batch</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoClassCTA;
