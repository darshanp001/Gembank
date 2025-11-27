export const SocialProof = () => {
  const testimonials = [
    {
      name: 'Rajesh Patel',
      business: 'Golden Jewellers, Mumbai',
      image: '/testimonials/rajesh.jpg', // Placeholder
      rating: 5,
      text: 'GEMBank saved us ₹45 lakhs in transaction fees last year. The real-time gold tracking alone is worth it. Highly recommended!',
      stat: '₹45L saved'
    },
    {
      name: 'Priya Sharma',
      business: 'Diamond Palace, Delhi',
      image: '/testimonials/priya.jpg', // Placeholder
      rating: 5,
      text: 'Managing 5 branches was a nightmare before GEMBank. Now everything is centralized and automated. Customer service is exceptional.',
      stat: '5 branches'
    },
    {
      name: 'Amit Kumar',
      business: 'Kumar & Sons, Ahmedabad',
      image: '/testimonials/amit.jpg', // Placeholder
      rating: 5,
      text: 'The compliance manager feature is a game-changer. No more worrying about GST filing or hallmarking paperwork. It just works.',
      stat: '100% compliant'
    }
  ];

  const stats = [
    { value: '200+', label: 'Jewellers Trust Us', color: 'text-gembank-gold' },
    { value: '₹500Cr+', label: 'Gold Value Tracked', color: 'text-gembank-green' },
    { value: '50K+', label: 'Transactions Daily', color: 'text-gembank-purple' },
    { value: '4.9/5', label: 'Customer Rating', color: 'text-gembank-blue' }
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-card hover:shadow-gold transition-all duration-300 transform hover:scale-105"
            >
              <div className={`text-4xl font-display font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm text-gembank-gray-800 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-gembank-gold/10 border border-gembank-gold/30 rounded-full text-gembank-gold text-sm font-medium mb-4">
            Customer Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gembank-charcoal mb-4">
            Loved by Jewellers Nationwide
          </h2>
          <p className="text-lg text-gembank-gray-800 max-w-2xl mx-auto">
            See how jewellery businesses like yours are transforming with GEMBank
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-card hover:shadow-gold transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gembank-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gembank-gray-800 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gembank-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-gembank-gold to-gembank-gold-dark rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-gembank-charcoal">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gembank-gray-800">
                    {testimonial.business}
                  </div>
                </div>
                <div className="px-3 py-1 bg-gembank-green/10 rounded-full text-gembank-green text-xs font-semibold">
                  {testimonial.stat}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonials CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gembank-charcoal rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">
              📹 Watch Video Testimonials
            </h3>
            <p className="text-gembank-gray-300 mb-6 max-w-md">
              Hear directly from jewellers who transformed their business with GEMBank
            </p>
            <button className="px-8 py-3 bg-gembank-gold hover:bg-gembank-gold-dark text-gembank-charcoal font-semibold rounded-lg transition-all duration-300 shadow-gold transform hover:scale-105">
              Watch Stories →
            </button>
          </div>
        </div>

        {/* Logo Cloud - Pilot Customers */}
        <div className="mt-16 text-center">
          <p className="text-sm font-semibold text-gembank-gray-800 mb-8 uppercase tracking-wide">
            Trusted by Established Jewellers
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            <div className="px-6 py-3 bg-white border-2 border-gembank-gray-300 rounded-lg font-bold text-gembank-gray-800">
              Golden Jewels
            </div>
            <div className="px-6 py-3 bg-white border-2 border-gembank-gray-300 rounded-lg font-bold text-gembank-gray-800">
              Diamond Palace
            </div>
            <div className="px-6 py-3 bg-white border-2 border-gembank-gray-300 rounded-lg font-bold text-gembank-gray-800">
              Kumar & Sons
            </div>
            <div className="px-6 py-3 bg-white border-2 border-gembank-gray-300 rounded-lg font-bold text-gembank-gray-800">
              Royal Ornaments
            </div>
            <div className="px-6 py-3 bg-white border-2 border-gembank-gray-300 rounded-lg font-bold text-gembank-gray-800">
              Shree Jewellers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;