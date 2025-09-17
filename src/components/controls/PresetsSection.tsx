import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { useThemeStore, type Theme } from '@/store/themeStore'
import { Layers } from 'lucide-react'

const presets: Partial<Theme>[] = [
  {
    name: 'Dark Purple',
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
  },
  {
    name: 'Ocean Blue',
    mode: 'dark',
    colors: {
      primary: {
        name: 'Primary',
        value: '#3B82F6',
        hsl: { h: 217, s: 91, l: 60 },
        rgb: { r: 59, g: 130, b: 246 },
      },
      secondary: {
        name: 'Secondary',
        value: '#10B981',
        hsl: { h: 160, s: 84, l: 39 },
        rgb: { r: 16, g: 185, b: 129 },
      },
      accent: {
        name: 'Accent',
        value: '#F59E0B',
        hsl: { h: 37, s: 92, l: 50 },
        rgb: { r: 245, g: 158, b: 11 },
      },
      background: {
        name: 'Background',
        value: '#0F172A',
        hsl: { h: 222, s: 47, l: 11 },
        rgb: { r: 15, g: 23, b: 42 },
      },
      foreground: {
        name: 'Foreground',
        value: '#F8FAFC',
        hsl: { h: 210, s: 40, l: 98 },
        rgb: { r: 248, g: 250, b: 252 },
      },
      muted: {
        name: 'Muted',
        value: '#1E293B',
        hsl: { h: 215, s: 25, l: 18 },
        rgb: { r: 30, g: 41, b: 59 },
      },
      card: {
        name: 'Card',
        value: '#1E293B',
        hsl: { h: 215, s: 25, l: 18 },
        rgb: { r: 30, g: 41, b: 59 },
      },
      destructive: {
        name: 'Destructive',
        value: '#DC2626',
        hsl: { h: 0, s: 72, l: 51 },
        rgb: { r: 220, g: 38, b: 38 },
      },
      border: {
        name: 'Border',
        value: '#334155',
        hsl: { h: 215, s: 25, l: 27 },
        rgb: { r: 51, g: 65, b: 85 },
      },
      input: {
        name: 'Input',
        value: '#334155',
        hsl: { h: 215, s: 25, l: 27 },
        rgb: { r: 51, g: 65, b: 85 },
      },
      ring: {
        name: 'Ring',
        value: '#3B82F6',
        hsl: { h: 217, s: 91, l: 60 },
        rgb: { r: 59, g: 130, b: 246 },
      },
    },
  },
  {
    name: 'Light Minimal',
    mode: 'light',
    colors: {
      primary: {
        name: 'Primary',
        value: '#18181B',
        hsl: { h: 240, s: 10, l: 10 },
        rgb: { r: 24, g: 24, b: 27 },
      },
      secondary: {
        name: 'Secondary',
        value: '#71717A',
        hsl: { h: 240, s: 5, l: 46 },
        rgb: { r: 113, g: 113, b: 122 },
      },
      accent: {
        name: 'Accent',
        value: '#3B82F6',
        hsl: { h: 217, s: 91, l: 60 },
        rgb: { r: 59, g: 130, b: 246 },
      },
      background: {
        name: 'Background',
        value: '#FFFFFF',
        hsl: { h: 0, s: 0, l: 100 },
        rgb: { r: 255, g: 255, b: 255 },
      },
      foreground: {
        name: 'Foreground',
        value: '#18181B',
        hsl: { h: 240, s: 10, l: 10 },
        rgb: { r: 24, g: 24, b: 27 },
      },
      muted: {
        name: 'Muted',
        value: '#F4F4F5',
        hsl: { h: 240, s: 5, l: 96 },
        rgb: { r: 244, g: 244, b: 245 },
      },
      card: {
        name: 'Card',
        value: '#FFFFFF',
        hsl: { h: 0, s: 0, l: 100 },
        rgb: { r: 255, g: 255, b: 255 },
      },
      destructive: {
        name: 'Destructive',
        value: '#EF4444',
        hsl: { h: 0, s: 84, l: 60 },
        rgb: { r: 239, g: 68, b: 68 },
      },
      border: {
        name: 'Border',
        value: '#E4E4E7',
        hsl: { h: 240, s: 5, l: 90 },
        rgb: { r: 228, g: 228, b: 231 },
      },
      input: {
        name: 'Input',
        value: '#E4E4E7',
        hsl: { h: 240, s: 5, l: 90 },
        rgb: { r: 228, g: 228, b: 231 },
      },
      ring: {
        name: 'Ring',
        value: '#18181B',
        hsl: { h: 240, s: 10, l: 10 },
        rgb: { r: 24, g: 24, b: 27 },
      },
    },
  },
]

export function PresetsSection() {
  const loadPreset = useThemeStore((state) => state.loadPreset)
  const saveAsPreset = useThemeStore((state) => state.saveAsPreset)
  const theme = useThemeStore((state) => state.theme)

  return (
    <AccordionItem value="presets">
      <AccordionTrigger className="text-sm font-medium">
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4" />
          Presets
        </div>
      </AccordionTrigger>
      <AccordionContent className="space-y-2 pt-4">
        {presets.map((preset) => (
          <Button
            key={preset.name}
            variant="outline"
            size="sm"
            className="w-full justify-start"
            onClick={() => loadPreset({ ...theme, ...preset } as Theme)}
          >
            {preset.name}
          </Button>
        ))}
        <div className="mt-4 pt-4 border-t">
          <Button
            variant="secondary"
            size="sm"
            className="w-full"
            onClick={() => {
              const name = prompt('Enter preset name:')
              if (name) saveAsPreset(name)
            }}
          >
            Save Current as Preset
          </Button>
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}