export const CONSTANTS = {
  // Business types
  BUSINESS_TYPES: [
    { value: 'retail', label: 'Retail' },
    { value: 'wholesale', label: 'Wholesale' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'mixed', label: 'Mixed Operations' }
  ],

  // Turnover ranges
  TURNOVER_RANGES: [
    { value: 'below-1cr', label: 'Below ₹1 Crore' },
    { value: '1cr-5cr', label: '₹1 - 5 Crore' },
    { value: '5cr-10cr', label: '₹5 - 10 Crore' },
    { value: '10cr-25cr', label: '₹10 - 25 Crore' },
    { value: '25cr-50cr', label: '₹25 - 50 Crore' },
    { value: 'above-50cr', label: 'Above ₹50 Crore' }
  ],

  // Gold inventory ranges
  INVENTORY_RANGES: [
    { value: 'below-50l', label: 'Below ₹50 Lakh' },
    { value: '50l-1cr', label: '₹50 Lakh - 1 Crore' },
    { value: '1cr-5cr', label: '₹1 - 5 Crore' },
    { value: '5cr-10cr', label: '₹5 - 10 Crore' },
    { value: 'above-10cr', label: 'Above ₹10 Crore' }
  ],

  // Pain points
  PAIN_POINTS: [
    'Slow payment processing',
    'High transaction fees',
    'No gold inventory tracking',
    'Poor customer support',
    'Limited business insights',
    'Complex compliance management',
    'No digital invoicing',
    'Manual record keeping'
  ],

  // Features
  FEATURES: [
    'Gold rate tracking',
    'Inventory management',
    'B2B payments',
    'Digital invoicing',
    'Compliance tracking',
    'Customer management',
    'Analytics dashboard',
    'Multi-branch support'
  ],

  // Referral sources
  REFERRAL_SOURCES: [
    { value: 'google', label: 'Google Search' },
    { value: 'social-media', label: 'Social Media' },
    { value: 'referral', label: 'Friend/Colleague Referral' },
    { value: 'trade-show', label: 'Trade Show/Event' },
    { value: 'advertisement', label: 'Advertisement' },
    { value: 'other', label: 'Other' }
  ],

  // Indian states
  INDIAN_STATES: [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ],

  // API endpoints
  API_ENDPOINTS: {
    AUTH: '/auth',
    LOI: '/loi',
    BUSINESS: '/business',
    SUBSCRIPTION: '/subscription'
  }
};