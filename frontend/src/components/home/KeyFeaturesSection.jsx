import { Link } from 'react-router-dom';

const features = [
  {
    icon: '📦',
    title: 'Smart Inventory',
    description: 'Track every gram of gold, from raw material to finished jewellery, with real-time valuation and automated stock-taking.',
    href: '/features#inventory'
  },
  {
    icon: '💳',
    title: 'Secure B2B Payments',
    description: 'Execute instant, zero-fee payments to verified suppliers and artisans within the GEMBank network, 24/7.',
    href: '/features#payments'
  },
  {
    icon: '📈',
    title: 'Live Gold & Forex',
    description: 'Access real-time gold, silver, and USD rates to make informed purchasing and pricing decisions.',
    href: '/features#rates'
  },
  {
    icon: '✅',
    title: 'Automated Compliance',
    description: 'Simplify GST, hallmarking, and other regulatory requirements with automated reporting and audit trails.',
    href: '/features#compliance'
  }
];

const FeatureCard = ({ icon, title, description, href }) => (
  <div className="bg-white backdrop-blur-md rounded-2xl p-8 border border-gray-200
                  transform hover:-translate-y-2 transition-all duration-300
                  hover:shadow-lg hover:border-gembank-gold/50 group">
    <div className="flex-grow">
      <div className="w-16 h-16 bg-gradient-to-br from-gembank-gold-light to-gembank-gold 
                      rounded-xl flex items-center justify-center mb-6
                      transform group-hover:scale-110 transition-transform duration-300">
        <span className="text-3xl">{icon}</span>
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-3 font-display">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
    <div className="mt-6">
      <Link 
        to={href}
        className="font-semibold text-gembank-gold flex items-center gap-2
                   group-hover:text-gembank-gold-light transition-colors"
      >
        Learn More
        <svg 
          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </Link>
    </div>
  </div>
);

const KeyFeaturesSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#FFFDF7] to-[#fffdf6] py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-800 leading-tight mb-4">
            The Operating System for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A73A] via-[#E3C35F] to-[#B88F21]"> Modern Jewellers</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            GEMBank integrates every facet of your business into a single, intelligent platform,
            giving you unparalleled control and insight.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex">
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default KeyFeaturesSection;