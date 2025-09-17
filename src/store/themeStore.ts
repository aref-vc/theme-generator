import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface ThemeColor {
  name: string
  value: string
  hsl: { h: number; s: number; l: number }
  rgb: { r: number; g: number; b: number }
  oklch?: { l: number; c: number; h: number }
}

export interface ThemeTypography {
  fontFamily: string
  fontSize: {
    xs: string
    sm: string
    base: string
    lg: string
    xl: string
    '2xl': string
    '3xl': string
    '4xl': string
    '5xl': string
  }
  fontWeight: {
    light: number
    normal: number
    medium: number
    semibold: number
    bold: number
  }
  lineHeight: {
    tight: number
    normal: number
    relaxed: number
  }
}

export interface ThemeSpacing {
  base: number
  scale: {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
    '2xl': number
    '3xl': number
    '4xl': number
    '5xl': number
  }
}

export interface ThemeEffects {
  borderRadius: {
    none: string
    sm: string
    md: string
    lg: string
    xl: string
    '2xl': string
    '3xl': string
    full: string
  }
  shadows: {
    none: string
    sm: string
    md: string
    lg: string
    xl: string
    '2xl': string
    inner: string
  }
}

export interface Theme {
  name: string
  mode: 'light' | 'dark'
  colors: {
    primary: ThemeColor
    secondary: ThemeColor
    accent: ThemeColor
    background: ThemeColor
    foreground: ThemeColor
    muted: ThemeColor
    card: ThemeColor
    destructive: ThemeColor
    border: ThemeColor
    input: ThemeColor
    ring: ThemeColor
  }
  typography: ThemeTypography
  spacing: ThemeSpacing
  effects: ThemeEffects
}

interface ThemeStore {
  theme: Theme
  history: Theme[]
  historyIndex: number
  presets: Theme[]

  // Actions
  setTheme: (theme: Partial<Theme>) => void
  updateColor: (colorType: keyof Theme['colors'], color: ThemeColor) => void
  updateTypography: (typography: Partial<ThemeTypography>) => void
  updateSpacing: (spacing: Partial<ThemeSpacing>) => void
  updateEffects: (effects: Partial<ThemeEffects>) => void

  // History
  undo: () => void
  redo: () => void

  // Presets
  loadPreset: (preset: Theme) => void
  saveAsPreset: (name: string) => void

  // Export
  exportTheme: (format: 'css' | 'tailwind' | 'json' | 'shadcn') => string
}

const defaultTheme: Theme = {
  name: 'Custom Theme',
  mode: 'dark',
  colors: {
    primary: {
      name: 'Primary',
      value: '#8D5EB7',
      hsl: { h: 270, s: 40, l: 54 },
      rgb: { r: 141, g: 94, b: 183 },
    },
    secondary: {
      name: 'Secondary',
      value: '#6F68BD',
      hsl: { h: 245, s: 35, l: 56 },
      rgb: { r: 111, g: 104, b: 189 },
    },
    accent: {
      name: 'Accent',
      value: '#E56C48',
      hsl: { h: 13, s: 73, l: 59 },
      rgb: { r: 229, g: 108, b: 72 },
    },
    background: {
      name: 'Background',
      value: '#0A0A0B',
      hsl: { h: 240, s: 9, l: 3 },
      rgb: { r: 10, g: 10, b: 11 },
    },
    foreground: {
      name: 'Foreground',
      value: '#FAFAFA',
      hsl: { h: 0, s: 0, l: 98 },
      rgb: { r: 250, g: 250, b: 250 },
    },
    muted: {
      name: 'Muted',
      value: '#27272A',
      hsl: { h: 240, s: 4, l: 16 },
      rgb: { r: 39, g: 39, b: 42 },
    },
    card: {
      name: 'Card',
      value: '#18181B',
      hsl: { h: 240, s: 10, l: 10 },
      rgb: { r: 24, g: 24, b: 27 },
    },
    destructive: {
      name: 'Destructive',
      value: '#EF4444',
      hsl: { h: 0, s: 84, l: 60 },
      rgb: { r: 239, g: 68, b: 68 },
    },
    border: {
      name: 'Border',
      value: '#27272A',
      hsl: { h: 240, s: 4, l: 16 },
      rgb: { r: 39, g: 39, b: 42 },
    },
    input: {
      name: 'Input',
      value: '#27272A',
      hsl: { h: 240, s: 4, l: 16 },
      rgb: { r: 39, g: 39, b: 42 },
    },
    ring: {
      name: 'Ring',
      value: '#8D5EB7',
      hsl: { h: 270, s: 40, l: 54 },
      rgb: { r: 141, g: 94, b: 183 },
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  spacing: {
    base: 4,
    scale: {
      xs: 0.5,
      sm: 1,
      md: 1.5,
      lg: 2,
      xl: 3,
      '2xl': 4,
      '3xl': 6,
      '4xl': 8,
      '5xl': 12,
    },
  },
  effects: {
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
    shadows: {
      none: 'none',
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    },
  },
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: defaultTheme,
      history: [defaultTheme],
      historyIndex: 0,
      presets: [],

      setTheme: (newTheme) => {
        set((state) => {
          const updated = { ...state.theme, ...newTheme }
          const newHistory = [...state.history.slice(0, state.historyIndex + 1), updated]
          return {
            theme: updated,
            history: newHistory,
            historyIndex: newHistory.length - 1,
          }
        })
      },

      updateColor: (colorType, color) => {
        set((state) => {
          const updated = {
            ...state.theme,
            colors: {
              ...state.theme.colors,
              [colorType]: color,
            },
          }
          const newHistory = [...state.history.slice(0, state.historyIndex + 1), updated]
          return {
            theme: updated,
            history: newHistory,
            historyIndex: newHistory.length - 1,
          }
        })
      },

      updateTypography: (typography) => {
        set((state) => {
          const updated = {
            ...state.theme,
            typography: {
              ...state.theme.typography,
              ...typography,
            },
          }
          const newHistory = [...state.history.slice(0, state.historyIndex + 1), updated]
          return {
            theme: updated,
            history: newHistory,
            historyIndex: newHistory.length - 1,
          }
        })
      },

      updateSpacing: (spacing) => {
        set((state) => {
          const updated = {
            ...state.theme,
            spacing: {
              ...state.theme.spacing,
              ...spacing,
            },
          }
          const newHistory = [...state.history.slice(0, state.historyIndex + 1), updated]
          return {
            theme: updated,
            history: newHistory,
            historyIndex: newHistory.length - 1,
          }
        })
      },

      updateEffects: (effects) => {
        set((state) => {
          const updated = {
            ...state.theme,
            effects: {
              ...state.theme.effects,
              ...effects,
            },
          }
          const newHistory = [...state.history.slice(0, state.historyIndex + 1), updated]
          return {
            theme: updated,
            history: newHistory,
            historyIndex: newHistory.length - 1,
          }
        })
      },

      undo: () => {
        set((state) => {
          if (state.historyIndex > 0) {
            return {
              historyIndex: state.historyIndex - 1,
              theme: state.history[state.historyIndex - 1],
            }
          }
          return state
        })
      },

      redo: () => {
        set((state) => {
          if (state.historyIndex < state.history.length - 1) {
            return {
              historyIndex: state.historyIndex + 1,
              theme: state.history[state.historyIndex + 1],
            }
          }
          return state
        })
      },

      loadPreset: (preset) => {
        set((state) => {
          const newHistory = [...state.history.slice(0, state.historyIndex + 1), preset]
          return {
            theme: preset,
            history: newHistory,
            historyIndex: newHistory.length - 1,
          }
        })
      },

      saveAsPreset: (name) => {
        set((state) => {
          const preset = { ...state.theme, name }
          return {
            presets: [...state.presets, preset],
          }
        })
      },

      exportTheme: (format) => {
        const theme = get().theme

        switch (format) {
          case 'css':
            return exportAsCSS(theme)
          case 'tailwind':
            return exportAsTailwind(theme)
          case 'shadcn':
            return exportAsShadcn(theme)
          case 'json':
            return JSON.stringify(theme, null, 2)
          default:
            return ''
        }
      },
    }),
    {
      name: 'theme-generator-storage',
    }
  )
)

// Export functions
function exportAsCSS(theme: Theme): string {
  return `:root {
  /* Colors */
  --primary: ${theme.colors.primary.value};
  --secondary: ${theme.colors.secondary.value};
  --accent: ${theme.colors.accent.value};
  --background: ${theme.colors.background.value};
  --foreground: ${theme.colors.foreground.value};
  --muted: ${theme.colors.muted.value};
  --card: ${theme.colors.card.value};
  --destructive: ${theme.colors.destructive.value};
  --border: ${theme.colors.border.value};
  --input: ${theme.colors.input.value};
  --ring: ${theme.colors.ring.value};

  /* Typography */
  --font-family: ${theme.typography.fontFamily};

  /* Spacing */
  --spacing-base: ${theme.spacing.base}px;

  /* Effects */
  --radius: ${theme.effects.borderRadius.lg};
}`
}

function exportAsTailwind(theme: Theme): string {
  return `module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '${theme.colors.primary.value}',
        secondary: '${theme.colors.secondary.value}',
        accent: '${theme.colors.accent.value}',
        background: '${theme.colors.background.value}',
        foreground: '${theme.colors.foreground.value}',
        muted: '${theme.colors.muted.value}',
        card: '${theme.colors.card.value}',
        destructive: '${theme.colors.destructive.value}',
        border: '${theme.colors.border.value}',
        input: '${theme.colors.input.value}',
        ring: '${theme.colors.ring.value}',
      },
      fontFamily: {
        sans: ['${theme.typography.fontFamily}'],
      },
    },
  },
}`
}

function exportAsShadcn(theme: Theme): string {
  const toHslString = (color: ThemeColor) =>
    `${color.hsl.h} ${color.hsl.s}% ${color.hsl.l}%`

  return `:root {
  --background: ${toHslString(theme.colors.background)};
  --foreground: ${toHslString(theme.colors.foreground)};
  --card: ${toHslString(theme.colors.card)};
  --card-foreground: ${toHslString(theme.colors.foreground)};
  --popover: ${toHslString(theme.colors.card)};
  --popover-foreground: ${toHslString(theme.colors.foreground)};
  --primary: ${toHslString(theme.colors.primary)};
  --primary-foreground: ${toHslString(theme.colors.background)};
  --secondary: ${toHslString(theme.colors.secondary)};
  --secondary-foreground: ${toHslString(theme.colors.foreground)};
  --muted: ${toHslString(theme.colors.muted)};
  --muted-foreground: ${toHslString(theme.colors.foreground)};
  --accent: ${toHslString(theme.colors.accent)};
  --accent-foreground: ${toHslString(theme.colors.foreground)};
  --destructive: ${toHslString(theme.colors.destructive)};
  --destructive-foreground: ${toHslString(theme.colors.foreground)};
  --border: ${toHslString(theme.colors.border)};
  --input: ${toHslString(theme.colors.input)};
  --ring: ${toHslString(theme.colors.ring)};
  --radius: ${theme.effects.borderRadius.lg};
}`
}