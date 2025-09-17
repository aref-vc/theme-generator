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

    // Apply CSS variables for colors
    const style = document.createElement('style')
    style.textContent = `
      :root {
        --primary: ${theme.colors.primary.hsl.h} ${theme.colors.primary.hsl.s}% ${theme.colors.primary.hsl.l}%;
        --secondary: ${theme.colors.secondary.hsl.h} ${theme.colors.secondary.hsl.s}% ${theme.colors.secondary.hsl.l}%;
        --accent: ${theme.colors.accent.hsl.h} ${theme.colors.accent.hsl.s}% ${theme.colors.accent.hsl.l}%;
        --background: ${theme.colors.background.hsl.h} ${theme.colors.background.hsl.s}% ${theme.colors.background.hsl.l}%;
        --foreground: ${theme.colors.foreground.hsl.h} ${theme.colors.foreground.hsl.s}% ${theme.colors.foreground.hsl.l}%;
        --muted: ${theme.colors.muted.hsl.h} ${theme.colors.muted.hsl.s}% ${theme.colors.muted.hsl.l}%;
        --card: ${theme.colors.card.hsl.h} ${theme.colors.card.hsl.s}% ${theme.colors.card.hsl.l}%;
        --destructive: ${theme.colors.destructive.hsl.h} ${theme.colors.destructive.hsl.s}% ${theme.colors.destructive.hsl.l}%;
        --border: ${theme.colors.border.hsl.h} ${theme.colors.border.hsl.s}% ${theme.colors.border.hsl.l}%;
        --input: ${theme.colors.input.hsl.h} ${theme.colors.input.hsl.s}% ${theme.colors.input.hsl.l}%;
        --ring: ${theme.colors.ring.hsl.h} ${theme.colors.ring.hsl.s}% ${theme.colors.ring.hsl.l}%;
        --radius: ${theme.effects.borderRadius.lg};
      }
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