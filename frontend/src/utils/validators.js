export const validators = {
  // Email validation
  isValidEmail: (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  },

  // Phone validation (Indian)
  isValidPhone: (phone) => {
    const cleaned = phone.replace(/\D/g, '');
    return /^[6-9]\d{9}$/.test(cleaned);
  },

  // PAN card validation
  isValidPAN: (pan) => {
    const regex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
    return regex.test(pan.toUpperCase());
  },

  // GSTIN validation
  isValidGSTIN: (gstin) => {
    const regex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    return regex.test(gstin.toUpperCase());
  },

  // Password strength
  getPasswordStrength: (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;

    if (strength <= 2) return { level: 'weak', color: 'red' };
    if (strength <= 4) return { level: 'medium', color: 'yellow' };
    return { level: 'strong', color: 'green' };
  },

  // Required field validation
  isRequired: (value) => {
    if (typeof value === 'string') {
      return value.trim().length > 0;
    }
    return value !== null && value !== undefined;
  },

  // Min/Max length validation
  isValidLength: (value, min, max) => {
    const length = value.length;
    return length >= min && length <= max;
  },

  // Number range validation
  isInRange: (value, min, max) => {
    const num = parseFloat(value);
    return !isNaN(num) && num >= min && num <= max;
  }
};
export  { validators};
