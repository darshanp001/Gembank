import { useState } from 'react';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';

const PricingTable = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const navigate = useNavigate();

  const plans = [
    {
      id: 'free',
      name: 'Free',
      subtitle: 'For trying out GEMBank',
      price: { monthly: 0, annual: 0 },
      popular: false,
      features: [
        { text: 'Up to 50 transactions/month', included: true },
        { text: 'Basic inventory tracking', included: true },
        { text: 'Real-time gold rates', included: true },
        { text: '1 user account', included: true },
        { text: 'Email support', included: true },
        { text: 'Digital invoicing', included: false },
        { text: 'Analytics dashboard', included: false },
        { text: 'Multi-branch support', included: false },
        { text: 'Priority support', included: false }
      ],
      cta: 'Start Free',
      color: 'gray'
    },
    {
      id: 'growth',
      name: 'Growth',
      subtitle: 'For growing businesses',
      price: { monthly: 2499, annual: 24990 },
      popular: true,
      features: [
        { text: 'Unlimited transactions', included: true },
        { text: 'Advanced inventory management', included: true },
        { text: 'Real-time gold rates + alerts', included: true },
        { text: '5 user accounts', included: true },
        { text: 'Priority email & chat support', included: true },
        { text: 'Digital invoicing + e-way bills', included: true },
        { text: 'Analytics dashboard', included: true },
        { text: 'Up to 3 branches', included: true },
        { text: 'Compliance manager', included: true }
      ],
      cta: 'Start 14-Day Trial',
      color: 'gold'
    },
    {
      id: 'pro',
      name: 'Pro',
      subtitle: 'For established jewellers',
      price: { monthly: 4999, annual: 49990 },
      popular: false,
      features: [
        { text: 'Everything in Growth, plus:', included: true, bold: true },
        { text: '15 user accounts', included: true },
        { text: 'Up to 10 branches', included: true },
        { text: 'Dedicated account manager', included: true },
        { text: 'Phone + WhatsApp support', included: true },
        { text: 'Custom reports & analytics', included: true },
        { text: 'API access', included: true },
        { text: 'Advanced compliance tools', included: true },
        { text: 'Supplier network access', included: true }
      ],
      cta: 'Start 14-Day Trial',
      color: 'purple'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      subtitle: 'For large organizations',
      price: { monthly: 'Custom', annual: 'Custom' },
      popular: false,
      features: [
        { text: 'Everything in Pro, plus:', included: true, bold: true },
        { text: 'Unlimited users & branches', included: true },
        { text: 'Custom integrations', included: true },
        { text: 'White-label options', included: true },
        { text: '24/7 dedicated support', included: true },
        { text: 'On-premise deployment option', included: true },
        { text: 'Advanced security features', included: true },
        { text: 'Custom SLA', included: true },
        { text: 'Training & onboarding', included: true }
      ],
      cta: 'Contact Sales',
      color: 'blue'
    }
  ];

  const colorClasses = {
    gray: {
      border: 'border-gembank-gray-300',
      bg: 'bg-gembank-gray-50',
      text: 'text-gembank-gray-800',
      button: 'bg-gembank-gray-800 hover:bg-gembank-charcoal'
    },
    gold: {
      border: 'border-gembank-gold',
      bg: 'bg-gradient-to-br from-gembank-gold-light to-white',
      text: 'text-gembank-gold-dark',
      button: 'bg-gembank-gold hover:bg-gembank-gold-dark text-gembank-charcoal'
    },
    purple: {
      border: 'border-gembank-purple',
      bg: 'bg-gembank-purple/5',
      text: 'text-gembank-purple',
      button: 'bg-gembank-purple hover:bg-gembank-purple/90'
    },
    blue: {
      border: 'border-gembank-blue',
      bg: 'bg-gembank-blue/5',
      text: 'text-gembank-blue',
      button: 'bg-gembank-blue hover:bg-gembank-blue/90'
    }
  };

  const handleCTA = (planId) => {
    if (planId === 'enterprise') {
      navigate('/contact');
    } else {
      navigate('/signup', { state: { plan: planId } });
    }
  };

  return (
    <div>
      {/* Billing Toggle */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-white border-2 border-gembank-gray-300 rounded-lg p-1">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-6 py-2 rounded-md font-medium transition-all ${
              billingCycle === 'monthly'
                ? 'bg-gradient-to-r from-[#C9A73A] via-[#E3C35F] to-[#B88F21] text-white shadow-md ring-1 ring-inset ring-black/5'
                : 'text-gembank-charcoal hover:bg-gembank-gray-50'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('annual')}
            className={`px-6 py-2 rounded-md font-medium transition-all relative ${
              billingCycle === 'annual'
                ? 'bg-gradient-to-r from-[#C9A73A] via-[#E3C35F] to-[#B88F21] text-white shadow-md ring-1 ring-inset ring-black/5'
                : 'text-gembank-charcoal hover:bg-gembank-gray-50'
            }`}
          >
            Annual
            <span className="absolute -top-2 -right-2 bg-gembank-green text-white text-xs px-2 py-0.5 rounded-full">
              Save 17%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid lg:grid-cols-4 gap-8">
        {plans.map((plan) => {
          const colors = colorClasses[plan.color];
          const price = plan.price[billingCycle];
          const isPopular = plan.popular;

          return (
            <div
              key={plan.id}
              className={`relative rounded-2xl border-2 ${colors.border} ${colors.bg} p-8 ${
                isPopular ? 'transform lg:scale-105 shadow-2xl' : 'shadow-card'
              } transition-all duration-300 hover:shadow-xl`}
            >
              {/* Popular Badge */}
              {isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-gembank-charcoal bg-gradient-to-r from-[#F7E8B5] via-[#F2D57B] to-[#E7C65A] shadow-xl ring-1 ring-[#D4B24A]/60">
                    <Star className="w-4 h-4 text-gembank-charcoal" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-display font-bold text-gembank-charcoal mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-gembank-gray-800">{plan.subtitle}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                {typeof price === 'number' ? (
                  <>
                    <div className="flex items-start justify-center gap-1 mb-2">
                      <span className="text-2xl font-semibold text-gembank-gray-800 mt-2">₹</span>
                      <span className="text-5xl font-display font-bold text-gembank-charcoal">
                        {price.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <p className="text-sm text-gembank-gray-800">
                      {billingCycle === 'monthly' ? 'per month' : 'per year'}
                    </p>
                    {billingCycle === 'annual' && price > 0 && (
                      <p className="text-xs text-gembank-green font-semibold mt-1">
                        Save ₹{((price / 0.83) - price).toFixed(0)} annually
                      </p>
                    )}
                  </>
                ) : (
                  <div className="text-4xl font-display font-bold text-gembank-charcoal mb-2">
                    {price}
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <Button
                variant="primary"
                size="md"
                onClick={() => handleCTA(plan.id)}
                className={`w-full mb-8 ${colors.button}`}
              >
                {plan.cta}
              </Button>

              {/* Features List */}
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-3 text-sm ${
                      feature.bold ? 'font-bold text-gembank-charcoal' : 'text-gembank-gray-800'
                    }`}
                  >
                    {feature.included ? (
                      <svg className="w-5 h-5 text-gembank-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-gembank-gray-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    )}
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom Note */}
              {plan.id === 'free' && (
                <div className="mt-6 pt-6 border-t border-gembank-gray-300">
                  <p className="text-xs text-gembank-gray-800 text-center">
                    No credit card required
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Info */}
      <div className="mt-16 text-center">
        <div className="inline-block bg-gembank-gray-50 border border-gembank-gray-300 rounded-xl p-6 max-w-2xl">
          <h3 className="text-lg font-bold text-gembank-charcoal mb-2">
            🎁 Special Launch Offer
          </h3>
          <p className="text-sm text-gembank-gray-800 mb-4">
            First 100 signups get <strong className="text-gembank-gold">3 months free</strong> on Growth or Pro plans. 
            Limited time offer. No credit card required for trial.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gembank-gray-800">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-gembank-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Cancel anytime
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-gembank-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              14-day money-back guarantee
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-gembank-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Free migration support
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;