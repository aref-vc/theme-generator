// Test script to validate preset color contrast ratios
// Ensures readability in both light and dark modes

// Helper function to convert hex to RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// Calculate relative luminance
function getLuminance(rgb) {
  const sRGB = [rgb.r / 255, rgb.g / 255, rgb.b / 255];
  const linearRGB = sRGB.map(val => {
    if (val <= 0.03928) {
      return val / 12.92;
    }
    return Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * linearRGB[0] + 0.7152 * linearRGB[1] + 0.0722 * linearRGB[2];
}

// Calculate contrast ratio between two colors
function getContrastRatio(color1, color2) {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  if (!rgb1 || !rgb2) return 0;

  const lum1 = getLuminance(rgb1);
  const lum2 = getLuminance(rgb2);

  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);

  return (lighter + 0.05) / (darker + 0.05);
}

// WCAG compliance levels
const WCAG_AA_NORMAL = 4.5;
const WCAG_AA_LARGE = 3;
const WCAG_AAA_NORMAL = 7;
const WCAG_AAA_LARGE = 4.5;

// Test results
const testResults = {
  passed: [],
  warnings: [],
  failed: []
};

// All presets to test
const presets = [
  {
    name: 'Dark Purple',
    mode: 'dark',
    primary: '#8D5EB7',
    background: '#0A0A0B',
    foreground: '#FAFAFA'
  },
  {
    name: 'Ocean Blue',
    mode: 'dark',
    primary: '#3B82F6',
    background: '#0F172A',
    foreground: '#F8FAFC'
  },
  {
    name: 'Light Minimal',
    mode: 'light',
    primary: '#18181B',
    background: '#FFFFFF',
    foreground: '#18181B'
  },
  {
    name: 'Sunset Glow',
    mode: 'dark',
    primary: '#F97316',
    background: '#1A0F0A',
    foreground: '#FEF3E2'
  },
  {
    name: 'Vintage Americana',
    mode: 'light',
    primary: '#8B4513',
    background: '#FFF8E7',
    foreground: '#2C1810'
  },
  {
    name: 'Ocean Sunset',
    mode: 'light',
    primary: '#FF6B6B',
    background: '#FFF5F5',
    foreground: '#1A1A2E'
  },
  {
    name: 'Nautical Dream',
    mode: 'light',
    primary: '#1E3A8A',
    background: '#F0F9FF',
    foreground: '#0C4A6E'
  },
  {
    name: 'Bold & Bright',
    mode: 'light',
    primary: '#DC2626',
    background: '#FAFAFA',
    foreground: '#18181B'
  },
  {
    name: 'Autumn Comfort',
    mode: 'light',
    primary: '#D97706',
    background: '#FFFBF0',
    foreground: '#451A03'
  },
  {
    name: 'Warm Earth',
    mode: 'light',
    primary: '#92400E',
    background: '#FEF6E7',
    foreground: '#451A03'
  },
  {
    name: 'Retro Pop',
    mode: 'light',
    primary: '#E11D48',
    background: '#FAFAFA',
    foreground: '#18181B'
  },
  {
    name: 'Tropical Twilight',
    mode: 'dark',
    primary: '#10B981',
    background: '#0A0F0B',
    foreground: '#F0FDF4'
  },
  {
    name: 'Neon Ocean',
    mode: 'dark',
    primary: '#00D9FF',
    background: '#0A0F1E',
    foreground: '#E0F7FF'
  }
];

console.log('\n🎨 THEME GENERATOR PRESET VALIDATION\n');
console.log('=' .repeat(60));

// Test each preset
presets.forEach(preset => {
  console.log(`\n📋 Testing: ${preset.name} (${preset.mode} mode)`);
  console.log('-'.repeat(40));

  // Test primary on background
  const primaryBgContrast = getContrastRatio(preset.primary, preset.background);
  const primaryFgContrast = getContrastRatio(preset.primary, preset.foreground);
  const fgBgContrast = getContrastRatio(preset.foreground, preset.background);

  // Check foreground/background contrast (most important)
  console.log(`Text/Background: ${fgBgContrast.toFixed(2)}:1`);
  if (fgBgContrast >= WCAG_AAA_NORMAL) {
    console.log('  ✅ AAA compliant');
    testResults.passed.push(`${preset.name} - Text/Background`);
  } else if (fgBgContrast >= WCAG_AA_NORMAL) {
    console.log('  ✅ AA compliant');
    testResults.passed.push(`${preset.name} - Text/Background`);
  } else if (fgBgContrast >= WCAG_AA_LARGE) {
    console.log('  ⚠️  AA compliant for large text only');
    testResults.warnings.push(`${preset.name} - Text/Background (large text only)`);
  } else {
    console.log('  ❌ FAIL - Poor contrast');
    testResults.failed.push(`${preset.name} - Text/Background`);
  }

  // Check primary/background contrast
  console.log(`Primary/Background: ${primaryBgContrast.toFixed(2)}:1`);
  if (primaryBgContrast >= WCAG_AA_NORMAL) {
    console.log('  ✅ Good for text');
    testResults.passed.push(`${preset.name} - Primary/Background`);
  } else if (primaryBgContrast >= WCAG_AA_LARGE) {
    console.log('  ⚠️  OK for large text/UI elements');
    testResults.warnings.push(`${preset.name} - Primary/Background`);
  } else {
    console.log('  ⚠️  Low contrast - use for decorative only');
    testResults.warnings.push(`${preset.name} - Primary/Background (decorative)`);
  }

  // Mode-specific validation
  if (preset.mode === 'dark') {
    // Dark mode should have dark backgrounds
    const bgRgb = hexToRgb(preset.background);
    const bgLuminance = getLuminance(bgRgb);
    if (bgLuminance > 0.2) {
      console.log('  ⚠️  Background may be too light for dark mode');
      testResults.warnings.push(`${preset.name} - Dark mode background`);
    } else {
      console.log('  ✅ Background appropriate for dark mode');
    }
  } else {
    // Light mode should have light backgrounds
    const bgRgb = hexToRgb(preset.background);
    const bgLuminance = getLuminance(bgRgb);
    if (bgLuminance < 0.8) {
      console.log('  ⚠️  Background may be too dark for light mode');
      testResults.warnings.push(`${preset.name} - Light mode background`);
    } else {
      console.log('  ✅ Background appropriate for light mode');
    }
  }
});

// Summary
console.log('\n' + '='.repeat(60));
console.log('📊 VALIDATION SUMMARY\n');
console.log(`✅ Passed: ${testResults.passed.length} tests`);
console.log(`⚠️  Warnings: ${testResults.warnings.length} tests`);
console.log(`❌ Failed: ${testResults.failed.length} tests`);

if (testResults.failed.length > 0) {
  console.log('\n❌ CRITICAL FAILURES:');
  testResults.failed.forEach(test => console.log(`  - ${test}`));
}

if (testResults.warnings.length > 0) {
  console.log('\n⚠️  WARNINGS:');
  testResults.warnings.slice(0, 5).forEach(test => console.log(`  - ${test}`));
  if (testResults.warnings.length > 5) {
    console.log(`  ... and ${testResults.warnings.length - 5} more`);
  }
}

console.log('\n✨ Overall Assessment:');
if (testResults.failed.length === 0) {
  console.log('All presets have acceptable contrast ratios!');
  console.log('Theme switching between light/dark modes should work well.');
} else {
  console.log('Some presets need adjustment for better accessibility.');
}

console.log('\n');