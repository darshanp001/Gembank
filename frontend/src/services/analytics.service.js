export const analyticsService = {
  trackPageView: (path) => {
    console.log('📊 Page View:', path);
  },

  trackEvent: (eventName, eventParams = {}) => {
    console.log('📊 Event:', eventName, eventParams);
  },

  trackButtonClick: (buttonName, location) => {
    console.log('📊 Button Click:', buttonName, location);
  },

  trackFormSubmit: (formName, success = true) => {
    console.log('📊 Form Submit:', formName, success);
  },

  trackError: (errorType, errorMessage) => {
    console.error('📊 Error:', errorType, errorMessage);
  }
};