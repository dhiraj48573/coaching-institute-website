import React, { useState } from 'react';
import { instituteConfig } from '../../config/institute.config';
import { getWhatsAppLink } from '../../utils/whatsapp';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappUrl = getWhatsAppLink(instituteConfig.whatsappTemplates.general);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Floating Prompt Tooltip */}
      {showTooltip && (
        <div className="relative mr-3 hidden sm:flex items-center bg-white text-slate-800 text-xs font-medium py-2 px-3.5 rounded-xl shadow-xl border border-slate-100 animate-in fade-in slide-in-from-right duration-300">
          <div className="flex flex-col">
            <span className="font-semibold text-slate-900">Need Guidance?</span>
            <span className="text-[11px] text-slate-500">Chat with our counselor</span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="ml-2 text-slate-400 hover:text-slate-600"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-white" />
        </div>
      )}

      {/* Main WhatsApp Icon Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Admissions"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-xl hover:bg-emerald-600 hover:scale-105 transition-all duration-300 ring-4 ring-emerald-500/20"
      >
        {/* Pulsing ring indicator */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white" />
        </span>

        <MessageCircle className="w-7 h-7 fill-white/20 stroke-white" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
