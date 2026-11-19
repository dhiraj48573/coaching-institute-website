import React from 'react';
import { instituteConfig } from '../../config/institute.config';
import { Download, FileText } from 'lucide-react';

export const BrochureButton = ({
  variant = 'primary',
  className = '',
  size = 'md',
  showIcon = true,
  customLabel = null,
}) => {
  const { pdfUrl, fileName, buttonText } = instituteConfig.brochure || {};

  // If brochure is not configured, hide button completely per requirements
  if (!pdfUrl) {
    return null;
  }

  const label = customLabel || buttonText || 'Download Brochure';

  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer text-center';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-brand-accent text-white hover:bg-brand-accent-hover shadow-md hover:shadow-lg',
    outline:
      'border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white',
    white:
      'bg-white text-brand-primary hover:bg-slate-100 shadow-md hover:shadow-lg font-semibold',
    ghost:
      'text-brand-accent hover:bg-brand-accent/10',
  };

  return (
    <a
      href={pdfUrl}
      download={fileName || 'Course_Brochure.pdf'}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`}
    >
      {showIcon && <Download className="w-4 h-4 shrink-0" />}
      <span>{label}</span>
    </a>
  );
};

export default BrochureButton;
