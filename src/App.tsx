import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './components/HomePage';
import { CoursesPage } from './components/CoursesPage';
import { AboutPage } from './components/AboutPage';
import { WhyChooseUsPage } from './components/WhyChooseUsPage';
import { AdmissionPage } from './components/AdmissionPage';
import { ContactPage } from './components/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  // Sync with window.location.hash for direct linking (e.g. #courses, #why-us, #admission)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'courses', 'about', 'why-us', 'admission', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page;
  };

  return (
    <div className="relative min-h-screen flex flex-col font-sans antialiased text-gray-900 bg-white/75 backdrop-blur-[0.5px]">
      {/* Main Navigation Header with Page Names */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Dynamic Page Views */}
      <main className="flex-1 w-full relative z-10">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'courses' && <CoursesPage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'why-us' && <WhyChooseUsPage onNavigate={handleNavigate} />}
        {currentPage === 'admission' && <AdmissionPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppButton />

      {/* Comprehensive Footer with Abixion Digital Marketing Credit */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
