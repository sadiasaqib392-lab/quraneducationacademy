import React, { useState } from 'react';
import { MessageCircle, Mail, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COURSES } from '../data/academyData';

export const AdmissionPage: React.FC = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    guardianName: '',
    age: '',
    gender: 'Male',
    preferredTutor: 'Female Tutor (For Sisters & Young Kids)',
    course: 'Noorani Qaida for Beginners',
    country: '',
    city: '',
    whatsappNumber: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const constructWhatsAppMessage = () => {
    return `*Online Admission Application*
*Academy:* Quran Education Academy
-------------------------------------
*Student Name:* ${formData.studentName || 'Not specified'}
*Parent/Guardian:* ${formData.guardianName || 'N/A'}
*Age / Gender:* ${formData.age || 'N/A'} (${formData.gender})
*Preferred Teacher:* ${formData.preferredTutor}
*Selected Course:* ${formData.course}
*Location:* ${formData.city ? `${formData.city}, ` : ''}${formData.country || 'Not specified'}
*Student WhatsApp:* ${formData.whatsappNumber || 'N/A'}
*Special Notes:* ${formData.message || 'None'}
-------------------------------------
Assalam-o-Alaikum, I would like to enroll for classes at Quran Education Academy.`;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = constructWhatsAppMessage();
    const whatsappUrl = `https://wa.me/923187779954?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = constructWhatsAppMessage();
    const mailtoUrl = `mailto:quraaneducationacademy@gmail.com?subject=${encodeURIComponent(`Admission Request - ${formData.studentName || 'New Student'}`)}&body=${encodeURIComponent(msg)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Page Title */}
      <div className="text-center space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
          Online Enrollment
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-emerald-950">
          Online Admission Form
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
          Fill this quick form to register for classes. You can send your registration directly to our official WhatsApp (<strong>03187779954</strong>) or Email.
        </p>
      </div>

      {submitted && (
        <div className="bg-emerald-50 border-2 border-emerald-500 rounded-2xl p-6 text-center space-y-2 animate-in fade-in">
          <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h2 className="font-serif text-lg font-bold text-emerald-950">
            JazakAllah Khair! Application Initiated
          </h2>
          <p className="text-xs text-emerald-800 max-w-md mx-auto">
            Your admission request has been formatted. Our administration will contact your WhatsApp number (<strong>{formData.whatsappNumber || '03187779954'}</strong>) to confirm your schedule and assign your tutor.
          </p>
        </div>
      )}

      {/* Main Form Container */}
      <div className="bg-white/95 rounded-2xl shadow-md border border-emerald-900/10 p-6 sm:p-8">
        <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
          {/* Section 1: Student Information */}
          <div>
            <h2 className="font-serif text-base font-bold text-emerald-950 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 text-xs flex items-center justify-center font-sans font-bold">1</span>
              <span>Student Details</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Student Full Name *
                </label>
                <input
                  type="text"
                  name="studentName"
                  required
                  placeholder="e.g. Muhammad / Fatima"
                  value={formData.studentName}
                  onChange={handleChange}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Parent / Guardian Name
                </label>
                <input
                  type="text"
                  name="guardianName"
                  placeholder="e.g. Abdul Rahman"
                  value={formData.guardianName}
                  onChange={handleChange}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Student Age *
                </label>
                <input
                  type="text"
                  name="age"
                  required
                  placeholder="e.g. 7 Years / Adult"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-700 focus:outline-none bg-white"
                >
                  <option value="Male">Male (Boy / Brother)</option>
                  <option value="Female">Female (Girl / Sister)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 2: Course & Teacher Preference */}
          <div>
            <h2 className="font-serif text-base font-bold text-emerald-950 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 text-xs flex items-center justify-center font-sans font-bold">2</span>
              <span>Course &amp; Teacher Selection</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Select Course *
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-700 focus:outline-none bg-white"
                >
                  {COURSES.map((c) => (
                    <option key={c.id} value={c.title}>
                      {c.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Preferred Teacher *
                </label>
                <select
                  name="preferredTutor"
                  value={formData.preferredTutor}
                  onChange={handleChange}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-700 focus:outline-none bg-white"
                >
                  <option value="Female Tutor (For Sisters & Young Kids)">
                    Female Tutor (Certified Qaria / Alima)
                  </option>
                  <option value="Male Tutor (Certified Qari / Hafiz)">
                    Male Tutor (Certified Qari / Hafiz)
                  </option>
                  <option value="Either / No Preference">
                    Either / Academy Recommendation
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 3: Contact Details */}
          <div>
            <h2 className="font-serif text-base font-bold text-emerald-950 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 text-xs flex items-center justify-center font-sans font-bold">3</span>
              <span>Contact Details</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  WhatsApp Number (with Country Code) *
                </label>
                <input
                  type="tel"
                  name="whatsappNumber"
                  required
                  placeholder="e.g. +92 318 7779954 or +44 7..."
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Country of Residence *
                </label>
                <input
                  type="text"
                  name="country"
                  required
                  placeholder="e.g. Pakistan, UK, USA, UAE..."
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  City (Optional)
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="e.g. London, Lahore, Dallas, Dubai..."
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Any Special Note or Student Background (Optional)
              </label>
              <textarea
                name="message"
                rows={2}
                placeholder="Mention any prior Quranic learning or specific request..."
                value={formData.message}
                onChange={handleChange}
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
              />
            </div>
          </div>

          {/* Submission Buttons */}
          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="w-full sm:flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Submit &amp; Open in WhatsApp (03187779954)</span>
            </button>

            <button
              type="button"
              onClick={handleEmailSubmit}
              className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3.5 px-5 rounded-xl border border-gray-300 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm"
            >
              <Mail className="w-4 h-4 text-emerald-800" />
              <span>Send via Email</span>
            </button>
          </div>

          <div className="text-center text-[11px] text-gray-500 pt-1 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>We never share your phone number or personal details. 100% Secure &amp; Confidential.</span>
          </div>
        </form>
      </div>
    </div>
  );
};
