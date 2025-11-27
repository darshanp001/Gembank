import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ProblemSolutionFlow from '../components/features/ProblemSolutionFlow';
import ThreeStepVisual from '../components/features/ThreeStepVisual';
import FeatureGrid from '../components/features/FeatureGrid';
import PricingTable from '../components/features/PricingTable';

import Button from '../components/common/Button';


     
const FeaturesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pricingRef = useRef(null);

  // Scrollspy: update hash to #pricing when pricing section is in view,
  // and clear the hash when section is out of view so only one nav item is active.
  useEffect(() => {
    if (!pricingRef.current) return;
    const el = pricingRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentlyHasHash = location.hash === '#pricing';
        if (entry.isIntersecting) {
          if (!currentlyHasHash) history.replaceState(null, '', '#pricing');
        } else if (currentlyHasHash) {
          history.replaceState(null, '', location.pathname + location.search);
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFDF7] to-[#fffdf6]">
      <Navbar />
      
      {/* Hero Section */}
      {/* <section className="pt-32 pb-20 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
         
          <h1 className="text-4xl sm:text-5xl  xl:text-5xl font-display font-bold text-gray-800 leading-tight mb-6">
          Banking Infrastructure for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A73A] to-[#B88F21]"> India's Jewellery MSMEs</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
           Partner with banks to provide payment rails, credit solutions, and compliance automation specifically for jewelers.
          </p>
        </div>
      </section> */}


   

      {/* Feature Grid */}
      <FeatureGrid />

      {/* Pricing Section */}
      {/* <section id="pricing" ref={pricingRef} className="py-20 bg-transparent scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gembank-charcoal mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gembank-gray-800 max-w-2xl mx-auto">
              Choose the plan that fits your business size. All plans include our core features with varying limits.
            </p>
          </div>
          <PricingTable />
        </div>
      </section> */}

   

     

      <Footer />
    </div>
  );
};

export default FeaturesPage;