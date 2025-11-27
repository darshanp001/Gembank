import { useNavigate } from 'react-router-dom';
import { CheckCircle, Lock, Building2, Star, Timer } from 'lucide-react';
import Button from '../common/Button';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gembank-gold/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gembank-purple/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-800 mb-6 leading-tight">
            Ready to Modernize Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A73A] via-[#E3C35F] to-[#B88F21]"> Jewellery Business?</span>
          </h2>

          <p className="text-xl text-gray-600 mb-8">
            Join the jewellers who are preparing to bank smarter with GEMBank.
          </p>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10">
            {[
              "Free 14-day trial",
              "No credit card required",
              "Setup in 5 minutes"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="w-5 h-5 text-gembank-green" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/signup')}
            >
              Start Free Trial
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/loi')}
              className="border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Book a Pilot Program
            </Button>
          </div>

          {/* Trust Signals */}
          <p className="text-sm text-gray-500 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1"><Lock className="w-4 h-4 text-gembank-green" /> Secure by Design</span>
            <span className="flex items-center gap-1"><Building2 className="w-4 h-4 text-gembank-gold" /> In Development</span>
            <span className="flex items-center gap-1"><Star className="w-4 h-4 text-gembank-gold" /> Pilot Program Coming Soon</span>
          </p>

          {/* Countdown / Offer */}
          <div className="mt-12 inline-block bg-white backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-sm">
            <p className="text-gembank-gold font-semibold mb-2 flex items-center justify-center gap-2">
              <Timer className="w-5 h-5 text-gembank-gold" /> Limited Time Offer
            </p>
            <p className="text-gray-700 text-sm">
              First 100 signups get <strong>3 months free</strong> on paid plans
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
