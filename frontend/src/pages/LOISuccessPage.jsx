import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';
import { CheckCircle, Download, Home } from 'lucide-react';

const LOISuccessPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const pdfUrl = queryParams.get('pdf');

  return (
    // <div className="min-h-screen bg-gradient-to-br from-[#FFFDF7] to-[#fffdf6] flex flex-col">
        <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center text-center py-20 px-4">
        <div className="max-w-2xl w-full">
          <div className="bg-white/80 backdrop-blur-sm border-2 border-green-200 rounded-2xl p-8 shadow-lg shadow-green-100/50">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-gembank-charcoal mb-3 leading-tight">
              Thank You! Your LOI Has Been Successfully Submitted.
            </h1>
            <p className="text-base text-gembank-gray-800 mb-6">
              You are now officially added as an Early Pilot Partner for GEMBank. Our onboarding team will contact you shortly with early-access updates.
            </p>
            <div className="bg-green-50/50 border border-green-200 rounded-xl p-6 text-left mb-8">
              <p className="font-medium text-gembank-charcoal mb-3">You will also receive:</p>
              <ul className="space-y-2">
                {[
                  'Priority onboarding',
                  'Zero onboarding fee',
                  'Exclusive pilot benefits',
                  'Early access to loan offers',
                  'Limited-time lifetime discounts'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gembank-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              {pdfUrl && (
                <a href={pdfUrl} target="_blank" rel="noopener noreferrer" download>
                  <Button variant="primary" size="md" className="w-full">
                    <Download className="w-5 h-5 mr-2" />
                    Download Your Early Partner Certificate
                  </Button>
                </a>
              )}
              <Link to="/">
                <Button variant="outline" size="md" className="w-full">
                  <Home className="w-5 h-5 mr-2" />
                  Back to Home 
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};


export default LOISuccessPage;