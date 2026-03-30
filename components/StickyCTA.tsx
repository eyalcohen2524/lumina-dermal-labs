import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface StickyCTAProps {
  onScrollToOffer: () => void;
}

const StickyCTA: React.FC<StickyCTAProps> = ({ onScrollToOffer }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approx 600px)
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-stone-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="hidden md:block">
          <p className="font-serif text-stone-900 font-medium">{t('sticky.productName')}</p>
          <div className="flex items-center space-x-2 text-xs text-stone-500">
             <span className="text-green-600 font-bold">{t('sticky.inStock')}</span>
          </div>
        </div>

        <div className="w-full md:w-auto flex items-center gap-4">
           <div className="hidden sm:block text-right">
             <span className="block text-xs text-stone-400 line-through">€49.99</span>
             <span className="block font-bold text-stone-900">€34.99</span>
           </div>
           <button
             onClick={onScrollToOffer}
             className="flex-1 md:flex-none w-full md:w-auto px-8 py-3 bg-stone-900 text-white font-medium rounded-sm hover:bg-stone-800 transition-colors"
           >
             {t('sticky.cta')}
           </button>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
