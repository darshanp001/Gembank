// const FeatureGrid = () => {
//   const features = [
//     {
//       icon: '📈',
//       title: 'Live Gold Rate Tracking',
//       description: 'Real-time gold prices with historical charts and price alerts',
//       color: 'from-yellow-400 to-gembank-gold',
//       stats: 'Updated every 30 seconds'
//     },
//     {
//       icon: '💎',
//       title: 'Smart Inventory Management',
//       description: 'Track every piece with SKU, weight, purity, and real-time valuation',
//       color: 'from-purple-400 to-gembank-purple',
//       stats: '99.9% accuracy'
//     },
//     {
//       icon: '💳',
//       title: 'Zero-Fee B2B Payments',
//       description: 'Transfer funds to suppliers and partners without transaction charges',
//       color: 'from-blue-400 to-gembank-blue',
//       stats: 'Save ₹40L+ annually'
//     },
//     {
//       icon: '📊',
//       title: 'Analytics Dashboard',
//       description: 'Sales trends, inventory turnover, profit margins - all in one view',
//       color: 'from-green-400 to-gembank-green',
//       stats: '15+ report types'
//     },
//     {
//       icon: '📱',
//       title: 'Digital Invoicing',
//       description: 'Generate GST-compliant invoices instantly with QR code payments',
//       color: 'from-teal-400 to-gembank-teal',
//       stats: 'E-way bill ready'
//     },
//     {
//       icon: '🔐',
//       title: 'Compliance Manager',
//       description: 'Auto-track hallmarking, GST filing, and BIS certifications',
//       color: 'from-red-400 to-gembank-red',
//       stats: '100% audit-ready'
//     },
//     {
//       icon: '👥',
//       title: 'Customer Database',
//       description: 'Store customer preferences, purchase history, and loyalty points',
//       color: 'from-indigo-400 to-purple-500',
//       stats: 'Unlimited contacts'
//     },
//     {
//       icon: '🏢',
//       title: 'Multi-Branch Support',
//       description: 'Manage multiple outlets with centralized control and reporting',
//       color: 'from-pink-400 to-red-400',
//       stats: 'Up to 50 branches'
//     },
//     {
//       icon: '📤',
//       title: 'Supplier Management',
//       description: 'Track orders, payments, and delivery schedules with vendors',
//       color: 'from-orange-400 to-yellow-500',
//       stats: 'Smart reminders'
//     },
//     {
//       icon: '🔔',
//       title: 'Smart Notifications',
//       description: 'Price alerts, low stock warnings, payment reminders via SMS/email',
//       color: 'from-cyan-400 to-blue-500',
//       stats: 'Real-time alerts'
//     },
//     {
//       icon: '📄',
//       title: 'Document Vault',
//       description: 'Securely store certificates, licenses, and business documents',
//       color: 'from-emerald-400 to-green-500',
//       stats: 'Bank-grade encryption'
//     },
//     {
//       icon: '🤝',
//       title: 'Partnership Network',
//       description: 'Connect with verified suppliers, refiners, and wholesale partners',
//       color: 'from-violet-400 to-purple-600',
//       stats: '500+ partners'
//     }
//   ];

//   return (
//     <section className="py-20 bg-trasparent">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <span className="inline-block px-4 py-2 bg-gembank-gold/10 border border-gembank-gold/30 rounded-full text-gembank-gold text-sm font-medium mb-4">
//             All Features
//           </span>
//           <h2 className="text-3xl sm:text-4xl font-display font-bold text-gembank-charcoal mb-4">
//             Everything You Need to Run Your Business
//           </h2>
//           <p className="text-lg text-gembank-gray-800 max-w-2xl mx-auto">
//             Comprehensive tools designed specifically for jewellery businesses of all sizes
//           </p>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="group relative bg-white border-2 border-gembank-gray-200 rounded-xl p-6 hover:border-gembank-gold hover:shadow-gold transition-all duration-300 cursor-pointer"
//             >
//               {/* Icon with Gradient Background */}
//               <div className={`w-14 h-14 mb-4 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center text-3xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
//                 {feature.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-lg font-bold text-gembank-charcoal mb-2 group-hover:text-gembank-gold transition-colors">
//                 {feature.title}
//               </h3>

//               {/* Description */}
//               <p className="text-sm text-gembank-gray-800 mb-4 leading-relaxed">
//                 {feature.description}
//               </p>

//               {/* Stats Badge */}
//               <div className="inline-block px-3 py-1 bg-gembank-gray-100 rounded-full text-xs font-semibold text-gembank-gray-800">
//                 {feature.stats}
//               </div>

//               {/* Hover Effect Arrow */}
//               <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <svg className="w-5 h-5 text-gembank-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                 </svg>
//               </div>
//             </div>
//           ))}
//         </div>

       
//       </div>
//     </section>
//   );
// };

// export default FeatureGrid;
import React, { useState } from 'react';
// Import lucide-react icons
import {
  CreditCard,
  TrendingUp,
  BarChart3,
  Shield,
  Smartphone,
  Zap,
  Receipt,
  Repeat,
  PiggyBank,
  Calendar,
  Target,
  PieChart,
  FileText,
  Lock,
  FileCheck,
  Eye,
  ArrowRight,
  HelpCircle // Fallback icon
} from 'lucide-react';

// Map icon names (from your original code) to the imported lucide components
const iconMap = {
  CreditCard: CreditCard,
  TrendingUp: TrendingUp,
  BarChart3: BarChart3,
  Shield: Shield,
  Smartphone: Smartphone,
  Zap: Zap,
  Receipt: Receipt,
  Repeat: Repeat,
  PiggyBank: PiggyBank,
  Calendar: Calendar,
  Target: Target,
  PieChart: PieChart,
  FileText: FileText,
  Lock: Lock,
  FileCheck: FileCheck,
  Eye: Eye,
  ArrowRight: ArrowRight,
};

// A helper component to render the correct icon by name
const Icon = ({ name, ...props }) => {
  const IconComponent = iconMap[name] || HelpCircle; // Default to a fallback icon
  return <IconComponent {...props} />;
};

const FeaturesGrid = () => {
  const [activeCategory, setActiveCategory] = useState('banking');

  const categories = [
    { id: 'banking', name: 'Digital Banking', icon: 'CreditCard' },
    { id: 'credit', name: 'Credit & Financing', icon: 'TrendingUp' },
    { id: 'analytics', name: 'Analytics & Insights', icon: 'BarChart3' },
    { id: 'compliance', name: 'Compliance & Security', icon: 'Shield' }
  ];

  // Your feature data, unchanged
  const features = {
    banking: [
      {
        icon: 'Smartphone',
        title: 'Multi-Account Management',
        description: 'Manage all your business accounts from one dashboard with real-time balance tracking.',
        testimonial: '"Reduced our daily reconciliation time from 3 hours to 15 minutes." - Rajesh Jewelers, Mumbai',
        badge: 'Most Popular'
      },
      {
        icon: 'Zap',
        title: 'Instant Payments',
        description: 'Send and receive payments instantly with UPI, NEFT, and RTGS integration.',
        testimonial: '"Customers love the instant payment confirmation." - Priya Gems, Delhi',
        badge: null
      },
      {
        icon: 'Receipt',
        title: 'Smart Invoicing',
        description: 'Generate GST-compliant invoices with automatic tax calculations and BIS hallmarking details.',
        testimonial: '"Our GST filing became effortless." - Kumar Gold House, Chennai',
        badge: null
      },
      {
        icon: 'Repeat',
        title: 'Automated Reconciliation',
        description: 'Automatic matching of payments with invoices and inventory movements.',
        testimonial: '"No more manual errors in our books." - Sharma Jewelers, Jaipur',
        badge: 'Time Saver'
      }
    ],
    credit: [
      {
        icon: 'CreditCard',
        title: 'Instant Credit Lines',
        description: 'Pre-approved credit based on your business patterns, available 24/7.',
        testimonial: '"Got ₹50L credit approval in just 2 hours." - Agarwal Jewelers, Surat',
        badge: 'Fast Approval'
      },
      {
        icon: 'PiggyBank',
        title: 'Inventory Financing',
        description: 'Specialized loans against gold and diamond inventory with competitive rates.',
        testimonial: '"40% lower interest than our previous bank." - Mehta Diamonds, Mumbai',
        badge: 'Best Rates'
      },
      {
        icon: 'Calendar',
        title: 'Flexible Repayment',
        description: 'Seasonal repayment options aligned with festival and wedding seasons.',
        testimonial: '"Perfect for our Diwali season cash flow." - Gupta Gold, Kolkata',
        badge: null
      },
      {
        icon: 'TrendingUp',
        title: 'Credit Score Building',
        description: 'Build business credit score with every transaction and timely repayment.',
        testimonial: '"Our credit score improved by 150 points in 6 months." - Jain Jewelers, Pune',
        badge: null
      }
    ],
    analytics: [
      {
        icon: 'BarChart3',
        title: 'Real-time Dashboard',
        description: 'Live insights into cash flow, inventory turnover, and business performance.',
        testimonial: '"Finally understand our cash flow patterns." - Patel Jewelers, Ahmedabad',
        badge: 'Data Driven'
      },
      {
        icon: 'Target',
        title: 'Predictive Analytics',
        description: 'AI-powered forecasting for inventory planning and cash flow management.',
        testimonial: '"Predicted our Akshaya Tritiya demand perfectly." - Reddy Jewelers, Hyderabad',
        badge: 'AI Powered'
      },
      {
        icon: 'PieChart',
        title: 'Profit Analysis',
        description: 'Detailed profitability analysis by product category, customer segment, and time period.',
        testimonial: '"Identified our most profitable product lines." - Singh Gold, Amritsar',
        badge: null
      },
      {
        icon: 'FileText',
        title: 'Custom Reports',
        description: 'Generate detailed reports for stakeholders, auditors, and compliance requirements.',
        testimonial: '"Audit preparation time reduced by 70%." - Bansal Jewelers, Indore',
        badge: null
      }
    ],
    compliance: [
      {
        icon: 'Shield',
        title: 'BIS Compliance',
        description: 'Automated BIS hallmarking compliance with digital certificates and tracking.',
        testimonial: '"Never missed a BIS compliance deadline." - Chopra Jewelers, Ludhiana',
        badge: 'Certified'
      },
      {
        icon: 'Lock',
        title: 'Bank-Grade Security',
        description: '256-bit encryption, multi-factor authentication, and fraud detection.',
        testimonial: '"Complete peace of mind for our transactions." - Mittal Gems, Jodhpur',
        badge: 'Secure'
      },
      {
        icon: 'FileCheck',
        title: 'GST Integration',
        description: 'Seamless GST filing with automatic return generation and compliance tracking.',
        testimonial: '"GST returns filed automatically every month." - Agrawal Gold, Kanpur',
        badge: null
      },
      {
        icon: 'Eye',
        title: 'Audit Trail',
        description: 'Complete transaction history with immutable records for regulatory compliance.',
        testimonial: '"Regulators appreciate our transparent records." - Joshi Jewelers, Nashik',
        badge: null
      }
    ]
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl my-10 xl:text-5xl font-display font-bold text-gray-800 leading-tight mb-6">
            Complete Financial Infrastructure for Jewelers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to modernize your jewelry business finances, 
            from digital banking to compliance management.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 bg-white rounded-lg p-2 shadow-sm border border-gray-200">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setActiveCategory(category?.id)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                activeCategory === category?.id
                  ? 'bg-gradient-to-r from-[#C9A73A] to-[#B88F21] text-white shadow-md shadow-amber-500/10'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-amber-50/50'
              }`}
            >
              <Icon name={category?.icon} size={16} />
              <span>{category?.name}</span>
            </button>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features?.[activeCategory]?.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:border-amber-300/80 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-amber-100/60 rounded-lg flex items-center justify-center">
                  <Icon name={feature?.icon} size={24} className="text-amber-700" />
                </div>
                {feature?.badge && (
                  <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-xs font-medium">
                    {feature?.badge}
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature?.title}</h3>
              <p className="text-gray-600 mb-6">{feature?.description}</p>
              
              {/* Testimonial */}
              <div className="bg-gray-50/80 rounded-lg p-4 border-l-4 border-amber-500">
                <p className="text-sm text-gray-700 italic">{feature?.testimonial}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Transform Your Jewelry Business?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join 47+ jewelry businesses already using GEMBank to streamline their finances and accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Replaced Button with styled <a> tag */}
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#C9A73A] to-[#B88F21] shadow-lg shadow-amber-500/20 hover:from-[#B88F21] hover:to-[#C9A73A] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Start Free Trial
              <Icon name="ArrowRight" size={18} />
            </a>
            {/* Replaced Button with styled <a> tag */}
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold text-gray-700 bg-white border border-gray-300 hover:bg-gray-50/50 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Icon name="Calendar" size={18} />
              Book Demo Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;