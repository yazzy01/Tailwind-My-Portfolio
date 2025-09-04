// Main JavaScript for Yassir Rzigui Portfolio
// Enhanced with React integration and advanced features

import { ContactService } from './api-service.js';

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Header Scroll Effect
    const header = document.getElementById('mainHeader');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('bg-white', 'shadow-md');
                header.classList.remove('bg-transparent');
            } else {
                header.classList.remove('bg-white', 'shadow-md');
                header.classList.add('bg-transparent');
            }
        });
    }
    
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const htmlElement = document.documentElement;
    
    // Check for saved user preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        enableDarkMode();
    }
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            if (localStorage.getItem('darkMode') !== 'enabled') {
                enableDarkMode();
            } else {
                disableDarkMode();
            }
        });
    }
    
    function enableDarkMode() {
        htmlElement.classList.add('dark');
        localStorage.setItem('darkMode', 'enabled');
        if (darkModeToggle) {
            darkModeToggle.innerHTML = '<i class="fas fa-sun text-yellow-400"></i>';
            darkModeToggle.classList.remove('bg-gray-200');
            darkModeToggle.classList.add('bg-gray-700');
        }
    }
    
    function disableDarkMode() {
        htmlElement.classList.remove('dark');
        localStorage.setItem('darkMode', null);
        if (darkModeToggle) {
            darkModeToggle.innerHTML = '<i class="fas fa-moon text-gray-700"></i>';
            darkModeToggle.classList.remove('bg-gray-700');
            darkModeToggle.classList.add('bg-gray-200');
        }
    }
    
    // Animate on scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkIfInView() {
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animate-fadeIn');
            }
        });
    }
    
    window.addEventListener('scroll', checkIfInView);
    checkIfInView(); // Check on initial load
    
    // Progress bar animation
    const progressBars = document.querySelectorAll('.progress-bar');
    
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width') || bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 300);
        });
    }
    
    // Trigger progress bar animation when skills section is in view
    const skillsSection = document.getElementById('skills');
    
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateProgressBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(skillsSection);
    }
    
    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';
            
            try {
                // Send data to API
                const response = await ContactService.submitContactForm(formObject);
                
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'bg-green-500 text-white p-4 rounded-lg mt-4 animate-fadeIn';
                successMessage.innerHTML = '<p class="font-semibold">Message sent successfully!</p><p class="text-sm mt-1">Thank you for reaching out. I\'ll get back to you soon.</p>';
                
                contactForm.reset();
                contactForm.appendChild(successMessage);
                
                // Remove success message after 5 seconds
                setTimeout(() => {
                    successMessage.classList.add('animate-fadeOut');
                    setTimeout(() => {
                        contactForm.removeChild(successMessage);
                    }, 500);
                }, 5000);
            } catch (error) {
                // Show error message
                const errorMessage = document.createElement('div');
                errorMessage.className = 'bg-red-500 text-white p-4 rounded-lg mt-4 animate-fadeIn';
                errorMessage.innerHTML = `<p class="font-semibold">Error sending message</p><p class="text-sm mt-1">${error.message || 'Please try again later.'}</p>`;
                
                contactForm.appendChild(errorMessage);
                
                // Remove error message after 5 seconds
                setTimeout(() => {
                    errorMessage.classList.add('animate-fadeOut');
                    setTimeout(() => {
                        contactForm.removeChild(errorMessage);
                    }, 500);
                }, 5000);
            } finally {
                // Restore button state
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
            }
        });
    }
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
    
    // Portfolio filtering system
    const portfolioFilter = document.getElementById('portfolio-filter');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (portfolioFilter) {
        const filterButtons = portfolioFilter.querySelectorAll('button');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active button
                filterButtons.forEach(btn => {
                    btn.classList.remove('bg-blue-600', 'text-white', 'active');
                    btn.classList.add('bg-gray-200', 'dark:bg-gray-700', 'text-gray-800', 'dark:text-gray-200');
                });
                
                this.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-800', 'dark:text-gray-200');
                this.classList.add('bg-blue-600', 'text-white', 'active');
                
                const filterValue = this.getAttribute('data-filter');
                
                // Filter projects
                projectCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    
                    if (filterValue === 'all' || cardCategory === filterValue) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.classList.remove('opacity-0', 'scale-95');
                            card.classList.add('opacity-100', 'scale-100');
                        }, 50);
                    } else {
                        card.classList.remove('opacity-100', 'scale-100');
                        card.classList.add('opacity-0', 'scale-95');
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    // React Project Preview Modal
    const modalButtons = document.querySelectorAll('.modal-open-btn');
    const modalClose = document.querySelectorAll('.modal-close-btn');
    const modals = document.querySelectorAll('.project-modal');
    
    modalButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal-target');
            const modal = document.getElementById(modalId);
            
            if (modal) {
                // Show modal with animation
                document.body.classList.add('overflow-hidden');
                modal.classList.remove('hidden', 'opacity-0');
                modal.classList.add('opacity-100');
                
                // Animate modal content
                setTimeout(() => {
                    const modalContent = modal.querySelector('.modal-content');
                    if (modalContent) {
                        modalContent.classList.remove('translate-y-10');
                        modalContent.classList.add('translate-y-0');
                    }
                }, 50);
            }
        });
    });
    
    modalClose.forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const modal = this.closest('.project-modal');
            
            if (modal) {
                // Hide modal with animation
                const modalContent = modal.querySelector('.modal-content');
                if (modalContent) {
                    modalContent.classList.remove('translate-y-0');
                    modalContent.classList.add('translate-y-10');
                }
                
                setTimeout(() => {
                    modal.classList.remove('opacity-100');
                    modal.classList.add('opacity-0');
                    
                    setTimeout(() => {
                        modal.classList.add('hidden');
                        document.body.classList.remove('overflow-hidden');
                    }, 300);
                }, 100);
            }
        });
    });
    
    // Close modal when clicking outside
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                const closeBtn = this.querySelector('.modal-close-btn');
                if (closeBtn) {
                    closeBtn.click();
                }
            }
        });
    });
    
    // Interactive skill bars with dynamic data
    const skillBars = document.querySelectorAll('.skill-item');
    
    skillBars.forEach(skillBar => {
        const progressBar = skillBar.querySelector('.progress-bar');
        const percentText = skillBar.querySelector('.percent-text');
        
        if (progressBar && percentText) {
            const percent = percentText.textContent.replace('%', '');
            progressBar.style.width = '0%';
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            progressBar.style.width = percent + '%';
                        }, 200);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });
            
            observer.observe(skillBar);
        }
    });
    
    // Typing effect for hero section
    const typingElement = document.getElementById('typing-text');
    
    if (typingElement) {
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
                typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
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
});

