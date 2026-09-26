import React, { useState } from 'react';
import { COURSES } from '../data/academyData';
import { CheckCircle2, Users, ArrowRight } from 'lucide-react';

interface CoursesPageProps {
  onNavigate: (page: string) => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({ onNavigate }) => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Beginner' | 'Intermediate' | 'Advanced'>('All');

  const filteredCourses = selectedFilter === 'All'
    ? COURSES
    : COURSES.filter(c => c.level.toLowerCase().includes(selectedFilter.toLowerCase()));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
          Comprehensive Islamic Education
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-emerald-950">
          Courses &amp; Curriculum
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          From basic Arabic alphabet recognition to advanced Ten Qira&apos;at and Hifz, explore our customized 1-on-1 Quranic courses taught by qualified male and female tutors.
        </p>

        {/* Filter Badges */}
        <div className="flex items-center justify-center gap-2 pt-2 flex-wrap">
          {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedFilter === filter
                  ? 'bg-emerald-900 text-amber-300 shadow-sm'
                  : 'bg-white/80 text-gray-700 hover:bg-emerald-50 border border-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white/95 rounded-2xl p-6 shadow-sm border border-emerald-900/10 flex flex-col justify-between hover:shadow-lg transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  {course.level}
                </span>
              </div>

              <h2 className="font-serif text-xl font-bold text-emerald-950 mb-2">
                {course.title}
              </h2>

              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                {course.description}
              </p>

              <div className="bg-emerald-50/70 p-3 rounded-xl mb-4 space-y-1.5 text-xs text-emerald-900">
                <div className="flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                  <span><strong>Target Audience:</strong> {course.targetAudience}</span>
                </div>
              </div>

              <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                Key Topics Covered:
              </h3>
              <ul className="space-y-1.5 mb-2">
                {course.topics.map((topic, i) => (
                  <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Advisory Banner */}
      <div className="bg-emerald-950 text-white rounded-2xl p-8 border border-amber-400/40 text-center space-y-4">
        <h2 className="font-serif text-2xl font-bold text-amber-300">
          Unsure Which Course Is Right for Your Child?
        </h2>
        <p className="text-xs sm:text-sm text-emerald-100 max-w-xl mx-auto leading-relaxed">
          Consult with our senior teachers for an academic evaluation. We will assess the student’s current recitation level and recommend the ideal starting point.
        </p>
        <button
          onClick={() => onNavigate('admission')}
          className="bg-amber-500 hover:bg-amber-600 text-emerald-950 font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm transition-all inline-flex items-center gap-2"
        >
          <span>Apply for Course Assessment</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
