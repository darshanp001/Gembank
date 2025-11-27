import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Gem,
  Globe,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react';

// --- Custom SVG Icons for App Stores for a more polished look ---

const AppleAppStoreIcon = (props) => (
  <svg viewBox="0 0 32 32" fill="currentColor" width="32" height="32" {...props}>
    <path d="M21.5,12.11a8.38,8.38,0,0,0-3.32.7,6.43,6.43,0,0,0-5.46,6.38,6.43,6.43,0,0,0,5.46,6.38,8.38,8.38,0,0,0,3.32.7c1.32,0,2.1-.53,3.32-1.72a1.59,1.59,0,0,1,1.19-.66,1.44,1.44,0,0,1,1.19.66,1.47,1.47,0,0,1,.13,2.1,11.3,11.3,0,0,1-4.81,3.45c-1.32.66-2.91,1.06-4.68,1.06-2.51,0-4.94-.93-6.66-2.91a8.41,8.41,0,0,1-2.91-6.51,8.41,8.41,0,0,1,2.91-6.51c1.72-2,4.15-2.91,6.66-2.91,1.77,0,3.36.4,4.68,1.06a11.3,11.3,0,0,1,4.81,3.45,1.47,1.47,0,0,1-.13,2.1,1.44,1.44,0,0,1-1.19.66,1.59,1.59,0,0,1-1.19-.66C23.6,12.64,22.82,12.11,21.5,12.11Zm-1.85-3.58c1.2-1.46,1.85-3.32,1.72-5.19a8.81,8.81,0,0,0-3.18-4.27A6,6,0,0,0,12.8,1.3a8.81,8.81,0,0,0-4.27,3.18A6,6,0,0,0,7.2,9.87c0,3.45,2.25,6,5,6.79.79.26,1.72.4,2.64.4.92,0,1.72-.13,2.38-.4A4.14,4.14,0,0,1,19.65,8.53Z" />
  </svg>
);


  const GooglePlayIcon = (props) => (
    <svg viewBox="0 0 32 32" fill="currentColor" width="28" height="28" {...props}>
    <path fill="#4CAF50" d="M21.4,15.1,6.5,2.4A1.49,1.49,0,0,0,4,3.6V28.4a1.49,1.49,0,0,0,2.5,1.2Z"/>
    <path fill="#2196F3" d="M26.4,20.1a4.2,4.2,0,0,1-1,2.8L21.4,19V15.1Z"/>
    <path fill="#FFC107" d="M25.4,11.9,21.4,15.1V7.9Z"/>
    <path fill="#F44336" d="m4,3.6,13.2,7.6,4.2-4.2Z"/>
  </svg>
);


// --- Reusable App Store Button with Lighting Effect ---
      
const AppStoreButton = ({ icon, line1, line2 }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const currentButton = buttonRef.current;
    if (!currentButton) return;

    const handleMouseMove = (e) => {
      const rect = currentButton.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      currentButton.style.setProperty('--mouse-x', `${x}px`);
      currentButton.style.setProperty('--mouse-y', `${y}px`);
    };

    currentButton.addEventListener('mousemove', handleMouseMove);

    return () => {
      currentButton.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={buttonRef}
      className="relative group flex items-center justify-center gap-3 bg-white text-gray-800 p-2.5 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg cursor-pointer border border-gray-300 hover:border-amber-400 overflow-hidden"
    >
      <div
          className="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden="true"
          style={{
              background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(251, 191, 36, 0.2), transparent 40%)`,
          }}
      />
      <div className="relative z-10 flex items-center justify-center gap-3">
        {icon}
        <div className="text-left">
            <p className="text-xs -mb-1">{line1}</p>
            <p className="text-lg font-semibold">{line2}</p>
        </div>
      </div>
    </div>
  );
};


export const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/features#pricing' },
      { name: 'Integrations', href: '/integrations' },
      { name: 'API Documentation', href: '/api-docs' },
      { name: 'Roadmap', href: '/roadmap' }
    ],
    company: [
      
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' }
    ],
    resources: [
      { name: 'Help Center', href: '/help' },
      { name: 'Video Tutorials', href: '/tutorials' },
      { name: 'Community Forum', href: '/community' },
      { name: 'Webinars', href: '/webinars' },
      { name: 'Case Studies', href: '/case-studies' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Compliance', href: '/compliance' },
      { name: 'Security', href: '/security' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', Icon: Twitter, href: 'https://twitter.com/gembank' },
    { name: 'LinkedIn', Icon: Linkedin, href: 'https://linkedin.com/company/gembank' },
    { name: 'Facebook', Icon: Facebook, href: 'https://facebook.com/gembank' },
    { name: 'Instagram', Icon: Instagram, href: 'https://instagram.com/gembank' },
    { name: 'YouTube', Icon: Youtube, href: 'https://youtube.com/@gembank' }
  ];

  return (
    <footer className="bg-white/50 text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center">
                <Gem className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold">
                <span className="text-amber-600">GEM</span>
                <span className="text-gray-800">Bank</span>
              </span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-xs leading-relaxed">
              Banking designed exclusively for Indian jewellery businesses. Manage inventory, track gold rates, and process payments—all in one platform.
            </p>
            
            <div className="mt-8">
              <p className="text-sm font-semibold text-gray-800 mb-3">Download the App</p>
              <div className="bg-amber-50/50 border border-amber-200/60 rounded-xl p-4 text-center">
                <span className="inline-block bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md mb-4 select-none">
                  Coming Soon
                </span>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <AppStoreButton
                    icon={<AppleAppStoreIcon className="w-8 h-8 text-gray-800" />}
                    line1="Download on the"
                    line2="App Store"
                  />
                  <AppStoreButton
                    icon={<GooglePlayIcon className="w-7 h-7" />}
                    line1="GET IT ON"
                    line2="Google Play"
                  />
                </div>
                <p className="text-sm font-semibold text-amber-800/90 mt-4">
                  Targeting Q1/Q2 2026
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-600 hover:text-amber-600 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-600 hover:text-amber-600 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* <div>
            <h3 className="font-bold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-600 hover:text-amber-600 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-600 hover:text-amber-600 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        
      </div>

      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} GEMBank Technologies Pvt. Ltd. All rights reserved.
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white hover:bg-amber-500/10 border border-gray-200 hover:border-amber-500/50 rounded-xl flex items-center justify-center text-xl transition-all transform hover:scale-110"
                  aria-label={social.name}
                >
                  <social.Icon className="w-5 h-5 text-gray-700" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Globe className="w-4 h-4 text-gray-600" />
              <select className="bg-transparent border-0 focus:ring-2 focus:ring-amber-400 rounded-md py-1 text-gray-600 cursor-pointer">
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
                <option value="gu">ગુજરાતી</option>
                <option value="mr">मराठी</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 border-t border-gray-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-gray-500 text-xs text-center leading-relaxed">
            <strong>Disclaimer:</strong> GEMBank is a fintech platform partnered with licensed banking institutions. 
            Banking services are provided by our partner banks. Deposits are insured by DICGC up to ₹5 lakhs per account. 
            Investment products are subject to market risks. Please read all scheme-related documents carefully.
          </p>
        </div>
      </div>
    </footer>
  );
};
export  default Footer;