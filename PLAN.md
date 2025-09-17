# Modern Theme Generator - Project Plan

## Port Allocation
- **Port**: 3027 (reserved in CLAUDE.md)
- **Description**: Modern Theme Generator - comprehensive ShadCN theme creator with real-time preview, OKLCH color support, and multi-format export

## Project Overview
A professional, modern theme generator built with the latest web technologies. The application allows users to create, customize, and export beautiful themes for their applications with real-time preview and advanced color management.

## Core Features

### 1. Side-by-Side Layout
- **Left Sidebar (400px)**: All theme controls organized in collapsible sections
- **Right Panel (Flex)**: Live preview that updates instantly
- **No tabs**: Everything visible and accessible at once

### 2. Color System
- **Modern Color Spaces**: Support for OKLCH, HSL, RGB, HEX
- **AI Color Generation**: Smart palette generation from single color
- **Accessibility Built-in**: WCAG compliance checking in real-time
- **Color Harmony**: Automatic complementary, triadic, analogous schemes
- **Shade Generation**: Automatic 50-950 shade generation for any color

### 3. Typography Controls
- **Font Pairing AI**: Suggest font combinations
- **Variable Fonts**: Support for modern variable fonts
- **Fluid Typography**: Responsive type scaling
- **Preview All Sizes**: See h1-h6, body, captions live

### 4. Component Library Preview
- **Real Components**: Buttons, Cards, Forms, Tables, Navigation
- **Interactive States**: Hover, Focus, Active, Disabled
- **Light/Dark Mode**: Instant theme switching
- **Custom Components**: Add your own preview components

### 5. Export Options
- **CSS Variables**: Modern CSS custom properties
- **Tailwind Config**: Ready-to-use tailwind.config.js
- **Figma Tokens**: Design tokens for Figma
- **ShadCN Theme**: Direct integration with ShadCN UI
- **JSON Tokens**: Platform-agnostic design tokens

### 6. Advanced Features
- **Theme History**: Undo/Redo with timeline
- **Theme Presets**: Professional starting points
- **Share Themes**: Shareable URLs for themes
- **Import/Export**: Save and load theme files
- **Code Snippets**: Copy ready-to-use components

## Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5 for lightning-fast HMR
- **Styling**: CSS-in-JS with Emotion/Styled Components
- **State Management**: Zustand for simple, powerful state
- **Color Library**: Culori for advanced color manipulation
- **Icons**: Lucide React for consistent iconography

### UI Components
- **Base**: Radix UI primitives for accessibility
- **Animations**: Framer Motion for smooth transitions
- **Code Display**: Prism.js for syntax highlighting
- **Virtualization**: React Window for performance

### Development
- **Type Safety**: TypeScript with strict mode
- **Code Quality**: ESLint + Prettier
- **Testing**: Vitest + React Testing Library
- **Git Hooks**: Husky for pre-commit checks

## UI Design

### Visual Style
- **Modern Glassmorphism**: Subtle blur and transparency
- **Smooth Animations**: 60fps transitions
- **Dark Mode First**: Optimized for dark environments
- **Professional Polish**: Attention to every detail

### Layout Structure
```
┌─────────────────────────────────────────────────┐
│                   Header Bar                     │
│  Logo | Theme Name | Share | Export | Settings  │
├─────────────────┬───────────────────────────────┤
│                 │                               │
│   Controls      │      Live Preview             │
│   Sidebar       │                               │
│                 │   ┌─────────────────┐        │
│  ▼ Colors       │   │   Component     │        │
│    Primary      │   │   Examples      │        │
│    Secondary    │   │                 │        │
│    Accent       │   └─────────────────┘        │
│                 │                               │
│  ▼ Typography   │   ┌─────────────────┐        │
│    Font Family  │   │   Typography    │        │
│    Size Scale   │   │   Preview       │        │
│                 │   └─────────────────┘        │
│  ▼ Spacing      │                               │
│                 │   ┌─────────────────┐        │
│  ▼ Effects      │   │   Interactive   │        │
│    Shadows      │   │   Elements      │        │
│    Borders      │   └─────────────────┘        │
│                 │                               │
└─────────────────┴───────────────────────────────┘
```

## Development Phases

### Phase 1: Foundation (Day 1)
- [ ] Initialize project with Vite + React + TypeScript
- [ ] Set up folder structure and configuration
- [ ] Install core dependencies
- [ ] Create basic layout structure
- [ ] Implement state management

### Phase 2: Core Features (Day 2-3)
- [ ] Build color picker components
- [ ] Implement color generation algorithms
- [ ] Add typography controls
- [ ] Create spacing system
- [ ] Build real-time preview

### Phase 3: Advanced Features (Day 4-5)
- [ ] Add theme presets
- [ ] Implement export functionality
- [ ] Add accessibility checking
- [ ] Create component previews
- [ ] Build sharing system

### Phase 4: Polish (Day 6-7)
- [ ] Animations and transitions
- [ ] Responsive design
- [ ] Performance optimization
- [ ] Testing and bug fixes
- [ ] Documentation

## Success Metrics
- **Performance**: < 100ms color updates
- **Accessibility**: 100% keyboard navigable
- **Bundle Size**: < 200KB gzipped
- **Browser Support**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **User Experience**: Intuitive without documentation

## Unique Selling Points
1. **Real-time Everything**: No apply buttons, instant feedback
2. **AI-Powered**: Smart suggestions and auto-generation
3. **Professional Output**: Production-ready code, not just colors
4. **Modern Standards**: OKLCH, CSS Variables, Design Tokens
5. **Designer Friendly**: Visual tools that developers love

## Notes
- Port 3027 is reserved for this project
- Focus on performance and smooth interactions
- Keep the UI clean and professional
- Prioritize user experience over feature count
- Build with extensibility in mind