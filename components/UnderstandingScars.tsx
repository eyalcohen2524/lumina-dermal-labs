import React, { useState, useEffect } from 'react';
import { Shield, Clock, Activity, Sun, Droplets, Heart, Layers, User, MapPin, Calendar, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import atrophicScarImage from './atrophic-scar.png';
import keloidScarImage from './keloid-scar.png';
import contractureScarImage from './contracture-scar.png';
import stretchMarksImage from './stretch-marks.png';

const UnderstandingScars = () => {
  const [images, setImages] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});

  const scarTypes = [
    { title: "Contracture Scars", desc: "Scars that cause the skin to tighten and contract, often occurring after burns. They can restrict movement if they affect muscles or joints." },
    { title: "Surgical Scars", desc: "Often linear and vary in thickness depending on wound care. Proper management can significantly improve their appearance." },
    { title: "Hypertrophic Scars", desc: "Raised, thick scars confined to the injury site. Often occur after burns, cuts, or surgeries and may reduce over time." },
    { title: "Keloid Scars", desc: "Overgrown, raised scars that extend beyond the wound's original borders. Caused by excessive collagen production." },
    { title: "Atrophic Scars", desc: "Depressed scars that form when the skin loses tissue, such as after acne or chickenpox." },
    { title: "Stretch Marks", desc: "A form of scarring caused by rapid stretching of the skin, often due to growth, weight changes, or pregnancy." }
  ];

  useEffect(() => {
    // Try to load from local storage first to "create one time"
    const cached = localStorage.getItem('charmetique_scar_images');
    let initialImages: Record<string, string> = {};
    
    if (cached) {
      try {
        initialImages = JSON.parse(cached);
        setImages(initialImages);
      } catch (e) {
        console.error("Error parsing cached images", e);
      }
    }

    const generateImages = async () => {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Determine which images are missing
      const missing = scarTypes.filter(s => !initialImages[s.title]);
      
      // Set loading state
      const loadingState: Record<string, boolean> = {};
      scarTypes.forEach(s => {
        loadingState[s.title] = !initialImages[s.title];
      });
      setLoading(loadingState);

      if (missing.length === 0) return;

      // Generate missing images
      const promises = missing.map(async (item) => {
        try {
          const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: {
              parts: [
                { text: `Create a clean, professional medical diagram illustrating ${item.title} on human skin. The style should be educational, minimalist vector art on a solid white background. It should visually explain this description: ${item.desc}` }
              ]
            }
          });

          let imageUrl = null;
          if (response.candidates?.[0]?.content?.parts) {
            for (const part of response.candidates[0].content.parts) {
              if (part.inlineData) {
                imageUrl = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
                break;
              }
            }
          }

          if (imageUrl) {
            setImages(prev => {
              const newState = { ...prev, [item.title]: imageUrl };
              try {
                localStorage.setItem('charmetique_scar_images', JSON.stringify(newState));
              } catch (err) {
                console.warn("Storage quota exceeded, image not cached.");
              }
              return newState;
            });
          }
        } catch (error) {
          console.error(`Failed to generate diagram for ${item.title}:`, error);
        } finally {
          setLoading(prev => ({ ...prev, [item.title]: false }));
        }
      });

      await Promise.all(promises);
    };

    generateImages();
  }, []);

  return (
    <div className="pt-32 pb-20 animate-fade-in">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">Understanding Scars</h1>
        <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
          Scars are a natural part of the healing process, but they can vary greatly in appearance, texture, and the way they affect the skin. Understanding how scars form and the factors that influence their healing is essential for effective care and management.
        </p>
      </div>

      {/* Types of Scars */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-stone-900 text-center mb-12">Different Types of Scars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scarTypes.map((item, idx) => (
              <div key={idx} className="bg-white rounded-sm shadow-sm border border-stone-100 hover:shadow-md transition-shadow overflow-hidden flex flex-col">
                <div className="h-48 bg-stone-100 flex items-center justify-center relative overflow-hidden group">
                  {item.title === "Atrophic Scars" ? (
                    <img
                      src={atrophicScarImage}
                      alt="Diagram of Atrophic Scars"
                      className="w-full h-full object-cover"
                    />
                  ) : item.title === "Keloid Scars" ? (
                    <img
                      src={keloidScarImage}
                      alt="Diagram of Keloid Scars"
                      className="w-full h-full object-cover"
                    />
                  ) : item.title === "Contracture Scars" ? (
                    <img
                      src={contractureScarImage}
                      alt="Diagram of Contracture Scars"
                      className="w-full h-full object-cover"
                    />
                  ) : item.title === "Stretch Marks" ? (
                    <img
                      src={stretchMarksImage}
                      alt="Diagram of Stretch Marks"
                      className="w-full h-full object-cover"
                    />
                  ) : loading[item.title] ? (
                    <div className="flex flex-col items-center text-stone-400">
                      <Loader2 className="w-8 h-8 animate-spin mb-2" />
                      <span className="text-xs uppercase tracking-widest">Generating Diagram...</span>
                    </div>
                  ) : images[item.title] ? (
                    <img
                      src={images[item.title]}
                      alt={`Diagram of ${item.title}`}
                      className="w-full h-full object-cover mix-blend-multiply"
                    />
                  ) : (
                    <div className="text-center p-6 text-stone-400">
                      <span className="text-xs uppercase tracking-widest">Diagram Unavailable</span>
                    </div>
                  )}
                </div>
                <div className="p-8 flex-1">
                  <h3 className="text-xl font-serif text-stone-900 mb-3">{item.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Healing Process */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-stone-900 text-center mb-16">The Scar Healing Process</h2>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-stone-200">
            {[
              { stage: "Inflammation Stage", time: "Days 0–7", desc: "The body’s immediate response includes cleaning the wound. Redness, swelling, and warmth are common signs during this phase." },
              { stage: "Proliferation Stage", time: "Days 7–21", desc: "New tissue begins to form. Fibroblasts produce collagen, which provides structure to the skin. This is the critical stage where the foundation of the scar is established." },
              { stage: "Remodeling Stage", time: "Weeks to Months", desc: "The scar matures and strengthens. Collagen fibers align and cross-link, creating a firmer structure. Depending on the type of scar, this stage can last for several months or even years." }
            ].map((item, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-stone-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-white font-bold text-sm z-10">
                  {idx + 1}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded shadow-sm border border-stone-100">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                    <h3 className="font-serif text-lg text-stone-900 font-medium">{item.stage}</h3>
                    <span className="text-xs font-bold text-stone-500 uppercase tracking-wide bg-stone-100 px-2 py-1 rounded">{item.time}</span>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factors */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-stone-900 text-center mb-12">Factors Influencing Scar Formation</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Shield className="w-8 h-8" />, title: "Wound Care", desc: "Proper cleaning and dressing can minimize scar severity." },
              { icon: <User className="w-8 h-8" />, title: "Skin Type", desc: "Genetics and skin color can influence scarring. For example, darker skin tones may be more prone to keloids." },
              { icon: <MapPin className="w-8 h-8" />, title: "Location", desc: "Scars on areas with high tension or movement (e.g., joints) may appear thicker or more pronounced." },
              { icon: <Calendar className="w-8 h-8" />, title: "Age", desc: "Younger skin tends to heal faster but may scar more visibly due to rapid collagen production." }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 bg-white rounded-sm border border-amber-100 shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-6 text-stone-700">
                  {item.icon}
                </div>
                <h3 className="text-lg font-serif text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Charmétique Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-stone-900 text-center mb-16">Charmétique’s Approach to Skin Care</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
             <div className="space-y-8">
                <div className="flex gap-5">
                   <div className="shrink-0 mt-1 p-3 bg-stone-50 rounded-full"><Activity className="w-6 h-6 text-stone-900"/></div>
                   <div>
                      <h4 className="font-serif text-xl text-stone-900 mb-2">Support Natural Recovery</h4>
                      <p className="text-stone-600">The cream contains Allium Cepa Bulb Extract (Onion Extract), traditionally used in scar care, helping to improve the appearance of scars over time.</p>
                   </div>
                </div>
                <div className="flex gap-5">
                   <div className="shrink-0 mt-1 p-3 bg-stone-50 rounded-full"><Droplets className="w-6 h-6 text-stone-900"/></div>
                   <div>
                      <h4 className="font-serif text-xl text-stone-900 mb-2">Deep Hydration</h4>
                      <p className="text-stone-600">Ingredients like Glycerin and Sodium Hyaluronate help retain moisture, keeping the skin supple and supporting skin suppleness.</p>
                   </div>
                </div>
                <div className="flex gap-5">
                   <div className="shrink-0 mt-1 p-3 bg-stone-50 rounded-full"><Heart className="w-6 h-6 text-stone-900"/></div>
                   <div>
                      <h4 className="font-serif text-xl text-stone-900 mb-2">Soothing Properties</h4>
                      <p className="text-stone-600">Aloe Vera and Shea Butter help calm irritation, making scars more comfortable and less noticeable.</p>
                   </div>
                </div>
             </div>
             <div className="space-y-8">
                <div className="flex gap-5">
                   <div className="shrink-0 mt-1 p-3 bg-stone-50 rounded-full"><Layers className="w-6 h-6 text-stone-900"/></div>
                   <div>
                      <h4 className="font-serif text-xl text-stone-900 mb-2">Support for Skin Elasticity</h4>
                      <p className="text-stone-600">Vitamin E and Sodium Hyaluronate contribute to collagen production, maintaining skin flexibility and strength.</p>
                   </div>
                </div>
                <div className="flex gap-5">
                   <div className="shrink-0 mt-1 p-3 bg-stone-50 rounded-full"><Shield className="w-6 h-6 text-stone-900"/></div>
                   <div>
                      <h4 className="font-serif text-xl text-stone-900 mb-2">Connective Tissue Strength</h4>
                      <p className="text-stone-600">The combination of Aloe Vera, Shea Butter, and Vitamin E strengthens connective tissue, supporting healthier skin structure.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-stone-900 text-center mb-12">Tips for Caring for Scars</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
             <div className="bg-white p-8 shadow-sm border-t-4 border-stone-900 hover:-translate-y-1 transition-transform">
                <Sun className="w-8 h-8 text-stone-900 mb-4" />
                <h4 className="font-serif text-lg mb-2 text-stone-900">Protect from Sun</h4>
                <p className="text-sm text-stone-600">Use sunscreen to prevent darkening or discoloration of scars.</p>
             </div>
             <div className="bg-white p-8 shadow-sm border-t-4 border-stone-900 hover:-translate-y-1 transition-transform">
                <Activity className="w-8 h-8 text-stone-900 mb-4" />
                <h4 className="font-serif text-lg mb-2 text-stone-900">Massage Regularly</h4>
                <p className="text-sm text-stone-600">Gently massage (after wound closure) to improve circulation and product absorption.</p>
             </div>
             <div className="bg-white p-8 shadow-sm border-t-4 border-stone-900 hover:-translate-y-1 transition-transform">
                <Droplets className="w-8 h-8 text-stone-900 mb-4" />
                <h4 className="font-serif text-lg mb-2 text-stone-900">Stay Hydrated</h4>
                <p className="text-sm text-stone-600">Proper hydration supports skin health from within.</p>
             </div>
             <div className="bg-white p-8 shadow-sm border-t-4 border-stone-900 hover:-translate-y-1 transition-transform">
                <Clock className="w-8 h-8 text-stone-900 mb-4" />
                <h4 className="font-serif text-lg mb-2 text-stone-900">Be Patient</h4>
                <p className="text-sm text-stone-600">Scars take time to heal. Consistency in care is key.</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UnderstandingScars;