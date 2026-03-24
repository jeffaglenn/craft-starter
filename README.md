# Craft CMS 5 Starter

A modern, production-ready starter template for [Craft CMS 5.x](https://github.com/craftcms/cms) with best practices, performance optimizations, and developer experience enhancements.

## 🚀 The Stack

**Core Technologies:**
- [Craft CMS 5.x](https://craftcms.com) - Content management system
- [DDEV](https://ddev.com) - Local development environment  
- [Vite 6.x](https://vitejs.dev) - Frontend build tool with HMR
- [Tailwind CSS 4.x](https://tailwindcss.com) - Utility-first CSS framework
- [Alpine.js 3.x](https://alpinejs.dev/) - Lightweight JS framework
- [GSAP 3.x](https://gsap.com) - Professional animation library

**Frontend Libraries:**
- [Fancyapps UI](https://fancyapps.com) - Modern lightbox and carousel
- [Swiper](https://swiperjs.com) - Mobile touch slider

**Development Tools:**
- TypeScript support with proper type definitions
- ESLint & Prettier for code quality and formatting
- Component-based architecture for JS and templates
- Performance optimizations and code splitting

## 📋 Requirements

- [Docker](https://www.docker.com) 
- [DDEV](https://ddev.com)
- Node.js 18+ & npm

## 🛠 Quick Start

1. **Clone and setup:**
   ```bash
   git clone [your-repo] project-name
   cd project-name
   cp .env.example .env
   ```

2. **Start development environment:**
   ```bash
   ddev start
   ddev npm install
   ddev npm run dev
   ```

3. **Install Craft:**
   ```bash
   ddev craft install
   ```

## 📁 Project Structure

```
├── src/                          # Frontend source files
│   ├── css/                      # Stylesheets
│   │   ├── styles.css           # Main CSS entry
│   │   ├── base.css             # Base styles
│   │   ├── buttons.css          # Button components
│   │   └── defaults.css         # Tailwind overrides
│   ├── js/                      # JavaScript
│   │   ├── components/          # Organized components
│   │   │   ├── alpine/          # Alpine.js components
│   │   │   ├── gsap/            # GSAP animations
│   │   │   └── utils/           # Utility functions
│   │   ├── index.js             # Main JS entry
│   │   └── utilities.js         # Helper functions
│   └── public/                  # Static assets
├── templates/                   # Craft templates
│   ├── _includes/               # Reusable includes
│   │   ├── _components/         # Component library
│   │   │   ├── elements/        # Basic UI elements
│   │   │   ├── modules/         # Composed components
│   │   │   └── sections/        # Complex layout sections
│   │   └── _global/             # Global includes
│   ├── _layouts/                # Layout templates
│   ├── _macros/                 # Twig macros
│   └── pages/                   # Page templates
└── config/                      # Craft configuration
```

## 🎨 Frontend Features

**CSS Architecture:**
- Component-based organization
- Tailwind 4 with custom design tokens
- Responsive breakpoint utilities
- Dark mode foundation ready

**JavaScript Architecture:**
- TypeScript support with type definitions
- Component-based Alpine.js modules
- GSAP scroll animations with performance optimization
- Responsive utilities and breakpoint helpers
- Error handling and logging utilities

**Animation System:**
- Scroll-triggered animations with `data-animate` attributes
- Parallax effects with performance optimization
- Text reveal animations
- Stagger effects for lists and grids

## ⚡ Performance Features

- **Code Splitting:** Vendor chunks for better caching
- **Asset Optimization:** Image compression and optimization
- **Bundle Analysis:** Built-in bundle size monitoring
- **Progressive Enhancement:** Core functionality works without JS

## 🔧 Development Scripts

```bash
# Development
npm run dev              # Start dev server with HMR
npm run build            # Production build
npm run preview          # Preview production build

# Code Quality
npm run lint             # ESLint check
npm run lint:fix         # Fix ESLint issues
npm run format           # Format with Prettier
npm run format:check     # Check formatting
npm run type-check       # TypeScript type checking

# Utilities
npm run clean            # Clean build artifacts
npm run fresh            # Clean install and build
```

## 🔌 Craft CMS Plugins Included

**Content & SEO:**
- CKEditor - Rich text editing
- SEOMatic - SEO management
- Retour - 404 redirects
- Retcon - Text filtering

**Media & Assets:**
- Image Optimize - Automatic image optimization
- Image Resizer - Dynamic image resizing
- Embedded Assets - Embed external content
- Hyper - Advanced link fields

**Forms & Communication:**
- Formie - Form builder
- Mailgun - Email delivery

**Development:**
- Vite - Frontend integration
- Sprig - Reactive components
- Dashboard Be Gone - Clean admin interface

## 🚦 Animation Usage

Add animations using data attributes:

```html
<!-- Fade in animation -->
<div data-animate="fade-in">Content</div>

<!-- Stagger animation for lists -->
<ul data-animate="stagger">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<!-- Parallax effect -->
<div data-animate="parallax">Background element</div>

<!-- Text reveal animation -->
<h1 data-animate="text-reveal">Animated text</h1>
```

## 🏗 Extending the Starter

**Adding New Components:**
1. Create template in appropriate directory: `templates/_includes/_components/elements/`, `modules/`, or `sections/`
2. Add corresponding JS in `src/js/components/`
3. Import in main JS entry point
4. Document usage in component README

**Adding New Animations:**
1. Extend `ScrollAnimations` class
2. Add new data attribute selector
3. Implement animation logic
4. Test across devices and browsers

## 📝 Best Practices

- **Templates:** Use component-based architecture
- **CSS:** Follow Tailwind utility-first approach
- **JavaScript:** Write modular, testable code
- **Performance:** Optimize images and minimize bundle size
- **Accessibility:** Follow WCAG guidelines
- **SEO:** Use semantic HTML and proper meta tags

## 🐛 Troubleshooting

**Common Issues:**
- **Vite HMR not working:** Check DDEV ports and CORS settings
- **Alpine.js not loading:** Verify component imports in main JS
- **GSAP animations not working:** Ensure ScrollTrigger plugin is loaded
- **Build fails:** Check TypeScript errors and ESLint issues

## 📚 Additional Resources

- [Craft CMS Documentation](https://craftcms.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Alpine.js Documentation](https://alpinejs.dev/)
- [GSAP Documentation](https://gsap.com/docs)
- [Vite Documentation](https://vitejs.dev/guide)
