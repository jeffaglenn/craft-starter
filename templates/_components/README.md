# Template Components

This directory contains reusable template components that can be included across multiple templates.

## Component Types

- **elements/** - Basic UI elements (buttons, inputs, icons, etc.)
- **modules/** - Composed components (forms, cards, media blocks, etc.)
- **sections/** - Complex layout sections (navigation, hero sections, footers, etc.)

## Usage

Include components using Craft's include tag:

```twig
{# Using an element #}
{% include '_includes/_components/elements/button' with {
    text: 'Click me',
    variant: 'primary',
    url: '/contact'
} %}

{# Using a module that composes elements #}
{% include '_includes/_components/modules/card' with {
    title: 'Card Title',
    content: 'Card description text here...',
    url: '/learn-more',
    buttonText: 'Read More'
} %}

{# Using a section for complex layouts #}
{% include '_includes/_components/sections/navigation' with {
    entries: craft.entries.section('navigation').all(),
    currentPath: craft.app.request.pathInfo
} %}
```

## Component Guidelines

1. **Elements** - Keep simple and focused on single UI elements
2. **Modules** - Combine elements into functional components
3. **Sections** - Build complex layout areas using modules and elements
4. Use clear parameter documentation with defaults
5. Follow consistent naming conventions 