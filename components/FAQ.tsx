import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-stone-200">
      <button 
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-stone-900 text-lg font-serif pr-4">{question}</span>
        {isOpen ? <ChevronUp className="text-stone-400 flex-shrink-0" /> : <ChevronDown className="text-stone-400 flex-shrink-0" />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-stone-600 leading-relaxed pr-8 whitespace-pre-line text-sm md:text-base">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What makes Charmétique unique?",
      answer: "Charmétique is a luxury skincare brand committed to blending science and beauty to create products that empower confidence and elevate self-care routines. Our formulations are crafted with high-quality ingredients to deliver sophisticated, results-driven skincare."
    },
    {
      question: "Are Charmétique products cruelty-free?",
      answer: "Yes, Charmétique is dedicated to ethical skincare. All our products are cruelty-free and are not tested on animals."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we offer international shipping to many countries. Shipping costs and delivery times vary depending on your location. For more details, please reach out to our team at info@charmetique.com or refer to our Shipping Policy at checkout."
    },
    {
      question: "Can I return or exchange products?",
      answer: "Yes, we accept returns and exchanges under certain conditions. Please reach out to our team at info@charmetique.com or refer to our Return Policy for detailed information about eligibility and the process."
    },
    {
      question: "How can I collaborate with Charmétique?",
      answer: "Charmétique is always open to meaningful collaborations that align with our values of innovation, elegance, and quality. Whether you’re a retailer, distributor, or professional in the beauty or skincare industry, we’d love to hear from you. Please contact us at info@charmetique.com."
    },
    {
      question: "What is Charmétique’s Hydrating Scar Cream?",
      answer: "Charmétique's Hydrating Scar Cream is a premium formulation designed to support both new and old scars. It combines high-quality ingredients that hydrate, soothe, and support the skin's natural recovery process."
    },
    {
      question: "What are the main benefits of using the cream?",
      answer: "• Supports the skin's natural recovery process: Enriched with Allium Cepa Bulb Extract (Onion Extract), helping improve scar appearance over time.\n• Hydrates the skin: Formulated with Glycerin and Sodium Hyaluronate to lock in moisture.\n• Soothes the skin: Infused with Aloe Vera and Shea Butter for a calming effect.\n• Helps keep the skin elastic: Vitamin E and Sodium Hyaluronate support skin suppleness.\n• Suitable as daily skincare: Helps the skin feel smooth and comfortable."
    },
    {
      question: "How do I use Charmétique’s Hydrating Scar Cream?",
      answer: "For new scars: Begin using the cream once the wound has closed and the scab has fallen off naturally. Apply 2-3 times daily for at least 8 weeks.\n\nFor existing scars: Apply 2-3 times daily for 3-6 months.\n\nMassage gently in circular motions until fully absorbed."
    },
    {
      question: "For which scar types is it most helpful?",
      answer: "It is most beneficial for Normotrophic scars, Surgical scars, Traumatic scars, and Superficial acne scars.\n\nThe cream is less likely to show significant results for keloid scars, hypertrophic scars, deep atrophic acne scars, and hyperpigmentation, as these often require specialized treatments."
    },
    {
      question: "Is it safe for sensitive skin?",
      answer: "Yes, the cream is formulated with soothing ingredients like Aloe Vera and Shea Butter, making it suitable for sensitive skin. However, if signs of irritation occur, discontinue use and consult a physician or pharmacist."
    },
    {
      question: "How can I care for my scar effectively?",
      answer: "• Wait until the wound is closed: Begin applying only after the wound has fully closed and dried (typically 1–2 weeks).\n• Use an appropriate product: Like Charmétique’s Hydrating Scar Cream.\n• Daily hydration and massage: 2–3 times per day to stimulate circulation.\n• Protect from sun: Use sunscreen to prevent discoloration.\n• Patience is key: Reducing visibility can take months."
    },
    {
      question: "Are there any precautions I should take?",
      answer: "• For external use only.\n• Avoid contact with eyes, mouth, or open wounds.\n• Discontinue use if irritation occurs and consult a physician.\n• Keep out of reach of children.\n• Store in a cool, dry place, protected from sunlight."
    },
    {
      question: "What is the shelf life?",
      answer: "The cream has a shelf life of 24 months when stored in a cool dry place, away from direct sunlight. Once opened, the cream should be used within 12 months to ensure optimal quality and effectiveness."
    },
    {
      question: "What if my question isn’t listed here?",
      answer: "If your question isn’t answered in the FAQ, please reach out to our team at info@charmetique.com and we’ll be happy to assist you."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-900 text-center mb-12">
          Common Questions
        </h2>
        <div className="bg-white rounded-sm shadow-sm px-8 border border-stone-100">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;