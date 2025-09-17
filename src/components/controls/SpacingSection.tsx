import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { useThemeStore } from '@/store/themeStore'
import { Space } from 'lucide-react'

export function SpacingSection() {
  const { theme, updateSpacing } = useThemeStore()
  const spacing = theme.spacing

  return (
    <AccordionItem value="spacing">
      <AccordionTrigger className="text-sm font-medium">
        <div className="flex items-center gap-2">
          <Space className="h-4 w-4" />
          Spacing
        </div>
      </AccordionTrigger>
      <AccordionContent className="space-y-4 pt-4">
        {/* Base Unit */}
        <div className="space-y-2">
          <Label className="text-sm">Base Unit (px)</Label>
          <div className="flex items-center gap-4">
            <Slider
              value={[spacing.base]}
              onValueChange={([value]) => updateSpacing({ base: value })}
              min={2}
              max={8}
              step={1}
              className="flex-1"
            />
            <span className="w-12 text-sm font-mono">{spacing.base}px</span>
          </div>
        </div>

        {/* Scale Multipliers */}
        <div className="space-y-2">
          <Label className="text-sm">Scale Multipliers</Label>
          <div className="space-y-3">
            {Object.entries(spacing.scale).map(([key, value]) => (
              <div key={key} className="flex items-center gap-2">
                <span className="w-12 text-xs text-muted-foreground">
                  {key}
                </span>
                <Slider
                  value={[value]}
                  onValueChange={([v]) =>
                    updateSpacing({
                      scale: {
                        ...spacing.scale,
                        [key]: v,
                      },
                    })
                  }
                  min={0.25}
                  max={16}
                  step={0.25}
                  className="flex-1"
                />
                <span className="w-16 text-xs font-mono text-muted-foreground">
                  {(value * spacing.base).toFixed(1)}px
                </span>
              </div>
            ))}
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}