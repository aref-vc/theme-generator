import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Label } from '@/components/ui/label'
import { useThemeStore, type ThemeColor, type Theme } from '@/store/themeStore'
import { HexColorPicker } from 'react-colorful'
import { Palette } from 'lucide-react'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

function hexToHsl(hex: string): { h: number; s: number; l: number } {
  // Convert hex to RGB
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6
        break
      case g:
        h = ((b - r) / d + 2) / 6
        break
      case b:
        h = ((r - g) / d + 4) / 6
        break
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  }
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  return {
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16),
  }
}

interface ColorPickerProps {
  label: string
  colorKey: keyof Theme['colors']
  color: ThemeColor
}

function ColorPicker({ label, colorKey, color }: ColorPickerProps) {
  const updateColor = useThemeStore((state) => state.updateColor)
  const [localColor, setLocalColor] = useState(color.value)

  const handleColorChange = (hex: string) => {
    setLocalColor(hex)
    const hsl = hexToHsl(hex)
    const rgb = hexToRgb(hex)

    updateColor(colorKey, {
      name: label,
      value: hex,
      hsl,
      rgb,
    })
  }

  return (
    <div className="space-y-2">
      <Label className="text-sm">{label}</Label>
      <div className="flex gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="h-10 w-10 rounded-md p-0"
              style={{ backgroundColor: localColor }}
            />
          </PopoverTrigger>
          <PopoverContent className="w-auto p-3">
            <HexColorPicker color={localColor} onChange={handleColorChange} />
          </PopoverContent>
        </Popover>
        <Input
          value={localColor}
          onChange={(e) => handleColorChange(e.target.value)}
          className="flex-1 font-mono text-xs"
        />
      </div>
    </div>
  )
}

export function ColorSection() {
  const theme = useThemeStore((state) => state.theme)

  return (
    <AccordionItem value="colors">
      <AccordionTrigger className="text-sm font-medium">
        <div className="flex items-center gap-2">
          <Palette className="h-4 w-4" />
          Colors
        </div>
      </AccordionTrigger>
      <AccordionContent className="space-y-4 pt-4">
        <ColorPicker
          label="Primary"
          colorKey="primary"
          color={theme.colors.primary}
        />
        <ColorPicker
          label="Secondary"
          colorKey="secondary"
          color={theme.colors.secondary}
        />
        <ColorPicker
          label="Accent"
          colorKey="accent"
          color={theme.colors.accent}
        />
        <ColorPicker
          label="Background"
          colorKey="background"
          color={theme.colors.background}
        />
        <ColorPicker
          label="Foreground"
          colorKey="foreground"
          color={theme.colors.foreground}
        />
        <ColorPicker
          label="Muted"
          colorKey="muted"
          color={theme.colors.muted}
        />
        <ColorPicker
          label="Card"
          colorKey="card"
          color={theme.colors.card}
        />
        <ColorPicker
          label="Destructive"
          colorKey="destructive"
          color={theme.colors.destructive}
        />
        <ColorPicker
          label="Border"
          colorKey="border"
          color={theme.colors.border}
        />
        <ColorPicker
          label="Input"
          colorKey="input"
          color={theme.colors.input}
        />
        <ColorPicker
          label="Ring"
          colorKey="ring"
          color={theme.colors.ring}
        />
      </AccordionContent>
    </AccordionItem>
  )
}