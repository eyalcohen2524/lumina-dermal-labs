import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { RotateCcw, CheckCircle, XCircle, CreditCard, Package } from 'lucide-react';

const ReturnsPolicy: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-20 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6 text-center">{t('returns.title')}</h1>
        <p className="text-lg text-stone-600 text-center mb-16 max-w-2xl mx-auto">{t('returns.intro')}</p>

        <div className="space-y-8">
          <div className="flex gap-5 p-6 bg-stone-50 rounded-sm border border-stone-100">
            <div className="shrink-0 mt-1 p-3 bg-white rounded-full shadow-sm">
              <CheckCircle className="w-6 h-6 text-stone-900" />
            </div>
            <div>
              <h3 className="font-serif text-xl text-stone-900 mb-2">{t('returns.eligibilityTitle')}</h3>
              <p className="text-stone-600">{t('returns.eligibilityText')}</p>
            </div>
          </div>

          <div className="flex gap-5 p-6 bg-stone-50 rounded-sm border border-stone-100">
            <div className="shrink-0 mt-1 p-3 bg-white rounded-full shadow-sm">
              <RotateCcw className="w-6 h-6 text-stone-900" />
            </div>
            <div>
              <h3 className="font-serif text-xl text-stone-900 mb-2">{t('returns.howToTitle')}</h3>
              <p className="text-stone-600">{t('returns.howToText')}</p>
            </div>
          </div>

          <div className="flex gap-5 p-6 bg-stone-50 rounded-sm border border-stone-100">
            <div className="shrink-0 mt-1 p-3 bg-white rounded-full shadow-sm">
              <CreditCard className="w-6 h-6 text-stone-900" />
            </div>
            <div>
              <h3 className="font-serif text-xl text-stone-900 mb-2">{t('returns.refundsTitle')}</h3>
              <p className="text-stone-600">{t('returns.refundsText')}</p>
            </div>
          </div>

          <div className="flex gap-5 p-6 bg-stone-50 rounded-sm border border-stone-100">
            <div className="shrink-0 mt-1 p-3 bg-white rounded-full shadow-sm">
              <XCircle className="w-6 h-6 text-stone-900" />
            </div>
            <div>
              <h3 className="font-serif text-xl text-stone-900 mb-2">{t('returns.exclusionsTitle')}</h3>
              <p className="text-stone-600">{t('returns.exclusionsText')}</p>
            </div>
          </div>

          <div className="flex gap-5 p-6 bg-stone-50 rounded-sm border border-stone-100">
            <div className="shrink-0 mt-1 p-3 bg-white rounded-full shadow-sm">
              <Package className="w-6 h-6 text-stone-900" />
            </div>
            <div>
              <h3 className="font-serif text-xl text-stone-900 mb-2">{t('returns.shippingCostsTitle')}</h3>
              <p className="text-stone-600">{t('returns.shippingCostsText')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnsPolicy;
