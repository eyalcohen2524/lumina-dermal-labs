import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Ingredients from './components/Ingredients';
import BeforeAfter from './components/BeforeAfter';
import OfferStack from './components/OfferStack';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import StickyCTA from './components/StickyCTA';
import ExitIntentModal from './components/ExitIntentModal';
import UnderstandingScars from './components/UnderstandingScars';
import ContactUs from './components/ContactUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import ShippingPolicy from './components/ShippingPolicy';
import ReturnsPolicy from './components/ReturnsPolicy';
import { BundleOption } from './types';

type ViewType = 'home' | 'scars' | 'contact' | 'privacy' | 'shipping' | 'returns' | 'story';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<BundleOption[]>([]);
  const [currentView, setCurrentView] = useState<ViewType>('home');

  const handleAddToCart = (item: BundleOption) => {
    setCartItems([...cartItems, item]);
    setIsCartOpen(true);
  };

  const handleRemoveItem = (index: number) => {
    const newItems = [...cartItems];
    newItems.splice(index, 1);
    setCartItems(newItems);
  };

  const handleNavigate = (view: ViewType, sectionId?: string) => {
    setCurrentView(view);
    window.scrollTo(0, 0);

    if (view === 'home' && sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <LanguageProvider>
    <div className="min-h-screen bg-white">
      <Navbar
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={cartItems.length}
        onNavigate={handleNavigate}
        currentView={currentView}
      />

      <main>
        {currentView === 'home' && (
          <div className="animate-fade-in">
            <Hero onScrollToOffer={() => handleNavigate('home', 'offer')} />
            <Ingredients />
            <BeforeAfter />
            <OfferStack />
            <Reviews />
            <FAQ />
          </div>
        )}
        {currentView === 'story' && <OurStory />}
        {currentView === 'scars' && <UnderstandingScars />}
        {currentView === 'contact' && <ContactUs />}
        {currentView === 'privacy' && <PrivacyPolicy />}
        {currentView === 'shipping' && <ShippingPolicy />}
        {currentView === 'returns' && <ReturnsPolicy />}
      </main>

      <Footer onNavigate={handleNavigate} />

      <StickyCTA onScrollToOffer={() => handleNavigate('home', 'offer')} />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveItem}
      />

      <ExitIntentModal />
    </div>
    </LanguageProvider>
  );
}

export default App;
