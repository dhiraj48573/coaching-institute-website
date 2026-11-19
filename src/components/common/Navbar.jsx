import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { instituteConfig } from '../../config/institute.config';
import { getWhatsAppLink } from '../../utils/whatsapp';
import BrochureButton from './BrochureButton';
import { 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Menu, 
  X, 
  GraduationCap, 
  CalendarCheck,
  ChevronRight
} from 'lucide-react';

export const Navbar = ({ onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Courses', path: '/courses' },
    { label: 'Results & Gallery', path: '/results' },
    { label: 'Contact & Admission', path: '/contact' },
  ];

  const whatsappUrl = getWhatsAppLink(instituteConfig.whatsappTemplates.general);

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm border-b border-slate-100">
      {/* Top Bar for Contact & Alerts */}
      <div className="bg-brand-primary text-slate-200 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${instituteConfig.contact.phone.replace(/\s+/g, '')}`} 
              className="flex items-center space-x-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-accent" />
              <span>{instituteConfig.contact.phone}</span>
            </a>
            <a 
              href={`mailto:${instituteConfig.contact.email}`} 
              className="flex items-center space-x-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-accent" />
              <span>{instituteConfig.contact.email}</span>
            </a>
            <div className="flex items-center space-x-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-brand-accent" />
              <span>{instituteConfig.contact.timings.weekdays}</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-[11px] text-brand-accent-soft bg-white/10 px-2 py-0.5 rounded-full font-medium">
              Admissions Open for 2025-26 Batches
            </span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand Identity */}
          <Link to="/" className="flex items-center space-x-3 group">
            {instituteConfig.identity.logoImage ? (
              <img
                src={instituteConfig.identity.logoImage}
                alt={instituteConfig.identity.name}
                className="h-12 w-auto object-contain"
              />
            ) : (
              <div className="w-12 h-12 rounded-xl bg-brand-primary text-white flex items-center justify-center font-heading font-black text-lg shadow-md group-hover:scale-105 transition-transform duration-200 border-2 border-brand-accent">
                <GraduationCap className="w-7 h-7 text-brand-accent" />
              </div>
            )}
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight leading-none group-hover:text-brand-primary transition-colors">
                {instituteConfig.identity.name}
              </span>
              <span className="text-[11px] font-semibold text-brand-accent tracking-wider uppercase mt-1">
                {instituteConfig.identity.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? 'text-brand-accent bg-brand-primary/5'
                      : 'text-slate-700 hover:text-brand-primary hover:bg-slate-100/70'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Download Brochure Button (auto-hides if null) */}
            <BrochureButton variant="outline" size="sm" />

            {/* Admission Enquiry Button */}
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl text-white bg-brand-primary hover:bg-brand-primary-light shadow-sm transition-all"
            >
              <CalendarCheck className="w-4 h-4 text-brand-accent" />
              <span>Admission Enquiry</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold rounded-lg bg-brand-primary text-white"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold ${
                    isActive
                      ? 'bg-brand-primary/10 text-brand-primary font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <BrochureButton variant="outline" size="md" className="w-full justify-center" />
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenEnquiry) onOpenEnquiry();
              }}
              className="w-full py-3 rounded-xl bg-brand-primary text-white text-sm font-semibold flex items-center justify-center gap-2 shadow"
            >
              <CalendarCheck className="w-4 h-4 text-brand-accent" />
              <span>Admission Enquiry / Demo</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Quick Contact Info */}
          <div className="pt-2 text-xs text-slate-500 space-y-1">
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-brand-accent" />
              <span>{instituteConfig.contact.phone}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-accent" />
              <span>{instituteConfig.contact.timings.weekdays}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
