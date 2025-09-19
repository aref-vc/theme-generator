# Modern Theme Generator 🎨

A powerful, real-time theme customization tool for modern web applications. Design, preview, and export beautiful themes with support for colors, typography, spacing, and visual effects.

![Version](https://img.shields.io/badge/version-3.0.0-blue)
![React](https://img.shields.io/badge/React-18-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6)
![License](https://img.shields.io/badge/license-MIT-green)

![Modern Theme Generator Preview](./public/images/theme-generator-preview.png)

## ✨ Features

### 🎨 Complete Theme Control
- **13 Professional Color Presets** - Carefully curated color palettes including Vintage Americana, Ocean Sunset, Neon Ocean, and more
- **Real-time Preview** - See changes instantly across 50+ UI components
- **Dark/Light Mode** - Seamless theme mode switching with intelligent color adjustments
- **Undo/Redo System** - Full history tracking for all changes

### 🛠️ Customization Options

#### Colors
- Primary, Secondary, Accent colors
- Background and Foreground colors
- Card, Muted, Border colors
- Destructive, Input, Ring colors
- HSL color system with RGB conversion
- Visual color picker with hex input

#### Typography
- 13 font families (Sans-serif, Serif, Monospace)
- 9 font size scales (xs to 5xl)
- 5 font weights (light to bold)
- 3 line height options
- Live typography preview

#### Spacing
- Base spacing unit control
- 10 spacing scales (xs to 5xl)
- Responsive spacing system
- Visual spacing demonstrations

#### Effects
- 8 border radius options (none to full)
- 7 shadow depths (none to 2xl + inner)
- Blur effects control
- Transition timing adjustments

### 📤 Export Formats
- **CSS Variables** - Modern CSS custom properties
- **Tailwind Config** - Ready-to-use Tailwind configuration
- **ShadCN Theme** - Compatible with shadcn/ui components
- **JSON** - Complete theme data structure
- **DaisyUI** - DaisyUI theme format

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/aref-vc/theme-generator.git

# Navigate to project
cd theme-generator

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3027`

## 📦 Installation

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup
```bash
# Install dependencies
npm install

# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Usage

1. **Choose a Preset** - Start with one of 13 professional color palettes
2. **Customize Colors** - Fine-tune using the color picker or hex values
3. **Adjust Typography** - Select fonts, sizes, and weights
4. **Configure Spacing** - Set your spacing scale
5. **Add Effects** - Apply shadows, radius, and blur
6. **Preview Live** - See changes across all components instantly
7. **Export Theme** - Download in your preferred format

## 🏗️ Architecture

### Tech Stack
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS
- **Zustand** - State management
- **Radix UI** - Headless components
- **react-colorful** - Color picker

### Project Structure
```
theme-generator/
├── src/
│   ├── components/
│   │   ├── controls/       # Theme control panels
│   │   ├── preview/        # Preview components
│   │   └── ui/             # UI components
│   ├── store/              # Zustand store
│   ├── lib/                # Utilities
│   └── types/              # TypeScript types
├── public/                 # Static assets
└── package.json           # Dependencies
```

## 🎨 Available Presets

1. **Default** - Clean, modern palette
2. **Vintage Americana** - Warm, nostalgic tones
3. **Ocean Sunset** - Coastal twilight colors
4. **Nautical Dream** - Maritime-inspired blues
5. **Bold & Bright** - Vibrant, energetic palette
6. **Autumn Comfort** - Cozy fall colors
7. **Modern Dark** - Sleek dark theme
8. **Forest** - Natural green tones
9. **Warm Earth** - Earthy, grounded palette
10. **Retro Pop** - Fun, retro-inspired colors
11. **Tropical Twilight** - Exotic sunset hues
12. **Neon Ocean** - Electric ocean colors
13. **Sunset** - Warm gradient tones

## 🔧 Configuration

### Environment Variables
```env
VITE_PORT=3027  # Development port
```

### Build Configuration
The project uses Vite for building. Configuration can be modified in `vite.config.ts`.

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for component architecture
- [Tailwind CSS](https://tailwindcss.com/) for utility classes
- [Radix UI](https://www.radix-ui.com/) for accessible components
- [Zustand](https://zustand-demo.pmnd.rs/) for state management

## 📞 Support

For support, please open an issue in the GitHub repository or contact the maintainers.

## 🚢 Deployment

### Vercel
```bash
npm run build
vercel deploy
```

### Netlify
```bash
npm run build
netlify deploy --dir=dist
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3027
CMD ["npm", "run", "preview"]
```

## 🔄 Version History

- **v3.0.0** - Added 9 new presets, fixed dynamic theming
- **v2.0.0** - Unified design controls, enhanced preview
- **v1.0.0** - Initial release with core features

---

Built with ❤️ using React and TypeScript