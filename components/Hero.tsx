import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import heroProduct from './hero-product.jpg';

interface HeroProps {
  onScrollToOffer: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToOffer }) => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-stone-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="space-y-8 text-center md:text-left animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur border border-stone-200 rounded-full px-4 py-1.5 shadow-sm">
              <div className="flex space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                ))}
              </div>
              <span className="text-xs font-semibold text-stone-600 tracking-wide uppercase">{t('hero.badge')}</span>
            </div>

            <h1 className="font-serif text-4xl md:text-6xl text-stone-900 leading-[1.1]">
              {t('hero.title')} <span className="italic text-stone-600">{t('hero.titleAccent')}</span>.
            </h1>

            <p className="text-lg md:text-xl text-stone-600 max-w-lg mx-auto md:mx-0 leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={onScrollToOffer}
                className="px-8 py-4 bg-stone-900 text-white font-medium rounded-sm shadow-lg hover:bg-stone-800 transition-all transform hover:-translate-y-0.5"
              >
                {t('hero.cta')}
              </button>
              <button
                onClick={() => document.getElementById('results')?.scrollIntoView({behavior: 'smooth'})}
                className="px-8 py-4 bg-transparent border border-stone-300 text-stone-700 font-medium rounded-sm hover:border-stone-900 transition-all"
              >
                {t('hero.ctaSecondary')}
              </button>
            </div>

            <p className="text-xs text-stone-400">
              {t('hero.disclaimer')}
            </p>
          </div>

          {/* Product Image */}
          <div className="relative animate-fade-in flex justify-center">
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              {/* Product Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-50 to-stone-100 rounded-full blur-2xl opacity-60 transform scale-90"></div>

              <img
                src={heroProduct}
                alt="Charmétique Scar Cream Jar"
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
              />

               {/* Floating Badge */}
               <div className="absolute -bottom-4 -left-4 md:bottom-10 md:-left-8 bg-white/90 backdrop-blur p-4 rounded-sm shadow-xl border border-stone-100 max-w-[200px] z-20">
                  <p className="font-serif text-2xl text-stone-900">{t('hero.badge8wks')}</p>
                  <p className="text-xs text-stone-500 uppercase tracking-wider mt-1">{t('hero.badgeConsistent')}</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
