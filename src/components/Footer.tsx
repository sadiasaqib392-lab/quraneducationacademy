import React from 'react';
import { Phone, Mail, MessageCircle, Globe, ShieldCheck, ExternalLink } from 'lucide-react';
import footerLogo from '../assets/images/regenerated_image_1790424423604.jpg';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-emerald-950 text-emerald-100/90 pt-14 pb-0 border-t-4 border-amber-500 overflow-hidden">
      {/* Decorative top pattern subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Col 1: Academy Info & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white border border-white p-1 flex items-center justify-center shadow-sm overflow-hidden">
                <img
                  src={footerLogo}
                  alt="Quran Education Academy"
                  className="w-10 h-10 object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-amber-300">
                  Quran Education Academy
                </h3>
                <p className="text-xs text-emerald-300">International Online Madrasa</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-emerald-200/80">
              Dedicated to delivering authentic, 1-on-1 online Quran learning for children, brothers, and sisters worldwide. Qualified Huffaz and female scholars guiding students with Tajweed and Tarbiyah.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-300 bg-emerald-900/50 p-2.5 rounded-lg border border-emerald-800">
              <ShieldCheck className="w-4 h-4 flex-shrink-0 text-amber-400" />
              <span>Certified Scholars • 1-on-1 Personalized Classes</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-bold text-amber-300 uppercase tracking-wider mb-4 pb-2 border-b border-emerald-800/60">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-amber-300 transition-colors text-emerald-200/90"
                >
                  › Home &amp; Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('courses')}
                  className="hover:text-amber-300 transition-colors text-emerald-200/90"
                >
                  › All Courses &amp; Tajweed
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-amber-300 transition-colors text-emerald-200/90"
                >
                  › About Faculty &amp; Sister Department
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('why-us')}
                  className="hover:text-amber-300 transition-colors text-emerald-200/90"
                >
                  › Why Choose Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('admission')}
                  className="hover:text-amber-300 transition-colors text-emerald-200/90"
                >
                  › Online Admission Form
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-amber-300 transition-colors text-emerald-200/90"
                >
                  › Contact &amp; Support
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Courses */}
          <div>
            <h4 className="font-serif text-sm font-bold text-amber-300 uppercase tracking-wider mb-4 pb-2 border-b border-emerald-800/60">
              Our Courses
            </h4>
            <ul className="space-y-2 text-xs text-emerald-200/90">
              <li className="flex items-center gap-1.5">
                <span className="text-amber-400 font-bold">•</span> Noorani Qaida for Kids
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-amber-400 font-bold">•</span> Nazra Quran with Tajweed
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-amber-400 font-bold">•</span> Hifz-ul-Quran (Memorization)
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-amber-400 font-bold">•</span> Quran Translation &amp; Tafseer
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-amber-400 font-bold">•</span> Islamic Studies &amp; Daily Duas
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-amber-400 font-bold">•</span> Ten Qira&apos;at Specialization
              </li>
            </ul>
          </div>

          {/* Col 4: Official Contact Information */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-amber-300 uppercase tracking-wider mb-4 pb-2 border-b border-emerald-800/60">
              Contact &amp; Admissions
            </h4>

            <div className="space-y-2.5 text-xs text-emerald-200/90">
              <div>
                <p className="text-[10px] uppercase text-emerald-400 font-semibold">Call / WhatsApp:</p>
                <a
                  href="tel:03187779954"
                  className="text-amber-300 font-bold hover:underline flex items-center gap-1.5 text-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  03187779954
                </a>
              </div>

              <div>
                <p className="text-[10px] uppercase text-emerald-400 font-semibold">Direct Email:</p>
                <a
                  href="mailto:quraaneducationacademy@gmail.com"
                  className="text-emerald-100 hover:text-amber-300 break-all flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                  quraaneducationacademy@gmail.com
                </a>
              </div>

              <div>
                <p className="text-[10px] uppercase text-emerald-400 font-semibold">WhatsApp Chat:</p>
                <a
                  href="https://wa.me/923187779954?text=Assalam-o-Alaikum%2C%20I%20want%20to%20apply%20for%20admission%20at%20Quran%20Education%20Academy."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-3 py-1.5 rounded-lg text-xs mt-1 transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="pt-1 text-[11px] text-emerald-300/80 flex items-center gap-1">
                <Globe className="w-3 h-3 text-amber-400" />
                Available 24/7 across all international timezones
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        ============================================================
        DEVELOPER CREDIT FOOTER SECTION (EXACT REQUIREMENT)
        Developed & Designed by Abixion Digital Marketing | abixion.pk
        ============================================================
      */}
      <div className="border-t border-emerald-900/60 bg-emerald-950/95 py-4 px-4 text-xs text-emerald-300/90">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          {/* Copyright */}
          <div className="text-emerald-400/80">
            © {new Date().getFullYear()}{' '}
            <span className="font-semibold text-amber-300">Quran Education Academy</span>. All
            rights reserved.
          </div>

          {/* Official Developer Credit */}
          <div className="flex items-center justify-center flex-wrap gap-1.5 text-xs text-emerald-200">
            <span>Developed &amp; Designed by Abixion Digital Marketing</span>
            <span className="text-amber-400/60">|</span>
            <a
              href="https://abixion.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-amber-300 hover:text-amber-200 underline underline-offset-2 transition-colors duration-200 inline-flex items-center gap-1"
            >
              <span>abixion.pk</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
