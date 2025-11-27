import React, { useState, useEffect, useRef } from 'react';

// --- Embedded SVG Icons for self-containment and professional look ---
const SparklesIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3L9.5 8.5 4 11l5.5 2.5L12 19l2.5-5.5L20 11l-5.5-2.5L12 3z"/>
    <path d="M5 3v4"/>
    <path d="M19 17v4"/>
    <path d="M3 5h4"/>
    <path d="M17 19h4"/>
  </svg>
);

const QuoteIcon = (props) => (
    <svg width="60" height="48" viewBox="0 0 60 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M18.8008 48C13.5629 48 9.01221 46.1016 5.14844 42.3047C1.28467 38.5078 0.199219 33.7305 1.09375 27.9727C1.98828 22.2148 4.64062 16.2773 9.04688 10.1562L15.3516 14.0234C12.1484 18.5938 10.0039 22.2148 8.91797 24.8828C11.5859 23.9844 14.4727 23.5352 17.5781 23.5352C23.0859 23.5352 27.5117 25.4141 30.8555 29.1719C34.1992 32.9297 35.8672 37.668 35.8672 43.3867V48H18.8008ZM42.8008 48C37.5629 48 33.0122 46.1016 29.1484 42.3047C25.2847 38.5078 24.1992 33.7305 25.0938 27.9727C25.9883 22.2148 28.6406 16.2773 33.0469 10.1562L39.3516 14.0234C36.1484 18.5938 34.0039 22.2148 32.918 24.8828C35.5859 23.9844 38.4727 23.5352 41.5781 23.5352C47.0859 23.5352 51.5117 25.4141 54.8555 29.1719C58.1992 32.9297 59.8672 37.668 59.8672 43.3867V48H42.8008Z" fill="currentColor"/>
    </svg>
);

const quotes = [
  {
    text: "Faster settlements would help our cash flow tremendously.",
    author: "Jeweller, Lucknow",
  },
  {
    text: "Automated BIS compliance tracking would save us hours every week.",
    author: "Jeweller, Lucknow",
  },
  {
    text: "Quick credit decisions are what we need most.",
    author: "Jeweller, Lucknow",
  },
];

// A dedicated component for the quote card to handle its own animation state
const QuoteCard = ({ quote, index }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation only once when the element becomes visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Animate when 10% of the card is visible
      }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative group bg-white rounded-2xl p-8 transition-all duration-700 ease-out
                 border border-gray-200/80 shadow-lg shadow-gray-200/50
                 hover:!translate-y-[-8px] hover:border-amber-400/80 hover:shadow-2xl hover:shadow-amber-200/60
                 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      style={{ transitionDelay: `${index * 150}ms` }} // Staggered animation delay
    >
      <QuoteIcon className="absolute top-8 right-8 w-16 h-16 text-gray-100/80 transition-colors duration-300 group-hover:text-amber-100" />
      <div className="relative flex flex-col h-full z-10">
        <p className="text-gray-700 text-xl font-medium leading-relaxed flex-grow">
          “{quote.text}”
        </p>
        <div className="mt-8 pt-6 border-t border-gray-200/80">
          <p className="text-gray-800 font-semibold">
            — {quote.author}
          </p>
        </div>
      </div>
    </div>
  );
};

const EarlyAdopterCommitments = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-transparent overflow-hidden">
      {/* Soft, decorative background glows */}
      <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-amber-100/30 to-transparent pointer-events-none -z-10 opacity-50"></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          {/* A more refined, light-themed badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-amber-100/50 border border-amber-500/30 rounded-full text-amber-800 font-semibold mb-6">
            <SparklesIcon className="w-5 h-5 text-amber-600" />
            <span>Early Adopter Commitments</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 tracking-tight">
            Building GEMBank with Real Jewellers
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-8">
            We're developing GEMBank alongside pioneering jewellers who have joined our pilot program.  
            Here’s what they’re looking forward to:
          </p>
        </div>

        {/* Quotes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {quotes.map((q, i) => (
            <QuoteCard key={i} quote={q} index={i} />
          ))}
        </div>

        {/* Closing Line */}
        <div className="text-center mt-20">
          <p className="text-gray-600 max-w-xl mx-auto">
            These insights from early partners are shaping the foundation of GEMBank —  
            ensuring every feature truly empowers jewellers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EarlyAdopterCommitments;
