import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { useThemeStore, type ThemeColor, type Theme } from '@/store/themeStore'
import { HexColorPicker } from 'react-colorful'
import { Brush, Type, Palette } from 'lucide-react'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'

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

const fontFamilies = [
  'Inter, system-ui, sans-serif',
  'Figtree, system-ui, sans-serif',
  'Roboto, sans-serif',
  'Open Sans, sans-serif',
  'Lato, sans-serif',
  'Montserrat, sans-serif',
  'Poppins, sans-serif',
  'Playfair Display, serif',
  'Merriweather, serif',
  'Georgia, serif',
  'JetBrains Mono, monospace',
  'Fira Code, monospace',
  'Courier New, monospace',
]

export function DesignSection() {
  const { theme, updateTypography } = useThemeStore()
  const typography = theme.typography

  return (
    <AccordionItem value="design">
      <AccordionTrigger className="text-sm font-medium">
        <div className="flex items-center gap-2">
          <Brush className="h-4 w-4" />
          Design
        </div>
      </AccordionTrigger>
      <AccordionContent className="pt-4">
        <Tabs defaultValue="colors" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="colors" className="flex items-center gap-1">
              <Palette className="h-3 w-3" />
              Colors
            </TabsTrigger>
            <TabsTrigger value="typography" className="flex items-center gap-1">
              <Type className="h-3 w-3" />
              Typography
            </TabsTrigger>
          </TabsList>

          {/* Colors Tab */}
          <TabsContent value="colors" className="space-y-4 mt-4">
            <div className="grid gap-4">
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-muted-foreground">Brand Colors</h4>
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
              </div>

              <Separator />

              <div className="space-y-3">
                <h4 className="text-sm font-medium text-muted-foreground">Base Colors</h4>
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
                  label="Card"
                  colorKey="card"
                  color={theme.colors.card}
                />
                <ColorPicker
                  label="Muted"
                  colorKey="muted"
                  color={theme.colors.muted}
                />
              </div>

              <Separator />

              <div className="space-y-3">
                <h4 className="text-sm font-medium text-muted-foreground">UI Colors</h4>
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
              </div>
            </div>
          </TabsContent>

          {/* Typography Tab */}
          <TabsContent value="typography" className="space-y-4 mt-4">
            {/* Font Family */}
            <div className="space-y-2">
              <Label className="text-sm">Font Family</Label>
              <Select
                value={typography.fontFamily}
                onValueChange={(value) => updateTypography({ fontFamily: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {fontFamilies.map((font) => (
                    <SelectItem key={font} value={font}>
                      <span style={{ fontFamily: font }}>{font.split(',')[0]}</span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Separator />

            {/* Font Sizes */}
            <div className="space-y-2">
              <Label className="text-sm">Font Sizes</Label>
              <div className="space-y-2">
                {Object.entries(typography.fontSize).map(([key, value]) => (
                  <div key={key} className="flex items-center gap-2">
                    <span className="w-12 text-xs text-muted-foreground">
                      {key}
                    </span>
                    <Input
                      value={value}
                      onChange={(e) =>
                        updateTypography({
                          fontSize: {
                            ...typography.fontSize,
                            [key]: e.target.value,
                          },
                        })
                      }
                      className="flex-1 text-xs"
                    />
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Font Weights */}
            <div className="space-y-2">
              <Label className="text-sm">Font Weights</Label>
              <div className="space-y-2">
                {Object.entries(typography.fontWeight).map(([key, value]) => (
                  <div key={key} className="flex items-center gap-2">
                    <span className="w-20 text-xs text-muted-foreground">
                      {key}
                    </span>
                    <Slider
                      value={[value]}
                      onValueChange={([v]) =>
                        updateTypography({
                          fontWeight: {
                            ...typography.fontWeight,
                            [key]: v,
                          },
                        })
                      }
                      min={100}
                      max={900}
                      step={100}
                      className="flex-1"
                    />
                    <span className="w-10 text-xs text-muted-foreground">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Line Heights */}
            <div className="space-y-2">
              <Label className="text-sm">Line Heights</Label>
              <div className="space-y-2">
                {Object.entries(typography.lineHeight).map(([key, value]) => (
                  <div key={key} className="flex items-center gap-2">
                    <span className="w-20 text-xs text-muted-foreground">
                      {key}
                    </span>
                    <Slider
                      value={[value]}
                      onValueChange={([v]) =>
                        updateTypography({
                          lineHeight: {
                            ...typography.lineHeight,
                            [key]: v,
                          },
                        })
                      }
                      min={1}
                      max={2}
                      step={0.05}
                      className="flex-1"
                    />
                    <span className="w-10 text-xs text-muted-foreground">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </AccordionContent>
    </AccordionItem>
  )
}