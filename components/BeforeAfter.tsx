import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import afterPhoto from './after-photo.jpg';
import beforePhoto from './before-photo.png';

const BeforeAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const { t } = useLanguage();

  const handleMouseMove = (e: React.MouseEvent | MouseEvent) => {
    if (!isResizing || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent | TouchEvent) => {
    if (!isResizing || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  useEffect(() => {
    const stopResize = () => setIsResizing(false);
    window.addEventListener('mouseup', stopResize);
    window.addEventListener('touchend', stopResize);
    window.addEventListener('mousemove', handleMouseMove as any);
    window.addEventListener('touchmove', handleTouchMove as any);

    return () => {
      window.removeEventListener('mouseup', stopResize);
      window.removeEventListener('touchend', stopResize);
      window.removeEventListener('mousemove', handleMouseMove as any);
      window.removeEventListener('touchmove', handleTouchMove as any);
    };
  }, [isResizing]);

  const stats = [
    { label: t('beforeAfter.texture'), val: t('beforeAfter.textureValue') },
    { label: t('beforeAfter.hydration'), val: t('beforeAfter.hydrationValue') },
    { label: t('beforeAfter.redness'), val: t('beforeAfter.rednessValue') },
    { label: t('beforeAfter.elasticity'), val: t('beforeAfter.elasticityValue') },
  ];

  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-stone-500 uppercase tracking-widest text-xs font-semibold">{t('beforeAfter.label')}</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-serif text-stone-900">
            {t('beforeAfter.title')}
          </h2>
          <p className="mt-4 text-stone-600 max-w-2xl mx-auto">
            {t('beforeAfter.description')}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto shadow-2xl rounded-sm overflow-hidden border-4 border-white select-none">
          <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] md:aspect-[16/9] cursor-col-resize"
            onMouseDown={() => setIsResizing(true)}
            onTouchStart={() => setIsResizing(true)}
          >
            {/* After Image (Background) */}
            <img
              src={afterPhoto}
              alt="After using Charmétique"
              className="absolute inset-0 w-full h-full object-cover"
            />
             <div className="absolute top-4 right-4 bg-stone-900/70 backdrop-blur text-white px-3 py-1 text-xs font-semibold rounded">
              {t('beforeAfter.after')}
            </div>

            {/* Before Image (Foreground with Clip) */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={beforePhoto}
                alt="Before using Charmétique"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-stone-900/70 backdrop-blur text-white px-3 py-1 text-xs font-semibold rounded">
                {t('beforeAfter.before')}
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 flex items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center -ml-3.5 text-stone-900">
                <ArrowLeftRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-4 text-center text-xs text-stone-400 max-w-2xl mx-auto">
          {t('beforeAfter.disclaimer')}
        </p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, idx) => (
                <div key={idx} className="p-4 bg-stone-50 rounded">
                    <p className="text-2xl md:text-3xl font-serif text-stone-900">{stat.val}</p>
                    <p className="text-xs md:text-sm text-stone-500 uppercase tracking-wide mt-1">{stat.label}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
