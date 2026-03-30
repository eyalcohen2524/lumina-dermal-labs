import React, { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigate?: (view: 'home' | 'scars' | 'contact' | 'privacy' | 'shipping' | 'returns' | 'story', sectionId?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const [newsletterName, setNewsletterName] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterName.trim() || !newsletterEmail.trim()) return;

    const subject = encodeURIComponent('Newsletter Signup');
    const body = encodeURIComponent(`New newsletter subscriber:\n\nName: ${newsletterName}\nEmail: ${newsletterEmail}`);
    window.open(`mailto:info@charmetique.com?subject=${subject}&body=${body}`, '_blank');

    setNewsletterSubmitted(true);
    setNewsletterName('');
    setNewsletterEmail('');

    setTimeout(() => setNewsletterSubmitted(false), 5000);
  };

  return (
    <footer className="bg-stone-900 text-stone-400">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Logo & Social */}
          <div className="space-y-4">
            <span className="font-serif text-2xl text-white tracking-tight font-semibold">CHARMÉTIQUE</span>
            <div className="flex space-x-3 pt-2">
              <a href="https://instagram.com/charmetique" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-stone-800 rounded-full flex items-center justify-center hover:bg-stone-700 transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://tiktok.com/@charmetique" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-stone-800 rounded-full flex items-center justify-center hover:bg-stone-700 transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-white font-medium mb-4">{t('footer.contactInfo')}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-stone-500" />
                <a href="mailto:info@charmetique.com" className="hover:text-white transition-colors">info@charmetique.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-stone-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Charmétique B.V.</p>
                  <p>Jan de Louterstraat 22, 1063 KX,</p>
                  <p>Amsterdam, The Netherlands</p>
                  <p className="mt-1">KvK: 94703256</p>
                  <p>BTW-ID: NL866864921B01</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h4 className="text-white font-medium mb-4">{t('footer.discover')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate?.('home', 'science')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t('footer.theScience')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('home', 'results')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t('footer.realResults')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('home', 'reviews')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t('footer.reviews')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('scars')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t('footer.understandingScars')}
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-medium mb-4">{t('footer.customerService')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate?.('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t('footer.contactUs')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('privacy')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t('footer.privacyPolicy')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('shipping')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t('footer.shipping')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('returns')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t('footer.returns')}
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-medium mb-4">{t('footer.newsletter')}</h4>
            {newsletterSubmitted ? (
              <div className="bg-green-900/30 border border-green-700 rounded px-4 py-3 text-green-400 text-sm">
                {t('footer.newsletterSuccess')}
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder={t('footer.namePlaceholder')}
                  value={newsletterName}
                  onChange={(e) => setNewsletterName(e.target.value)}
                  required
                  className="bg-stone-800 border border-stone-700 rounded px-4 py-2 text-sm w-full focus:ring-1 focus:ring-stone-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder={t('footer.emailPlaceholder')}
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="bg-stone-800 border border-stone-700 rounded px-4 py-2 text-sm w-full focus:ring-1 focus:ring-stone-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-pink-600 text-white px-6 py-2 rounded text-sm font-medium hover:bg-pink-700 transition-colors w-full"
                >
                  {t('footer.submit')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-xs text-center">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
