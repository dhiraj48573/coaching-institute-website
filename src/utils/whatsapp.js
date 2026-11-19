import { instituteConfig } from '../config/institute.config';

/**
 * Clean phone number to digits only (e.g., "919876543210")
 */
export const cleanPhoneNumber = (number) => {
  if (!number) return '';
  return number.replace(/\D/g, '');
};

/**
 * Generate a WhatsApp click-to-chat URL
 * @param {string} message - Unencoded message string
 * @param {string} customNumber - Optional override phone number
 */
export const getWhatsAppLink = (message, customNumber = null) => {
  const number = customNumber ? cleanPhoneNumber(customNumber) : cleanPhoneNumber(instituteConfig.contact.whatsappNumber);
  const encodedText = encodeURIComponent(message || instituteConfig.whatsappTemplates.general);
  return `https://wa.me/${number}?text=${encodedText}`;
};

/**
 * Generate a WhatsApp link for a specific course
 */
export const getCourseWhatsAppLink = (courseName) => {
  const message = instituteConfig.whatsappTemplates.courseEnquiry(courseName);
  return getWhatsAppLink(message);
};

/**
 * Generate a WhatsApp link for booking a demo class
 */
export const getDemoClassWhatsAppLink = (courseName = '') => {
  const message = instituteConfig.whatsappTemplates.demoClass(courseName);
  return getWhatsAppLink(message);
};

/**
 * Generate a WhatsApp link from form submission data
 */
export const getAdmissionFormWhatsAppLink = (formData) => {
  const message = instituteConfig.whatsappTemplates.admissionForm(formData);
  return getWhatsAppLink(message);
};
