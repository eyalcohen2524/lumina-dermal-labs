import React from 'react';
import { Droplets, ShieldCheck, Microscope, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Ingredients = () => {
  const { t } = useLanguage();

  const ingredients = [
    {
      name: t('ingredients.alliumCepa'),
      desc: t('ingredients.alliumCepaDesc'),
      icon: <Microscope className="w-6 h-6 text-stone-700" />
    },
    {
      name: t('ingredients.aloeVera'),
      desc: t('ingredients.aloeVeraDesc'),
      icon: <ShieldCheck className="w-6 h-6 text-stone-700" />
    },
    {
      name: t('ingredients.hyaluronate'),
      desc: t('ingredients.hyaluronateDesc'),
      icon: <Droplets className="w-6 h-6 text-stone-700" />
    },
    {
      name: t('ingredients.vitaminE'),
      desc: t('ingredients.vitaminEDesc'),
      icon: <Sparkles className="w-6 h-6 text-stone-700" />
    }
  ];

  return (
    <section id="science" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-6">
            <span className="text-stone-500 uppercase tracking-widest text-xs font-semibold">{t('ingredients.label')}</span>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 leading-tight">
              {t('ingredients.title')}
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              {t('ingredients.description')}
            </p>

            <div className="pt-4">
              <div className="flex items-center space-x-4">
                 <div className="h-px bg-stone-300 w-12"></div>
                 <span className="text-sm font-semibold text-stone-900">{t('ingredients.formula')}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ingredients.map((ing, idx) => (
              <div key={idx} className="bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow border border-stone-100">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mb-4">
                  {ing.icon}
                </div>
                <h3 className="text-lg font-serif text-stone-900 mb-2">{ing.name}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{ing.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Ingredients;