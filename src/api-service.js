/**
 * API Service for Portfolio Website
 * Handles communication with the backend API
 */

// API Configuration
const API_BASE_URL = 'http://localhost:5000/api';
const API_ENDPOINTS = {
  projects: '/projects',
  skills: '/skills',
  contact: '/contacts',
  user: '/users'
};

/**
 * Generic API request handler with error handling
 * @param {string} endpoint - API endpoint
 * @param {Object} options - Fetch options
 * @returns {Promise<Object>} - Response data
 */
async function apiRequest(endpoint, options = {}) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });

    // Handle non-2xx responses
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `API Error: ${response.status}`);
    }

    // Check if response is empty
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    }
    
    return {};
  } catch (error) {
    console.error('API Request Failed:', error);
    throw error;
  }
}

/**
 * Project-related API calls
 */
export const ProjectService = {
  /**
   * Get all projects
   * @returns {Promise<Array>} - Array of projects
   */
  getAllProjects: () => apiRequest(API_ENDPOINTS.projects),
  
  /**
   * Get project by ID
   * @param {string} id - Project ID
   * @returns {Promise<Object>} - Project data
   */
  getProjectById: (id) => apiRequest(`${API_ENDPOINTS.projects}/${id}`),
};

/**
 * Skills-related API calls
 */
export const SkillService = {
  /**
   * Get all skills
   * @returns {Promise<Array>} - Array of skills
   */
  getAllSkills: () => apiRequest(API_ENDPOINTS.skills),
  
  /**
   * Get skills by category
   * @param {string} category - Skill category
   * @returns {Promise<Array>} - Array of skills in the category
   */
  getSkillsByCategory: (category) => apiRequest(`${API_ENDPOINTS.skills}/category/${category}`),
};

/**
 * Contact-related API calls
 */
export const ContactService = {
  /**
   * Submit a contact message
   * @param {Object} contactData - Contact form data
   * @returns {Promise<Object>} - Response data
   */
  submitContactForm: (contactData) => apiRequest(API_ENDPOINTS.contact, {
    method: 'POST',
    body: JSON.stringify(contactData)
  }),
};

/**
 * User profile API calls
 */
export const UserService = {
  /**
   * Get user profile information
   * @returns {Promise<Object>} - User profile data
   */
  getUserProfile: () => apiRequest(API_ENDPOINTS.user),
};

// Export default object with all services
export default {
  projects: ProjectService,
  skills: SkillService,
  contact: ContactService,
  user: UserService
}; 