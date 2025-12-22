/**
 * Application Configuration
 * 
 * Change the API_BASE_URL when deploying to production
 * or when your backend is running on a different port/domain.
 */

// Backend API Base URL
// Development: "http://localhost:5000"
// Production: "https://your-api-domain.com" or "" for same-origin
export const API_BASE_URL = "https://clusterneuron-backend.onrender.com/";

// API Endpoints
export const API_ENDPOINTS = {
  contact: `${API_BASE_URL}/api/contact`,
  career: `${API_BASE_URL}/api/career`,
};
