import React from 'react';
import { Phone, Mail, MessageCircle, Globe } from 'lucide-react';
import headerLogo from '../assets/images/regenerated_image_1790424423604.jpg';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'courses', label: 'Courses' },
    { id: 'about', label: 'About Us' },
    { id: 'why-us', label: 'Why Choose Us' },
    { id: 'admission', label: 'Admission Form' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full shadow-sm">
      {/* Top Quick Contact Bar */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-2 px-4 border-b border-emerald-800/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <a
              href="tel:03187779954"
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-semibold tracking-wide">03187779954</span>
            </a>
            <span className="hidden sm:inline text-emerald-700">|</span>
            <a
              href="mailto:quraaneducationacademy@gmail.com"
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>quraaneducationacademy@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-medium text-emerald-300/90">
            <span className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              24/7 International Scheduling
            </span>
            <span className="text-emerald-700">|</span>
            <a
              href="https://wa.me/923187779954?text=Assalam-o-Alaikum%2C%20I%20want%20to%20inquire%20about%20Quran%20classes."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-200 hover:text-amber-300 font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              WhatsApp Help
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar: Logo, Name, and Page links placed right together */}
      <div className="bg-white/95 backdrop-blur-md border-b border-emerald-900/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between sm:justify-start gap-y-2 gap-x-4 sm:gap-x-6">
          {/* Logo & Brand Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left focus:outline-none group flex-shrink-0"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 rounded-full p-1 bg-white border border-white shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden">
              <img
                src={headerLogo}
                alt="Quran Education Academy Logo"
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain rounded-full"
              />
            </div>
            <div>
              <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-emerald-950 group-hover:text-emerald-800 transition-colors whitespace-nowrap">
                Quran Education Academy
              </span>
            </div>
          </button>

          {/* Navigation Page Links directly next to the brand name */}
          <nav className="flex items-center gap-1 sm:gap-1.5 flex-wrap">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg font-serif text-xs sm:text-[13px] lg:text-[14px] font-semibold tracking-wide transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-emerald-900 text-amber-300 shadow-sm border border-emerald-800'
                      : 'text-gray-700 hover:text-emerald-950 hover:bg-emerald-50/90'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};
