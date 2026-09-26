export interface Course {
  id: string;
  title: string;
  duration: string;
  level: string;
  targetAudience: string;
  iconName: string;
  description: string;
  topics: string[];
  recommendedDays: string;
}

export const COURSES: Course[] = [
  {
    id: 'noorani-qaida',
    title: 'Noorani Qaida for Beginners',
    duration: '2 - 3 Months',
    level: 'Beginner',
    targetAudience: 'Kids (4+) & Adult Beginners',
    iconName: 'BookOpen',
    description: 'The essential foundation for accurate Quran recitation. Learn Arabic alphabets, correct pronunciation (Makharij), joining letters, Harkat, and basic Tajweed rules step-by-step.',
    topics: [
      'Alphabet recognition & precise Makharij',
      'Harkat (Fatha, Kasra, Dammah) & Tanween',
      'Maddah & Leen letters pronunciation',
      'Sukoon (Jazm), Tashdeed & silent letters',
      'Rules of Noon Saakin & Meem Saakin'
    ],
    recommendedDays: '3 to 5 Days / Week'
  },
  {
    id: 'nazra-tajweed',
    title: 'Nazra Quran with Tajweed',
    duration: '6 - 12 Months',
    level: 'Intermediate',
    targetAudience: 'All Ages (Kids & Adults)',
    iconName: 'Sparkles',
    description: 'Learn to recite the Holy Quran fluently with verified Tajweed rules under the guidance of certified Qaris and Qarias. Focus on rhythm, stops (Waqf), and melodic recitation.',
    topics: [
      'Comprehensive Tajweed application',
      'Rules of Idgham, Ikhfa, Iqlab & Izhar',
      'Rules of Ra (Tafkheem & Tarqeeq) & Lam',
      'Waqf (stopping signs) & breath control',
      'Fluent continuous recitation with beauty'
    ],
    recommendedDays: '4 to 5 Days / Week'
  },
  {
    id: 'hifz-quran',
    title: 'Hifz-ul-Quran (Memorization)',
    duration: '2 - 3 Years',
    level: 'Advanced',
    targetAudience: 'Dedicated Students & Kids',
    iconName: 'Award',
    description: 'Complete Holy Quran memorization program structured with daily revision (Sabaq, Sabqi, and Manzil) guided by experienced Huffaz.',
    topics: [
      'Daily Sabaq (new memorization portion)',
      'Sabqi (recent memory consolidation)',
      'Manzil (complete rolling revision cycles)',
      'Special techniques for long-term retention',
      'Formal Hifz certificate upon completion'
    ],
    recommendedDays: '5 Days / Week'
  },
  {
    id: 'tarjuma-tafseer',
    title: 'Quran Translation & Tafseer',
    duration: '1 - 2 Years',
    level: 'Intermediate to Advanced',
    targetAudience: 'Youth, Adults & Reverts',
    iconName: 'Compass',
    description: 'Understand the deep message, context of revelation, linguistic beauty, and practical life lessons of the Holy Quran in English.',
    topics: [
      'Word-by-word vocabulary & translation',
      'Context of Revelation (Asbab al-Nuzul)',
      'Detailed thematic commentary & life guidance',
      'Stories of Prophets and lessons for modern life',
      'Core principles derived from Quranic verses'
    ],
    recommendedDays: '2 to 3 Days / Week'
  },
  {
    id: 'islamic-studies',
    title: 'Islamic Studies & Daily Duas',
    duration: '3 - 6 Months',
    level: 'All Levels',
    targetAudience: 'Kids, Teens & Adults',
    iconName: 'HeartHandshake',
    description: 'Comprehensive Islamic education covering daily Duas, Six Kalimas, Salah (Prayer) step-by-step, and essential Islamic manners.',
    topics: [
      'Six Kalimas with translation and understanding',
      'Complete Salah (Prayer), Wudu & Ghusl step-by-step',
      'Essential Duas for daily routine',
      'Seerah of Prophet Muhammad (PBUH)',
      'Islamic morals, honesty, and family values'
    ],
    recommendedDays: '2 to 3 Days / Week'
  },
  {
    id: 'qiraat-specialization',
    title: 'Ten Qira\'at Specialization',
    duration: '1 - 2 Years',
    level: 'Mastery',
    targetAudience: 'Huffaz & Advanced Students',
    iconName: 'Layers',
    description: 'Advanced study of the canonical variant readings of the Holy Quran (Hafs, Warsh, Qalun, etc.) under licensed senior scholars.',
    topics: [
      'Principles of Mutawatir Qira\'at',
      'Comparative study of Hafs and Warsh',
      'Shatibiyyah text analysis & application',
      'Vocal training and Qira\'at mastery',
      'Preparation for Sanad / Certification'
    ],
    recommendedDays: '3 Days / Week'
  }
];

export interface WhyChoosePoint {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const WHY_CHOOSE_US_POINTS: WhyChoosePoint[] = [
  {
    id: 'one-on-one',
    title: '100% 1-on-1 Individual Attention',
    description: 'Each student learns in a private one-to-one session with their dedicated tutor. No group classes or shared distractions, ensuring individual pace and focused correction.',
    icon: 'Users'
  },
  {
    id: 'female-faculty',
    title: 'Certified Female Scholars for Sisters & Kids',
    description: 'A dedicated department of certified female Quran teachers (Alimat & Qarias) offering a comfortable, respectful, and purdah-compliant learning environment.',
    icon: 'Heart'
  },
  {
    id: 'certified-tutors',
    title: 'Qualified Huffaz & Tajweed Specialists',
    description: 'Our scholars hold formal Sanad, Ijazah, and degrees from reputable Islamic universities, ensuring authentic pronunciation (Makharij) and flawless Tajweed.',
    icon: 'Award'
  },
  {
    id: 'flexible-timing',
    title: '24/7 International Schedule Flexibility',
    description: 'Classes scheduled according to your personal routine across all timezones worldwide (Pakistan, UK, USA, Canada, Australia, Middle East, and Europe).',
    icon: 'Clock'
  },
  {
    id: 'islamic-tarbiyah',
    title: 'Quran with Character Building (Tarbiyah)',
    description: 'Beyond recitation, we teach Prayer with translation, Six Kalimas, daily Duas, Sunnah manners, and moral values to nurture strong Islamic character.',
    icon: 'BookOpen'
  },
  {
    id: 'progress-monitoring',
    title: 'Regular Student Progress Evaluations',
    description: 'Structured monthly evaluations, attendance tracking, and teacher-parent communication to keep you informed about your child’s development.',
    icon: 'CheckCircle2'
  }
];

export const FAQS = [
  {
    q: 'How do online classes take place?',
    a: 'Classes are conducted 1-on-1 via Zoom, Skype, or WhatsApp screen sharing. The teacher shares high-definition digital Quran pages and interactive Qaida tools with real-time audio interaction.'
  },
  {
    q: 'Are female teachers available for girls and sisters?',
    a: 'Yes, we have a dedicated department of certified female Quran teachers (Alimat & Qarias) who conduct classes exclusively for sisters and young children.'
  },
  {
    q: 'What languages do tutors speak?',
    a: 'Our tutors are bilingual and fluent in English and Urdu, making communication seamless for overseas children and adults.'
  },
  {
    q: 'Can students from outside Pakistan join?',
    a: 'Yes, we serve students worldwide across the UK, USA, Canada, Australia, UAE, Saudi Arabia, and Europe, accommodating all timezones 24/7.'
  }
];
