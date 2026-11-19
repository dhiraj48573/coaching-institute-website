import React from 'react';
import SEOHead from '../components/common/SEOHead';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import PopularCourses from '../components/home/PopularCourses';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import FacultyPreviewSection from '../components/home/FacultyPreviewSection';
import ResultsPreviewSection from '../components/home/ResultsPreviewSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import DemoClassCTA from '../components/home/DemoClassCTA';
import AdmissionCTA from '../components/home/AdmissionCTA';

export const HomePage = ({ onOpenEnquiry }) => {
  return (
    <>
      <SEOHead 
        title="Home"
        description="Build your future with Career Path Academy. Top coaching for JEE, NEET, Class 9-12 Foundation & Boards in Haridwar with expert IITian faculty and small batches."
        path="/"
      />

      <main>
        {/* 1. Hero Section */}
        <HeroSection onOpenEnquiry={onOpenEnquiry} />

        {/* 2. Key Stats Counter */}
        <StatsSection />

        {/* 3. Popular Courses Preview */}
        <PopularCourses onOpenEnquiry={onOpenEnquiry} />

        {/* 4. Why Choose Us & Methodology */}
        <WhyChooseUsSection />

        {/* 5. Expert Faculty Preview */}
        <FacultyPreviewSection />

        {/* 6. Results and Achievers Preview */}
        <ResultsPreviewSection />

        {/* 7. Free Demo Class CTA */}
        <DemoClassCTA onOpenEnquiry={onOpenEnquiry} />

        {/* 8. Student & Parent Testimonials */}
        <TestimonialsSection />

        {/* 9. Admission Contact Callout */}
        <AdmissionCTA onOpenEnquiry={onOpenEnquiry} />
      </main>
    </>
  );
};

export default HomePage;
