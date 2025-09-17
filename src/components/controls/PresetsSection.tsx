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
  // New Preset 1: Barn Red & Prussian Blue
  {
    name: 'Vintage Americana',
    colors: {
      primary: {
        name: 'Primary',
        value: '#780000',
        hsl: { h: 0, s: 100, l: 24 },
        rgb: { r: 120, g: 0, b: 0 },
      },
      secondary: {
        name: 'Secondary',
        value: '#003049',
        hsl: { h: 203, s: 100, l: 14 },
        rgb: { r: 0, g: 48, b: 73 },
      },
      accent: {
        name: 'Accent',
        value: '#669bbc',
        hsl: { h: 202, s: 37, l: 57 },
        rgb: { r: 102, g: 155, b: 188 },
      },
      background: {
        name: 'Background',
        value: '#0a0a0a',
        hsl: { h: 0, s: 0, l: 4 },
        rgb: { r: 10, g: 10, b: 10 },
      },
      foreground: {
        name: 'Foreground',
        value: '#fdf0d5',
        hsl: { h: 34, s: 90, l: 91 },
        rgb: { r: 253, g: 240, b: 213 },
      },
      muted: {
        name: 'Muted',
        value: '#1a1a1a',
        hsl: { h: 0, s: 0, l: 10 },
        rgb: { r: 26, g: 26, b: 26 },
      },
      card: {
        name: 'Card',
        value: '#141414',
        hsl: { h: 0, s: 0, l: 8 },
        rgb: { r: 20, g: 20, b: 20 },
      },
      destructive: {
        name: 'Destructive',
        value: '#c1121f',
        hsl: { h: 356, s: 82, l: 41 },
        rgb: { r: 193, g: 18, b: 31 },
      },
      border: {
        name: 'Border',
        value: '#2a2a2a',
        hsl: { h: 0, s: 0, l: 16 },
        rgb: { r: 42, g: 42, b: 42 },
      },
      input: {
        name: 'Input',
        value: '#2a2a2a',
        hsl: { h: 0, s: 0, l: 16 },
        rgb: { r: 42, g: 42, b: 42 },
      },
      ring: {
        name: 'Ring',
        value: '#669bbc',
        hsl: { h: 202, s: 37, l: 57 },
        rgb: { r: 102, g: 155, b: 188 },
      },
    },
  },
  // New Preset 2: Sky Blue & Orange
  {
    name: 'Ocean Sunset',
    colors: {
      primary: {
        name: 'Primary',
        value: '#8ecae6',
        hsl: { h: 199, s: 62, l: 72 },
        rgb: { r: 142, g: 202, b: 230 },
      },
      secondary: {
        name: 'Secondary',
        value: '#219ebc',
        hsl: { h: 193, s: 71, l: 44 },
        rgb: { r: 33, g: 158, b: 188 },
      },
      accent: {
        name: 'Accent',
        value: '#ffb703',
        hsl: { h: 43, s: 100, l: 51 },
        rgb: { r: 255, g: 183, b: 3 },
      },
      background: {
        name: 'Background',
        value: '#023047',
        hsl: { h: 198, s: 96, l: 14 },
        rgb: { r: 2, g: 48, b: 71 },
      },
      foreground: {
        name: 'Foreground',
        value: '#ffffff',
        hsl: { h: 0, s: 0, l: 100 },
        rgb: { r: 255, g: 255, b: 255 },
      },
      muted: {
        name: 'Muted',
        value: '#0a4a66',
        hsl: { h: 198, s: 82, l: 22 },
        rgb: { r: 10, g: 74, b: 102 },
      },
      card: {
        name: 'Card',
        value: '#033e5c',
        hsl: { h: 198, s: 94, l: 18 },
        rgb: { r: 3, g: 62, b: 92 },
      },
      destructive: {
        name: 'Destructive',
        value: '#fb8500',
        hsl: { h: 32, s: 100, l: 49 },
        rgb: { r: 251, g: 133, b: 0 },
      },
      border: {
        name: 'Border',
        value: '#0d5a7f',
        hsl: { h: 198, s: 80, l: 27 },
        rgb: { r: 13, g: 90, b: 127 },
      },
      input: {
        name: 'Input',
        value: '#0d5a7f',
        hsl: { h: 198, s: 80, l: 27 },
        rgb: { r: 13, g: 90, b: 127 },
      },
      ring: {
        name: 'Ring',
        value: '#ffb703',
        hsl: { h: 43, s: 100, l: 51 },
        rgb: { r: 255, g: 183, b: 3 },
      },
    },
  },
  // New Preset 3: Red Pantone & Berkeley Blue
  {
    name: 'Nautical Dream',
    colors: {
      primary: {
        name: 'Primary',
        value: '#1d3557',
        hsl: { h: 215, s: 48, l: 22 },
        rgb: { r: 29, g: 53, b: 87 },
      },
      secondary: {
        name: 'Secondary',
        value: '#457b9d',
        hsl: { h: 203, s: 38, l: 44 },
        rgb: { r: 69, g: 123, b: 157 },
      },
      accent: {
        name: 'Accent',
        value: '#e63946',
        hsl: { h: 356, s: 76, l: 56 },
        rgb: { r: 230, g: 57, b: 70 },
      },
      background: {
        name: 'Background',
        value: '#f1faee',
        hsl: { h: 86, s: 62, l: 95 },
        rgb: { r: 241, g: 250, b: 238 },
      },
      foreground: {
        name: 'Foreground',
        value: '#1d3557',
        hsl: { h: 215, s: 48, l: 22 },
        rgb: { r: 29, g: 53, b: 87 },
      },
      muted: {
        name: 'Muted',
        value: '#a8dadc',
        hsl: { h: 183, s: 42, l: 76 },
        rgb: { r: 168, g: 218, b: 220 },
      },
      card: {
        name: 'Card',
        value: '#ffffff',
        hsl: { h: 0, s: 0, l: 100 },
        rgb: { r: 255, g: 255, b: 255 },
      },
      destructive: {
        name: 'Destructive',
        value: '#e63946',
        hsl: { h: 356, s: 76, l: 56 },
        rgb: { r: 230, g: 57, b: 70 },
      },
      border: {
        name: 'Border',
        value: '#a8dadc',
        hsl: { h: 183, s: 42, l: 76 },
        rgb: { r: 168, g: 218, b: 220 },
      },
      input: {
        name: 'Input',
        value: '#a8dadc',
        hsl: { h: 183, s: 42, l: 76 },
        rgb: { r: 168, g: 218, b: 220 },
      },
      ring: {
        name: 'Ring',
        value: '#457b9d',
        hsl: { h: 203, s: 38, l: 44 },
        rgb: { r: 69, g: 123, b: 157 },
      },
    },
  },
  // New Preset 4: Prussian Blue & Fire Engine Red
  {
    name: 'Bold & Bright',
    colors: {
      primary: {
        name: 'Primary',
        value: '#003049',
        hsl: { h: 203, s: 100, l: 14 },
        rgb: { r: 0, g: 48, b: 73 },
      },
      secondary: {
        name: 'Secondary',
        value: '#f77f00',
        hsl: { h: 31, s: 100, l: 48 },
        rgb: { r: 247, g: 127, b: 0 },
      },
      accent: {
        name: 'Accent',
        value: '#fcbf49',
        hsl: { h: 40, s: 97, l: 64 },
        rgb: { r: 252, g: 191, b: 73 },
      },
      background: {
        name: 'Background',
        value: '#0a0a0a',
        hsl: { h: 0, s: 0, l: 4 },
        rgb: { r: 10, g: 10, b: 10 },
      },
      foreground: {
        name: 'Foreground',
        value: '#eae2b7',
        hsl: { h: 49, s: 60, l: 82 },
        rgb: { r: 234, g: 226, b: 183 },
      },
      muted: {
        name: 'Muted',
        value: '#1a1a1a',
        hsl: { h: 0, s: 0, l: 10 },
        rgb: { r: 26, g: 26, b: 26 },
      },
      card: {
        name: 'Card',
        value: '#141414',
        hsl: { h: 0, s: 0, l: 8 },
        rgb: { r: 20, g: 20, b: 20 },
      },
      destructive: {
        name: 'Destructive',
        value: '#d62828',
        hsl: { h: 0, s: 69, l: 49 },
        rgb: { r: 214, g: 40, b: 40 },
      },
      border: {
        name: 'Border',
        value: '#2a2a2a',
        hsl: { h: 0, s: 0, l: 16 },
        rgb: { r: 42, g: 42, b: 42 },
      },
      input: {
        name: 'Input',
        value: '#2a2a2a',
        hsl: { h: 0, s: 0, l: 16 },
        rgb: { r: 42, g: 42, b: 42 },
      },
      ring: {
        name: 'Ring',
        value: '#fcbf49',
        hsl: { h: 40, s: 97, l: 64 },
        rgb: { r: 252, g: 191, b: 73 },
      },
    },
  },
  // New Preset 5: Eggshell & Burnt Sienna
  {
    name: 'Autumn Comfort',
    colors: {
      primary: {
        name: 'Primary',
        value: '#3d405b',
        hsl: { h: 236, s: 20, l: 30 },
        rgb: { r: 61, g: 64, b: 91 },
      },
      secondary: {
        name: 'Secondary',
        value: '#81b29a',
        hsl: { h: 152, s: 30, l: 60 },
        rgb: { r: 129, g: 178, b: 154 },
      },
      accent: {
        name: 'Accent',
        value: '#e07a5f',
        hsl: { h: 12, s: 67, l: 62 },
        rgb: { r: 224, g: 122, b: 95 },
      },
      background: {
        name: 'Background',
        value: '#f4f1de',
        hsl: { h: 52, s: 52, l: 92 },
        rgb: { r: 244, g: 241, b: 222 },
      },
      foreground: {
        name: 'Foreground',
        value: '#3d405b',
        hsl: { h: 236, s: 20, l: 30 },
        rgb: { r: 61, g: 64, b: 91 },
      },
      muted: {
        name: 'Muted',
        value: '#f2cc8f',
        hsl: { h: 35, s: 75, l: 76 },
        rgb: { r: 242, g: 204, b: 143 },
      },
      card: {
        name: 'Card',
        value: '#ffffff',
        hsl: { h: 0, s: 0, l: 100 },
        rgb: { r: 255, g: 255, b: 255 },
      },
      destructive: {
        name: 'Destructive',
        value: '#e07a5f',
        hsl: { h: 12, s: 67, l: 62 },
        rgb: { r: 224, g: 122, b: 95 },
      },
      border: {
        name: 'Border',
        value: '#f2cc8f',
        hsl: { h: 35, s: 75, l: 76 },
        rgb: { r: 242, g: 204, b: 143 },
      },
      input: {
        name: 'Input',
        value: '#f2cc8f',
        hsl: { h: 35, s: 75, l: 76 },
        rgb: { r: 242, g: 204, b: 143 },
      },
      ring: {
        name: 'Ring',
        value: '#81b29a',
        hsl: { h: 152, s: 30, l: 60 },
        rgb: { r: 129, g: 178, b: 154 },
      },
    },
  },
  // New Preset 6: Floral White & Flame
  {
    name: 'Warm Earth',
    colors: {
      primary: {
        name: 'Primary',
        value: '#eb5e28',
        hsl: { h: 17, s: 82, l: 54 },
        rgb: { r: 235, g: 94, b: 40 },
      },
      secondary: {
        name: 'Secondary',
        value: '#403d39',
        hsl: { h: 34, s: 6, l: 23 },
        rgb: { r: 64, g: 61, b: 57 },
      },
      accent: {
        name: 'Accent',
        value: '#ccc5b9',
        hsl: { h: 39, s: 18, l: 76 },
        rgb: { r: 204, g: 197, b: 185 },
      },
      background: {
        name: 'Background',
        value: '#252422',
        hsl: { h: 30, s: 6, l: 14 },
        rgb: { r: 37, g: 36, b: 34 },
      },
      foreground: {
        name: 'Foreground',
        value: '#fffcf2',
        hsl: { h: 45, s: 100, l: 97 },
        rgb: { r: 255, g: 252, b: 242 },
      },
      muted: {
        name: 'Muted',
        value: '#403d39',
        hsl: { h: 34, s: 6, l: 23 },
        rgb: { r: 64, g: 61, b: 57 },
      },
      card: {
        name: 'Card',
        value: '#2a2927',
        hsl: { h: 30, s: 5, l: 16 },
        rgb: { r: 42, g: 41, b: 39 },
      },
      destructive: {
        name: 'Destructive',
        value: '#eb5e28',
        hsl: { h: 17, s: 82, l: 54 },
        rgb: { r: 235, g: 94, b: 40 },
      },
      border: {
        name: 'Border',
        value: '#403d39',
        hsl: { h: 34, s: 6, l: 23 },
        rgb: { r: 64, g: 61, b: 57 },
      },
      input: {
        name: 'Input',
        value: '#403d39',
        hsl: { h: 34, s: 6, l: 23 },
        rgb: { r: 64, g: 61, b: 57 },
      },
      ring: {
        name: 'Ring',
        value: '#eb5e28',
        hsl: { h: 17, s: 82, l: 54 },
        rgb: { r: 235, g: 94, b: 40 },
      },
    },
  },
  // New Preset 7: Bittersweet & Cerulean
  {
    name: 'Retro Pop',
    colors: {
      primary: {
        name: 'Primary',
        value: '#247ba0',
        hsl: { h: 199, s: 62, l: 38 },
        rgb: { r: 36, g: 123, b: 160 },
      },
      secondary: {
        name: 'Secondary',
        value: '#70c1b3',
        hsl: { h: 169, s: 42, l: 60 },
        rgb: { r: 112, g: 193, b: 179 },
      },
      accent: {
        name: 'Accent',
        value: '#f25f5c',
        hsl: { h: 1, s: 85, l: 65 },
        rgb: { r: 242, g: 95, b: 92 },
      },
      background: {
        name: 'Background',
        value: '#ffffff',
        hsl: { h: 0, s: 0, l: 100 },
        rgb: { r: 255, g: 255, b: 255 },
      },
      foreground: {
        name: 'Foreground',
        value: '#50514f',
        hsl: { h: 60, s: 1, l: 31 },
        rgb: { r: 80, g: 81, b: 79 },
      },
      muted: {
        name: 'Muted',
        value: '#ffe066',
        hsl: { h: 47, s: 100, l: 70 },
        rgb: { r: 255, g: 224, b: 102 },
      },
      card: {
        name: 'Card',
        value: '#ffffff',
        hsl: { h: 0, s: 0, l: 100 },
        rgb: { r: 255, g: 255, b: 255 },
      },
      destructive: {
        name: 'Destructive',
        value: '#f25f5c',
        hsl: { h: 1, s: 85, l: 65 },
        rgb: { r: 242, g: 95, b: 92 },
      },
      border: {
        name: 'Border',
        value: '#70c1b3',
        hsl: { h: 169, s: 42, l: 60 },
        rgb: { r: 112, g: 193, b: 179 },
      },
      input: {
        name: 'Input',
        value: '#70c1b3',
        hsl: { h: 169, s: 42, l: 60 },
        rgb: { r: 112, g: 193, b: 179 },
      },
      ring: {
        name: 'Ring',
        value: '#247ba0',
        hsl: { h: 199, s: 62, l: 38 },
        rgb: { r: 36, g: 123, b: 160 },
      },
    },
  },
  // New Preset 8: Jasmine & Space Cadet
  {
    name: 'Tropical Twilight',
    colors: {
      primary: {
        name: 'Primary',
        value: '#392f5a',
        hsl: { h: 259, s: 30, l: 27 },
        rgb: { r: 57, g: 47, b: 90 },
      },
      secondary: {
        name: 'Secondary',
        value: '#9dd9d2',
        hsl: { h: 172, s: 47, l: 73 },
        rgb: { r: 157, g: 217, b: 210 },
      },
      accent: {
        name: 'Accent',
        value: '#ff8811',
        hsl: { h: 33, s: 100, l: 53 },
        rgb: { r: 255, g: 136, b: 17 },
      },
      background: {
        name: 'Background',
        value: '#1a1625',
        hsl: { h: 259, s: 29, l: 12 },
        rgb: { r: 26, g: 22, b: 37 },
      },
      foreground: {
        name: 'Foreground',
        value: '#fff8f0',
        hsl: { h: 30, s: 100, l: 97 },
        rgb: { r: 255, g: 248, b: 240 },
      },
      muted: {
        name: 'Muted',
        value: '#f4d06f',
        hsl: { h: 44, s: 84, l: 69 },
        rgb: { r: 244, g: 208, b: 111 },
      },
      card: {
        name: 'Card',
        value: '#251f35',
        hsl: { h: 259, s: 27, l: 17 },
        rgb: { r: 37, g: 31, b: 53 },
      },
      destructive: {
        name: 'Destructive',
        value: '#ff8811',
        hsl: { h: 33, s: 100, l: 53 },
        rgb: { r: 255, g: 136, b: 17 },
      },
      border: {
        name: 'Border',
        value: '#392f5a',
        hsl: { h: 259, s: 30, l: 27 },
        rgb: { r: 57, g: 47, b: 90 },
      },
      input: {
        name: 'Input',
        value: '#392f5a',
        hsl: { h: 259, s: 30, l: 27 },
        rgb: { r: 57, g: 47, b: 90 },
      },
      ring: {
        name: 'Ring',
        value: '#9dd9d2',
        hsl: { h: 172, s: 47, l: 73 },
        rgb: { r: 157, g: 217, b: 210 },
      },
    },
  },
  // New Preset 9: Bright Pink & Midnight Green
  {
    name: 'Neon Ocean',
    colors: {
      primary: {
        name: 'Primary',
        value: '#118ab2',
        hsl: { h: 194, s: 83, l: 38 },
        rgb: { r: 17, g: 138, b: 178 },
      },
      secondary: {
        name: 'Secondary',
        value: '#06d6a0',
        hsl: { h: 164, s: 95, l: 43 },
        rgb: { r: 6, g: 214, b: 160 },
      },
      accent: {
        name: 'Accent',
        value: '#ffd166',
        hsl: { h: 44, s: 100, l: 70 },
        rgb: { r: 255, g: 209, b: 102 },
      },
      background: {
        name: 'Background',
        value: '#073b4c',
        hsl: { h: 194, s: 84, l: 16 },
        rgb: { r: 7, g: 59, b: 76 },
      },
      foreground: {
        name: 'Foreground',
        value: '#ffffff',
        hsl: { h: 0, s: 0, l: 100 },
        rgb: { r: 255, g: 255, b: 255 },
      },
      muted: {
        name: 'Muted',
        value: '#0a4a5e',
        hsl: { h: 194, s: 80, l: 20 },
        rgb: { r: 10, g: 74, b: 94 },
      },
      card: {
        name: 'Card',
        value: '#094253',
        hsl: { h: 194, s: 81, l: 18 },
        rgb: { r: 9, g: 66, b: 83 },
      },
      destructive: {
        name: 'Destructive',
        value: '#ef476f',
        hsl: { h: 346, s: 83, l: 61 },
        rgb: { r: 239, g: 71, b: 111 },
      },
      border: {
        name: 'Border',
        value: '#0a5a73',
        hsl: { h: 194, s: 82, l: 24 },
        rgb: { r: 10, g: 90, b: 115 },
      },
      input: {
        name: 'Input',
        value: '#0a5a73',
        hsl: { h: 194, s: 82, l: 24 },
        rgb: { r: 10, g: 90, b: 115 },
      },
      ring: {
        name: 'Ring',
        value: '#06d6a0',
        hsl: { h: 164, s: 95, l: 43 },
        rgb: { r: 6, g: 214, b: 160 },
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
                onLoad={() => {
                  // Apply preset colors while preserving current mode
                  const updatedTheme = {
                    ...theme,
                    ...preset,
                    mode: theme.mode // Keep current mode
                  } as Theme
                  loadPreset(updatedTheme)
                }}
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