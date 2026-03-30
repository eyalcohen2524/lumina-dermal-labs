import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import productCollection from './product-collection.png';

const SHOPIFY_VARIANT_ID = '49442952020315';
const SHOPIFY_STORE = '11ze23-ty.myshopify.com';

interface BundleDisplay {
  id: string;
  titleKey: string;
  subtitleKey: string;
  quantity: number;
  price: number;
  originalPrice: number;
  discount: number;
  popular?: boolean;
}

const OfferStack: React.FC = () => {
  const [selectedBundle, setSelectedBundle] = useState<string>('2-units');
  const { t } = useLanguage();

  const bundles: BundleDisplay[] = [
    {
      id: '1-unit',
      titleKey: 'offer.starter',
      subtitleKey: 'offer.starterUnits',
      quantity: 1,
      price: 34.99,
      originalPrice: 49.99,
      discount: 30
    },
    {
      id: '2-units',
      titleKey: 'offer.popular',
      subtitleKey: 'offer.popularUnits',
      quantity: 2,
      price: 69.98,
      originalPrice: 99.98,
      discount: 30,
      popular: true
    },
    {
      id: '3-units',
      titleKey: 'offer.bestValue',
      subtitleKey: 'offer.bestValueUnits',
      quantity: 3,
      price: 104.97,
      originalPrice: 149.97,
      discount: 30
    }
  ];

  const currentBundle = bundles.find(b => b.id === selectedBundle)!;
  const checkoutUrl = `https://${SHOPIFY_STORE}/cart/${SHOPIFY_VARIANT_ID}:${currentBundle.quantity}`;

  return (
    <section id="offer" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: Product Showcase */}
          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-sm bg-stone-50 aspect-square flex items-center justify-center p-8">
              <img
                src={productCollection}
                alt={t(currentBundle.titleKey)}
                className="w-full h-full object-cover"
              />
              {currentBundle.popular && (
                <div className="absolute top-4 left-4 bg-stone-900 text-white px-3 py-1 text-xs font-bold tracking-wider uppercase">
                  {t('offer.bestSeller')}
                </div>
              )}
            </div>

          </div>

          {/* Right: Selection Logic */}
          <div className="flex flex-col justify-center">
            <div className="mb-2 inline-flex items-center space-x-2 text-red-600 bg-red-50 px-3 py-1 rounded-full w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              <span className="text-xs font-bold tracking-wide">{t('offer.badge')}</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-2">{t('offer.title')}</h2>
            <p className="text-stone-500 mb-8">{t('offer.subtitle')}</p>

            <div className="space-y-4 mb-8">
              {bundles.map((bundle) => (
                <div
                  key={bundle.id}
                  onClick={() => setSelectedBundle(bundle.id)}
                  className={`relative cursor-pointer border rounded-sm p-4 transition-all ${
                    selectedBundle === bundle.id
                      ? 'border-stone-900 bg-stone-50 shadow-md ring-1 ring-stone-900'
                      : 'border-stone-200 hover:border-stone-400'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        selectedBundle === bundle.id ? 'border-stone-900 bg-stone-900' : 'border-stone-300'
                      }`}>
                        {selectedBundle === bundle.id && <div className="w-2 h-2 bg-white rounded-full" />}
                      </div>
                      <div>
                        <h3 className="font-serif font-medium text-stone-900">{t(bundle.titleKey)}</h3>
                        <p className="text-sm text-stone-500">{t(bundle.subtitleKey)}</p>
                      </div>
                    </div>
                    <div className="text-right">
                       <div className="flex items-center space-x-2 justify-end">
                            <span className="text-stone-400 line-through text-sm">€{bundle.originalPrice.toFixed(2)}</span>
                            <span className="font-bold text-lg text-stone-900">€{bundle.price.toFixed(2)}</span>
                       </div>
                       <span className="text-xs text-green-700 font-semibold bg-green-100 px-2 py-0.5 rounded">
                           {t('offer.save')} €{(bundle.originalPrice - bundle.price).toFixed(2)}
                       </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-stone-900 text-white px-6 py-4 rounded-sm font-medium text-lg hover:bg-stone-800 transition-colors"
            >
              {t('offer.addToOrder')} - €{currentBundle.price.toFixed(2)}
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferStack;
