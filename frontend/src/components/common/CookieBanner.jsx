import { useState, useEffect } from 'react';

// CookieBanner.jsx
export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('gembank_cookie_consent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('gembank_cookie_consent', 'accepted');
    setIsVisible(false);
    // Initialize analytics here
    console.log('Cookies accepted, initializing analytics...');
  };

  const handleReject = () => {
    localStorage.setItem('gembank_cookie_consent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="bg-gembank-charcoal border-t-2 border-gembank-gold shadow-2xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Cookie Icon & Text */}
            <div className="flex items-start gap-4 flex-1">
              <div className="text-4xl">🍪</div>
              <div className="text-white">
                <h3 className="font-bold mb-1">We use cookies</h3>
                <p className="text-sm text-gembank-gray-300 leading-relaxed">
                  We use cookies to improve your experience, analyze site traffic, and personalize content. 
                  By clicking "Accept", you consent to our use of cookies.{' '}
                  <a href="/cookies" className="text-gembank-gold hover:underline">
                    Learn more
                  </a>
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleReject}
                className="px-6 py-2 border-2 border-white/20 text-white rounded-lg hover:bg-white/10 transition-all font-medium"
              >
                Reject
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-2 bg-gembank-gold hover:bg-gembank-gold-dark text-gembank-charcoal rounded-lg transition-all font-semibold shadow-gold"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 

export default { CookieBanner };