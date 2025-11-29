import React, { useState, useEffect, useRef } from 'react';
import { Building2, BarChart3, ShieldCheck, UploadCloud, XCircle, Mail, CheckCircle, FileText } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { submitLOI } from '../../services/loi.service';
import { ProgressBar } from './ProgressBar';
import { FormStepper } from './FormStepper';
// Mock constants - replace with your actual constants
const CONSTANTS = {
  INDIAN_STATES: ['Andhra Pradesh', 'Gujarat', 'Karnataka', 'Maharashtra', 'Tamil Nadu', 'West Bengal']
};

// Mock API service - replace with your actual service
// const submitLOI = async (formData) => {

const LOIForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [stateSuggestions, setStateSuggestions] = useState([]);
  const [filePreviewUrl, setFilePreviewUrl] = useState(null);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});
  
  const [formData, setFormData] = useState({
    // ownerName: 'Demo Owner',
    // storeName: 'Demo Store',
    // businessType: 'Retail',
    // gstin: '27AABAA1471A1Z1',
    // pan: 'ABCDE1234F',
    // storeAddress: '123 Demo Street',
    // cityMarketArea: 'Demo City',
    // state: 'Maharashtra',
    // email: 'demo@example.com',
    // phone: '9876543210',
    // alternatePhone: '9876543211',
    // inventoryManagement: 'Excel',
    // complianceIssues: 'No',
    // loanDifficulty: 'Easy',
    // wantsInstantLoans: 'Yes',
    // digitalPaymentsFrequency: 'Daily',
    // joinPilot: 'Yes',
    // signatureFullName: 'Demo Signature',
    ownerName: '',
    storeName: '',
    businessType: '',
    gstin: '',
    pan: '',
    storeAddress: '',
    cityMarketArea: '',
    state: '',
    email: '',
    phone: '',
    alternatePhone: '',
    inventoryManagement: '',
    complianceIssues: '',
    loanDifficulty: '',
    wantsInstantLoans: '',
    digitalPaymentsFrequency: '',
    joinPilot: '',
    signatureFullName: '',
    signatureConfirmation: false,
    verificationFile: null, // This will store either File object or Base64 string
    verificationFileName: null, // To store the original file name
    verificationFileType: null, // To store the original file type
  });

  const steps = [
    { title: 'Business Info', icon: <Building2 className="w-6 h-6" /> },
    { title: 'Pain-Point Validation', icon: <BarChart3 className="w-6 h-6" /> },
    { title: 'Finalize & Submit', icon: <ShieldCheck className="w-6 h-6" /> }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file size (10MB)
      if (file.size > 10 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, verificationFile: 'File size must be less than 10MB' }));
        return;
      }
      
      // Validate file type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
      if (!validTypes.includes(file.type)) {
        setErrors(prev => ({ ...prev, verificationFile: 'Only JPG, PNG, or PDF files are allowed' }));
        return;
      }
      
      // Clear previous file errors if any
      if (errors.verificationFile) {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors.verificationFile;
          return newErrors;
        });
      }

      // Convert all valid files (images, PDFs) to Base64
      const reader = new FileReader();
      reader.onloadend = () => {
        // The result contains the Base64 data URL
        setFormData(prev => ({
          ...prev,
          verificationFile: reader.result, // Store Base64 string
          verificationFileName: file.name,
          verificationFileType: file.type,
        }));
        // For images, we can show a preview. For PDFs, we won't.
        if (file.type.startsWith('image/')) {
          setFilePreviewUrl(reader.result);
        } else {
          setFilePreviewUrl(null); // No preview for non-image files like PDF
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveFile = () => {
    setFormData(prev => ({ ...prev, verificationFile: null }));
    if (filePreviewUrl) {
      URL.revokeObjectURL(filePreviewUrl);
    }
    setFormData(prev => ({ 
      ...prev, 
      verificationFile: null,
      verificationFileName: null,
      verificationFileType: null,
    }));
    setFilePreviewUrl(null);
    const fileInput = document.getElementById('file-upload');
    if (fileInput) fileInput.value = '';
  };

  const handleStateChange = (value) => {
    handleInputChange('state', value);
    if (value) {
      const filteredStates = CONSTANTS.INDIAN_STATES.filter(state =>
        state.toLowerCase().includes(value.toLowerCase())
      );
      setStateSuggestions(filteredStates);
    } else {
      setStateSuggestions([]);
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    switch(step) {
      case 0:
        if (!formData.ownerName?.trim()) newErrors.ownerName = 'Owner name is required.';
        if (!formData.storeName?.trim()) newErrors.storeName = 'Store name is required.';
        if (!formData.businessType) newErrors.businessType = 'Business type is required.';
        
        const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
        if (!formData.gstin?.trim()) {
          newErrors.gstin = 'GST Number is required.';
        } else if (!gstRegex.test(formData.gstin.toUpperCase())) {
          newErrors.gstin = 'Please enter a valid 15-digit GST Number.';
        }

        if (!formData.storeAddress?.trim()) newErrors.storeAddress = 'Store address is required.';
        if (!formData.cityMarketArea?.trim()) newErrors.cityMarketArea = 'City & Market Area is required.';
        if (!formData.state?.trim()) newErrors.state = 'State is required.';
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email?.trim()) {
          newErrors.email = 'Email is required.';
        } else if (!emailRegex.test(formData.email)) {
          newErrors.email = 'Please enter a valid email address.';
        }

        const phoneRegex = /^[6-9]\d{9}$/;
        if (!formData.phone?.trim()) {
          newErrors.phone = 'Phone number is required.';
        } else if (!phoneRegex.test(formData.phone)) {
          newErrors.phone = 'Please enter a valid 10-digit Indian mobile number.';
        }
        break;
        
      case 1:
        if (!formData.inventoryManagement) newErrors.inventoryManagement = 'Please select an inventory method.';
        if (!formData.complianceIssues) newErrors.complianceIssues = 'Please select an option for compliance issues.';
        if (!formData.loanDifficulty) newErrors.loanDifficulty = 'Please select an option for loan difficulty.';
        if (!formData.wantsInstantLoans) newErrors.wantsInstantLoans = 'Please select an option for instant loans.';
        if (!formData.digitalPaymentsFrequency) newErrors.digitalPaymentsFrequency = 'Please select a payment frequency.';
        if (!formData.joinPilot) newErrors.joinPilot = 'Please select if you would like to join the pilot.';
        break;
        
      case 2:
        if (!formData.signatureFullName?.trim()) newErrors.signatureFullName = 'Full name is required for signature.';
        if (!formData.signatureConfirmation) newErrors.signatureConfirmation = 'Please confirm your signature.';
        if (!formData.verificationFile) newErrors.verificationFile = 'A verification document is required.';
        break;
        
      default:
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(currentStep)) {
      console.error("Frontend validation failed. Errors:", errors);
      return;
    }


    setIsSubmitting(true);
    // Send the entire formData state as a JSON object.
    // The verificationFile field now contains the Base64 string for all file types.
    const submissionData = { ...formData };

    console.log("Frontend: Preparing to submit the following data:", formData);

    try {
      const response = await submitLOI(submissionData);
      console.log("Frontend: Submission successful! Server response:", response.data);
                                                                                                     
      navigate(`/loi/success?pdf=${response.data.pdfUrl}`);
    } catch (error) {
      alert('Submission failed. Please check the browser console for more details.');
      console.error("Frontend: Submission failed with error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    return () => {
      // This effect is primarily for cleaning up blob URLs.
      // If filePreviewUrl is a Base64 string (starts with 'data:'), it doesn't need revoking.
      if (filePreviewUrl && filePreviewUrl.startsWith('blob:')) {
        URL.revokeObjectURL(filePreviewUrl);
      }
    };
  }, [filePreviewUrl]);

  const renderStepContent = () => {
    switch(currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gembank-charcoal mb-4">A) Business Verification</h3>
            
            <div>
              <label className="block text-sm font-medium text-gembank-gray-800 mb-2">
                Owner Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.ownerName}
                onChange={(e) => handleInputChange('ownerName', e.target.value)}
                className="w-full px-4 py-3 border border-gembank-gray-300 rounded-lg focus:ring-2 focus:ring-gembank-gold focus:border-transparent"
                placeholder="Enter owner's full name"
              />
              {errors.ownerName && <p className="text-sm text-red-600 mt-1">{errors.ownerName}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Store Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.storeName}
                onChange={(e) => handleInputChange('storeName', e.target.value)}
                className="w-full px-4 py-3 border border-gembank-gray-300 rounded-lg focus:ring-2 focus:ring-gembank-gold focus:border-transparent"
                placeholder="Enter your store name"
              />
              {errors.storeName && <p className="text-sm text-red-600 mt-1">{errors.storeName}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Business Type <span className="text-red-500">*</span></label>
              <select 
                value={formData.businessType} 
                onChange={(e) => handleInputChange('businessType', e.target.value)} 
                className="w-full px-4 py-3 border border-gembank-gray-300 rounded-lg focus:ring-2 focus:ring-gembank-gold focus:border-transparent"
              >
                <option value="">Select type</option>
                <option value="Retail">Retail</option>
                <option value="Wholesale">Wholesale</option>
                <option value="Manufacturer">Manufacturer</option>
                <option value="Bullion">Bullion</option>
              </select>
              {errors.businessType && <p className="text-sm text-red-600 mt-1">{errors.businessType}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">GST Number <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                value={formData.gstin} 
                onChange={(e) => handleInputChange('gstin', e.target.value.toUpperCase())}  
                placeholder="e.g. 24AAFCC9980MZZ3" 
                className="w-full px-4 py-3 border border-gembank-gray-300 rounded-lg focus:ring-2 focus:ring-gembank-gold focus:border-transparent" 
                maxLength="15"
              />
              {errors.gstin && <p className="text-sm text-red-600 mt-1">{errors.gstin}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">PAN (optional)</label>
              <input 
                type="text" 
                value={formData.pan} 
                onChange={(e) => handleInputChange('pan', e.target.value.toUpperCase())}   
                placeholder="Enter your PAN number" 
                className="w-full px-4 py-3 border border-gembank-gray-300 rounded-lg focus:ring-2 focus:ring-gembank-gold focus:border-transparent"
                maxLength="10"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Store Address <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                value={formData.storeAddress} 
                onChange={(e) => handleInputChange('storeAddress', e.target.value)}  
                placeholder="Enter your store address" 
                className="w-full px-4 py-3 border border-gembank-gray-300 rounded-lg focus:ring-2 focus:ring-gembank-gold focus:border-transparent" 
              />
              {errors.storeAddress && <p className="text-sm text-red-600 mt-1">{errors.storeAddress}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">City & Market Area <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                value={formData.cityMarketArea} 
                onChange={(e) => handleInputChange('cityMarketArea', e.target.value)}   
                placeholder="e.g. Mumbai - Zaveri Bazaar"
                className="w-full px-4 py-3 border border-gembank-gray-300 rounded-lg focus:ring-2 focus:ring-gembank-gold focus:border-transparent" 
              />
              {errors.cityMarketArea && <p className="text-sm text-red-600 mt-1">{errors.cityMarketArea}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">State <span className="text-red-500">*</span></label>
              <div className="relative">
                <input 
                  type="text" 
                  value={formData.state} 
                  onChange={(e) => handleStateChange(e.target.value)}
                  onFocus={() => handleStateChange(formData.state)}
                  onBlur={() => setTimeout(() => setStateSuggestions([]), 150)}
                  placeholder="e.g., Maharashtra" 
                  className="w-full px-4 py-3 border border-gembank-gray-300 rounded-lg focus:ring-2 focus:ring-gembank-gold focus:border-transparent" 
                />
                {stateSuggestions.length > 0 && (
                  <ul className="absolute z-10 w-full bg-white border border-gembank-gray-300 rounded-lg mt-1 max-h-60 overflow-y-auto shadow-lg">
                    {stateSuggestions.map(state => (
                      <li 
                        key={state}
                        className="px-4 py-2 cursor-pointer hover:bg-gembank-gray-100"
                        onMouseDown={() => {
                          handleStateChange(state);
                          setStateSuggestions([]);
                        }}
                      >
                        {state}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {errors.state && <p className="text-sm text-red-600 mt-1">{errors.state}</p>}
            </div>  
              <h3 className="text-xl font-semibold text-gembank-charcoal mb-4 pt-4 border-t border-gembank-gray-200">Contact Details</h3>  

            <div>
              <label className="block text-sm font-medium text-gembank-gray-800 mb-2">
                Business Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 border border-gembank-gray-300 rounded-lg focus:ring-2 focus:ring-gembank-gold focus:border-transparent"
                placeholder="contact@business.com"
              />
              {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value.replace(/[^0-9]/g, ''))}
                  className="w-full px-4 py-3 border border-gembank-gray-300 rounded-lg focus:ring-2 focus:ring-gembank-gold focus:border-transparent"
                  placeholder="9876543210"
                  maxLength="10"
                />
                {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Alternate Phone
                </label>
                <input
                  type="tel"
                  value={formData.alternatePhone}
                  onChange={(e) => handleInputChange('alternatePhone', e.target.value.replace(/[^0-9]/g, ''))}
                  className="w-full px-4 py-3 border border-gembank-gray-300 rounded-lg focus:ring-2 focus:ring-gembank-gold focus:border-transparent"
                  placeholder="9876543211"
                  maxLength="10"
                />
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gembank-charcoal mb-2">Pain-Point Validation Questions</h3>
            <p className="text-sm text-gembank-gray-600 mb-6 -mt-2">(These are CRITICAL for investors — shows validated demand)</p>

            <div>
              <label className="block text-sm font-medium text-gembank-gray-800 mb-2">1. How do you currently manage inventory?</label>
              <select 
                value={formData.inventoryManagement} 
                onChange={(e) => handleInputChange('inventoryManagement', e.target.value)} 
                className="w-full px-4 py-3 border border-gembank-gray-300 rounded-lg focus:ring-2 focus:ring-gembank-gold focus:border-transparent"
              >
                <option value="">Select method</option>
                <option value="Manual">Manual</option>
                <option value="Excel">Excel</option>
                <option value="Accounting software">Accounting software</option>
                <option value="Jewellery ERP">Jewellery ERP</option>
                <option value="Other">Other</option>
              </select>
              {errors.inventoryManagement && <p className="text-sm text-red-600 mt-1">{errors.inventoryManagement}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gembank-gray-800 mb-2">2. Do you face issues with GST, TDS, or compliance?</label>
              <select 
                value={formData.complianceIssues} 
                onChange={(e) => handleInputChange('complianceIssues', e.target.value)} 
                className="w-full px-4 py-3 border border-gembank-gray-300 rounded-lg focus:ring-2 focus:ring-gembank-gold focus:border-transparent"
              >
                <option value="">Select an option</option>
                <option value="Yes (major issues)">Yes (major issues)</option>
                <option value="Yes (sometimes)">Yes (sometimes)</option>
                <option value="No">No</option>
              </select>
              {errors.complianceIssues && <p className="text-sm text-red-600 mt-1">{errors.complianceIssues}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gembank-gray-800 mb-2">3. How difficult is it for you to get working capital loans?</label>
              <select 
                value={formData.loanDifficulty} 
                onChange={(e) => handleInputChange('loanDifficulty', e.target.value)} 
                className="w-full px-4 py-3 border border-gembank-gray-300 rounded-lg focus:ring-2 focus:ring-gembank-gold focus:border-transparent"
              >
                <option value="">Select an option</option>
                <option value="Very difficult">Very difficult</option>
                <option value="Difficult">Difficult</option>
                <option value="Manageable">Manageable</option>
                <option value="Easy">Easy</option>
              </select>
              {errors.loanDifficulty && <p className="text-sm text-red-600 mt-1">{errors.loanDifficulty}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gembank-gray-800 mb-2">4. Would you like instant loan offers based on inventory?</label>
              <select 
                value={formData.wantsInstantLoans} 
                onChange={(e) => handleInputChange('wantsInstantLoans', e.target.value)} 
                className="w-full px-4 py-3 border border-gembank-gray-300 rounded-lg focus:ring-2 focus:ring-gembank-gold focus:border-transparent"
              >
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              {errors.wantsInstantLoans && <p className="text-sm text-red-600 mt-1">{errors.wantsInstantLoans}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gembank-gray-800 mb-2">5. How often do you accept UPI, cards, or digital payments?</label>
              <select 
                value={formData.digitalPaymentsFrequency} 
                onChange={(e) => handleInputChange('digitalPaymentsFrequency', e.target.value)} 
                className="w-full px-4 py-3 border border-gembank-gray-300 rounded-lg focus:ring-2 focus:ring-gembank-gold focus:border-transparent"
              >
                <option value="">Select frequency</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Rare">Rare</option>
              </select>
              {errors.digitalPaymentsFrequency && <p className="text-sm text-red-600 mt-1">{errors.digitalPaymentsFrequency}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gembank-gray-800 mb-2">6. Would you like to join the GEMBank Pilot Program?</label>
              <select 
                value={formData.joinPilot} 
                onChange={(e) => handleInputChange('joinPilot', e.target.value)} 
                className="w-full px-4 py-3 border border-gembank-gray-300 rounded-lg focus:ring-2 focus:ring-gembank-gold focus:border-transparent"
              >
                <option value="">Select an option</option>
                <option value="Yes, first priority">Yes, first priority</option>
                <option value="Yes">Yes</option>
                <option value="Maybe">Maybe</option>
                <option value="No">No</option>
              </select>
              {errors.joinPilot && <p className="text-sm text-red-600 mt-1">{errors.joinPilot}</p>}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="bg-gembank-gray-50 p-6 rounded-lg border border-gembank-gray-200">
              <h3 className="text-lg font-semibold text-gembank-charcoal mb-3">D) Commitment Section</h3>
              <p className="text-gembank-gray-800 italic text-sm">
                "I hereby express my interest in joining the GEMBank Early Pilot Program
                once the product launches. I understand this is a non-binding Letter of Intent
                (LOI).
                I support GEMBank's vision to digitize jewelry business operations and am
                open to exploring full onboarding after evaluating the final product."
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-semibold text-gembank-charcoal mb-4">E) Digital Signature</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type Full Name (Digital Signature) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.signatureFullName}
                  onChange={(e) => handleInputChange('signatureFullName', e.target.value)}
                  className="w-full px-4 py-3 border border-gembank-gray-300 rounded-lg focus:ring-2 focus:ring-gembank-gold focus:border-transparent"
                  placeholder="Enter your full name"
                />
                {errors.signatureFullName && <p className="text-sm text-red-600 mt-1">{errors.signatureFullName}</p>}
              </div>
              <div className="mt-4">
                <label className="flex items-start gap-3 cursor-pointer p-3 rounded-lg hover:bg-gembank-gray-50">
                  <input
                    type="checkbox"
                    checked={formData.signatureConfirmation}
                    onChange={(e) => handleInputChange('signatureConfirmation', e.target.checked)}
                    className="w-5 h-5 mt-0.5 text-gembank-gold focus:ring-gembank-gold border-gembank-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-800">
                    I confirm that the above information is accurate and this acts as my digital signature.
                  </span>
                </label>
                {errors.signatureConfirmation && <p className="text-sm text-red-600 mt-1">{errors.signatureConfirmation}</p>}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-gembank-gray-200">
              <h3 className="text-lg font-semibold text-gembank-charcoal mb-4">F) Verification Upload</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload any one: Shop Stamp Photo, Visiting Card, Store Photo, or Registration Certificate. <span className="text-red-500">*</span>
                </label>
                {!formData.verificationFile ? (
                  <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gembank-gray-300 border-dashed rounded-md hover:border-gembank-gold transition-colors">
                    <div className="space-y-1 text-center">
                      <UploadCloud className="mx-auto h-12 w-12 text-gembank-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-gembank-gold hover:text-gembank-gold-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gembank-gold">
                          <span>Upload a file</span>
                          <input 
                            id="file-upload" 
                            name="file-upload" 
                            type="file" 
                            className="sr-only" 
                            onChange={handleFileChange} 
                            accept="image/jpeg,image/jpg,image/png,application/pdf" 
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                    </div>
                  </div>
                ) : (
                  <div className="mt-2 p-4 border border-gembank-gray-300 rounded-lg bg-gembank-gray-50 relative">
                    <button 
                      type="button" 
                      onClick={handleRemoveFile} 
                      className="absolute -top-2 -right-2 bg-white rounded-full text-gembank-gray-500 hover:text-red-600 shadow-md transition-colors"
                    > 
                      <XCircle className="w-6 h-6" />
                    </button>
                    <div className="flex items-center gap-4">
                      {filePreviewUrl ? ( // This will be a Base64 string for images
                        <img src={filePreviewUrl} alt="Preview" className="w-20 h-20 object-cover rounded-md border border-gembank-gray-200" /> 
                      ) : ( // For non-images like PDF
                        <div className="w-20 h-20 flex items-center justify-center bg-gembank-gray-200 rounded-md text-gembank-gray-500"><FileText className="w-8 h-8" /></div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gembank-charcoal break-all">{formData.verificationFileName}</p> 
                        <p className="text-xs text-gray-500 mt-1"> 
                          File ready for upload.
                        </p> 
                      </div>
                    </div>
                  </div>
                )}
                {errors.verificationFile && <p className="text-sm text-red-600 mt-1">{errors.verificationFile}</p>}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gembank-gray-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="group text-center mb-10 bg-gembank-gold/5 border border-gembank-gold/20 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-gembank-gold/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gembank-gold/10 rounded-full blur-2xl"></div>
          <div className="relative">
            <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg border-2 border-gembank-gold/30 animate-bounce [animation-duration:3s] transition-transform duration-300 group-hover:scale-110">
                <FileText className="w-8 h-8 text-gembank-gold" strokeWidth={2} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-gembank-charcoal mb-3">
              Letter of Intent
            </h1>
            <p className="text-lg text-gembank-gray-800 max-w-2xl mx-auto">
              Join the <span className="font-semibold text-gembank-charcoal">GEMBank Pilot Program</span>. This non-binding LOI helps us verify genuine businesses and grant them priority access.
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <ProgressBar currentStep={currentStep} totalSteps={steps.length} />

        {/* Stepper */}
        <div ref={formRef} className="mt-4"><FormStepper steps={steps} currentStep={currentStep} /></div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-card p-8 mb-6">
          {renderStepContent()}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gembank-gray-200">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="px-6 py-3 border-2 border-gembank-gray-300 text-gembank-gray-800 rounded-lg font-medium hover:bg-gembank-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              ← Previous
            </button>

            <div className="text-sm text-gembank-gray-800 font-medium">
              Step {currentStep + 1} of {steps.length}
            </div>

            {currentStep < steps.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-3 bg-gembank-gold text-gembank-charcoal rounded-lg font-semibold hover:bg-gembank-gold-dark transition-all shadow-gold"
              >
                Next →
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-gembank-gold text-gembank-charcoal rounded-lg font-semibold hover:bg-gembank-gold-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-gold flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit LOI
                    <CheckCircle className="w-5 h-5" />
                  </>
                )}
              </button>
            )}
          </div>
        </form>

        {/* Help Text */}
        <div className="mt-6 text-center text-sm text-gembank-gray-800">
          Need help? <a href="mailto:support@gembank.com" className="text-gembank-gold hover:underline font-medium">Contact our team</a>
        </div>
      </div>
    </div>
  );
};

export default LOIForm;