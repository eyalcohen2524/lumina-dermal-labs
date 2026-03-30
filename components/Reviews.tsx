import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

interface ReviewData {
  id: number;
  author: string;
  rating: number;
  verified: boolean;
  date: Date;
  text: string;
}

const getRelativeTime = (date: Date): string => {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return '1 day ago';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 14) return '1 week ago';
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 60) return '1 month ago';
  return `${Math.floor(diffDays / 30)} months ago`;
};

const Reviews = () => {
  const reviews: ReviewData[] = [
    {
      id: 1,
      author: "Sophie V.",
      rating: 5,
      verified: true,
      date: new Date('2025-02-20'),
      text: "I was skeptical about another 'miracle' cream, but the texture of my acne scars has noticeably smoothed out after just 3 weeks. It's incredibly hydrating too."
    },
    {
      id: 2,
      author: "Daan B.",
      rating: 5,
      verified: true,
      date: new Date('2025-02-15'),
      text: "Great for post-surgical scars. My dermatologist recommended silicone sheets, but I used this alongside them and the redness faded so fast."
    },
    {
      id: 3,
      author: "Fleur M.",
      rating: 5,
      verified: true,
      date: new Date('2025-02-08'),
      text: "Really impressed with the formula. The cream feels rich but absorbs nicely without feeling heavy. I started noticing visible improvement in the texture and overall appearance of my scar after a few weeks."
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">Loved by 1,000+ Customers</h2>
          <div className="flex justify-center items-center space-x-2">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <span className="font-semibold text-stone-900">4.8/5</span>
            <span className="text-stone-500">(783 Reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-sm shadow-sm border border-stone-100 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-xs text-stone-400">{getRelativeTime(review.date)}</span>
              </div>
              <h3 className="font-serif text-lg text-stone-900 font-medium mb-2 leading-snug">"{review.text}"</h3>
              <div className="flex items-center mt-auto pt-4">
                <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-600">
                  {review.author[0]}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-semibold text-stone-900">{review.author}</p>
                  {review.verified && (
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      <span className="text-xs">Verified Buyer</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;