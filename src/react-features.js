/**
 * React Features for Portfolio
 * This script adds React-specific features and components to the portfolio
 */

document.addEventListener('DOMContentLoaded', function() {
  // Find the portfolio section
  const portfolioSection = document.getElementById('portfolio');
  const contactSection = document.getElementById('contact');
  
  if (portfolioSection) {
    // Fix portfolio filter buttons
    enhancePortfolioFilters();
    
    // Add React project cards
    addReactProjects();
    
    // Add React project modals
    addReactModals();
  }
  
  if (contactSection) {
    // Fix duplicate contact section if it exists
    fixDuplicateContact();
  }
  
  // Add typing effect to the hero section
  initTypingEffect();
  
  // Initialize dark mode properly
  enhanceDarkMode();
});

/**
 * Enhances portfolio filter buttons with data attributes and proper styling
 */
function enhancePortfolioFilters() {
  const filterContainer = document.querySelector('.flex.flex-wrap.justify-center.mb-12');
  
  if (filterContainer) {
    // Add ID to the filter container
    filterContainer.id = 'portfolio-filter';
    
    // Get all filter buttons
    const filterButtons = filterContainer.querySelectorAll('button');
    
    // Add data attributes and enhance styling
    if (filterButtons.length > 0) {
      // First button (All)
      filterButtons[0].setAttribute('data-filter', 'all');
      
      // If there are more buttons
      if (filterButtons.length > 1) {
        // Add React filter
        if (filterButtons[1]) {
          filterButtons[1].textContent = 'React';
          filterButtons[1].setAttribute('data-filter', 'react');
          filterButtons[1].classList.add('dark:bg-gray-700', 'dark:text-gray-200');
        }
        
        // Update other filters
        for (let i = 1; i < filterButtons.length; i++) {
          filterButtons[i].classList.add('dark:bg-gray-700', 'dark:text-gray-200');
          
          // Set data attributes based on button text
          const buttonText = filterButtons[i].textContent.trim().toLowerCase();
          if (buttonText.includes('full')) {
            filterButtons[i].setAttribute('data-filter', 'fullstack');
          } else if (buttonText.includes('ai')) {
            filterButtons[i].setAttribute('data-filter', 'ai');
          } else if (buttonText.includes('back')) {
            filterButtons[i].setAttribute('data-filter', 'backend');
          }
        }
      }
    }
  }
}

/**
 * Adds React project cards to the portfolio
 */
function addReactProjects() {
  // React project data
  const reactProjects = [
    {
      title: 'React Dashboard',
      description: 'Modern admin dashboard with React, Redux, and Material UI',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'react'
    },
    {
      title: 'React Native App',
      description: 'Cross-platform mobile application with React Native and Firebase',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'react'
    }
  ];
  
  // Find the project grid
  const projectGrid = document.querySelector('.project-grid');
  
  if (projectGrid) {
    // Add data-category attributes to existing projects
    const existingProjects = projectGrid.querySelectorAll('.project-card');
    
    existingProjects.forEach((project, index) => {
      // Add dark mode support
      project.classList.add('dark:bg-gray-800');
      
      // Set category based on index pattern
      let category = 'fullstack';
      if (index % 3 === 0) {
        category = 'ai';
      } else if (index % 3 === 1) {
        category = 'fullstack';
      } else {
        category = 'backend';
      }
      
      project.setAttribute('data-category', category);
    });
    
    // Create and add React project cards
    reactProjects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'group relative overflow-hidden rounded-xl shadow-lg project-card bg-white dark:bg-gray-800 opacity-100 scale-100';
      projectCard.setAttribute('data-category', project.category);
      
      projectCard.innerHTML = `
        <img src="${project.image}" 
             alt="${project.title}" 
             class="w-full h-64 object-cover transition duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
          <span class="text-blue-500 font-medium text-sm mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">React Project</span>
          <h3 class="text-xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">${project.title}</h3>
          <p class="text-gray-300 text-sm mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">${project.description}</p>
          <div class="flex space-x-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
            <a href="#" class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
              <i class="fas fa-link text-white"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
              <i class="fab fa-github text-white"></i>
            </a>
            <button class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 modal-open-btn" data-modal-target="modal-react-${project.title.toLowerCase().replace(/\s+/g, '-')}">
              <i class="fas fa-search text-white"></i>
            </button>
          </div>
        </div>
      `;
      
      projectGrid.appendChild(projectCard);
    });
  }
}

/**
 * Adds React project modals to the page
 */
function addReactModals() {
  // React project data for modals
  const reactProjects = [
    {
      id: 'react-dashboard',
      title: 'React Dashboard',
      description: 'A comprehensive admin dashboard built with React, Redux, and Material UI. Features include real-time analytics, inventory management, and customer insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      technologies: ['React', 'Redux', 'Material UI', 'Chart.js', 'Firebase']
    },
    {
      id: 'react-native-app',
      title: 'React Native App',
      description: 'Cross-platform mobile application built with React Native and Firebase. Features include user authentication, real-time data syncing, and push notifications.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo', 'Native Base']
    }
  ];
  
  // Create modals container
  const modalsContainer = document.createElement('div');
  modalsContainer.className = 'react-modals-container';
  
  // Create modals HTML
  reactProjects.forEach(project => {
    const modalElement = document.createElement('div');
    modalElement.id = `modal-react-${project.id}`;
    modalElement.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 opacity-0 hidden transition-opacity duration-300 project-modal';
    
    const technologiesBadges = project.technologies.map(tech => 
      `<span class="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs px-2 py-1 rounded-full mr-2 mb-2">${tech}</span>`
    ).join('');
    
    modalElement.innerHTML = `
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
              <li>Component-based architecture with React</li>
              <li>State management with Redux and Context API</li>
              <li>Performance optimized with React.memo and useMemo</li>
              <li>Custom hooks for reusable logic</li>
              <li>Integration with RESTful APIs</li>
            </ul>
          </div>
          
          <div class="flex space-x-4">
            <a href="#" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 flex items-center">
              <i class="fas fa-external-link-alt mr-2"></i>
              <span>Live Demo</span>
            </a>
            <a href="#" class="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg transition-colors duration-300 flex items-center">
              <i class="fab fa-github mr-2"></i>
              <span>View Code</span>
            </a>
          </div>
        </div>
      </div>
    `;
    
    modalsContainer.appendChild(modalElement);
  });
  
  // Add modals to the page
  document.body.appendChild(modalsContainer);
}

/**
 * Fixes duplicate contact section if it exists
 */
function fixDuplicateContact() {
  // Look for duplicate contact info sections
  const contactInfoSections = document.querySelectorAll('.contact-info');
  
  if (contactInfoSections.length > 1) {
    // Remove duplicates
    for (let i = 1; i < contactInfoSections.length; i++) {
      contactInfoSections[i].remove();
    }
  }
  
  // Look for duplicate contact section headers
  const contactHeaders = document.querySelectorAll('#contact .flex.flex-col.items-center.mb-16');
  
  if (contactHeaders.length > 1) {
    // Remove duplicates
    for (let i = 1; i < contactHeaders.length; i++) {
      contactHeaders[i].remove();
    }
  }
}

/**
 * Initializes typing effect for the hero section
 */
function initTypingEffect() {
  const typingElement = document.getElementById('typing-text');
  
  if (!typingElement) {
    // If typing element doesn't exist, try to create it
    const heroTextElement = document.querySelector('.max-w-lg.md\\:mr-12.animate-fadeIn h1');
    
    if (heroTextElement) {
      const parentElement = heroTextElement.parentElement;
      const nextElement = heroTextElement.nextElementSibling;
      
      // Create typing container
      const typingContainer = document.createElement('div');
      typingContainer.className = 'flex items-center text-xl text-gray-300 mb-2';
      typingContainer.innerHTML = `
        <span class="mr-2">I'm a</span>
        <span id="typing-text" class="text-blue-400 font-semibold">Full Stack Developer</span>
      `;
      
      // Insert after the h1
      if (nextElement) {
        parentElement.insertBefore(typingContainer, nextElement);
      } else {
        parentElement.appendChild(typingContainer);
      }
      
      // Now we can get the typing element
      const newTypingElement = document.getElementById('typing-text');
      
      // Initialize typing effect on the new element
      if (newTypingElement) {
        initTypingAnimation(newTypingElement);
      }
    }
  } else {
    // Initialize typing effect on existing element
    initTypingAnimation(typingElement);
  }
}

/**
 * Animates typing effect on an element
 */
function initTypingAnimation(element) {
  const phrases = [
    'Full Stack Developer',
    'React Specialist',
    'AI Enthusiast',
    'UI/UX Designer'
  ];
  
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  
  function typeText() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      element.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      element.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 1000; // Pause at end of phrase
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 300; // Pause before typing next phrase
    }
    
    setTimeout(typeText, typingSpeed);
  }
  
  setTimeout(typeText, 1000);
}

/**
 * Enhances dark mode functionality
 */
function enhanceDarkMode() {
  // Make sure all sections support dark mode
  document.querySelectorAll('section').forEach(section => {
    if (section.classList.contains('bg-white')) {
      section.classList.add('dark:bg-gray-900');
    }
    
    if (section.querySelector('h2')) {
      const heading = section.querySelector('h2');
      if (heading.classList.contains('text-gray-900')) {
        heading.classList.add('dark:text-white');
      }
    }
  });
  
  // Fix portfolio section specifically
  const portfolioSection = document.getElementById('portfolio');
  if (portfolioSection) {
    // Add dark mode support to decorative elements
    const decorativeElements = portfolioSection.querySelectorAll('.bg-blue-100');
    decorativeElements.forEach(element => {
      element.classList.add('dark:bg-blue-900/30');
    });
  }
}
