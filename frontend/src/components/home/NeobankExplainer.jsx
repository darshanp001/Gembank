import React, { useState } from 'react';
import {
  Cog,
  Gem,
  Landmark,
  DollarSign,
  CheckCircle,
  BarChart3,
  Handshake,
  Smartphone,
  BadgePercent,
  Target,
  Zap,
  Sparkles,
} from 'lucide-react';

export const NeobankExplainer = () => {
  const [activeTab, setActiveTab] = useState('how');

  const tabs = [
   // Added this tab back
    { id: 'how', label: 'How Does It Work?', Icon: Cog },
    { id: 'why', label: 'Why GEMBank?', Icon: Gem }
  ];

  const content = {
    what: {
      title: 'Digital Banking for the Modern Jeweller',
      description: 'A neobank is a fully digital bank with no physical branches. GEMBank combines traditional banking services with specialized tools for jewellery businesses.',
      points: [
        
        {
          Icon: Smartphone,
          title: 'Fully Digital',
          text: 'Open accounts, process payments, and manage inventory from your phone or computer'
        },
        {
          Icon: BadgePercent,
          title: 'Lower Costs',
          text: 'No overhead of physical branches means we pass savings to you through zero fees'
        },
        {
          Icon: Target,
          title: 'Industry-Specific',
          text: 'Built exclusively for jewellers, not generic banking features'
        },
        {
          Icon: Zap,
          title: 'Always Available',
          text: '24/7 access to your accounts, real-time transactions, instant support'
        }
      ]
    },
    how: {
      title: 'How GemBank Works',
      description: 'We provide a comprehensive suite of financial tools by integrating core banking services with industry-specific solutions.',
      points: [
        { Icon: Landmark, title: 'Banking Infrastructure', text: 'CASA accounts, UPI, virtual accounts, and instant settlements.' },
        { Icon: DollarSign, title: 'Credit Solutions', text: 'Inventory financing, working capital loans, and AI-powered approvals.' },
        { Icon: CheckCircle, title: 'Compliance Automation', text: 'GST tracking, BIS hallmarking, and automated reporting.' },
        { Icon: BarChart3, title: 'Real-Time Dashboard', text: 'Cash flow insights, transaction monitoring, and business analytics.' }
      ]
    },
    why: {
      title: 'Built by Jewellers, for Jewellers',
      description: 'We understand your unique challenges because we are building this platform in close partnership with industry leaders.',
      points: [
        { Icon: Gem, title: 'Gold-Specific Features', text: 'Live gold rates, inventory by karat/weight, automatic revaluation' },
        { Icon: BarChart3, title: 'B2B Focused', text: 'Supplier payments, wholesale transactions, multi-branch management' },
        { Icon: CheckCircle, title: 'Compliance Built-In', text: 'GST, hallmarking, BIS - all automated and audit-ready' },
        { Icon: Handshake, title: 'Community Network', text: 'Connect with verified suppliers, refiners, and other jewellers' }
      ]
    }
  };

  const activeContent = content[activeTab];

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2.5 px-6 py-3 bg-white/80 backdrop-blur-sm border border-[#E8D7A8] rounded-full shadow-sm hover:shadow-md transition-all duration-300 mb-4">
            <Sparkles className="w-4 h-4 text-[#C9A73A]" />
            <span className="text-sm font-semibold text-[#8B7355]">
              Learn About GEMBank
            </span>
          </div>
          <h2 className="text-3xl  sm:text-5xl lg:text-6xl xl:text-5xl font-display font-bold text-gray-800 mb-4">
           How GemBank Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how digital banking is revolutionizing the jewellery industry
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-12">
          {tabs.map((tab) => {
            const { Icon } = tab;
            return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#C9A73A] to-[#B88F21] text-white shadow-lg shadow-amber-500/20'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          )})}
        </div>

        {/* Content Area */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 border-2 border-gray-200">
            
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              {activeContent.title}
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              {activeContent.description}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {activeContent.points.map((point, index) => {
                const { Icon } = point;
                return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-100 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-amber-100/60 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-amber-700" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    {point.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {point.text}
                  </p>
                </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-500 mb-1">100%</div>
            <div className="text-sm text-gray-600">Digital</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">0₹</div>
            <div className="text-sm text-gray-600">Setup Fee</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-1">24/7</div>
            <div className="text-sm text-gray-600">Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sky-600 mb-1">5 min</div>
            <div className="text-sm text-gray-600">Sign Up</div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default NeobankExplainer;