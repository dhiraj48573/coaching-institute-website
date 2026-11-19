import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';
import ThemeSwitcher from './components/common/ThemeSwitcher';
import EnquiryModal from './components/common/EnquiryModal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import ResultsPage from './pages/ResultsPage';
import ContactPage from './pages/ContactPage';

// Scroll to top automatically when route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
};

export const AppContent = () => {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [modalCourse, setModalCourse] = useState('');
  const [modalIsDemo, setModalIsDemo] = useState(false);

  const handleOpenEnquiry = (courseName = '', isDemo = false) => {
    setModalCourse(courseName || '');
    setModalIsDemo(isDemo);
    setIsEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      
      {/* Global Navigation Header */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry('', false)} />

      {/* Main Page Routing */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/about" element={<AboutPage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/courses" element={<CoursesPage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/results" element={<ResultsPage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/contact" element={<ContactPage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="*" element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} />
        </Routes>
      </div>

      {/* Global Footer */}
      <Footer onOpenEnquiry={() => handleOpenEnquiry('', false)} />

      {/* Global Floating Elements */}
      <FloatingWhatsApp />
      <ThemeSwitcher />

      {/* Global Quick Enquiry / Demo Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={handleCloseEnquiry}
        initialCourse={modalCourse}
        isDemoBooking={modalIsDemo}
      />
    </div>
  );
};

export const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
