import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  image: string;
  title: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    image: '/slider1.jpg',
    title: 'Online Quran',
  },
  {
    id: 2,
    image: '/slider2.jpg',
    title: 'Female Teachers',
  },
  {
    id: 3,
    image: '/slider3.jpg',
    title: '24/7 Classes',
  },
];

interface ImageSliderProps {
  onNavigate: (page: string) => void;
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ onNavigate: _onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  const current = SLIDES[currentIndex];

  return (
    <div
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-[280px] sm:h-[380px] md:h-[440px] w-full overflow-hidden rounded-2xl shadow-lg border border-emerald-900/10 bg-emerald-950">
        {/* Slides Images */}
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-[0.75]"
            />
            {/* Gentle dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-black/20 to-transparent" />
          </div>
        ))}

        {/* Slide Content Overlay: Exactly 1-2 words only */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-10 text-white">
          <div className="animate-in fade-in duration-300">
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-wide drop-shadow-lg">
              {current.title}
            </h2>
          </div>
        </div>

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all focus:outline-none"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all focus:outline-none"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* 3 Indicator Dots */}
        <div className="absolute bottom-4 right-6 sm:right-10 z-30 flex items-center gap-2">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-7 bg-amber-400'
                  : 'w-2 bg-white/60 hover:bg-white/90'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
