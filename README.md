# AkuLagiBisnis - Company Profile Website

![AkuLagiBisnis Logo](https://via.placeholder.com/200x80/0ea5e9/ffffff?text=AkuLagiBisnis)

**AkuLagiBisnis** adalah platform SaaS bertenaga AI yang dirancang khusus untuk membantu UMKM Indonesia menjalankan bisnisnya dengan lebih efisien dan modern. Website company profile ini menampilkan semua fitur dan layanan yang kami tawarkan dengan desain minimalis dan animasi interaktif yang menarik.

## 🚀 Fitur Utama

### 🎨 Desain & UI
- **Minimalis Fancy**: Desain modern dengan warna dominan putih, biru pastel, dan abu muda
- **Animasi Interaktif**: Menggunakan AOS (Animate On Scroll) dan custom CSS animations
- **Responsive Design**: Mobile-first approach yang optimal di semua perangkat
- **Dark/Light Theme**: Dukungan tema gelap dan terang

### 🛠️ Teknologi
- **Vue 3**: Framework JavaScript modern dengan Composition API
- **TypeScript**: Type safety dan developer experience yang lebih baik
- **Vuetify 3**: Material Design components untuk Vue
- **TailwindCSS**: Utility-first CSS framework
- **Bun**: Runtime JavaScript yang cepat dan modern
- **Vite**: Build tool yang sangat cepat

### 📱 Halaman
- **Home**: Landing page dengan hero section, fitur overview, dan CTA
- **About**: Informasi tentang perusahaan, misi, dan visi
- **Features**: Detail fitur-fitur platform AkuLagiBisnis
- **Pricing**: Paket harga dengan FAQ interaktif
- **Contact**: Form kontak dengan validasi dan informasi kontak

### 🎯 Komponen Reusable
- **BaseButton**: Tombol dengan berbagai variant dan animasi
- **BaseCard**: Kartu dengan hover effects dan customizable styling
- **BaseModal**: Modal dengan smooth transitions
- **AppHeader**: Navigation header dengan mobile menu
- **AppFooter**: Footer dengan newsletter subscription

## 🏗️ Arsitektur Project

```
src/
├── components/           # Komponen reusable
│   ├── base/            # Base components (Button, Card, etc.)
│   └── layout/          # Layout components (Header, Footer)
├── pages/               # Halaman aplikasi
├── router/              # Vue Router configuration
├── styles/              # SCSS files
│   ├── main.scss        # Main stylesheet
│   ├── variables.scss   # SCSS variables
│   ├── components.scss  # Component styles
│   ├── animations.scss  # Animation definitions
│   └── settings.scss    # Vuetify settings
├── App.vue              # Root component
└── main.ts              # Application entry point
```

## 🚀 Quick Start

### Prerequisites
- **Bun** >= 1.0.0
- **Node.js** >= 18.0.0 (sebagai fallback)

### Installation

1. **Clone repository**
   ```bash
   git clone https://github.com/your-username/akulagibisnis-website.git
   cd akulagibisnis-website
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Start development server**
   ```bash
   bun run dev
   ```

4. **Open browser**
   ```
   http://localhost:3000
   ```

### Build untuk Production

```bash
# Build aplikasi
bun run build

# Preview build hasil
bun run preview
```

## 🎨 Customization

### Warna Theme
Edit file `src/styles/variables.scss` untuk mengubah palet warna:

```scss
// Primary colors (Biru)
$primary-500: #0ea5e9;
$primary-600: #0284c7;

// Secondary colors (Abu)
$secondary-500: #64748b;
$secondary-600: #475569;

// Accent colors (Kuning)
$accent-500: #eab308;
$accent-600: #ca8a04;
```

### Animasi
Tambahkan animasi custom di `src/styles/animations.scss`:

```scss
@keyframes customAnimation {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}

.animate-custom {
  animation: customAnimation 2s ease-in-out infinite;
}
```

### Komponen Baru
Buat komponen baru dengan struktur:

```vue
<template>
  <div class="my-component">
    <!-- Template content -->
  </div>
</template>

<script setup lang="ts">
// TypeScript logic
</script>

<style scoped>
/* Component-specific styles */
</style>
```

## 📦 Scripts

```bash
# Development
bun run dev          # Start dev server
bun run build        # Build for production
bun run preview      # Preview production build

# Code Quality
bun run lint         # Run ESLint
bun run type-check   # TypeScript type checking
```

## 🔧 Configuration Files

### TypeScript (`tsconfig.json`)
- Strict mode enabled
- Path aliases configured (`@/*` → `./src/*`)
- Vue SFC support

### ESLint (`eslint.config.js`)
- Vue 3 + TypeScript rules
- Consistent code formatting
- Import/export validation

### Vite (`vite.config.ts`)
- Vue plugin configuration
- Vuetify integration
- Path aliases
- SCSS preprocessing

### TailwindCSS (`tailwind.config.js`)
- Custom color palette
- Animation utilities
- Responsive breakpoints

## 🎯 Fitur Platform AkuLagiBisnis

### 🎤 Voice Command
- Pencatatan transaksi hands-free
- Speech-to-text dalam bahasa Indonesia
- Integrasi dengan sistem inventory

### 📱 QR Integration
- Pembayaran QRIS instant
- Menu digital interaktif
- Onboarding pelanggan cepat

### 🤖 AI Recommendations
- Prediksi harga jual optimal
- Analisis tren pelanggan
- Optimasi stok otomatis

### 📊 Smart Analytics
- Dashboard real-time
- Laporan keuangan detail
- Insights bisnis actionable

### 💬 AI Chatbot
- Customer service 24/7
- Multi-platform support
- Learning dari interaksi

## 🎨 Design System

### Typography
- **Display Font**: Poppins (Headings)
- **Body Font**: Inter (Body text)
- **Font Weights**: 300, 400, 500, 600, 700, 800

### Color Palette
- **Primary**: Blue (#0ea5e9)
- **Secondary**: Slate (#64748b)
- **Accent**: Yellow (#eab308)
- **Success**: Emerald (#10b981)
- **Warning**: Amber (#f59e0b)
- **Error**: Red (#ef4444)

### Spacing Scale
- **xs**: 0.25rem (4px)
- **sm**: 0.5rem (8px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 3rem (48px)

## 🚀 Deployment

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify
```bash
# Build command
bun run build

# Publish directory
dist
```

### Docker
```dockerfile
FROM oven/bun:1 as builder
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install
COPY . .
RUN bun run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Code Style
- Gunakan TypeScript untuk type safety
- Follow Vue 3 Composition API patterns
- Gunakan ESLint rules yang sudah dikonfigurasi
- Tulis komentar untuk logic yang kompleks

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- **Email**: halo@akulagibisnis.com
- **Phone**: +62 812-9525-4099
- **Website**: https://akulagibisnis.com
- **Documentation**: https://docs.akulagibisnis.com

## 🙏 Acknowledgments

- [Vue.js](https://vuejs.org/) - Progressive JavaScript Framework
- [Vuetify](https://vuetifyjs.com/) - Material Design Framework
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS Framework
- [Bun](https://bun.sh/) - Fast JavaScript Runtime
- [AOS](https://michalsnik.github.io/aos/) - Animate On Scroll Library

---

**Made with ❤️ for Indonesian SMEs**

*Transforming traditional businesses into digital powerhouses*
