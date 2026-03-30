import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const OurStory: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-20 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-stone-500 uppercase">{t('story.label')}</span>
          <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mt-4 mb-6">{t('story.title')}</h1>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <p className="text-lg text-stone-600 leading-relaxed">
            {t('story.description')}
          </p>
        </div>

        {/* Mission */}
        <div className="mb-16 p-8 bg-stone-50 rounded-sm border border-stone-100">
          <h2 className="text-3xl font-serif text-stone-900 mb-6">{t('story.missionTitle')}</h2>
          <p className="text-stone-600 leading-relaxed text-lg">
            {t('story.missionText')}
          </p>
        </div>

        {/* Vision */}
        <div className="p-8 bg-stone-50 rounded-sm border border-stone-100">
          <h2 className="text-3xl font-serif text-stone-900 mb-6">{t('story.visionTitle')}</h2>
          <p className="text-stone-600 leading-relaxed text-lg">
            {t('story.visionText')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
