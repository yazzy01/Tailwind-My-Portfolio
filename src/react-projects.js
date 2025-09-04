// React Projects Component for Portfolio
// This file demonstrates your React skills with interactive components

class ReactProjectsComponent {
  constructor() {
    this.projects = [
      {
        id: 'react-project-1',
        title: 'React E-Commerce Dashboard',
        description: 'A comprehensive admin dashboard built with React, Redux, and Material UI. Features include real-time analytics, inventory management, and customer insights.',
        technologies: ['React', 'Redux', 'Material UI', 'Chart.js', 'Firebase'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        category: 'react',
        demoUrl: '#',
        codeUrl: '#',
        featured: true
      },
      {
        id: 'react-project-2',
        title: 'React Weather App',
        description: 'A beautiful weather application built with React Hooks and Context API. Features include location-based forecasts, animated weather conditions, and dark mode.',
        technologies: ['React', 'Context API', 'Axios', 'OpenWeather API', 'Styled Components'],
        image: 'https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        category: 'react',
        demoUrl: '#',
        codeUrl: '#',
        featured: true
      },
      {
        id: 'react-project-3',
        title: 'React Social Media App',
        description: 'A full-featured social media platform built with React, Firebase, and Tailwind CSS. Features include real-time messaging, post creation, and user authentication.',
        technologies: ['React', 'Firebase', 'Tailwind CSS', 'React Router', 'Formik'],
        image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        category: 'react',
        demoUrl: '#',
        codeUrl: '#',
        featured: false
      }
    ];
  }

  // Method to render project cards
  renderProjectCards() {
    let cardsHTML = '';
    
    this.projects.forEach(project => {
      const technologiesBadges = project.technologies.map(tech => 
        `<span class="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs px-2 py-1 rounded-full mr-2 mb-2">${tech}</span>`
      ).join('');
      
      cardsHTML += `
        <div class="group relative overflow-hidden rounded-xl shadow-lg project-card bg-white dark:bg-gray-800 transition-all duration-300 transform hover:-translate-y-2 opacity-100 scale-100" data-category="${project.category}">
          <img src="${project.image}" 
               alt="${project.title}" 
               class="w-full h-64 object-cover transition duration-500 group-hover:scale-110">
          <div class="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
            <span class="text-blue-500 font-medium text-sm mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">React Project</span>
            <h3 class="text-xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">${project.title}</h3>
            <p class="text-gray-300 text-sm mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">${project.description}</p>
            <div class="flex space-x-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
              <a href="${project.demoUrl}" class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <i class="fas fa-link text-white"></i>
              </a>
              <a href="${project.codeUrl}" class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <i class="fab fa-github text-white"></i>
              </a>
              <button class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 modal-open-btn" data-modal-target="modal-${project.id}">
                <i class="fas fa-search text-white"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    });
    
    return cardsHTML;
  }
  
  // Method to render project modals
  renderProjectModals() {
    let modalsHTML = '';
    
    this.projects.forEach(project => {
      const technologiesBadges = project.technologies.map(tech => 
        `<span class="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs px-2 py-1 rounded-full mr-2 mb-2">${tech}</span>`
      ).join('');
      
      modalsHTML += `
        <div id="modal-${project.id}" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 opacity-0 hidden transition-opacity duration-300 project-modal">
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform translate-y-10 transition-transform duration-300 modal-content">
            <div class="relative">
              <img src="${project.image}" alt="${project.title}" class="w-full h-64 object-cover rounded-t-xl">
              <button class="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-red-600 transition-colors duration-300 modal-close-btn">
                <i class="fas fa-times text-white"></i>
              </button>
            </div>
            
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">${project.title}</h3>
              
              <div class="mb-6">
                <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Project Overview</h4>
                <p class="text-gray-700 dark:text-gray-300 leading-relaxed">${project.description}</p>
              </div>
              
              <div class="mb-6">
                <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Technologies Used</h4>
                <div class="flex flex-wrap">
                  ${technologiesBadges}
                </div>
              </div>
              
              <div class="mb-6">
                <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Features</h4>
                <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Responsive design for all device sizes</li>
                  <li>State management with React hooks and context</li>
                  <li>Performance optimized with React.memo and useMemo</li>
                  <li>Custom React components with reusability in mind</li>
                  <li>Integration with RESTful APIs</li>
                </ul>
              </div>
              
              <div class="flex space-x-4">
                <a href="${project.demoUrl}" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 flex items-center">
                  <i class="fas fa-external-link-alt mr-2"></i>
                  <span>Live Demo</span>
                </a>
                <a href="${project.codeUrl}" class="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg transition-colors duration-300 flex items-center">
                  <i class="fab fa-github mr-2"></i>
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
    });
    
    return modalsHTML;
  }
  
  // Method to initialize the component
  init() {
    // Add project cards to the DOM
    const projectGrid = document.querySelector('.project-grid');
    if (projectGrid) {
      // Add React projects to the existing grid
      projectGrid.innerHTML += this.renderProjectCards();
    }
    
    // Add modals to the DOM
    const modalsContainer = document.createElement('div');
    modalsContainer.className = 'react-modals-container';
    modalsContainer.innerHTML = this.renderProjectModals();
    document.body.appendChild(modalsContainer);
    
    console.log('React Projects Component initialized');
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const reactProjects = new ReactProjectsComponent();
  reactProjects.init();
});
