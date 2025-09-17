import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useThemeStore } from '@/store/themeStore'
import { Sparkles } from 'lucide-react'

export function EffectsSection() {
  const { theme, updateEffects } = useThemeStore()
  const effects = theme.effects

  return (
    <AccordionItem value="effects">
      <AccordionTrigger className="text-sm font-medium">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4" />
          Effects
        </div>
      </AccordionTrigger>
      <AccordionContent className="space-y-4 pt-4">
        {/* Border Radius */}
        <div className="space-y-2">
          <Label className="text-sm">Border Radius</Label>
          <div className="space-y-2">
            {Object.entries(effects.borderRadius).map(([key, value]) => (
              <div key={key} className="flex items-center gap-2">
                <span className="w-12 text-xs text-muted-foreground">
                  {key}
                </span>
                <input
                  type="text"
                  value={value}
                  onChange={(e) =>
                    updateEffects({
                      borderRadius: {
                        ...effects.borderRadius,
                        [key]: e.target.value,
                      },
                    })
                  }
                  className="flex-1 rounded-md border border-input bg-background px-3 py-1 text-xs"
                />
                <div
                  className="h-6 w-6 border-2 border-foreground/20 bg-primary/20"
                  style={{ borderRadius: value }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Shadows */}
        <div className="space-y-2">
          <Label className="text-sm">Shadows</Label>
          <div className="space-y-2">
            {Object.entries(effects.shadows).map(([key, value]) => (
              <div key={key} className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-12 text-xs text-muted-foreground">
                    {key}
                  </span>
                  <Select
                    value={key}
                    onValueChange={(newKey) => {
                      if (newKey !== key) {
                        const newShadows = { ...effects.shadows }
                        delete newShadows[key as keyof typeof effects.shadows]
                        updateEffects({
                          shadows: {
                            ...newShadows,
                            [newKey]: value,
                          },
                        })
                      }
                    }}
                  >
                    <SelectTrigger className="h-7 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="sm">Small</SelectItem>
                      <SelectItem value="md">Medium</SelectItem>
                      <SelectItem value="lg">Large</SelectItem>
                      <SelectItem value="xl">Extra Large</SelectItem>
                      <SelectItem value="2xl">2X Large</SelectItem>
                      <SelectItem value="inner">Inner</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div
                  className="ml-14 h-8 w-full max-w-[200px] rounded-md bg-card"
                  style={{ boxShadow: value }}
                />
              </div>
            ))}
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}