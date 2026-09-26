import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  return (
    <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-6 right-6 z-50 flex items-center group">
      <div className="hidden sm:block mr-3 bg-white/95 text-emerald-950 font-bold text-xs py-1.5 px-3 rounded-full shadow-lg border border-emerald-100 opacity-90 group-hover:opacity-100 transition-opacity">
        WhatsApp: 03187779954
      </div>
      <a
        href="https://wa.me/923187779954?text=Assalam-o-Alaikum%2C%20I%20want%20to%20inquire%20about%20classes%20at%20Quran%20Education%20Academy."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat with Quran Education Academy"
        className="w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all border-2 border-white ring-4 ring-emerald-500/30"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </a>
    </aside>
  );
};
