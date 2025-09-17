import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { useThemeStore, type Theme } from '@/store/themeStore'
import { Layers, Save, Trash2, Check } from 'lucide-react'
import { useState } from 'react'
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'

const defaultPresets: Partial<Theme>[] = [
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
  {
    name: 'Sunset Glow',
    mode: 'dark',
    colors: {
      primary: {
        name: 'Primary',
        value: '#F97316',
        hsl: { h: 25, s: 95, l: 53 },
        rgb: { r: 249, g: 115, b: 22 },
      },
      secondary: {
        name: 'Secondary',
        value: '#EC4899',
        hsl: { h: 330, s: 82, l: 60 },
        rgb: { r: 236, g: 72, b: 153 },
      },
      accent: {
        name: 'Accent',
        value: '#8B5CF6',
        hsl: { h: 258, s: 90, l: 66 },
        rgb: { r: 139, g: 92, b: 246 },
      },
      background: {
        name: 'Background',
        value: '#1C1917',
        hsl: { h: 20, s: 15, l: 10 },
        rgb: { r: 28, g: 25, b: 23 },
      },
      foreground: {
        name: 'Foreground',
        value: '#FEF3C7',
        hsl: { h: 45, s: 94, l: 88 },
        rgb: { r: 254, g: 243, b: 199 },
      },
      muted: {
        name: 'Muted',
        value: '#292524',
        hsl: { h: 20, s: 10, l: 15 },
        rgb: { r: 41, g: 37, b: 36 },
      },
      card: {
        name: 'Card',
        value: '#292524',
        hsl: { h: 20, s: 10, l: 15 },
        rgb: { r: 41, g: 37, b: 36 },
      },
      destructive: {
        name: 'Destructive',
        value: '#F87171',
        hsl: { h: 0, s: 90, l: 70 },
        rgb: { r: 248, g: 113, b: 113 },
      },
      border: {
        name: 'Border',
        value: '#451A03',
        hsl: { h: 20, s: 91, l: 14 },
        rgb: { r: 69, g: 26, b: 3 },
      },
      input: {
        name: 'Input',
        value: '#451A03',
        hsl: { h: 20, s: 91, l: 14 },
        rgb: { r: 69, g: 26, b: 3 },
      },
      ring: {
        name: 'Ring',
        value: '#F97316',
        hsl: { h: 25, s: 95, l: 53 },
        rgb: { r: 249, g: 115, b: 22 },
      },
    },
  },
]

interface PresetButtonProps {
  preset: Partial<Theme>
  onLoad: () => void
  onDelete?: () => void
  isCustom?: boolean
  isActive?: boolean
}

function PresetButton({ preset, onLoad, onDelete, isCustom, isActive }: PresetButtonProps) {
  const colors = preset.colors!

  return (
    <div className="relative group">
      <Button
        variant={isActive ? "secondary" : "outline"}
        size="sm"
        className="w-full h-auto flex flex-col gap-2 p-3 relative overflow-hidden"
        onClick={onLoad}
      >
        {/* Color Preview Grid */}
        <div className="flex gap-1 mb-1">
          <div className="grid grid-cols-2 gap-0.5">
            <div
              className="w-3 h-3 rounded-sm border border-border/50"
              style={{ backgroundColor: colors.primary?.value }}
            />
            <div
              className="w-3 h-3 rounded-sm border border-border/50"
              style={{ backgroundColor: colors.secondary?.value }}
            />
            <div
              className="w-3 h-3 rounded-sm border border-border/50"
              style={{ backgroundColor: colors.accent?.value }}
            />
            <div
              className="w-3 h-3 rounded-sm border border-border/50"
              style={{ backgroundColor: colors.background?.value }}
            />
          </div>
        </div>

        {/* Preset Name */}
        <span className="text-xs font-medium">{preset.name}</span>

        {/* Active Indicator */}
        {isActive && (
          <Check className="absolute top-1 right-1 h-3 w-3 text-primary" />
        )}
      </Button>

      {/* Delete button for custom presets */}
      {isCustom && onDelete && (
        <Button
          variant="destructive"
          size="icon"
          className="absolute -top-1 -right-1 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={(e) => {
            e.stopPropagation()
            onDelete()
          }}
        >
          <Trash2 className="h-3 w-3" />
        </Button>
      )}
    </div>
  )
}

export function PresetsSection() {
  const { theme, presets, loadPreset, saveAsPreset } = useThemeStore()
  const [presetName, setPresetName] = useState('')
  // const [isDialogOpen, setIsDialogOpen] = useState(false)


  const handleSavePreset = () => {
    if (presetName.trim()) {
      saveAsPreset(presetName.trim())
      setPresetName('')
      // setIsDialogOpen(false)
    }
  }

  // Check if current theme matches a preset
  const isPresetActive = (preset: Partial<Theme>) => {
    return (
      preset.colors?.primary?.value === theme.colors.primary.value &&
      preset.colors?.secondary?.value === theme.colors.secondary.value &&
      preset.colors?.accent?.value === theme.colors.accent.value &&
      preset.colors?.background?.value === theme.colors.background.value
    )
  }

  return (
    <AccordionItem value="presets">
      <AccordionTrigger className="text-sm font-medium">
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4" />
          Presets
        </div>
      </AccordionTrigger>
      <AccordionContent className="space-y-4 pt-4">
        {/* Default Presets */}
        <div className="space-y-2">
          <Label className="text-xs text-muted-foreground">Built-in Presets</Label>
          <div className="grid grid-cols-2 gap-2">
            {defaultPresets.map((preset) => (
              <PresetButton
                key={preset.name}
                preset={preset}
                onLoad={() => loadPreset({ ...theme, ...preset } as Theme)}
                isActive={isPresetActive(preset)}
              />
            ))}
          </div>
        </div>

        {/* Custom Presets */}
        {presets.length > 0 && (
          <div className="space-y-2">
            <Label className="text-xs text-muted-foreground">Your Presets</Label>
            <div className="grid grid-cols-2 gap-2">
              {presets.map((preset) => (
                <PresetButton
                  key={preset.name}
                  preset={preset}
                  onLoad={() => loadPreset(preset)}
                  onDelete={() => {
                    if (confirm(`Delete preset "${preset.name}"?`)) {
                      // We need to add this method to the store
                      const updatedPresets = presets.filter(p => p.name !== preset.name)
                      useThemeStore.setState({ presets: updatedPresets })
                    }
                  }}
                  isCustom
                  isActive={isPresetActive(preset)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Save Current Theme */}
        <div className="pt-4 border-t">
          <Button
            variant="secondary"
            size="sm"
            className="w-full"
            onClick={() => {
              const name = prompt('Enter a name for your theme preset:')
              if (name && name.trim()) {
                setPresetName(name.trim())
                handleSavePreset()
              }
            }}
          >
            <Save className="mr-2 h-4 w-4" />
            Save Current Theme
          </Button>
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}