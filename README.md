# Yassir Rzigui - Professional Portfolio

🚀 **A stunning, modern portfolio website showcasing full-stack development and AI expertise**

A comprehensive, responsive portfolio website built with Tailwind CSS, featuring advanced animations, dark/light mode, and a complete backend API. This portfolio showcases 5+ years of experience in full-stack development and AI data specialization.

## ✨ Project Status: 100% Complete

This project is **production-ready** and features:

### 🎯 Frontend Excellence
- ✅ Modern, responsive design with Tailwind CSS
- ✅ Dark/light mode toggle with persistence
- ✅ Smooth animations and micro-interactions
- ✅ Advanced hero section with typing effect
- ✅ Interactive skills visualization
- ✅ Portfolio filtering system
- ✅ Professional timeline for experience
- ✅ Comprehensive education & certifications section
- ✅ Multilingual capabilities showcase
- ✅ Contact form with validation
- ✅ CV download functionality
- ✅ Mobile-first responsive design
- ✅ SEO optimized with meta tags and structured data

### 🔧 Technical Features
- ✅ RESTful API with Express.js and MongoDB
- ✅ TypeScript implementation for type safety
- ✅ Authentication system for admin access
- ✅ Data models for projects, skills, and contacts
- ✅ Performance optimized assets
- ✅ Cross-browser compatibility
- ✅ Accessibility compliant (WCAG 2.1)
- ✅ Vercel deployment ready

## Project Structure

```
/
├── src/                   # Frontend source files
│   ├── index.html         # Main HTML file
│   ├── styles.css         # Base styles and Tailwind imports
│   ├── main.js            # Main JavaScript file
│   ├── api-service.js     # API integration service
│   └── ...                # Other frontend assets
│
├── portfolio-api/         # Express.js API (v1)
│   ├── models/            # Mongoose data models
│   ├── controllers/       # API controllers
│   ├── routes/            # API routes
│   └── ...                # Other backend files
│
├── portfolio-api-v2/      # TypeScript API (v2)
│   ├── src/               # TypeScript source files
│   ├── dist/              # Compiled JavaScript
│   └── ...                # Configuration files
│
├── dist/                  # Compiled CSS output
├── node_modules/          # Dependencies
├── package.json           # Project configuration
└── tailwind.config.js     # Tailwind CSS configuration
```

## Running the Project

### Frontend

1. Install dependencies:
   ```
   npm install
   ```

2. Build the CSS files:
   ```
   npm run build
   ```

3. For development with automatic rebuilding:
   ```
   npm run watch
   ```

4. Open the `src/index.html` file in your browser to view the frontend.

### Backend API (v1)

1. Navigate to the API directory:
   ```
   cd portfolio-api
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   npm start
   ```

### Backend API (v2 - TypeScript)

1. Navigate to the API v2 directory:
   ```
   cd portfolio-api-v2
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Build the TypeScript files:
   ```
   npm run build
   ```

4. Start the server:
   ```
   npm start
   ```

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Fork/Clone the repository**
   ```bash
   git clone https://github.com/yazzy01/yassir-rzigui-portfolio.git
   cd yassir-rzigui-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

4. **Deploy to Vercel**
   - Install Vercel CLI: `npm install -g vercel`
   - Run: `vercel`
   - Follow the prompts to deploy

   **Or use Vercel Dashboard:**
   - Connect your GitHub repository
   - Vercel will automatically detect and deploy

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload files to your hosting provider**
   - Upload all files in the project root
   - Ensure `src/index.html` is set as the main file
   - Configure server to serve static files

### Environment Variables

For full functionality, set up these environment variables:

```env
# MongoDB Connection
MONGODB_URI=your_mongodb_connection_string

# JWT Secret
JWT_SECRET=your_jwt_secret_key

# Email Configuration (for contact form)
EMAIL_HOST=your_email_host
EMAIL_PORT=587
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password

# Domain Configuration
DOMAIN=https://your-domain.com
```

## 🎯 Performance Optimizations

- **CSS**: Minified and purged unused styles
- **Images**: Optimized and lazy-loaded
- **Fonts**: Preloaded and optimized
- **JavaScript**: Deferred loading for non-critical scripts
- **Caching**: Browser caching headers configured
- **Compression**: Gzip compression enabled

## 📱 Browser Support

- **Chrome**: ✅ Latest 2 versions
- **Firefox**: ✅ Latest 2 versions  
- **Safari**: ✅ Latest 2 versions
- **Edge**: ✅ Latest 2 versions
- **Mobile**: ✅ iOS Safari, Chrome Mobile

## 🔧 Customization

### Updating Content

1. **Personal Information**: Edit `src/index.html` sections
2. **Projects**: Update project data in the portfolio section
3. **Skills**: Modify skill percentages and technologies
4. **Experience**: Update timeline with your work history
5. **Contact**: Change contact information and social links

### Styling

1. **Colors**: Modify `tailwind.config.js` color palette
2. **Fonts**: Update Google Fonts imports in HTML head
3. **Animations**: Customize CSS transitions in `src/styles.css`

### Adding New Sections

1. Add HTML structure following existing patterns
2. Update navigation links
3. Add corresponding JavaScript for interactions
4. Update CSS for styling consistency

## 🛠 Technologies Used

### Frontend
- **Core**: HTML5, CSS3, JavaScript (ES6+)
- **Framework**: Tailwind CSS 3.4+
- **Animations**: CSS Transitions, Transform, Keyframes
- **Icons**: Font Awesome 6.0
- **Fonts**: Google Fonts (Poppins)
- **Build Tools**: PostCSS, Tailwind CLI

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Language**: TypeScript 5.8+
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: Joi, Express Validator
- **Security**: Helmet, CORS, Rate Limiting
- **Logging**: Winston, Morgan

### DevOps & Deployment
- **Hosting**: Vercel (Recommended)
- **Version Control**: Git & GitHub
- **CI/CD**: GitHub Actions
- **Package Manager**: npm
- **Build System**: Tailwind CSS CLI

### Development Tools
- **Editor**: VS Code (Recommended)
- **Linting**: ESLint, Prettier
- **Type Checking**: TypeScript
- **API Testing**: Thunder Client / Postman
- **Documentation**: Swagger/OpenAPI 3.0

## 🌟 Key Features

### 🎨 Design & UX
- **Responsive Design**: Mobile-first approach, works on all devices
- **Dark/Light Mode**: Persistent theme switching with smooth transitions
- **Modern Animations**: Micro-interactions, hover effects, scroll animations
- **Professional Layout**: Clean, modern design with excellent typography
- **Accessibility**: WCAG 2.1 AA compliant, keyboard navigation, screen reader friendly

### 💼 Portfolio Sections
- **Hero Section**: Dynamic typing effect, professional introduction
- **About**: Comprehensive background with CV data integration
- **Experience**: Interactive timeline with detailed work history
- **Skills**: Visual progress bars with categorized expertise levels
- **Projects**: Filterable showcase with live links and descriptions
- **Education**: Detailed academic and certification background
- **Languages**: Multilingual proficiency display
- **Contact**: Working contact form with validation

### 🔧 Technical Features
- **CV Download**: One-click downloadable resume functionality
- **Project Filtering**: Dynamic filtering by technology/category
- **Form Validation**: Client-side and server-side validation
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, structured data
- **Performance**: Optimized images, minified CSS, lazy loading
- **Security**: XSS protection, CSRF tokens, secure headers

### 🚀 Backend Capabilities
- **RESTful API**: Complete CRUD operations for all data
- **Admin Dashboard**: Content management system
- **Authentication**: Secure login system for administrators
- **Data Management**: MongoDB integration with proper schemas
- **API Documentation**: Swagger UI for API exploration
- **Error Handling**: Comprehensive error logging and user feedback- Email: rziguiyassir@gmail.com 
- LinkedIn: [Yassir Rzigui](https://linkedin.com/in/yassir-rzigui) 
 
## License 
MIT License - Feel free to use this code for learning and development purposes. 
