import api from './api';

export const businessService = {
  // Get business profile
  getProfile: async () => {
    try {
      const response = await api.get('/business/profile');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Update business profile
  updateProfile: async (profileData) => {
    try {
      const response = await api.patch('/business/profile', profileData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Add branch
  addBranch: async (branchData) => {
    try {
      const response = await api.post('/business/branch', branchData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

// ============================================
// Export all services
// ============================================
export {  businessService };