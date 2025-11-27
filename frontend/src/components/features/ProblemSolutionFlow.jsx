// import React from 'react';
// // You'll need to install @heroicons/react if you haven't already:
// // npm install @heroicons/react

// import {
//   ChartBarIcon, CurrencyDollarIcon, DocumentTextIcon, ClockIcon, // For problems
//   ChartPieIcon, CreditCardIcon, CheckCircleIcon, BoltIcon // For solutions
// } from '@heroicons/react/24/outline'; // Using outline icons for a lighter look

// const ProblemSolutionFlow = () => {
//   const problems = [
//     {
//       icon: <ChartBarIcon className="h-6 w-6 text-red-500" />,
//       title: 'Manual Inventory Tracking',
//       description: 'Hours spent updating spreadsheets and manual stock registers',
//       impact: 'Lost time & inventory errors'
//     },
//     {
//       icon: <CurrencyDollarIcon className="h-6 w-6 text-red-500" />,
//       title: 'High Banking Fees',
//       description: 'Traditional banks charge 2-3% on every B2B transaction',
//       impact: '₹50L+ annual fees for mid-size businesses'
//     },
//     {
//       icon: <DocumentTextIcon className="h-6 w-6 text-red-500" />,
//       title: 'Complex Compliance',
//       description: 'Juggling GST, hallmarking, and BIS certifications manually',
//       impact: 'Risk of penalties & audits'
//     },
//     {
//       icon: <ClockIcon className="h-6 w-6 text-red-500" />,
//       title: 'Delayed Payments',
//       description: 'Waiting 3-5 days for payment settlements',
//       impact: 'Cash flow issues & supplier delays'
//     }
//   ];

//   const solutions = [
//     {
//       icon: <ChartPieIcon className="h-6 w-6 text-green-600" />, // Changed from target to pie chart for inventory
//       title: 'Real-Time Inventory',
//       description: 'Track every gram of gold with precision, automatic valuation updates',
//       benefit: 'Save 15+ hours/week'
//     },
//     {
//       icon: <CreditCardIcon className="h-6 w-6 text-green-600" />, // Changed from money bag to credit card
//       title: 'Zero Transaction Fees',
//       description: 'Free B2B transfers, wholesale payments, and supplier settlements',
//       benefit: 'Save ₹40L+ annually'
//     },
//     {
//       icon: <CheckCircleIcon className="h-6 w-6 text-green-600" />, // Changed from checkmark to check circle
//       title: 'Auto-Compliance',
//       description: 'Automated GST filing, hallmarking records, and digital invoicing',
//       benefit: '100% audit-ready'
//     },
//     {
//       icon: <BoltIcon className="h-6 w-6 text-green-600" />, // Changed from lightning to bolt
//       title: 'Instant Settlements',
//       description: 'Real-time payments and same-day settlements for all transactions',
//       benefit: 'Improve cash flow by 40%'
//     }
//   ];

//   return (
//     <section className="py-16 sm:py-24 bg-gradient-to-br from-[#FFFDF7] to-[#fffdf6]  relative overflow-hidden">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

//         {/* Problems Section */}
//         <div className="mb-16 sm:mb-24">
//           <div className="text-center mb-12 sm:mb-16">
//             <span className="inline-block px-5 py-2 bg-red-100 text-red-800 rounded-full text-sm font-semibold mb-4 shadow-sm">
//               The Problem
//             </span>
//             <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight tracking-tight">
//               Traditional Banking Holds You Back
//             </h2>
//             <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
//               Jewellery businesses face unique challenges that traditional banks simply don't understand.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {problems.map((problem, index) => (
//               <div 
//                 key={index}
//                 className="bg-white rounded-2xl p-7 shadow-lg border border-red-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
//               >
//                 <div className="mb-5 flex items-center justify-center w-12 h-12 bg-red-50 rounded-xl p-2.5">
//                   {problem.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">
//                   {problem.title}
//                 </h3>
//                 <p className="text-sm text-gray-600 mb-4 leading-relaxed">
//                   {problem.description}
//                 </p>
//                 <div className="pt-4 border-t border-red-100">
//                   <span className="text-xs font-semibold text-red-600 flex items-center">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                     {problem.impact}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Arrow Divider */}
//         <div className="flex justify-center my-16 sm:my-20">
//           <div className="relative w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl transform rotate-90 animate-pulse-arrow">
//             <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//             </svg>
//             <span className="absolute -bottom-8 text-sm font-medium text-gray-600">
//                 Switch to
//             </span>
//           </div>
//         </div>

//         {/* Solutions Section */}
//         <div>
//           <div className="text-center mb-12 sm:mb-16">
//             <span className="inline-block px-5 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4 shadow-sm">
//               The Solution
//             </span>
//             <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight tracking-tight">
//               GEMBank Solves Everything
//             </h2>
//             <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
//               Purpose-built banking for jewellery businesses with features that actually matter.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {solutions.map((solution, index) => (
//               <div 
//                 key={index}
//                 className="bg-white rounded-2xl p-7 shadow-lg border border-green-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
//               >
//                 <div className="mb-5 flex items-center justify-center w-12 h-12 bg-green-50 rounded-xl p-2.5">
//                   {solution.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">
//                   {solution.title}
//                 </h3>
//                 <p className="text-sm text-gray-600 mb-4 leading-relaxed">
//                   {solution.description}
//                 </p>
//                 <div className="pt-4 border-t border-green-100">
//                   <span className="text-xs font-semibold text-green-600 flex items-center">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//                     </svg>
//                     {solution.benefit}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

{/* Impact Stats */ }
{/* <div className="mt-20 sm:mt-24 bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-gray-100">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
    <div className="p-2">
      <div className="text-4xl sm:text-5xl font-extrabold text-yellow-500 mb-1">85%</div>
      <div className="text-sm sm:text-base text-gray-700 font-medium">Time Saved on Admin</div>
    </div>
    <div className="p-2">
      <div className="text-4xl sm:text-5xl font-extrabold text-emerald-500 mb-1">₹45L</div>
      <div className="text-sm sm:text-base text-gray-700 font-medium">Avg. Annual Savings</div>
    </div>
    <div className="p-2">
      <div className="text-4xl sm:text-5xl font-extrabold text-purple-500 mb-1">40%</div>
      <div className="text-sm sm:text-base text-gray-700 font-medium">Better Cash Flow</div>
    </div>
    <div className="p-2">
      <div className="text-4xl sm:text-5xl font-extrabold text-sky-500 mb-1">100%</div>
      <div className="text-sm sm:text-base text-gray-700 font-medium">Compliance Ready</div>
    </div>
  </div>
</div> */}
//       </div>
//     </section>
//   );
// };

// export default ProblemSolutionFlow;


import React, { useState, useEffect, useRef } from 'react';
// Import icons from @heroicons/react
import {
  ChartBarIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  ClockIcon,
  ChartPieIcon,
  CreditCardIcon,
  CheckCircleIcon,
  BoltIcon,
  ArrowDownIcon
} from '@heroicons/react/24/outline';

// Data using the imported icons
const problems = [
  { icon: ChartBarIcon, title: 'Manual Inventory Tracking', description: 'Hours spent updating spreadsheets and manual stock registers.', impact: 'Lost time & inventory errors' },
  { icon: CurrencyDollarIcon, title: 'High Banking Fees', description: 'Traditional banks charge 2-3% on every B2B transaction.', impact: '₹50L+ annual fees' },
  { icon: DocumentTextIcon, title: 'Complex Compliance', description: 'Juggling GST, hallmarking, and BIS certifications manually.', impact: 'Risk of penalties & audits' },
  { icon: ClockIcon, title: 'Delayed Payments', description: 'Waiting 3-5 days for payment settlements from marketplaces.', impact: 'Cash flow issues' }
];

const solutions = [
  { icon: ChartPieIcon, title: 'Real-Time Inventory', description: 'Track every gram of gold with precision, with automatic valuation.', benefit: 'Save 15+ hours/week' },
  { icon: CreditCardIcon, title: 'Zero Transaction Fees', description: 'Free B2B transfers, wholesale payments, and supplier settlements.', benefit: 'Save ₹40L+ annually' },
  { icon: CheckCircleIcon, title: 'Auto-Compliance', description: 'Automated GST filing, hallmarking records, and digital invoicing.', benefit: '100% audit-ready' },
  { icon: BoltIcon, title: 'Instant Settlements', description: 'Real-time payments and same-day settlements for all transactions.', benefit: 'Improve cash flow by 40%' }
];

// --- TypeScript types removed ---

const InfoCard = ({ variant, item, index }) => {
  const cardRef = useRef(null); // Removed <HTMLDivElement>
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const isProblem = variant === 'problem';
  // The 'icon' property is the imported component
  const IconComponent = item.icon;
  // Check if 'impact' exists in item, otherwise use 'benefit'
  const impactOrBenefit = 'impact' in item ? item.impact : item.benefit;

  const baseClasses = `rounded-2xl p-6 md:p-8 transition-all duration-700 ease-out group h-full flex flex-col`;
  const visibilityClasses = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5';
  const variantClasses = isProblem
    ? 'bg-white border border-gray-200/80 shadow-lg shadow-gray-200/50 hover:border-red-300/80 hover:shadow-xl hover:shadow-red-200/60'
    : 'bg-white border border-gray-200/80 shadow-lg shadow-gray-200/50 hover:border-amber-400/80 hover:shadow-2xl hover:shadow-amber-200/60';

  const iconWrapperClasses = isProblem ? 'bg-red-50 text-red-500' : 'bg-amber-50 text-amber-500';
  const impactBenefitClasses = isProblem ? 'text-red-600 font-semibold' : 'text-green-700 font-semibold';

  return (
    <div
      ref={cardRef}
      className={`${baseClasses} ${visibilityClasses} ${variantClasses} hover:!translate-y-[-6px]`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 flex-shrink-0 ${iconWrapperClasses}`}>
        {/* The imported icons are used here */}
        <IconComponent className="w-6 h-6" />
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
      </div>
      <div className={`pt-4 border-t mt-auto ${isProblem ? 'border-red-100' : 'border-amber-200/80'}`}>
        <span className={`text-sm flex items-center ${impactBenefitClasses}`}>
          {isProblem ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          )}
          {impactOrBenefit}
        </span>
      </div>
    </div>
  );
};


const ProblemSolutionFlow = () => {
  return (
    <section className="py-24 sm:py-15 bg-gray-50/50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Problems Section */}
        <div className="mb-20 sm:mb-9">
          <div className="text-center mb-4 max-w-[51rem] mx-auto">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-red-100/60 border border-red-500/20 rounded-full text-red-800 font-semibold mb-6">
              <span>The Problem</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 tracking-tight">
              Traditional Banking Holds You Back
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-8">
              Jewellery businesses face unique challenges that traditional banks simply don't understand, costing you time and money.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {problems.map((p, i) => (
              <InfoCard key={`problem-${i}`} variant="problem" item={p} index={i} />
            ))}
          </div>
        </div>

        {/* Transition Divider */}
        <div className="flex justify-center my-8 sm:my-1.mb-16">
          <div className="w-16 h-16 bg-white border border-gray-200/80 rounded-full flex items-center justify-center shadow-lg animate-bounce">
            {/* Use the imported ArrowDownIcon here */}
            <ArrowDownIcon className="w-8 h-8 text-amber-500" />
          </div>
        </div>


        {/* Solutions Section */}
        <div>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-amber-100/60 border border-amber-500/30 rounded-full text-amber-800 font-semibold mb-6">
              <span>The Solution</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 tracking-tight">
              GEMBank Is The Answer
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-8">
              We've built a digital gold bank from the ground up, with features that solve your biggest headaches.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {solutions.map((s, i) => (
              <InfoCard key={`solution-${i}`} variant="solution" item={s} index={i} />
            ))}
          </div>
        </div>

        {/* Impact Stats */ }
<div className="mt-20 sm:mt-24 bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-gray-100">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
    <div className="p-2">
      <div className="text-4xl sm:text-5xl font-extrabold text-yellow-500 mb-1">85%</div>
      <div className="text-sm sm:text-base text-gray-700 font-medium">Time Saved on Admin</div>
    </div>
    <div className="p-2">
      <div className="text-4xl sm:text-5xl font-extrabold text-emerald-500 mb-1">₹45L</div>
      <div className="text-sm sm:text-base text-gray-700 font-medium">Avg. Annual Savings</div>
    </div>
    <div className="p-2">
      <div className="text-4xl sm:text-5xl font-extrabold text-purple-500 mb-1">40%</div>
      <div className="text-sm sm:text-base text-gray-700 font-medium">Better Cash Flow</div>
    </div>
    <div className="p-2">
      <div className="text-4xl sm:text-5xl font-extrabold text-sky-500 mb-1">100%</div>
      <div className="text-sm sm:text-base text-gray-700 font-medium">Compliance Ready</div>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default ProblemSolutionFlow;