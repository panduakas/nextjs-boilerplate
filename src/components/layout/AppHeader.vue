<template>
  <v-app-bar
    :class="headerClasses"
    :elevation="scrolled ? 4 : 0"
    fixed
    app
  >
    <div class="container mx-auto flex items-center justify-between">
      <!-- Logo -->
      <router-link
        to="/"
        class="flex items-center space-x-3 hover:opacity-80 transition-opacity"
      >
        <div class="logo-container">
          <div class="logo-icon">
            <v-icon
              icon="mdi-rocket-launch"
              size="32"
              color="primary"
            />
          </div>
        </div>
        <div class="logo-text">
          <h1 class="text-2xl font-bold text-gradient-primary">
            AkuLagiBisnis
          </h1>
          <p class="text-xs text-secondary-500 -mt-1">
            AI-Powered SaaS
          </p>
        </div>
      </router-link>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center space-x-8">
        <a
          v-for="item in navigationItems"
          :key="item.name"
          :href="item.path"
          class="nav-link"
          @click="scrollToSection(item.path)"
        >
          {{ item.name }}
        </a>
      </nav>

      <!-- Desktop Actions -->
      <div class="hidden lg:flex items-center space-x-4">
        <BaseButton
          variant="ghost"
          size="small"
          @click="toggleTheme"
        >
          <v-icon
            :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
            size="small"
          />
        </BaseButton>
        
        <BaseButton
          variant="outline"
          size="small"
          @click="scrollToSection('#contact')"
        >
          Hubungi Kami
        </BaseButton>
        
        <BaseButton
          variant="primary"
          size="small"
          elevated
          animation="glow"
        >
          Mulai Gratis
        </BaseButton>
      </div>

      <!-- Mobile Menu Button -->
      <BaseButton
        variant="ghost"
        size="small"
        class="lg:hidden"
        @click="toggleMobileMenu"
      >
        <v-icon
          :icon="mobileMenuOpen ? 'mdi-close' : 'mdi-menu'"
          size="24"
        />
      </BaseButton>
    </div>

    <!-- Mobile Navigation -->
    <transition name="mobile-menu">
      <div
        v-if="mobileMenuOpen"
        class="mobile-menu"
      >
        <div class="mobile-menu-content">
          <nav class="flex flex-col space-y-4">
            <a
              v-for="item in navigationItems"
              :key="item.name"
              :href="item.path"
              class="mobile-nav-link"
              @click="scrollToSection(item.path); closeMobileMenu()"
            >
              {{ item.name }}
            </a>
          </nav>
          
          <div class="flex flex-col space-y-3 mt-6">
            <BaseButton
              variant="outline"
              block
              @click="scrollToSection('#contact'); closeMobileMenu()"
            >
              Hubungi Kami
            </BaseButton>
            
            <BaseButton
              variant="primary"
              block
              elevated
              @click="closeMobileMenu"
            >
              Mulai Gratis
            </BaseButton>
          </div>
        </div>
      </div>
    </transition>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useTheme } from 'vuetify'
import BaseButton from '@/components/base/BaseButton.vue'

const theme = useTheme()
const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const isDark = computed(() => theme.global.name.value === 'dark')

const navigationItems = [
  { name: 'Beranda', path: '#home' },
  { name: 'Tentang', path: '#about' },
  { name: 'Fitur', path: '#features' },
  { name: 'Kontak', path: '#contact' }
]

const headerClasses = computed(() => [
  'app-header',
  'backdrop-blur-md',
  'transition-all',
  'duration-300',
  {
    'bg-white/90 border-b border-secondary-100': scrolled.value,
    'bg-transparent': !scrolled.value
  }
])

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const toggleTheme = () => {
  const newTheme = isDark.value ? 'light' : 'dark'
  theme.global.name.value = newTheme
  localStorage.setItem('theme', newTheme)
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const scrollToSection = (sectionId: string) => {
  const element = document.querySelector(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.app-header {
  z-index: 1000;
}

.logo-container {
  position: relative;
}

.logo-icon {
  position: relative;
  z-index: 1;
}

.logo-icon::before {
  content: '';
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  background: linear-gradient(135deg, #0ea5e9, #eab308);
  border-radius: 50%;
  opacity: 0.2;
  animation: pulse 2s infinite;
}

.nav-link {
  @apply text-secondary-700 font-medium transition-all duration-300;
  @apply hover:text-primary-600 relative;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, #0ea5e9, #eab308);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link-active::after {
  width: 100%;
}

.nav-link-active {
  @apply text-primary-600;
}

.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 999;
}

.mobile-menu-content {
  @apply container mx-auto p-6;
}

.mobile-nav-link {
  @apply text-secondary-700 font-medium py-3 px-4 rounded-lg;
  @apply transition-all duration-300;
  @apply hover:bg-primary-50 hover:text-primary-600;
}

.mobile-nav-link-active {
  @apply bg-primary-50 text-primary-600;
}

/* Mobile menu transitions */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.4;
  }
}

/* Dark theme styles */
.theme--dark .mobile-menu {
  background: rgba(30, 41, 59, 0.95);
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

.theme--dark .nav-link {
  @apply text-secondary-300;
}

.theme--dark .nav-link:hover,
.theme--dark .nav-link-active {
  @apply text-primary-400;
}

.theme--dark .mobile-nav-link {
  @apply text-secondary-300;
}

.theme--dark .mobile-nav-link:hover,
.theme--dark .mobile-nav-link-active {
  @apply bg-primary-900/20 text-primary-400;
}
</style>
