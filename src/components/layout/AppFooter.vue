<template>
  <v-footer class="app-footer">
    <div class="container mx-auto">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- Company Info -->
        <div class="footer-section">
          <div class="flex items-center space-x-3 mb-4">
            <div class="logo-icon">
              <v-icon
                icon="mdi-rocket-launch"
                size="28"
                color="primary"
              />
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">
                AkuLagiBisnis
              </h3>
              <p class="text-xs text-secondary-300 -mt-1">
                AI-Powered SaaS
              </p>
            </div>
          </div>
          <p class="text-secondary-300 text-sm leading-relaxed mb-4">
            Platform SaaS bertenaga AI untuk membantu UMKM menjalankan bisnisnya dengan lebih efisien dan modern.
          </p>
          <div class="flex space-x-3">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              class="social-link"
              :aria-label="social.name"
            >
              <v-icon
                :icon="social.icon"
                size="20"
              />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-section">
          <h4 class="footer-title">
            Navigasi
          </h4>
          <ul class="footer-links">
            <li v-for="link in navigationLinks" :key="link.name">
              <router-link
                :to="link.path"
                class="footer-link"
              >
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Products -->
        <div class="footer-section">
          <h4 class="footer-title">
            Produk
          </h4>
          <ul class="footer-links">
            <li v-for="product in productLinks" :key="product.name">
              <a
                :href="product.url"
                class="footer-link"
              >
                {{ product.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="footer-section">
          <h4 class="footer-title">
            Kontak
          </h4>
          <div class="space-y-3">
            <div class="flex items-start space-x-3">
              <v-icon
                icon="mdi-map-marker"
                size="16"
                class="text-primary-400 mt-1"
              />
              <p class="text-secondary-300 text-sm">
                Jakarta, Indonesia
              </p>
            </div>
            <div class="flex items-center space-x-3">
              <v-icon
                icon="mdi-email"
                size="16"
                class="text-primary-400"
              />
              <a
                href="mailto:halo@akulagibisnis.com"
                class="footer-link text-sm"
              >
                halo@akulagibisnis.com
              </a>
            </div>
            <div class="flex items-center space-x-3">
              <v-icon
                icon="mdi-phone"
                size="16"
                class="text-primary-400"
              />
              <a
                href="tel:+6281234567890"
                class="footer-link text-sm"
              >
                +62 812-9525-4099
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Newsletter Subscription -->
      <div class="newsletter-section">
        <div class="text-center mb-6">
          <h3 class="text-xl font-semibold text-white mb-2">
            Dapatkan Update Terbaru
          </h3>
          <p class="text-secondary-300 text-sm">
            Berlangganan newsletter kami untuk mendapatkan tips bisnis dan update produk terbaru.
          </p>
        </div>
        <form
          class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          @submit.prevent="subscribeNewsletter"
        >
          <input
            v-model="email"
            type="email"
            placeholder="Masukkan email Anda"
            class="newsletter-input"
            required
          >
          <BaseButton
            type="submit"
            variant="primary"
            :loading="subscribing"
            class="whitespace-nowrap"
          >
            Berlangganan
          </BaseButton>
        </form>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-secondary-400 text-sm">
            © {{ currentYear }} AkuLagiBisnis. Semua hak dilindungi.
          </p>
          <div class="flex space-x-6">
            <a
              v-for="legal in legalLinks"
              :key="legal.name"
              :href="legal.url"
              class="footer-link text-sm"
            >
              {{ legal.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'

const email = ref('')
const subscribing = ref(false)

const currentYear = computed(() => new Date().getFullYear())

const socialLinks = [
  { name: 'Facebook', icon: 'mdi-facebook', url: '#' },
  { name: 'Twitter', icon: 'mdi-twitter', url: '#' },
  { name: 'Instagram', icon: 'mdi-instagram', url: '#' },
  { name: 'LinkedIn', icon: 'mdi-linkedin', url: '#' },
  { name: 'YouTube', icon: 'mdi-youtube', url: '#' }
]

const navigationLinks = [
  { name: 'Beranda', path: '/' },
  { name: 'Tentang Kami', path: '/about' },
  { name: 'Fitur', path: '/features' },
  { name: 'Harga', path: '/pricing' },
  { name: 'Kontak', path: '/contact' }
]

const productLinks = [
  { name: 'Warung Digital', url: '#' },
  { name: 'Rental Manager', url: '#' },
  { name: 'F&B Solution', url: '#' },
  { name: 'AI Assistant', url: '#' },
  { name: 'Analytics Dashboard', url: '#' }
]

const legalLinks = [
  { name: 'Kebijakan Privasi', url: '#' },
  { name: 'Syarat & Ketentuan', url: '#' },
  { name: 'Kebijakan Cookie', url: '#' }
]

const subscribeNewsletter = async () => {
  if (!email.value) return
  
  subscribing.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Show success message (you can implement toast notification here)
    console.log('Newsletter subscription successful:', email.value)
    email.value = ''
  } catch (error) {
    console.error('Newsletter subscription failed:', error)
  } finally {
    subscribing.value = false
  }
}
</script>

<style scoped>
.app-footer {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%) !important;
  padding: 4rem 0 2rem !important;
  margin-top: 4rem;
}

.footer-section {
  @apply space-y-4;
}

.footer-title {
  @apply text-lg font-semibold text-white mb-4;
  position: relative;
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 30px;
  height: 2px;
  background: linear-gradient(135deg, #0ea5e9, #eab308);
}

.footer-links {
  @apply space-y-2;
}

.footer-link {
  @apply text-secondary-300 hover:text-primary-400 transition-colors duration-300;
  @apply text-sm leading-relaxed;
}

.social-link {
  @apply w-10 h-10 bg-secondary-800 hover:bg-primary-600;
  @apply rounded-full flex items-center justify-center;
  @apply text-secondary-300 hover:text-white;
  @apply transition-all duration-300 transform hover:scale-110;
}

.newsletter-section {
  @apply border-t border-secondary-700 pt-8 mb-8;
}

.newsletter-input {
  @apply flex-1 px-4 py-3 rounded-lg;
  @apply bg-secondary-800 border border-secondary-600;
  @apply text-white placeholder-secondary-400;
  @apply focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent;
  @apply transition-all duration-300;
}

.newsletter-input:hover {
  @apply border-secondary-500;
}

.footer-bottom {
  @apply border-t border-secondary-700 pt-6;
}

.logo-icon {
  position: relative;
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

@keyframes pulse {
  0%, 100% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.4;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .app-footer {
    padding: 3rem 0 1.5rem !important;
  }
  
  .footer-section {
    text-align: center;
  }
  
  .footer-title::after {
    left: 50%;
    transform: translateX(-50%);
  }
}

/* Dark theme compatibility */
.theme--dark .newsletter-input {
  @apply bg-secondary-900 border-secondary-700;
}

.theme--dark .newsletter-input:hover {
  @apply border-secondary-600;
}
</style>
