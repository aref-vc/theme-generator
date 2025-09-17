import { useThemeStore } from '@/store/themeStore'
import { Header } from '@/components/Header'
import { ControlsSidebar } from '@/components/ControlsSidebar'
import { PreviewPanel } from '@/components/PreviewPanel'
import { useEffect } from 'react'

function App() {
  const theme = useThemeStore((state) => state.theme)

  // Apply theme to document root
  useEffect(() => {
    const root = document.documentElement

    // Apply dark/light mode
    if (theme.mode === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    // Apply CSS variables for colors, typography, spacing, and effects
    // In dark mode, we need to intelligently adjust colors
    const isDark = theme.mode === 'dark'

    // Helper function to determine if a color is light or dark
    const isLightColor = (l: number) => l > 50

    // Get appropriate foreground for buttons/badges based on background lightness
    const getPrimaryForeground = () => {
      if (isLightColor(theme.colors.primary.hsl.l)) {
        // Light primary color, use dark foreground
        return isDark ? '0 0% 10%' : '0 0% 10%'
      } else {
        // Dark primary color, use light foreground
        return isDark ? '0 0% 95%' : '0 0% 98%'
      }
    }

    const style = document.createElement('style')
    style.textContent = `
      :root {
        /* Colors */
        --primary: ${theme.colors.primary.hsl.h} ${theme.colors.primary.hsl.s}% ${theme.colors.primary.hsl.l}%;
        --primary-foreground: ${getPrimaryForeground()};
        --secondary: ${theme.colors.secondary.hsl.h} ${theme.colors.secondary.hsl.s}% ${theme.colors.secondary.hsl.l}%;
        --secondary-foreground: ${theme.colors.foreground.hsl.h} ${theme.colors.foreground.hsl.s}% ${theme.colors.foreground.hsl.l}%;
        --accent: ${theme.colors.accent.hsl.h} ${theme.colors.accent.hsl.s}% ${theme.colors.accent.hsl.l}%;
        --accent-foreground: ${theme.colors.foreground.hsl.h} ${theme.colors.foreground.hsl.s}% ${theme.colors.foreground.hsl.l}%;
        --background: ${theme.colors.background.hsl.h} ${theme.colors.background.hsl.s}% ${theme.colors.background.hsl.l}%;
        --foreground: ${theme.colors.foreground.hsl.h} ${theme.colors.foreground.hsl.s}% ${theme.colors.foreground.hsl.l}%;
        --muted: ${theme.colors.muted.hsl.h} ${theme.colors.muted.hsl.s}% ${theme.colors.muted.hsl.l}%;
        --muted-foreground: ${theme.colors.foreground.hsl.h} ${theme.colors.foreground.hsl.s}% ${Math.max(30, Math.min(70, theme.colors.foreground.hsl.l))}%;
        --card: ${theme.colors.card.hsl.h} ${theme.colors.card.hsl.s}% ${theme.colors.card.hsl.l}%;
        --card-foreground: ${theme.colors.foreground.hsl.h} ${theme.colors.foreground.hsl.s}% ${theme.colors.foreground.hsl.l}%;
        --popover: ${theme.colors.card.hsl.h} ${theme.colors.card.hsl.s}% ${theme.colors.card.hsl.l}%;
        --popover-foreground: ${theme.colors.foreground.hsl.h} ${theme.colors.foreground.hsl.s}% ${theme.colors.foreground.hsl.l}%;
        --destructive: ${theme.colors.destructive.hsl.h} ${theme.colors.destructive.hsl.s}% ${theme.colors.destructive.hsl.l}%;
        --destructive-foreground: ${isLightColor(theme.colors.destructive.hsl.l) ? '0 0% 10%' : '0 0% 98%'};
        --border: ${theme.colors.border.hsl.h} ${theme.colors.border.hsl.s}% ${theme.colors.border.hsl.l}%;
        --input: ${theme.colors.input.hsl.h} ${theme.colors.input.hsl.s}% ${theme.colors.input.hsl.l}%;
        --ring: ${theme.colors.ring.hsl.h} ${theme.colors.ring.hsl.s}% ${theme.colors.ring.hsl.l}%;

        /* Typography */
        --font-family: ${theme.typography.fontFamily};
        --font-size-xs: ${theme.typography.fontSize.xs};
        --font-size-sm: ${theme.typography.fontSize.sm};
        --font-size-base: ${theme.typography.fontSize.base};
        --font-size-lg: ${theme.typography.fontSize.lg};
        --font-size-xl: ${theme.typography.fontSize.xl};
        --font-size-2xl: ${theme.typography.fontSize['2xl']};
        --font-size-3xl: ${theme.typography.fontSize['3xl']};
        --font-size-4xl: ${theme.typography.fontSize['4xl']};
        --font-size-5xl: ${theme.typography.fontSize['5xl']};
        --font-weight-light: ${theme.typography.fontWeight.light};
        --font-weight-normal: ${theme.typography.fontWeight.normal};
        --font-weight-medium: ${theme.typography.fontWeight.medium};
        --font-weight-semibold: ${theme.typography.fontWeight.semibold};
        --font-weight-bold: ${theme.typography.fontWeight.bold};
        --line-height-tight: ${theme.typography.lineHeight.tight};
        --line-height-normal: ${theme.typography.lineHeight.normal};
        --line-height-relaxed: ${theme.typography.lineHeight.relaxed};

        /* Spacing */
        --spacing-base: ${theme.spacing.base}px;
        --spacing-xs: ${theme.spacing.scale.xs * theme.spacing.base}px;
        --spacing-sm: ${theme.spacing.scale.sm * theme.spacing.base}px;
        --spacing-md: ${theme.spacing.scale.md * theme.spacing.base}px;
        --spacing-lg: ${theme.spacing.scale.lg * theme.spacing.base}px;
        --spacing-xl: ${theme.spacing.scale.xl * theme.spacing.base}px;
        --spacing-2xl: ${theme.spacing.scale['2xl'] * theme.spacing.base}px;
        --spacing-3xl: ${theme.spacing.scale['3xl'] * theme.spacing.base}px;
        --spacing-4xl: ${theme.spacing.scale['4xl'] * theme.spacing.base}px;
        --spacing-5xl: ${theme.spacing.scale['5xl'] * theme.spacing.base}px;

        /* Effects - Border Radius */
        --radius: ${theme.effects.borderRadius.lg};
        --radius-none: ${theme.effects.borderRadius.none};
        --radius-sm: ${theme.effects.borderRadius.sm};
        --radius-md: ${theme.effects.borderRadius.md};
        --radius-lg: ${theme.effects.borderRadius.lg};
        --radius-xl: ${theme.effects.borderRadius.xl};
        --radius-2xl: ${theme.effects.borderRadius['2xl']};
        --radius-3xl: ${theme.effects.borderRadius['3xl']};
        --radius-full: ${theme.effects.borderRadius.full};

        /* Effects - Shadows */
        --shadow-none: ${theme.effects.shadows.none};
        --shadow-sm: ${theme.effects.shadows.sm};
        --shadow-md: ${theme.effects.shadows.md};
        --shadow-lg: ${theme.effects.shadows.lg};
        --shadow-xl: ${theme.effects.shadows.xl};
        --shadow-2xl: ${theme.effects.shadows['2xl']};
        --shadow-inner: ${theme.effects.shadows.inner};
      }

      /* Apply typography globally */
      body, .font-sans {
        font-family: var(--font-family);
        font-size: var(--font-size-base);
        line-height: var(--line-height-normal);
      }

      /* Typography utility classes */
      .text-xs { font-size: var(--font-size-xs); }
      .text-sm { font-size: var(--font-size-sm); }
      .text-base { font-size: var(--font-size-base); }
      .text-lg { font-size: var(--font-size-lg); }
      .text-xl { font-size: var(--font-size-xl); }
      .text-2xl { font-size: var(--font-size-2xl); }
      .text-3xl { font-size: var(--font-size-3xl); }
      .text-4xl { font-size: var(--font-size-4xl); }
      .text-5xl { font-size: var(--font-size-5xl); }

      .font-light { font-weight: var(--font-weight-light); }
      .font-normal { font-weight: var(--font-weight-normal); }
      .font-medium { font-weight: var(--font-weight-medium); }
      .font-semibold { font-weight: var(--font-weight-semibold); }
      .font-bold { font-weight: var(--font-weight-bold); }

      .leading-tight { line-height: var(--line-height-tight); }
      .leading-normal { line-height: var(--line-height-normal); }
      .leading-relaxed { line-height: var(--line-height-relaxed); }

      /* Spacing utility classes */
      .p-xs { padding: var(--spacing-xs); }
      .p-sm { padding: var(--spacing-sm); }
      .p-md { padding: var(--spacing-md); }
      .p-lg { padding: var(--spacing-lg); }
      .p-xl { padding: var(--spacing-xl); }

      .m-xs { margin: var(--spacing-xs); }
      .m-sm { margin: var(--spacing-sm); }
      .m-md { margin: var(--spacing-md); }
      .m-lg { margin: var(--spacing-lg); }
      .m-xl { margin: var(--spacing-xl); }

      .gap-xs { gap: var(--spacing-xs); }
      .gap-sm { gap: var(--spacing-sm); }
      .gap-md { gap: var(--spacing-md); }
      .gap-lg { gap: var(--spacing-lg); }
      .gap-xl { gap: var(--spacing-xl); }

      /* Shadow utility classes */
      .shadow-none { box-shadow: var(--shadow-none); }
      .shadow-sm { box-shadow: var(--shadow-sm); }
      .shadow-md { box-shadow: var(--shadow-md); }
      .shadow-lg { box-shadow: var(--shadow-lg); }
      .shadow-xl { box-shadow: var(--shadow-xl); }
      .shadow-2xl { box-shadow: var(--shadow-2xl); }
      .shadow-inner { box-shadow: var(--shadow-inner); }

      /* Border radius utility classes */
      .rounded-none { border-radius: var(--radius-none); }
      .rounded-sm { border-radius: var(--radius-sm); }
      .rounded-md { border-radius: var(--radius-md); }
      .rounded-lg { border-radius: var(--radius-lg); }
      .rounded-xl { border-radius: var(--radius-xl); }
      .rounded-2xl { border-radius: var(--radius-2xl); }
      .rounded-3xl { border-radius: var(--radius-3xl); }
      .rounded-full { border-radius: var(--radius-full); }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [theme])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="flex h-[calc(100vh-64px)]">
        {/* Left Sidebar - Controls */}
        <aside className="w-[400px] border-r border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <ControlsSidebar />
        </aside>

        {/* Right Panel - Live Preview */}
        <main className="flex-1 bg-background">
          <PreviewPanel />
        </main>
      </div>
    </div>
  )
}

export default App