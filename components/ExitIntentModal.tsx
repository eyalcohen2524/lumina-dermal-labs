import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const ExitIntentModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
        onClick={() => setIsVisible(false)}
      />
      <div className="relative bg-white rounded-sm shadow-2xl max-w-lg w-full p-8 animate-fade-in text-center">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-900"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-serif text-3xl text-stone-900 mb-2">Wait! Don't Miss Out.</h3>
        <p className="text-stone-600 mb-6">
          Get <span className="font-bold text-stone-900">10% OFF</span> your first order to start your skin transformation today.
        </p>

        <div className="bg-stone-50 p-4 border border-stone-200 mb-6 rounded-sm">
            <span className="text-sm font-bold tracking-widest text-stone-900">CODE: GLOW10</span>
        </div>

        <button 
          onClick={() => {
            setIsVisible(false);
            const offerSection = document.getElementById('offer');
            offerSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="w-full bg-stone-900 text-white py-3 rounded-sm font-medium hover:bg-stone-800 transition-colors"
        >
          Apply Discount & Shop
        </button>
        <button 
            onClick={() => setIsVisible(false)}
            className="mt-4 text-xs text-stone-400 hover:text-stone-600 underline"
        >
            No thanks, I don't want smoother skin
        </button>
      </div>
    </div>
  );
};

export default ExitIntentModal;