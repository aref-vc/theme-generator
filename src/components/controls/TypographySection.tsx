import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { useThemeStore } from '@/store/themeStore'
import { Type } from 'lucide-react'

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

export function TypographySection() {
  const { theme, updateTypography } = useThemeStore()
  const typography = theme.typography

  return (
    <AccordionItem value="typography">
      <AccordionTrigger className="text-sm font-medium">
        <div className="flex items-center gap-2">
          <Type className="h-4 w-4" />
          Typography
        </div>
      </AccordionTrigger>
      <AccordionContent className="space-y-4 pt-4">
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
      </AccordionContent>
    </AccordionItem>
  )
}