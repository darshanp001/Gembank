// const ThreeStepVisual = () => {
//   const steps = [
//     {
//       number: '01',
//       title: 'Sign Up in 5 Minutes',
//       description: 'Create your account with basic business details. No paperwork, no branch visits.',
//       icon: '📝',
//       features: [
//         'Instant account creation',
//         'Digital KYC verification',
//         'GSTIN auto-validation'
//       ],
//       image: '/step1-signup.svg' // Placeholder
//     },
//     {
//       number: '02',
//       title: 'Connect Your Inventory',
//       description: 'Import existing data or start fresh. Our AI helps categorize and value your gold stock.',
//       icon: '💎',
//       features: [
//         'Excel/CSV import',
//         'Real-time gold rate sync',
//         'Automatic valuation'
//       ],
//       image: '/step2-inventory.svg' // Placeholder
//     },
//     {
//       number: '03',
//       title: 'Start Banking Smarter',
//       description: 'Process payments, track compliance, and manage your business from one dashboard.',
//       icon: '🚀',
//       features: [
//         'Zero-fee B2B payments',
//         'Digital invoicing',
//         'Analytics dashboard'
//       ],
//       image: '/step3-dashboard.svg' // Placeholder
//     }
//   ];

//   return (
//     <section className="py-20 bg-transparent relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.04) 1px, transparent 0)`,
//           backgroundSize: '40px 40px'
//         }} />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center mb-16">
//           <span className="inline-block px-4 py-2 bg-gembank-gold/10 border border-gembank-gold/30 rounded-full text-gembank-gold text-sm font-medium mb-4">
//             How It Works
//           </span>
//           <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-800 mb-4">
//             Get Started in 3 Simple Steps
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             From signup to full operation in less than 24 hours. No complex onboarding, no hidden requirements.
//           </p>
//         </div>

//         <div className="space-y-16">
//           {steps.map((step, index) => (
//             <div 
//               key={index}
//               className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
//             >
//               {/* Content Side */}
//               <div className="flex-1 space-y-6">
//                 <div className="flex items-center gap-4">
//                   <div className="w-16 h-16 bg-gembank-gold rounded-2xl flex items-center justify-center text-3xl transform -rotate-6">
//                     {step.icon}
//                   </div>
//                   <div className="text-6xl font-display font-bold text-gembank-gold/20">
//                     {step.number}
//                   </div>
//                 </div>

//                 <h3 className="text-3xl font-display font-bold text-gray-800">
//                   {step.title}
//                 </h3>

//                 <p className="text-lg text-gray-600 leading-relaxed">
//                   {step.description}
//                 </p>

//                 <ul className="space-y-3">
//                   {step.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-center gap-3 text-gray-600">
//                       <svg className="w-5 h-5 text-gembank-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                       </svg>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>

//                 {index === steps.length - 1 && (
//                   <div className="pt-6">
//                     <button className="px-8 py-4 bg-gembank-gold hover:bg-gembank-gold-dark text-gembank-charcoal font-semibold rounded-lg transition-all duration-300 shadow-gold transform hover:scale-105">
//                       Start Your Journey →
//                     </button>
//                   </div>
//                 )}
//               </div>

//               {/* Visual Side */}
//               <div className="flex-1 relative">
//                 <div className="bg-white backdrop-blur-sm border border-gray-200 rounded-2xl p-8 relative overflow-hidden shadow-md">
//                   {/* Placeholder for actual screenshot/illustration */}
//                   <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
//                     <div className="text-center">
//                       <div className="text-6xl mb-4">{step.icon}</div>
//                       <div className="text-gembank-gold font-semibold">Step {step.number}</div>
//                       <div className="text-gray-500 text-sm mt-2">Visual preview</div>
//                     </div>
//                   </div>

//                   {/* Floating Elements */}
//                   {index === 0 && (
//                     <div className="absolute -top-4 -right-4 bg-gembank-green text-white px-4 py-2 rounded-lg shadow-lg text-sm font-semibold animate-pulse">
//                       ⚡ 5 min setup
//                     </div>
//                   )}
//                   {index === 1 && (
//                     <div className="absolute -bottom-4 -left-4 bg-gembank-purple text-white px-4 py-2 rounded-lg shadow-lg text-sm font-semibold animate-pulse">
//                       📊 Live data sync
//                     </div>
//                   )}
//                   {index === 2 && (
//                     <div className="absolute -top-4 -left-4 bg-gembank-blue text-white px-4 py-2 rounded-lg shadow-lg text-sm font-semibold animate-pulse">
//                       🎯 Go live today
//                     </div>
//                   )}
//                 </div>

//                 {/* Connector Line (except last) */}
//                 {index < steps.length - 1 && (
//                   <div className="hidden lg:block absolute left-1/2 -bottom-12 w-0.5 h-12 bg-gradient-to-b from-gembank-gold to-transparent" />
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Timeline Progress */}
//         <div className="mt-16 flex justify-center items-center gap-4">
//           {steps.map((_, index) => (
//             <div key={index} className="flex items-center">
//               <div className="w-12 h-12 bg-gembank-gold rounded-full flex items-center justify-center text-gembank-charcoal font-bold">
//                 {index + 1}
//               </div>
//               {index < steps.length - 1 && (
//                 <div className="w-16 h-1 bg-gembank-gold/30" />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ThreeStepVisual;

import { UserPlus, Package, Rocket, CheckCircle, ArrowRight } from 'lucide-react';

const ThreeStepVisual = () => {
  const steps = [
    {
      number: '01',
      title: 'Sign Up in 5 Minutes',
      description: 'Create your account with basic business details. No paperwork, no branch visits.',
      icon: UserPlus,
      iconBg: 'from-[#E8F5E9] to-[#C8E6C9]',
      iconColor: 'text-[#4CAF50]',
      features: ['Instant account creation', 'Digital KYC verification', 'GSTIN auto-validation']
    },
    {
      number: '02',
      title: 'Connect Your Inventory',
      description: 'Import existing data or start fresh. Our AI helps categorize and value your gold stock.',
      icon: Package,
      iconBg: 'from-[#FFF9E6] to-[#FFEAA7]',
      iconColor: 'text-[#C9A73A]',
      features: ['Excel/CSV import', 'Real-time gold rate sync', 'Automatic valuation']
    },
    {
      number: '03',
      title: 'Start Banking Smarter',
      description: 'Process payments, track compliance, and manage your business from one dashboard.',
      icon: Rocket,
      iconBg: 'from-[#E3F2FD] to-[#BBDEFB]',
      iconColor: 'text-[#2196F3]',
      features: ['Zero-fee B2B payments', 'Digital invoicing', 'Analytics dashboard']
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-[#FFF9E6]/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFF9E6] border border-[#E8D7A8] rounded-full text-sm font-semibold text-[#8B7355] mb-4">
            <span>How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#4A3F35] mb-4">
            Get Started in 3 Simple Steps
          </h2>
          <p className="text-lg text-[#6B5D4F]">
            From signup to full operation in less than 24 hours
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-6 lg:p-8 border-2 border-[#E8D7A8] hover:border-[#C9A73A] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#C9A73A] to-[#E3C35F] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${step.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 ${step.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#4A3F35] mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[#6B5D4F] text-sm mb-5 leading-relaxed">
                  {step.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5">
                  {step.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[#6B5D4F]">
                      <CheckCircle className="w-4 h-4 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Connector Arrow (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-7 lg:-right-8 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 lg:w-8 lg:h-8 text-[#E8D7A8]/80" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C9A73A] to-[#E3C35F] hover:from-[#B88F21] hover:to-[#C9A73A] text-white font-bold rounded-xl shadow-lg shadow-[#C9A73A]/25 hover:shadow-xl hover:shadow-[#C9A73A]/35 transition-all duration-300 hover:scale-105">
            Start Your Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-[#4CAF50]">5 min</div>
            <div className="text-sm text-[#8B7355]">Setup Time</div>
          </div>
          <div className="w-px h-12 bg-[#E8D7A8]"></div>
          <div>
            <div className="text-3xl font-bold text-[#2196F3]">24/7</div>
            <div className="text-sm text-[#8B7355]">Support</div>
          </div>
          <div className="w-px h-12 bg-[#E8D7A8]"></div>
          <div>
            <div className="text-3xl font-bold text-[#C9A73A]">100%</div>
            <div className="text-sm text-[#8B7355]">Digital</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeStepVisual;