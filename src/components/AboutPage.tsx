import React from 'react';
import { ShieldCheck, Award, Heart, CheckCircle2, Users, Globe, BookOpen } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
      {/* Intro */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
          About Quran Education Academy
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-emerald-950">
          Serving the Holy Quran Worldwide
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          Quran Education Academy was founded with the sacred mission to make authentic Quranic education easily accessible to Muslim families across the globe from the comfort of their homes.
        </p>
      </div>

      {/* Main Philosophy Card */}
      <div className="bg-white/95 rounded-2xl p-6 sm:p-10 border border-emerald-900/10 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-emerald-950">
            Our Mission &amp; Educational Vision
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Reciting the Holy Quran with correct Makharij (pronunciation) and Tajweed is an obligation upon every believer. Our academy connects students directly with certified Quran tutors through state-of-the-art interactive digital tools.
          </p>
          <div className="space-y-2.5 pt-2">
            <div className="flex items-start gap-2.5 text-xs text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Pure 1-on-1 Instruction:</strong> No group distractions, ensuring each student masters every letter with accuracy.</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Spiritual Tarbiyah:</strong> Incorporating daily Sunnah, Namaz, Kalimas, and moral ethics into lessons.</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Global Reach:</strong> Serving expatriate families in UK, USA, Canada, Australia, and Middle East.</span>
            </div>
          </div>
        </div>

        {/* Golden Emblem Banner */}
        <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 rounded-2xl p-8 text-center text-white border border-emerald-800 shadow-md">
          <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full p-2 border border-white flex items-center justify-center shadow-md">
            <img src="/logo.svg" alt="Quran Education Academy Emblem" className="w-20 h-20 object-contain" />
          </div>
          <h3 className="font-serif text-xl font-bold text-amber-300 mb-1">
            Quran Education Academy
          </h3>
          <p className="text-xs text-emerald-200">
            Verified Online Madrasa
          </p>
          <div className="mt-4 pt-4 border-t border-emerald-800 text-xs text-emerald-300">
            Helpline: <span className="text-amber-300 font-bold">03187779954</span>
          </div>
        </div>
      </div>

      {/* Sisters Department Highlight */}
      <div className="bg-amber-50/80 rounded-2xl p-6 sm:p-8 border border-amber-200 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-200/60 text-amber-900 text-xs font-bold">
              <Heart className="w-3.5 h-3.5 text-amber-800 fill-current" />
              <span>Specialized Department for Sisters &amp; Young Children</span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-emerald-950">
              Qualified Female Quran Teachers (Qarias)
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              We deeply respect Islamic family values and modesty. Sisters and young girls can learn comfortably with qualified female scholars in a safe and supportive 1-on-1 virtual environment.
            </p>
          </div>
          <button
            onClick={() => onNavigate('admission')}
            className="bg-emerald-900 hover:bg-emerald-950 text-amber-300 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all flex-shrink-0"
          >
            Request Female Tutor
          </button>
        </div>
      </div>

      {/* Faculty Credentials */}
      <div>
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="font-serif text-2xl font-bold text-emerald-950">
            Tutor Selection &amp; Verification
          </h2>
          <p className="text-xs text-gray-600 mt-1">
            Every tutor undergoes rigorous evaluation before teaching students.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/95 p-5 rounded-xl border border-emerald-900/10 text-center">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-900 font-bold flex items-center justify-center mx-auto mb-3">
              1
            </div>
            <h3 className="font-serif font-bold text-emerald-950 text-sm mb-1">Sanad &amp; Hifz Checked</h3>
            <p className="text-xs text-gray-600">Verification of authentic Quranic degrees and Ijazah from recognized Islamic institutes.</p>
          </div>

          <div className="bg-white/95 p-5 rounded-xl border border-emerald-900/10 text-center">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-900 font-bold flex items-center justify-center mx-auto mb-3">
              2
            </div>
            <h3 className="font-serif font-bold text-emerald-950 text-sm mb-1">Tajweed Mastery</h3>
            <p className="text-xs text-gray-600">Strict testing of Makharij, rules of Waqf, and melodic pronunciation.</p>
          </div>

          <div className="bg-white/95 p-5 rounded-xl border border-emerald-900/10 text-center">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-900 font-bold flex items-center justify-center mx-auto mb-3">
              3
            </div>
            <h3 className="font-serif font-bold text-emerald-950 text-sm mb-1">Patience with Kids</h3>
            <p className="text-xs text-gray-600">Special pedagogical training for teaching young children with care and encouragement.</p>
          </div>

          <div className="bg-white/95 p-5 rounded-xl border border-emerald-900/10 text-center">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-900 font-bold flex items-center justify-center mx-auto mb-3">
              4
            </div>
            <h3 className="font-serif font-bold text-emerald-950 text-sm mb-1">Bilingual Communication</h3>
            <p className="text-xs text-gray-600">Fluent in English and Urdu to communicate comfortably with overseas students.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
