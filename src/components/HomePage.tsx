import React from 'react';
import { Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { COURSES, FAQS } from '../data/academyData';
import { ImageSlider } from './ImageSlider';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 pb-12">
      {/* 
        ============================================================
        TOP IMAGE SLIDER (3 DECENT PICTURES WITH MINIMAL 1-2 WORDS)
        ============================================================
      */}
      <ImageSlider onNavigate={onNavigate} />

      {/* 
        ============================================================
        BASIC COURSES OVERVIEW (NO ENROLL BUTTON, NO MONTHS, NO URDU)
        ============================================================
      */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
          <div>
            <h2 className="font-serif text-2xl font-bold text-emerald-950">
              Our Key Courses
            </h2>
            <p className="text-xs text-gray-600 mt-1">
              Structured curriculum taught by certified male and female scholars.
            </p>
          </div>
          <button
            onClick={() => onNavigate('courses')}
            className="text-xs sm:text-sm font-bold text-emerald-900 hover:text-emerald-700 flex items-center gap-1"
          >
            <span>View All Courses</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSES.slice(0, 4).map((course) => (
            <div
              key={course.id}
              className="bg-white/95 rounded-2xl p-5 shadow-sm border border-emerald-900/10 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {course.level}
                  </span>
                </div>

                <h3 className="font-serif text-base font-bold text-emerald-950 mb-2">
                  {course.title}
                </h3>

                <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 
        ============================================================
        FREQUENTLY ASKED QUESTIONS (ADDED DIRECTLY ABOVE HAVE QUESTIONS)
        ============================================================
      */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="font-serif text-2xl font-bold text-emerald-950">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-gray-600 mt-1">
            Common questions answered for parents and new students.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="bg-white/95 rounded-xl p-4 sm:p-5 border border-emerald-900/10 shadow-sm"
            >
              <h3 className="font-serif font-bold text-emerald-950 text-sm mb-1.5 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 text-xs flex items-center justify-center flex-shrink-0 font-sans">
                  Q
                </span>
                {faq.q}
              </h3>
              <p className="text-xs text-gray-600 pl-7 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 
        ============================================================
        HAVE QUESTIONS OR NEED GUIDANCE BOX
        ============================================================
      */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/95 rounded-2xl p-6 sm:p-8 border border-emerald-900/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h2 className="font-serif text-xl font-bold text-emerald-950">
              Have Questions or Need Guidance?
            </h2>
            <p className="text-xs text-gray-600">
              Contact our administration directly via phone, WhatsApp, or email.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-emerald-950 justify-center sm:justify-start">
              <a href="tel:03187779954" className="hover:text-emerald-700 flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <span>03187779954</span>
              </a>
              <a href="mailto:quraaneducationacademy@gmail.com" className="hover:text-emerald-700 flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-amber-600" />
                <span>quraaneducationacademy@gmail.com</span>
              </a>
            </div>
          </div>

          <a
            href="https://wa.me/923187779954?text=Assalam-o-Alaikum%2C%20I%20want%20to%20contact%20Quran%20Education%20Academy."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow transition-all flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
};
