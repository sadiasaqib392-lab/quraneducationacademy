import React from 'react';
import { WHY_CHOOSE_US_POINTS } from '../data/academyData';
import { Users, Heart, Award, Clock, BookOpen, CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, Star } from 'lucide-react';

interface WhyChooseUsPageProps {
  onNavigate: (page: string) => void;
}

export const WhyChooseUsPage: React.FC<WhyChooseUsPageProps> = ({ onNavigate }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-6 h-6 text-amber-600" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-emerald-600" />;
      case 'Award':
        return <Award className="w-6 h-6 text-amber-600" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-emerald-600" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-amber-600" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
          Excellence in Quranic Tutoring
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-emerald-950">
          Why Choose Quran Education Academy?
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          We combine authentic Islamic traditions with modern interactive online learning to deliver the most fulfilling Quran education for your family.
        </p>
      </div>

      {/* Six Core Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {WHY_CHOOSE_US_POINTS.map((point) => (
          <div
            key={point.id}
            className="bg-white/95 rounded-2xl p-6 sm:p-7 shadow-sm border border-emerald-900/10 flex flex-col justify-between hover:shadow-lg transition-all"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-4">
                {getIcon(point.icon)}
              </div>
              <h2 className="font-serif text-lg font-bold text-emerald-950 mb-2">
                {point.title}
              </h2>
              <p className="text-xs text-gray-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison: Academy vs Traditional Online Centers */}
      <div className="bg-white/95 rounded-2xl p-6 sm:p-8 border border-emerald-900/10 shadow-sm">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-serif text-2xl font-bold text-emerald-950">
            How We Are Different
          </h2>
          <p className="text-xs text-gray-600 mt-1">
            A clear comparison of our dedicated approach to your child’s Quranic education.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="border-b border-gray-200 bg-emerald-950 text-white">
                <th className="py-3 px-4 rounded-l-lg font-serif">Feature / Aspect</th>
                <th className="py-3 px-4 font-serif text-amber-300">Quran Education Academy</th>
                <th className="py-3 px-4 rounded-r-lg font-serif text-gray-300">Ordinary Online Centers</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-emerald-50/50">
                <td className="py-3 px-4 font-semibold text-gray-800">Class Format</td>
                <td className="py-3 px-4 text-emerald-900 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  100% 1-on-1 Individual Session
                </td>
                <td className="py-3 px-4 text-gray-500">Often crowded group calls</td>
              </tr>
              <tr className="hover:bg-emerald-50/50">
                <td className="py-3 px-4 font-semibold text-gray-800">Female Faculty</td>
                <td className="py-3 px-4 text-emerald-900 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Certified Qarias &amp; Alimat Available
                </td>
                <td className="py-3 px-4 text-gray-500">Limited or unverified staff</td>
              </tr>
              <tr className="hover:bg-emerald-50/50">
                <td className="py-3 px-4 font-semibold text-gray-800">Tajweed Emphasis</td>
                <td className="py-3 px-4 text-emerald-900 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Word-by-word Makharij &amp; Rules
                </td>
                <td className="py-3 px-4 text-gray-500">Rushed reading without rules</td>
              </tr>
              <tr className="hover:bg-emerald-50/50">
                <td className="py-3 px-4 font-semibold text-gray-800">Schedule Flexibility</td>
                <td className="py-3 px-4 text-emerald-900 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  24/7 Slots According to Your Routine
                </td>
                <td className="py-3 px-4 text-gray-500">Rigid fixed timetables</td>
              </tr>
              <tr className="hover:bg-emerald-50/50">
                <td className="py-3 px-4 font-semibold text-gray-800">Islamic Tarbiyah</td>
                <td className="py-3 px-4 text-emerald-900 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Namaz, Duas, Kalimas &amp; Ethics included
                </td>
                <td className="py-3 px-4 text-gray-500">Only basic reading without Tarbiyah</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Call To Action Box */}
      <div className="bg-emerald-950 text-white rounded-2xl p-8 border border-amber-400/40 text-center space-y-4">
        <h2 className="font-serif text-2xl font-bold text-amber-300">
          Ready to Begin Your Quranic Journey?
        </h2>
        <p className="text-xs sm:text-sm text-emerald-100 max-w-xl mx-auto leading-relaxed">
          Register with Quran Education Academy today. Our admissions team is ready to coordinate your personalized schedule.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate('admission')}
            className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-emerald-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all inline-flex items-center justify-center gap-2"
          >
            <span>Proceed to Admission Form</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/923187779954?text=Assalam-o-Alaikum%2C%20I%20want%20to%20enroll%20at%20Quran%20Education%20Academy."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all inline-flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp (03187779954)</span>
          </a>
        </div>
      </div>
    </div>
  );
};
