import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import router from './router'
import App from './App.vue'

// Styles
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import './styles/main.scss'

// Detect system theme preference
const getSystemTheme = () => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return 'light'
}

// Get stored theme or use system preference
const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme')
    if (stored && (stored === 'light' || stored === 'dark')) {
      return stored
    }
  }
  return getSystemTheme()
}

// Vuetify configuration
const vuetify = createVuetify({
  theme: {
    defaultTheme: getInitialTheme(),
    themes: {
      light: {
        colors: {
          primary: '#0ea5e9',
          secondary: '#64748b',
          accent: '#eab308',
          error: '#ef4444',
          warning: '#f59e0b',
          info: '#3b82f6',
          success: '#10b981',
          surface: '#ffffff',
          background: '#f8fafc',
        },
      },
      dark: {
        colors: {
          primary: '#38bdf8',
          secondary: '#94a3b8',
          accent: '#fde047',
          error: '#f87171',
          warning: '#fbbf24',
          info: '#60a5fa',
          success: '#34d399',
          surface: '#1e293b',
          background: '#0f172a',
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

// Create app
const app = createApp(App)

// Use plugins
app.use(createPinia())
app.use(router)
app.use(vuetify)

// Listen for system theme changes
if (typeof window !== 'undefined' && window.matchMedia) {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', (e) => {
    // Only auto-switch if no manual preference is stored
    if (!localStorage.getItem('theme')) {
      vuetify.theme.global.name.value = e.matches ? 'dark' : 'light'
    }
  })
}

// Mount app
app.mount('#app')
