import React from 'react';
import { Link } from 'react-router-dom';
import { instituteConfig } from '../../config/institute.config';
import { getWhatsAppLink } from '../../utils/whatsapp';
import BrochureButton from './BrochureButton';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  ArrowUpRight,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export const Footer = ({ onOpenEnquiry }) => {
  const whatsappUrl = getWhatsAppLink(instituteConfig.whatsappTemplates.general);

  return (
    <footer className="bg-brand-primary text-slate-300 pt-16 pb-8 border-t-4 border-brand-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Institute Brand & Intro */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                <GraduationCap className="w-6 h-6 text-brand-accent" />
              </div>
              <span className="font-heading font-extrabold text-lg text-white tracking-tight">
                {instituteConfig.identity.name}
              </span>
            </div>
            
            <p className="text-xs text-slate-300 leading-relaxed">
              {instituteConfig.identity.subTagline}. Dedicated to nurturing academic discipline, scientific curiosity, and high competitive rank performance since {instituteConfig.identity.establishedYear}.
            </p>

            <div className="pt-2">
              <BrochureButton variant="white" size="sm" />
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              {Object.entries(instituteConfig.contact.social).map(([network, url]) => {
                if (!url) return null;
                return (
                  <a
                    key={network}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-brand-accent text-slate-300 hover:text-white flex items-center justify-center transition-all text-xs capitalize"
                    aria-label={`Follow on ${network}`}
                  >
                    {network.substring(0, 2).toUpperCase()}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wider border-b border-white/10 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-accent" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-accent" />
                  <span>About Us & Faculty</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-accent" />
                  <span>Courses & Fee Structure</span>
                </Link>
              </li>
              <li>
                <Link to="/results" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-accent" />
                  <span>Results & Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-accent" />
                  <span>Contact & Center Location</span>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry()}
                  className="hover:text-brand-accent transition-colors flex items-center gap-1.5 text-left font-semibold text-brand-accent-soft"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-brand-accent" />
                  <span>Book Free Demo Class</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Programs */}
          <div className="space-y-3">
            <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wider border-b border-white/10 pb-2">
              Featured Programs
            </h4>
            <ul className="space-y-2 text-xs">
              {instituteConfig.courses.slice(0, 5).map((course) => (
                <li key={course.id}>
                  <Link 
                    to={`/courses#${course.id}`} 
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span className="line-clamp-1">{course.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-brand-accent shrink-0 ml-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Reach Our Campus */}
          <div className="space-y-3">
            <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wider border-b border-white/10 pb-2">
              Center Information
            </h4>
            
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <span>
                  {instituteConfig.contact.address.line1}, {instituteConfig.contact.address.city}, {instituteConfig.contact.address.state} - {instituteConfig.contact.address.pincode}
                </span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-brand-accent shrink-0" />
                <a href={`tel:${instituteConfig.contact.phone}`} className="hover:text-white transition-colors">
                  {instituteConfig.contact.phone}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-brand-accent shrink-0" />
                <a href={`mailto:${instituteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {instituteConfig.contact.email}
                </a>
              </div>

              <div className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <span>{instituteConfig.contact.timings.weekdays}</span>
              </div>

              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Admission Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Disclaimer Banner (Mandated Requirement) */}
        <div className="my-6 p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-400 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white">Commercial Template Demonstration Notice:</strong> "{instituteConfig.identity.name}" is a fictional educational brand setup for website previewing. All student toppers, selection counts, faculty profiles, and testimonials are customizable template placeholders and must be replaced with authorized institutional data upon client commissioning.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 pt-4 gap-2">
          <div>
            © {new Date().getFullYear()} {instituteConfig.identity.name}. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Admission</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
