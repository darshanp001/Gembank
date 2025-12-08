import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import Button from '../common/Button';
const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'What is GEMBank and how is it different from traditional banks?',
          a: 'GEMBank is a specialized neobank built exclusively for jewellery businesses in India. Unlike traditional banks, we understand the unique needs of jewellers - from gold inventory tracking to hallmarking compliance. We offer zero-fee B2B payments, real-time gold rate tracking, and features specifically designed for the jewellery industry.'
        },
        {
          q: 'Is GEMBank RBI approved and secure?',
          a: 'Yes, GEMBank operates under RBI guidelines and partners with licensed banking institutions. We use bank-grade 256-bit encryption, are ISO 27001 certified, and follow all KYC/AML compliance requirements. Your funds are protected by DICGC insurance up to ₹5 lakhs per account.'
        },
        {
          q: 'What documents do I need to open an account?',
          a: 'You need: Business PAN card, GST certificate (if applicable), Owner/Director KYC documents (Aadhaar, PAN), Business registration certificate, and recent bank statements. The entire process is digital and takes less than 24 hours for approval.'
        }
      ]
    },
    {
      category: 'Features & Pricing',
      questions: [
        {
          q: 'Are there really zero transaction fees?',
          a: 'Yes! B2B payments between GEMBank accounts are completely free. For external bank transfers (NEFT/RTGS/IMPS), we charge minimal fees as per RBI guidelines - significantly lower than traditional banks. There are no monthly account maintenance charges for Growth and Pro plans.'
        },
        {
          q: 'Can I import my existing inventory data?',
          a: 'Absolutely! We support Excel/CSV imports from Tally, custom ERPs, or manual spreadsheets. Our system automatically categorizes items and applies real-time gold valuations. Migration support is free for all paid plans.'
        },
        {
          q: 'What happens if I exceed my plan limits?',
          a: 'We\'ll notify you when you\'re near your limits. You can either upgrade to a higher plan or pay a small overage fee. There\'s no service disruption - we\'ll work with you to find the best solution for your business.'
        }
      ]
    },
    {
      category: 'Technical',
      questions: [
        {
          q: 'Can GEMBank integrate with my existing Tally/ERP system?',
          a: 'Yes, we offer API integrations with Tally ERP 9, Tally Prime, and most popular accounting software. You can sync transactions, invoices, and inventory data automatically. Custom integrations are available for Enterprise plans.'
        },
        {
          q: 'What if I have multiple branches in different cities?',
          a: 'GEMBank supports multi-branch operations with centralized management. Each branch gets its own sub-account with separate inventory tracking, while you maintain complete visibility and control from the master dashboard. Branch-wise reports are available in Growth plan and above.'
        },
        {
          q: 'Is there a mobile app for GEMBank?',
          a: 'Yes! GEMBank is available on iOS and Android. You can manage everything on-the-go: check gold rates, process payments, generate invoices, and monitor inventory. The mobile app has full feature parity with the web dashboard.'
        }
      ]
    },
    {
      category: 'Support & Onboarding',
      questions: [
        {
          q: 'How long does onboarding take?',
          a: 'Account creation takes 5 minutes. Full onboarding with inventory setup and team training takes 1-2 days on average. We provide dedicated onboarding support, training videos, and one-on-one sessions for Pro and Enterprise plans.'
        },
        {
          q: 'What kind of customer support do you provide?',
          a: 'Free plan: Email support (24-48hr response). Growth plan: Priority email + chat support. Pro plan: Phone + WhatsApp support with dedicated account manager. Enterprise: 24/7 dedicated support with custom SLA. All plans get access to our knowledge base and video tutorials.'
        },
        {
          q: 'Can I cancel my subscription anytime?',
          a: 'Yes, you can cancel anytime without penalties. If you cancel a paid plan, you\'ll continue to have access until the end of your billing period. You can also downgrade to the Free plan to retain your data. We offer a 14-day money-back guarantee on all paid plans.'
        }
      ]
    }
  ];

  const toggleAccordion = (categoryIndex, questionIndex) => {
    const newIndex = categoryIndex * 100 + questionIndex;
    setOpenIndex(openIndex === newIndex ? null : newIndex);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-8">
        {faqs.map((category, catIndex) => (
          <div key={catIndex}>
            <h3 className="text-xl font-bold text-gembank-charcoal mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-gembank-gold rounded-lg flex items-center justify-center text-gembank-charcoal font-bold">
                {catIndex + 1}
              </span>
              {category.category}
            </h3>

            <div className="space-y-3">
              {category.questions.map((faq, qIndex) => {
                const index = catIndex * 100 + qIndex;
                const isOpen = openIndex === index;

                return (
                  <div
                    key={qIndex}
                    className={`border-2 rounded-lg overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? 'border-[#123A9C] shadow-[#123A9C]'
                        : '#123A9C hover:border-gembank-gray-400'
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(catIndex, qIndex)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-gembank-gray-50 transition-colors"
                    >
                      <span className={`font-semibold pr-4 ${isOpen ? 'text-[#123A9C]' : 'text-gembank-charcoal'}`}>
                        {faq.q}
                      </span>
                      <svg
                        className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? 'transform rotate-180 text-gembank-gold' : 'text-gembank-gray-800'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <div
                      className={`transition-all duration-300 ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      } overflow-hidden`}
                    >
                      <div className="px-6 py-4 bg-gembank-gray-50 border-t border-gembank-gray-300">
                        <p className="text-gembank-gray-800 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Still have questions CTA */}
      <div className="mt-16 text-center bg-white rounded-2xl p-8 border border-gembank-gray-200 shadow-lg shadow-gembank-gray-200/50">
        <h3 className="text-2xl font-bold text-black mb-3">
          Still have questions?
        </h3>
        <p className="text-gembank-black mb-6">
          Our team is here to help. Get in touch and we'll respond within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button 
                variant="primary" 
                size="lg"
                className="group bg-gradient-to-rtext-white font-bold shadow-lg shadow-[#1E4DFF]/25 hover:shadow-xl hover:shadow-[#1E4DFF]/35 transition-all duration-300 px-10 py-4 text-lg rounded-xl gap-2"
              >
            <Mail className="w-4 h-4" />
            Email Support
              </Button>

              <Button
                variant="secondary"
                size="lg"
                className="border-2 border-[#1E4DFF]/30 text-[#444444]  hover:border-[#1E4DFF] font-bold px-10 py-4 text-lg rounded-xl shadow-sm hover:shadow-md transition-all duration-300 gap-2"
              >
                           <Phone className="w-4 h-4" />
            Schedule a Call
              </Button>

        </div>
      </div>

      {/* Quick Links
      <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
        <a href="/help" className="text-gembank-gold hover:underline">Help Center</a>
        <span className="text-gembank-gray-400">•</span>
        <a href="/docs" className="text-gembank-gold hover:underline">API Documentation</a>
        <span className="text-gembank-gray-400">•</span>
        <a href="/videos" className="text-gembank-gold hover:underline">Video Tutorials</a>
        <span className="text-gembank-gray-400">•</span>
        <a href="/community" className="text-gembank-gold hover:underline">Community Forum</a>
      </div> */}
    </div>
  );
};

export default FAQAccordion;