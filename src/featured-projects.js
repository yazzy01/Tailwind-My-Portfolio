// Featured Projects Data
const featuredProjects = [
    {
        id: 1,
        name: "Auto Profil Builder",
        description: "Advanced AI-powered professional profile builder with 99.2% success rate. Analyzes LinkedIn and GitHub profiles to generate comprehensive, ATS-optimized professional profiles in 3.2 seconds.",
        category: "ai",
        image: "assets/auto-profil.png",
        tags: ["React", "TypeScript", "AI/ML", "Vite"],
        demo: "https://auto-profil-v3.vercel.app/",
        github: "https://github.com/yazzy01/auto-profil-v2",
        date: "2024 - Present",
        featured: true,
        metrics: {
            successRate: "99.2%",
            avgProcessing: "3.2s",
            confidence: "94%"
        }
    },
    {
        id: 2,
        name: "Contract AI",
        description: "AI-powered contract generation and analysis platform. Transform legal workflow with intelligent document processing, risk analysis, and automated contract creation using advanced NLP.",
        category: "ai",
        image: "assets/Contract-AI.png",
        tags: ["Next.js", "Gemini AI", "TypeScript", "LegalTech"],
        demo: "https://contract-ai-omega.vercel.app/",
        github: "https://github.com/yazzy01/contract-ai",
        date: "2024 - Present",
        featured: true,
        metrics: {
            rating: "4.9/5",
            reviews: "500+",
            saved: "10hrs/week"
        }
    },
    {
        id: 3,
        name: "CineDiscover",
        description: "Dual-purpose AI platform: Personal movie discovery with emotional AI recommendations for consumers, and professional entertainment intelligence for business decisions with market analysis.",
        category: "ai fullstack",
        image: "assets/CineDiscover.png",
        tags: ["Next.js", "Gemini AI", "TMDB API", "React"],
        demo: "https://cinediscover.vercel.app/",
        github: "https://github.com/yazzy01/CineDiscover",
        date: "2024",
        featured: true,
        metrics: {
            movies: "1M+",
            users: "10K+",
            rating: "4.8/5"
        }
    },
    {
        id: 4,
        name: "NutriStepPro",
        description: "Personalized nutrition and fitness journey platform. Track nutrition, monitor fitness progress, and follow tailored meal & workout programs designed for your health goals with AI assistance.",
        category: "fullstack",
        image: "assets/NutriStepPro.png",
        tags: ["React", "Vite", "TypeScript", "Tailwind CSS"],
        demo: "https://nutri-step-pro.vercel.app/",
        github: "https://github.com/yazzy01/nutri-step-pro",
        date: "2024",
        featured: true,
        metrics: {
            recipes: "1000+",
            programs: "50+",
            users: "5K+"
        }
    },
    {
        id: 5,
        name: "RentingAll",
        description: "Peer-to-peer vehicle rental platform connecting owners and renters. From bikes to cars, join the future of sharing economy with 500+ vehicles across 50+ cities. Safe, affordable, eco-friendly.",
        category: "fullstack",
        image: "assets/RentingAll.png",
        tags: ["Next.js 15", "Prisma", "PostgreSQL", "NextAuth"],
        demo: "https://renting-all.vercel.app/",
        github: "https://github.com/yazzy01/renting-all",
        date: "2024 - Present",
        featured: true,
        metrics: {
            vehicles: "500+",
            cities: "50+",
            users: "1K+"
        }
    },
    {
        id: 6,
        name: "SmartLearn",
        description: "Comprehensive e-learning platform with 300+ expert-led courses. Features interactive lessons, progress tracking, certificates, and instructor tools. Join 50K+ students mastering new skills.",
        category: "fullstack",
        image: "assets/SmartLearn.png",
        tags: ["React", "Express.js", "Prisma", "PostgreSQL"],
        demo: "https://learnsphere-starter.vercel.app/",
        github: "https://github.com/yazzy01/learnsphere-starter",
        date: "2024 - Present",
        featured: true,
        metrics: {
            courses: "300+",
            students: "50K+",
            successRate: "95%"
        }
    }
];

// Render Featured Projects
function renderFeaturedProjects() {
    const portfolioSection = document.querySelector('#portfolio .container');
    if (!portfolioSection) return;

    // Create the projects HTML
    const projectsHTML = `
        <div class="space-y-16">
            ${featuredProjects.map((project, index) => `
                <div class="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 project-card" data-category="${project.category}">
                    <div class="grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'}">
                        ${index % 2 === 0 ? `
                            <div class="relative overflow-hidden h-80 lg:h-full">
                                <img src="${project.image}" 
                                     alt="${project.name}" 
                                     class="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                                     loading="lazy">
                                <div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 group-hover:from-blue-600/30 group-hover:to-indigo-600/30 transition-all duration-300"></div>
                                ${project.featured ? `
                                <div class="absolute top-4 left-4">
                                    <span class="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">⭐ FEATURED</span>
                                </div>
                                ` : ''}
                            </div>
                            <div class="p-8 lg:p-12 flex flex-col justify-center">
                        ` : `
                            <div class="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                        `}
                            <div class="flex items-center mb-4 flex-wrap gap-2">
                                ${project.tags.slice(0, 2).map(tag => `
                                    <span class="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-full">${tag}</span>
                                `).join('')}
                                <span class="text-gray-500 dark:text-gray-400 text-sm ml-auto">${project.date}</span>
                            </div>
                            <h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                ${project.name}
                            </h3>
                            <p class="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                                ${project.description}
                            </p>
                            
                            <div class="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                ${Object.entries(project.metrics).map(([key, value]) => `
                                    <div class="text-center">
                                        <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">${value}</div>
                                        <div class="text-xs text-gray-600 dark:text-gray-400 capitalize">${key.replace(/([A-Z])/g, ' $1').trim()}</div>
                                    </div>
                                `).join('')}
                            </div>
                            
                            <div class="mb-6">
                                <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Technologies</h4>
                                <div class="flex flex-wrap gap-2">
                                    ${project.tags.map(tag => `
                                        <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-3 py-1 rounded-full">${tag}</span>
                                    `).join('')}
                                </div>
                            </div>
                            
                            <div class="flex flex-wrap gap-4">
                                <a href="${project.demo}" 
                                   target="_blank" 
                                   rel="noopener noreferrer"
                                   class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                                    <i class="fas fa-external-link-alt mr-2"></i>
                                    Live Demo
                                </a>
                                <a href="${project.github}" 
                                   target="_blank" 
                                   rel="noopener noreferrer"
                                   class="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900">
                                    <i class="fab fa-github mr-2"></i>
                                    View README
                                </a>
                            </div>
                        </div>
                        ${index % 2 !== 0 ? `
                            <div class="relative overflow-hidden h-80 lg:h-full order-1 lg:order-2">
                                <img src="${project.image}" 
                                     alt="${project.name}" 
                                     class="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                                     loading="lazy">
                                <div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 group-hover:from-blue-600/30 group-hover:to-indigo-600/30 transition-all duration-300"></div>
                                ${project.featured ? `
                                <div class="absolute top-4 left-4">
                                    <span class="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">⭐ FEATURED</span>
                                </div>
                                ` : ''}
                            </div>
                        ` : ''}
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    // Find the portfolio grid container and replace it
    const portfolioGrid = document.querySelector('#portfolio .space-y-12');
    if (portfolioGrid) {
        portfolioGrid.innerHTML = projectsHTML;
    }
}

// Initialize on DOM load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderFeaturedProjects);
} else {
    renderFeaturedProjects();
}

// Portfolio filter functionality
function initPortfolioFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterBtns.forEach(b => {
                b.classList.remove('active', 'bg-blue-600', 'text-white');
                b.classList.add('bg-gray-200', 'text-gray-800');
            });
            this.classList.add('active', 'bg-blue-600', 'text-white');
            this.classList.remove('bg-gray-200', 'text-gray-800');
            
            // Filter projects
            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category').split(' ');
                if (filter === 'all' || categories.includes(filter)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Initialize filter after projects are rendered
setTimeout(initPortfolioFilter, 100);

// Export for use in other scripts
window.featuredProjects = featuredProjects;

