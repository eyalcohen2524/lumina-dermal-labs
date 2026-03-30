import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Truck, Clock, MapPin, Search, MessageCircle } from 'lucide-react';

const ShippingPolicy: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-20 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6 text-center">{t('shipping.title')}</h1>
        <p className="text-lg text-stone-600 text-center mb-16 max-w-2xl mx-auto">{t('shipping.intro')}</p>

        <div className="space-y-8">
          <div className="flex gap-5 p-6 bg-stone-50 rounded-sm border border-stone-100">
            <div className="shrink-0 mt-1 p-3 bg-white rounded-full shadow-sm">
              <MapPin className="w-6 h-6 text-stone-900" />
            </div>
            <div>
              <h3 className="font-serif text-xl text-stone-900 mb-2">{t('shipping.destinationsTitle')}</h3>
              <p className="text-stone-600">{t('shipping.destinationsText')}</p>
            </div>
          </div>

          <div className="flex gap-5 p-6 bg-stone-50 rounded-sm border border-stone-100">
            <div className="shrink-0 mt-1 p-3 bg-white rounded-full shadow-sm">
              <Truck className="w-6 h-6 text-stone-900" />
            </div>
            <div>
              <h3 className="font-serif text-xl text-stone-900 mb-2">{t('shipping.costsTitle')}</h3>
              <p className="text-stone-600">{t('shipping.costsText')}</p>
            </div>
          </div>

          <div className="flex gap-5 p-6 bg-stone-50 rounded-sm border border-stone-100">
            <div className="shrink-0 mt-1 p-3 bg-white rounded-full shadow-sm">
              <Search className="w-6 h-6 text-stone-900" />
            </div>
            <div>
              <h3 className="font-serif text-xl text-stone-900 mb-2">{t('shipping.trackingTitle')}</h3>
              <p className="text-stone-600">{t('shipping.trackingText')}</p>
            </div>
          </div>

          <div className="flex gap-5 p-6 bg-stone-50 rounded-sm border border-stone-100">
            <div className="shrink-0 mt-1 p-3 bg-white rounded-full shadow-sm">
              <Clock className="w-6 h-6 text-stone-900" />
            </div>
            <div>
              <h3 className="font-serif text-xl text-stone-900 mb-2">{t('shipping.delaysTitle')}</h3>
              <p className="text-stone-600">{t('shipping.delaysText')}</p>
            </div>
          </div>

          <div className="flex gap-5 p-6 bg-stone-50 rounded-sm border border-stone-100">
            <div className="shrink-0 mt-1 p-3 bg-white rounded-full shadow-sm">
              <MessageCircle className="w-6 h-6 text-stone-900" />
            </div>
            <div>
              <h3 className="font-serif text-xl text-stone-900 mb-2">{t('shipping.questionsTitle')}</h3>
              <p className="text-stone-600">{t('shipping.questionsText')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
