import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Clock, MapPin, Globe, CheckCircle2, Send } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Contact Inquiry - Quran Education Academy*
Name: ${name}
Phone/WhatsApp: ${phone}
Message: ${message}`;
    window.open(`https://wa.me/923187779954?text=${encodeURIComponent(text)}`, '_blank');
    setSent(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
          Get in Touch
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-emerald-950">
          Contact Quran Education Academy
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          Have questions regarding class timings, fees, curriculum, or tutor assignment? Our admissions support team is available 24/7.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info Cards */}
        <div className="space-y-4">
          <div className="bg-white/95 p-6 rounded-2xl border border-emerald-900/10 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">Official Contact Number</p>
              <a
                href="tel:03187779954"
                className="text-lg font-bold text-emerald-950 hover:text-emerald-800 block mt-1"
              >
                03187779954
              </a>
              <p className="text-xs text-gray-500 mt-1">Direct call or SMS helpline</p>
            </div>
          </div>

          <div className="bg-white/95 p-6 rounded-2xl border border-emerald-900/10 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">Official WhatsApp</p>
              <a
                href="https://wa.me/923187779954?text=Assalam-o-Alaikum%2C%20I%20need%20assistance%20regarding%20Quran%20Education%20Academy."
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-emerald-600 hover:text-emerald-700 block mt-1"
              >
                +92 318 7779954
              </a>
              <p className="text-xs text-gray-500 mt-1">Instant replies on WhatsApp</p>
            </div>
          </div>

          <div className="bg-white/95 p-6 rounded-2xl border border-emerald-900/10 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">Official Email</p>
              <a
                href="mailto:quraaneducationacademy@gmail.com"
                className="text-sm sm:text-base font-bold text-emerald-950 hover:text-emerald-800 break-all block mt-1"
              >
                quraaneducationacademy@gmail.com
              </a>
              <p className="text-xs text-gray-500 mt-1">Formal inquiries &amp; applications</p>
            </div>
          </div>

          <div className="bg-emerald-950 text-white p-6 rounded-2xl border border-amber-400/40 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <Clock className="w-4 h-4" />
              <span>Operating Hours: 24/7</span>
            </div>
            <p className="text-xs text-emerald-200 leading-relaxed">
              We teach students worldwide accommodating European, North American, Australian, Gulf, and Asian standard time zones seamlessly.
            </p>
          </div>
        </div>

        {/* Quick Message Form */}
        <div className="lg:col-span-2 bg-white/95 p-6 sm:p-8 rounded-2xl border border-emerald-900/10 shadow-sm">
          <h2 className="font-serif text-xl font-bold text-emerald-950 mb-2">
            Send a Quick Inquiry
          </h2>
          <p className="text-xs text-gray-600 mb-6">
            Leave us a message, and our coordinator will respond to your WhatsApp promptly.
          </p>

          {sent && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span>Thank you! Your message has been sent to our official WhatsApp helpline (03187779954).</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Abdullah Khan"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                WhatsApp / Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 03187779954"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Message / Question *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Ask any question about courses, admissions, timings, or tutors..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-900 hover:bg-emerald-950 text-amber-300 font-bold py-3 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm"
            >
              <Send className="w-4 h-4 text-amber-400" />
              <span>Send Message to WhatsApp</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
