import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import LOIForm from '../components/loi/LOIForm';
import { CheckCircle, Sparkles } from 'lucide-react';  // ✅ Lucide icons

const LOIPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-white via-gembank-gold/5 to-gembank-gold/20 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gembank-gold/10 rounded-full blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gembank-purple/10 rounded-full blur-3xl opacity-50 animate-pulse [animation-delay:2s]"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 animate-fade-in-up">
            <span className="px-4 py-2 bg-white/50 border border-gembank-gold/30 rounded-full text-gembank-gold-dark font-medium backdrop-blur-sm shadow-lg shadow-gembank-gold/10 inline-flex items-center gap-2 transition-transform hover:scale-105">
              <Sparkles className="w-5 h-5 text-gembank-gold" />
              Join Our Pilot Program
            </span>
          </div>
          <h1 
            className="text-4xl sm:text-5xl font-display font-bold text-gembank-charcoal leading-tight mb-6 drop-shadow-sm animate-fade-in-up [animation-delay:150ms]"
          >
            India’s First Financial OS for the Jewellery Industry
          </h1>
          <p 
            className="text-xl text-gembank-gray-800 max-w-3xl mx-auto animate-fade-in-up [animation-delay:300ms]"
          >
            Become an <b>Early Pilot Partner</b> for exclusive access to GEMBank — the neobank
            designed for jewellers to manage inventory, GST, payments & working capital loans.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 bg-white border-b border-gembank-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              'Built for Jewellers',
              'Backed by Fintech Experts',
              'Early Access for 500 Jewellers',
              'Priority Support & Benefits'
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center md:justify-start gap-2">
                <CheckCircle className="w-5 h-5 text-gembank-green flex-shrink-0" />
                <span className="text-sm font-medium text-gembank-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <LOIForm />

      {/* FAQ Quick Links */}
      <section className="py-12 bg-gembank-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold text-gembank-charcoal mb-4">
            Questions about the pilot program?
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/features" className="text-gembank-gold hover:underline">
              View Features →
            </a>
            <span className="text-gembank-gray-400">•</span>
            <a href="/help" className="text-gembank-gold hover:underline">
              Help Center →
            </a>
            <span className="text-gembank-gray-400">•</span>
            <a href="/contact" className="text-gembank-gold hover:underline">
              Contact Us →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LOIPage;
