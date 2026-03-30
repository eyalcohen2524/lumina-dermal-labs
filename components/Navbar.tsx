import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';

interface NavbarProps {
  onOpenCart: () => void;
  cartCount: number;
  onNavigate: (view: 'home' | 'scars' | 'contact' | 'privacy' | 'shipping' | 'returns' | 'story', sectionId?: string) => void;
  currentView: 'home' | 'scars' | 'contact' | 'privacy' | 'shipping' | 'returns' | 'story';
}

const Navbar: React.FC<NavbarProps> = ({ onOpenCart, cartCount, onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.science'), id: 'science' },
    { name: t('nav.reviews'), id: 'reviews' },
    { name: t('nav.faq'), id: 'faq' },
  ];

  const handleLinkClick = (view: 'home' | 'scars' | 'contact' | 'privacy' | 'shipping' | 'returns' | 'story', id?: string) => {
    onNavigate(view, id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleLinkClick('home')}>
            <span className={`font-serif text-2xl tracking-tight font-semibold ${isScrolled ? 'text-stone-900' : 'text-stone-900'}`}>
              CHARMÉTIQUE
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick('home', link.id)}
                className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors uppercase tracking-wide"
              >
                {link.name}
              </button>
            ))}
            <button
               onClick={() => handleLinkClick('story')}
               className={`text-sm font-medium transition-colors uppercase tracking-wide ${currentView === 'story' ? 'text-stone-900 font-bold border-b-2 border-stone-900' : 'text-stone-600 hover:text-stone-900'}`}
            >
               {t('nav.story')}
            </button>
            <button
               onClick={() => handleLinkClick('scars')}
               className={`text-sm font-medium transition-colors uppercase tracking-wide ${currentView === 'scars' ? 'text-stone-900 font-bold border-b-2 border-stone-900' : 'text-stone-600 hover:text-stone-900'}`}
            >
               {t('nav.scars')}
            </button>
            <button
               onClick={() => handleLinkClick('contact')}
               className={`text-sm font-medium transition-colors uppercase tracking-wide ${currentView === 'contact' ? 'text-stone-900 font-bold border-b-2 border-stone-900' : 'text-stone-600 hover:text-stone-900'}`}
            >
               {t('nav.contact')}
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-2">
            <LanguageSelector />
            <button
              onClick={onOpenCart}
              className="relative p-2 text-stone-600 hover:text-stone-900 transition-colors"
              aria-label="Open cart"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-stone-900 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick('home', link.id)}
              className="text-base font-medium text-stone-800 text-left"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleLinkClick('story')}
            className={`text-base font-medium text-left ${currentView === 'story' ? 'text-stone-900 font-bold' : 'text-stone-800'}`}
          >
            {t('nav.story')}
          </button>
          <button
            onClick={() => handleLinkClick('scars')}
            className={`text-base font-medium text-left ${currentView === 'scars' ? 'text-stone-900 font-bold' : 'text-stone-800'}`}
          >
            {t('nav.scars')}
          </button>
          <button
            onClick={() => handleLinkClick('contact')}
            className={`text-base font-medium text-left ${currentView === 'contact' ? 'text-stone-900 font-bold' : 'text-stone-800'}`}
          >
            {t('nav.contact')}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
