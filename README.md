# Craft CMS 5 Starter

A modern, production-ready starter template for [Craft CMS 5.x](https://github.com/craftcms/cms) with best practices, performance optimizations, and developer experience enhancements.

## The Stack

**Core Technologies:**
- [Craft CMS 5.x](https://craftcms.com) - Content management system
- [DDEV](https://ddev.com) - Local development environment
- [Vite 8.x](https://vitejs.dev) - Frontend build tool with HMR
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
- Gzip compression via vite-plugin-compression2
- Vendor code splitting for Alpine.js and GSAP

## Requirements

- [Docker](https://www.docker.com)
- [DDEV](https://ddev.com)
- Node.js 18+ & npm

## Quick Start

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

## Project Structure

```
├── src/                          # Frontend source files
│   ├── css/                      # Stylesheets
│   │   ├── styles.css            # Main CSS entry (Tailwind imports)
│   │   ├── base.css              # Base element styles
│   │   ├── buttons.css           # Button components
│   │   ├── defaults.css          # Tailwind variable overrides
│   │   └── forms.css             # Form element styles
│   ├── js/                       # JavaScript
│   │   ├── components/           # Organized components
│   │   │   ├── alpine/           # Alpine.js components
│   │   │   └── gsap/             # GSAP animations
│   │   ├── index.js              # Main JS entry
│   │   └── utilities.js          # Helper functions
│   ├── icons/                    # SVG icons
│   └── public/                   # Static assets (copied to web root)
├── templates/                    # Craft templates
│   ├── _components/              # Component library
│   │   ├── _content-builder/     # Content builder block templates
│   │   ├── _elements/            # Basic UI elements (button, breadcrumbs)
│   │   ├── _global/              # Global components (header, footer)
│   │   ├── _modules/             # Composed components (card)
│   │   └── _sections/            # Page sections (hero, rich-text)
│   ├── _errors/                  # Error page templates
│   ├── _layouts/                 # Layout templates
│   ├── _macros/                  # Twig macros (media, typography)
│   ├── _partials/                # Reusable partials for CKEditor
│   ├── homepage/                 # Homepage templates
│   └── pages/                    # Page entry templates
├── config/                       # Craft configuration
│   ├── general.php               # General config
│   ├── vite.php                  # Vite plugin config
│   └── imager-x.php              # ImagerX config
└── .ddev/                        # DDEV configuration
```

## Frontend Features

**CSS Architecture:**
- Tailwind 4 with custom variable overrides
- Base styles for forms, buttons, and typography
- Responsive breakpoint utilities

**JavaScript Architecture:**
- Component-based Alpine.js modules (navigation)
- GSAP scroll animations with ScrollTrigger
- Responsive utilities and breakpoint helpers

**Animation System:**
- Scroll-triggered animations with `data-animate` attributes
- Parallax effects with performance optimization
- Text reveal animations
- Stagger effects for lists and grids

## Development Scripts

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

## Craft CMS Plugins Included

**Content & SEO:**
- CKEditor - Rich text editing
- SEOMatic - SEO management
- Retour - 404 redirects
- Retcon - Twig content filtering

**Media & Assets:**
- ImagerX - Image transforms and optimization
- Image Resizer - Upload-time image resizing
- Embedded Assets - Embed external content

**Forms & Communication:**
- Formie - Form builder
- Mailgun - Email delivery

**Development:**
- Vite - Frontend asset integration
- Sprig - Reactive Twig components
- Dashboard Be Gone - Clean CP dashboard

## Animation Usage

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

## Extending the Starter

**Adding New Components:**
1. Create template in the appropriate directory under `templates/_components/` (`_elements/`, `_modules/`, or `_sections/`)
2. Add corresponding JS in `src/js/components/`
3. Import in `src/js/index.js`

**Adding New Animations:**
1. Extend the `ScrollAnimations` class in `src/js/components/gsap/scroll-animations.js`
2. Add a new `data-animate` attribute selector
3. Implement animation logic with ScrollTrigger

## Additional Resources

- [Craft CMS Documentation](https://craftcms.com/docs/5.x/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Alpine.js Documentation](https://alpinejs.dev/)
- [GSAP Documentation](https://gsap.com/docs)
- [Vite Documentation](https://vitejs.dev/guide)
- [DDEV Documentation](https://ddev.readthedocs.io/)
