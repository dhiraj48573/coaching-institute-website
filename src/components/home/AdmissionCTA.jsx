import React from 'react';
import { Link } from 'react-router-dom';
import { instituteConfig } from '../../config/institute.config';
import { getWhatsAppLink } from '../../utils/whatsapp';
import { Phone, MessageCircle, MapPin, CalendarCheck, ArrowRight } from 'lucide-react';

export const AdmissionCTA = ({ onOpenEnquiry }) => {
  const whatsappUrl = getWhatsAppLink(instituteConfig.whatsappTemplates.general);

  return (
    <section className="py-16 bg-slate-100 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
              Join Career Path Academy
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight">
              Ready to Accelerate Your Academic Journey?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Visit our {instituteConfig.contact.address.city} campus or speak with our academic counselors today to explore scholarship tests, batch timings, and registration procedures.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-slate-600">
              <div className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-4 h-4 text-brand-accent" />
                <span>{instituteConfig.contact.address.line1}, {instituteConfig.contact.address.city}</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Phone className="w-4 h-4 text-brand-accent" />
                <a href={`tel:${instituteConfig.contact.phone}`} className="hover:underline">
                  {instituteConfig.contact.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-brand-primary hover:bg-brand-primary-light text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <CalendarCheck className="w-4 h-4 text-brand-accent" />
              <span>Apply for Admission</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdmissionCTA;
