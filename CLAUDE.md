# Modern Theme Generator - Claude Configuration

## Project Overview
A comprehensive theme customization tool built with React, TypeScript, and Tailwind CSS. Enables real-time theme design with live preview and multi-format export capabilities.

## Quick Commands
- **Start Development**: `npm run dev` (runs on port 3027)
- **Build**: `npm run build`
- **Preview Build**: `npm run preview`
- **Type Check**: `npm run type-check`

## Port Allocation
- **3027**: Modern Theme Generator (default development port)

## Architecture Overview

### Core Technologies
- **React 18** with TypeScript for type safety
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for utility-first styling
- **Zustand** for state management with persistence
- **Radix UI** for accessible, unstyled components
- **ShadCN/UI** component architecture

### Key Features Implemented
1. **13 Professional Color Presets** with HSL/RGB conversion
2. **Real-time Theme Preview** across 50+ UI components
3. **Dark/Light Mode** with intelligent contrast adjustments
4. **Undo/Redo System** with full history tracking
5. **Multi-format Export** (CSS, Tailwind, ShadCN, JSON, DaisyUI)

## Component Structure

```
src/
├── components/
│   ├── Header.tsx              # Top navigation with theme controls
│   ├── ControlsSidebar.tsx     # Left panel with all controls
│   ├── PreviewPanel.tsx        # Right panel with live preview
│   ├── controls/
│   │   ├── PresetsSection.tsx  # 13 color presets
│   │   ├── DesignSection.tsx   # Colors & Typography tabs
│   │   ├── SpacingSection.tsx  # Spacing controls
│   │   └── EffectsSection.tsx  # Shadows, radius, blur
│   └── preview/
│       └── ChartsPreview.tsx   # Chart components preview
├── store/
│   └── themeStore.ts           # Zustand store with persistence
└── lib/
    └── utils.ts                # Utility functions
```

## Theme System

### Color Variables
All colors use HSL format with automatic RGB conversion:
- `--primary`, `--primary-foreground`
- `--secondary`, `--secondary-foreground`
- `--accent`, `--accent-foreground`
- `--background`, `--foreground`
- `--muted`, `--muted-foreground`
- `--card`, `--card-foreground`
- `--destructive`, `--destructive-foreground`
- `--border`, `--input`, `--ring`

### Typography System
- **Font Families**: 13 options (Inter, Figtree, Roboto, etc.)
- **Font Sizes**: xs (12px) to 5xl (48px)
- **Font Weights**: 100 (light) to 900 (bold)
- **Line Heights**: tight (1.25), normal (1.5), relaxed (1.75)

### Spacing Scale
Base unit with multipliers:
- xs: 0.25x
- sm: 0.5x
- md: 1x
- lg: 1.5x
- xl: 2x
- 2xl: 3x
- 3xl: 4x
- 4xl: 6x
- 5xl: 8x

### Effects
- **Border Radius**: none, sm, md, lg, xl, 2xl, 3xl, full
- **Shadows**: none, sm, md, lg, xl, 2xl, inner
- **Blur**: 0-20px
- **Transitions**: 150ms, 300ms, 500ms, 700ms

## State Management

### Zustand Store Structure
```typescript
interface ThemeStore {
  theme: Theme
  setTheme: (updates: Partial<Theme>) => void
  updateColor: (key: keyof Theme['colors'], color: ThemeColor) => void
  updateTypography: (updates: Partial<Typography>) => void
  updateSpacing: (updates: Partial<Spacing>) => void
  updateEffects: (updates: Partial<Effects>) => void
  exportTheme: (format: ExportFormat) => string
  undo: () => void
  redo: () => void
  history: Theme[]
  historyIndex: number
}
```

### Persistence
- Uses `zustand/middleware` persist
- LocalStorage key: `theme-generator`
- Auto-saves all changes

## Export Formats

### CSS Variables
```css
:root {
  --primary: 220 90% 56%;
  --secondary: 210 40% 96%;
  /* ... all theme variables */
}
```

### Tailwind Config
```javascript
module.exports = {
  theme: {
    extend: {
      colors: { /* theme colors */ },
      fontFamily: { /* theme fonts */ },
      // ... other theme properties
    }
  }
}
```

### ShadCN Theme
Compatible with shadcn/ui component library format

### JSON
Complete theme object for programmatic use

### DaisyUI
DaisyUI theme configuration format

## Recent Updates (v3.0.0)

### Fixed Issues
1. **Tabs Color Sync** - Fixed tabs not reflecting chosen palette
2. **Dark/Light Mode** - Improved consistency and contrast handling
3. **Stats Cards** - Removed hardcoded colors, now use theme
4. **Alerts/Notifications** - Dynamic theme color usage

### Added Features
1. **9 New Color Presets**:
   - Vintage Americana
   - Ocean Sunset
   - Nautical Dream
   - Bold & Bright
   - Autumn Comfort
   - Warm Earth
   - Retro Pop
   - Tropical Twilight
   - Neon Ocean

2. **Unified Design Section** - Merged colors and typography into tabbed interface

3. **Intelligent Foreground Colors** - Auto-adjusts text color based on background lightness

## Development Workflow

### Adding New Presets
1. Edit `src/components/controls/PresetsSection.tsx`
2. Add preset object with all color values in hex
3. Include HSL and RGB conversions using helper functions

### Adding New Components to Preview
1. Edit `src/components/PreviewPanel.tsx`
2. Add component in appropriate tab section
3. Use theme-aware classes (bg-primary, text-foreground, etc.)

### Modifying Export Formats
1. Edit `src/store/themeStore.ts`
2. Update `exportTheme` function with new format logic

## Testing Checklist
- [ ] All presets apply correctly
- [ ] Dark/Light mode toggles properly
- [ ] Colors update in real-time
- [ ] Typography changes reflect immediately
- [ ] Spacing adjustments work correctly
- [ ] Effects apply as expected
- [ ] Export formats are valid
- [ ] Undo/Redo functions properly
- [ ] LocalStorage persistence works

## Known Issues
- None currently reported

## Future Enhancements
- [ ] Import theme from JSON
- [ ] Share theme via URL
- [ ] A11y contrast checking
- [ ] Animation preview
- [ ] Grid system controls
- [ ] Component code generation
- [ ] Theme marketplace integration
- [ ] Figma plugin export

## Performance Notes
- Uses React.memo for heavy components
- Debounced color picker updates
- Efficient CSS variable injection
- Minimal re-renders with Zustand

## Deployment
- Optimized for Vercel/Netlify deployment
- Docker support included
- Static export compatible
- Environment variable support

## Support & Maintenance
- Regular dependency updates
- Browser compatibility testing
- Performance monitoring
- User feedback integration