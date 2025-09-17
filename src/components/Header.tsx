import { Button } from '@/components/ui/button'
import { useThemeStore } from '@/store/themeStore'
import {
  Download,
  Undo2,
  Redo2,
  Moon,
  Sun,
  Share2,
  Settings,
  Palette,
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function Header() {
  const { theme, setTheme, undo, redo, exportTheme, historyIndex, history } =
    useThemeStore()

  const canUndo = historyIndex > 0
  const canRedo = historyIndex < history.length - 1

  const handleExport = (format: 'css' | 'tailwind' | 'json' | 'shadcn') => {
    const exported = exportTheme(format)
    const blob = new Blob([exported], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `theme.${format === 'shadcn' ? 'css' : format === 'tailwind' ? 'js' : format}`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <header className="h-16 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-full items-center justify-between px-6">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <Palette className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-semibold">Modern Theme Generator</h1>
          <span className="text-sm text-muted-foreground">
            {theme.name}
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Undo/Redo */}
          <Button
            variant="ghost"
            size="icon"
            onClick={undo}
            disabled={!canUndo}
          >
            <Undo2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={redo}
            disabled={!canRedo}
          >
            <Redo2 className="h-4 w-4" />
          </Button>

          <div className="mx-2 h-6 w-px bg-border" />

          {/* Theme Mode Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              setTheme({ mode: theme.mode === 'dark' ? 'light' : 'dark' })
            }
          >
            {theme.mode === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>

          {/* Share */}
          <Button variant="ghost" size="icon">
            <Share2 className="h-4 w-4" />
          </Button>

          {/* Export */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="default" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleExport('css')}>
                CSS Variables
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleExport('tailwind')}>
                Tailwind Config
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleExport('shadcn')}>
                ShadCN Theme
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleExport('json')}>
                JSON
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Settings */}
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}