<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="hero-gradient" />
        <div class="hero-pattern" />
        <div class="floating-elements">
          <div
            v-for="i in 6"
            :key="i"
            class="floating-element"
            :style="{ animationDelay: `${i * 0.5}s` }"
          />
        </div>
      </div>
      
      <div class="container mx-auto relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          <!-- Hero Content -->
          <div
            class="hero-content"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div class="hero-badge" data-aos="fade-up" data-aos-delay="200">
              <v-icon icon="mdi-sparkles" size="16" class="mr-2" />
              Platform SaaS Terdepan untuk UMKM
            </div>
            
            <h1
              class="hero-title"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <span class="text-gradient-primary">AkuLagiBisnis</span><br>
              Revolusi Digital untuk
              <span class="typewriter-text">{{ currentText }}</span>
            </h1>
            
            <p
              class="hero-description"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Transformasi bisnis UMKM dengan teknologi AI terdepan. 
              Dari voice command hingga prediksi harga otomatis, 
              semua dalam satu platform yang mudah digunakan.
            </p>
            
            <div
              class="hero-actions"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <BaseButton
                variant="primary"
                size="large"
                elevated
                animation="glow"
                prepend-icon="mdi-rocket-launch"
                @click="scrollToFeatures"
              >
                Mulai Gratis Sekarang
              </BaseButton>
              
              <BaseButton
                variant="outline"
                size="large"
                prepend-icon="mdi-play-circle"
                @click="openDemoModal"
              >
                Lihat Demo
              </BaseButton>
            </div>
            
            <div
              class="hero-stats"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <div
                v-for="stat in heroStats"
                :key="stat.label"
                class="stat-item"
              >
                <div class="stat-number">
                  {{ stat.value }}
                </div>
                <div class="stat-label">
                  {{ stat.label }}
                </div>
              </div>
            </div>
          </div>
          
          <!-- Hero Visual -->
          <div
            class="hero-visual"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div class="hero-image-container">
              <div class="hero-image-bg" />
              <div class="hero-cards">
                <div
                  v-for="(card, index) in heroCards"
                  :key="card.title"
                  class="hero-card"
                  :class="`hero-card-${index + 1}`"
                  :data-aos="`zoom-in`"
                  :data-aos-delay="600 + index * 200"
                >
                  <v-icon
                    :icon="card.icon"
                    :color="card.color"
                    size="24"
                  />
                  <h4>{{ card.title }}</h4>
                  <p>{{ card.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Overview -->
    <section class="features-overview section-padding" id="features">
      <div class="container mx-auto">
        <div class="text-center mb-16">
          <h2
            class="section-title"
            data-aos="fade-up"
          >
            Fitur Unggulan untuk
            <span class="text-gradient-primary">Bisnis Modern</span>
          </h2>
          <p
            class="section-description"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Teknologi AI terdepan yang dirancang khusus untuk kebutuhan UMKM Indonesia
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BaseCard
            v-for="(feature, index) in features"
            :key="feature.title"
            variant="elevated"
            hover
            :animation="index % 2 === 0 ? 'fade' : 'scale'"
            :data-aos="`fade-up`"
            :data-aos-delay="index * 100"
            class="feature-card"
          >
            <template #header>
              <div class="feature-icon">
                <v-icon
                  :icon="feature.icon"
                  :color="feature.color"
                  size="32"
                />
              </div>
              <h3 class="feature-title">{{ feature.title }}</h3>
            </template>
            
            <p class="feature-description">
              {{ feature.description }}
            </p>
            
            <template #actions>
              <BaseButton
                variant="ghost"
                size="small"
                append-icon="mdi-arrow-right"
              >
                Pelajari Lebih
              </BaseButton>
            </template>
          </BaseCard>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-background">
        <div class="cta-gradient" />
      </div>
      
      <div class="container mx-auto relative z-10">
        <div class="text-center">
          <h2
            class="cta-title"
            data-aos="fade-up"
          >
            Siap Mengembangkan Bisnis Anda?
          </h2>
          <p
            class="cta-description"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Bergabunglah dengan ribuan UMKM yang telah merasakan transformasi digital
          </p>
          
          <div
            class="cta-actions"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <BaseButton
              variant="primary"
              size="large"
              elevated
              animation="heartbeat"
              prepend-icon="mdi-account-plus"
            >
              Daftar Sekarang
            </BaseButton>
            
            <BaseButton
              variant="secondary"
              size="large"
              prepend-icon="mdi-phone"
            >
              Konsultasi Gratis
            </BaseButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Demo Modal -->
    <v-dialog
      v-model="demoModalOpen"
      max-width="800"
      class="demo-modal"
    >
      <BaseCard variant="elevated" :padding="false">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-semibold">Demo AkuLagiBisnis</h3>
            <BaseButton
              variant="ghost"
              size="small"
              @click="closeDemoModal"
            >
              <v-icon icon="mdi-close" />
            </BaseButton>
          </div>
        </template>
        
        <div class="aspect-video bg-secondary-100 rounded-lg flex items-center justify-center">
          <div class="text-center">
            <v-icon
              icon="mdi-play-circle-outline"
              size="64"
              class="text-primary-500 mb-4"
            />
            <p class="text-secondary-600">Video demo akan segera tersedia</p>
          </div>
        </div>
      </BaseCard>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseCard from '@/components/base/BaseCard.vue'

const demoModalOpen = ref(false)
const currentText = ref('')
const textIndex = ref(0)

const typewriterTexts = [
  'UMKM Indonesia',
  'Warung Modern',
  'Bisnis Digital',
  'Masa Depan'
]

const heroStats = [
  { value: '1000+', label: 'UMKM Terdaftar' },
  { value: '50+', label: 'Kota di Indonesia' },
  { value: '99.9%', label: 'Uptime Sistem' },
  { value: '24/7', label: 'Dukungan AI' }
]

const heroCards = [
  {
    title: 'Voice Command',
    description: 'Pencatatan otomatis dengan suara',
    icon: 'mdi-microphone',
    color: 'primary'
  },
  {
    title: 'QR Integration',
    description: 'Transaksi mudah dengan QR',
    icon: 'mdi-qrcode-scan',
    color: 'accent'
  },
  {
    title: 'AI Analytics',
    description: 'Prediksi bisnis cerdas',
    icon: 'mdi-chart-line',
    color: 'success'
  }
]

const features = [
  {
    title: 'Voice Command',
    description: 'Catat transaksi dan kelola inventaris hanya dengan suara. Teknologi speech-to-text terdepan untuk kemudahan maksimal.',
    icon: 'mdi-microphone',
    color: 'primary'
  },
  {
    title: 'QR-Based Solutions',
    description: 'Sistem pembayaran dan onboarding berbasis QR code. Mudah, cepat, dan aman untuk semua jenis bisnis.',
    icon: 'mdi-qrcode-scan',
    color: 'accent'
  },
  {
    title: 'AI Recommendations',
    description: 'Rekomendasi cerdas untuk stok, harga, dan strategi promosi berdasarkan data dan tren pasar.',
    icon: 'mdi-brain',
    color: 'success'
  },
  {
    title: 'Smart Analytics',
    description: 'Dashboard analitik komprehensif dengan insights bisnis yang actionable dan prediksi akurat.',
    icon: 'mdi-chart-line',
    color: 'info'
  },
  {
    title: 'AI Chatbot',
    description: 'Customer service otomatis 24/7 dengan AI yang memahami konteks dan memberikan solusi tepat.',
    icon: 'mdi-robot',
    color: 'warning'
  },
  {
    title: 'Multi-Platform',
    description: 'Satu platform untuk berbagai jenis bisnis: warung, rental, F&B, dan banyak lagi.',
    icon: 'mdi-apps',
    color: 'error'
  }
]

const typewriterEffect = () => {
  const text = typewriterTexts[textIndex.value]
  let charIndex = 0
  
  const typeInterval = setInterval(() => {
    currentText.value = text.slice(0, charIndex + 1)
    charIndex++
    
    if (charIndex === text.length) {
      clearInterval(typeInterval)
      setTimeout(() => {
        const deleteInterval = setInterval(() => {
          currentText.value = text.slice(0, charIndex - 1)
          charIndex--
          
          if (charIndex === 0) {
            clearInterval(deleteInterval)
            textIndex.value = (textIndex.value + 1) % typewriterTexts.length
            setTimeout(typewriterEffect, 500)
          }
        }, 50)
      }, 2000)
    }
  }, 100)
}

const scrollToFeatures = () => {
  const element = document.getElementById('features')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const openDemoModal = () => {
  demoModalOpen.value = true
}

const closeDemoModal = () => {
  demoModalOpen.value = false
}

onMounted(() => {
  typewriterEffect()
})

onUnmounted(() => {
  // Cleanup if needed
})
</script>

<style scoped>
.home-page {
  overflow-x: hidden;
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}

.hero-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #fefce8 100%);
}

.hero-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(circle at 25% 25%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 75% 75%, rgba(234, 179, 8, 0.1) 0%, transparent 50%);
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.floating-element {
  position: absolute;
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #0ea5e9, #eab308);
  border-radius: 50%;
  opacity: 0.3;
  animation: float 6s ease-in-out infinite;
}

.floating-element:nth-child(1) { top: 20%; left: 10%; }
.floating-element:nth-child(2) { top: 60%; left: 20%; }
.floating-element:nth-child(3) { top: 30%; right: 15%; }
.floating-element:nth-child(4) { top: 70%; right: 25%; }
.floating-element:nth-child(5) { top: 40%; left: 50%; }
.floating-element:nth-child(6) { top: 80%; right: 40%; }

.hero-content {
  @apply space-y-8;
}

.hero-badge {
  @apply inline-flex items-center px-4 py-2 rounded-full;
  @apply bg-primary-100 text-primary-700 text-sm font-medium;
  @apply border border-primary-200;
}

.hero-title {
  @apply text-5xl lg:text-6xl font-bold leading-tight;
  @apply text-secondary-900;
}

.typewriter-text {
  background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
}

.typewriter-text::after {
  content: '|';
  animation: blink 1s infinite;
  color: #0ea5e9;
}

.hero-description {
  @apply text-xl text-secondary-600 leading-relaxed max-w-2xl;
}

.hero-actions {
  @apply flex flex-col sm:flex-row gap-4;
}

.hero-stats {
  @apply grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8;
  @apply border-t border-secondary-200;
}

.stat-item {
  @apply text-center;
}

.stat-number {
  @apply text-2xl font-bold text-primary-600;
}

.stat-label {
  @apply text-sm text-secondary-500 mt-1;
}

/* Hero Visual */
.hero-visual {
  @apply relative;
}

.hero-image-container {
  @apply relative;
}

.hero-image-bg {
  @apply absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500;
  @apply rounded-3xl opacity-10 transform rotate-6;
}

.hero-cards {
  @apply relative grid gap-4;
}

.hero-card {
  @apply bg-white p-6 rounded-xl shadow-lg;
  @apply border border-secondary-100;
  @apply transition-all duration-300;
}

.hero-card:hover {
  @apply shadow-xl transform -translate-y-2;
}

.hero-card-1 {
  @apply transform translate-x-4;
}

.hero-card-2 {
  @apply transform -translate-x-4 translate-y-8;
}

.hero-card-3 {
  @apply transform translate-x-8 translate-y-4;
}

.hero-card h4 {
  @apply font-semibold text-secondary-900 mt-3 mb-2;
}

.hero-card p {
  @apply text-sm text-secondary-600;
}

/* Features Section */
.features-overview {
  @apply bg-white;
}

.section-title {
  @apply text-4xl font-bold text-secondary-900 mb-4;
}

.section-description {
  @apply text-xl text-secondary-600 max-w-3xl mx-auto;
}

.feature-card {
  @apply h-full;
}

.feature-icon {
  @apply w-16 h-16 bg-primary-50 rounded-xl;
  @apply flex items-center justify-center mb-4;
}

.feature-title {
  @apply text-xl font-semibold text-secondary-900 mb-3;
}

.feature-description {
  @apply text-secondary-600 leading-relaxed;
}

/* CTA Section */
.cta-section {
  @apply relative py-20;
}

.cta-background {
  @apply absolute inset-0;
}

.cta-gradient {
  @apply absolute inset-0;
  background: linear-gradient(135deg, #0ea5e9 0%, #eab308 100%);
}

.cta-title {
  @apply text-4xl font-bold text-white mb-4;
}

.cta-description {
  @apply text-xl text-white/90 mb-8 max-w-2xl mx-auto;
}

.cta-actions {
  @apply flex flex-col sm:flex-row gap-4 justify-center;
}

/* Animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    @apply text-3xl;
  }
  
  .hero-description {
    @apply text-lg;
  }
  
  .section-title {
    @apply text-3xl;
  }
  
  .cta-title {
    @apply text-3xl;
  }
}
</style>
