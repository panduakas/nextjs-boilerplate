<template>
  <div class="single-page">
    <!-- Hero Section -->
    <section id="home" class="hero-section">
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
              Solusi Digital untuk
              <span class="typewriter-text">{{ currentText }}</span>
            </h1>
            
            <p
              class="hero-description"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Platform bisnis UMKM dengan teknologi AI yang praktis. 
              Dari voice command hingga analisis data, 
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
                @click="scrollToSection('features')"
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

    <!-- About Section -->
    <section id="about" class="about-section section-padding">
      <div class="about-background">
        <div class="about-gradient" />
        <div class="about-pattern" />
        <div class="floating-shapes">
          <div class="shape shape-1" />
          <div class="shape shape-2" />
          <div class="shape shape-3" />
          <div class="shape shape-4" />
        </div>
      </div>
      
      <div class="container mx-auto relative z-10">
        <div class="text-center mb-20">
          <div class="about-badge" data-aos="fade-up">
            <v-icon icon="mdi-heart" size="16" class="mr-2" />
            Bersama Membangun Masa Depan
          </div>
          <h2
            class="about-title"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Tentang
            <span class="text-gradient-primary">AkuLagiBisnis</span>
          </h2>
          <p
            class="about-subtitle"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Kami percaya setiap UMKM memiliki potensi untuk berkembang. 
            Dengan teknologi AI yang praktis dan mudah digunakan, kami hadir untuk membantu mengoptimalkan operasional bisnis Anda.
          </p>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <!-- Mission Card -->
          <div data-aos="fade-right" data-aos-delay="600">
            <div class="mission-card">
              <div class="mission-header">
                <div class="mission-icon">
                  <v-icon icon="mdi-rocket-launch" size="32" color="primary" />
                </div>
                <h3 class="mission-title">Misi Transformatif Kami</h3>
              </div>
              <p class="mission-description">
                Menyediakan solusi bisnis terpadu berbasis AI yang mudah digunakan oleh UMKM dari berbagai sektor, 
                tanpa memerlukan latar belakang teknis. Kami berkomitmen mendorong digitalisasi UMKM Indonesia 
                agar mampu bersaing di era ekonomi digital.
              </p>
              
              <div class="mission-features">
                <div class="feature-item">
                  <div class="feature-icon">
                    <v-icon icon="mdi-robot" color="success" size="20" />
                  </div>
                  <div class="feature-content">
                    <h4>Otomatisasi Proses Operasional</h4>
                    <p>Mengotomatisasi pencatatan, pembayaran, inventaris, dan komunikasi pelanggan melalui teknologi suara dan QR code</p>
                  </div>
                </div>
                
                <div class="feature-item">
                  <div class="feature-icon">
                    <v-icon icon="mdi-chart-line" color="warning" size="20" />
                  </div>
                  <div class="feature-content">
                    <h4>Analisis Data & Prediksi Cerdas</h4>
                    <p>Mendukung pengambilan keputusan bisnis melalui analisis data, prediksi harga, dan rekomendasi machine learning</p>
                  </div>
                </div>
                
                <div class="feature-item">
                  <div class="feature-icon">
                    <v-icon icon="mdi-account-heart" color="info" size="20" />
                  </div>
                  <div class="feature-content">
                    <h4>Digitalisasi Pengalaman Pelanggan</h4>
                    <p>Meningkatkan pengalaman pelanggan melalui QR menu, chatbot, dan auto-order yang cepat dan responsif</p>
                  </div>
                </div>
                
                <div class="feature-item">
                  <div class="feature-icon">
                    <v-icon icon="mdi-tune-variant" color="accent" size="20" />
                  </div>
                  <div class="feature-content">
                    <h4>Platform Fleksibel Multi-Sektor</h4>
                    <p>Dapat diadopsi oleh berbagai jenis usaha — dari warung sederhana hingga bisnis rental dan kuliner modern</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Vision Card -->
          <div data-aos="fade-left" data-aos-delay="800">
            <div class="vision-card">
              <div class="vision-glow" />
              <div class="vision-content">
                <div class="vision-icon">
                  <v-icon icon="mdi-telescope" size="48" class="text-white" />
                </div>
                <h3 class="vision-title">Visi AkuLagiBisnis</h3>
                <p class="vision-description">
                  Menjadi platform teknologi berbasis AI yang paling dipercaya untuk memberdayakan 
                  pelaku usaha kecil dan menengah dalam menjalankan, mengelola, dan mengembangkan 
                  bisnis secara cerdas, efisien, dan berkelanjutan.
                </p>
                
                <div class="vision-stats">
                  <div class="stat-item">
                    <div class="stat-number">∞</div>
                    <div class="stat-label">Potensi Tak Terbatas</div>
                  </div>
                  <div class="stat-item">
                    <div class="stat-number">100%</div>
                    <div class="stat-label">Komitmen Inovasi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Values Section -->
        <div class="values-section" data-aos="fade-up" data-aos-delay="1000">
          <h3 class="values-title">Nilai-Nilai yang Kami Junjung</h3>
          <div class="values-grid">
            <div class="value-card" data-aos="zoom-in" data-aos-delay="1200">
              <div class="value-icon">
                <v-icon icon="mdi-lightbulb" size="28" color="accent" />
              </div>
              <h4>Inovasi Berkelanjutan</h4>
              <p>Selalu mencari cara baru untuk memberikan solusi terbaik</p>
            </div>
            
            <div class="value-card" data-aos="zoom-in" data-aos-delay="1400">
              <div class="value-icon">
                <v-icon icon="mdi-account-group" size="28" color="success" />
              </div>
              <h4>Kemitraan Sejati</h4>
              <p>Membangun hubungan jangka panjang yang saling menguntungkan</p>
            </div>
            
            <div class="value-card" data-aos="zoom-in" data-aos-delay="1600">
              <div class="value-icon">
                <v-icon icon="mdi-star" size="28" color="warning" />
              </div>
              <h4>Keunggulan Kualitas</h4>
              <p>Memberikan standar tertinggi dalam setiap produk dan layanan</p>
            </div>
            
            <div class="value-card" data-aos="zoom-in" data-aos-delay="1800">
              <div class="value-icon">
                <v-icon icon="mdi-earth" size="28" color="info" />
              </div>
              <h4>Dampak Positif</h4>
              <p>Berkontribusi nyata untuk kemajuan ekonomi Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features-section section-padding">
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
            Teknologi AI yang praktis dan dirancang khusus untuk kebutuhan UMKM Indonesia
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
          </BaseCard>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section section-padding">
      <div class="container mx-auto">
        <div class="text-center mb-12">
          <h2
            class="section-title"
            data-aos="fade-up"
          >
            Hubungi Kami
          </h2>
          <p
            class="section-description"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Kami siap membantu Anda mengembangkan bisnis
          </p>
        </div>

        <div class="max-w-md mx-auto" data-aos="fade-up" data-aos-delay="400">
          <BaseCard variant="elevated" class="contact-card">
            <div class="space-y-6">
              <div class="contact-item">
                <div class="contact-icon">
                  <v-icon icon="mdi-email" color="primary" size="24" />
                </div>
                <div>
                  <h3 class="contact-label">Email</h3>
                  <a href="mailto:halo@akulagibisnis.com" class="contact-value">
                    halo@akulagibisnis.com
                  </a>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">
                  <v-icon icon="mdi-phone" color="primary" size="24" />
                </div>
                <div>
                  <h3 class="contact-label">Telepon</h3>
                  <a href="tel:081295254099" class="contact-value">
                    081295254099
                  </a>
                </div>
              </div>
            </div>
          </BaseCard>
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
        
        <div class="aspect-video bg-secondary-100 dark:bg-secondary-800 rounded-lg flex items-center justify-center">
          <div class="text-center">
            <v-icon
              icon="mdi-play-circle-outline"
              size="64"
              class="text-primary-500 mb-4"
            />
            <p class="text-secondary-600 dark:text-secondary-400">Video demo akan segera tersedia</p>
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
  'Bisnis Modern',
  'Masa Depan',
  'Transformasi Digital'
]

const heroStats = [
  { value: '99.9%', label: 'Uptime Sistem' },
  { value: '24/7', label: 'Dukungan AI' },
  { value: 'AI', label: 'Teknologi Terdepan' },
  { value: 'Cloud', label: 'Infrastruktur Modern' }
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
    title: 'Dashboard Manajemen',
    description: 'Kelola operasional bisnis Anda dengan dashboard yang intuitif dan mudah digunakan.',
    icon: 'mdi-view-dashboard',
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

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
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
.single-page {
  overflow-x: hidden;
}

.section-padding {
  @apply py-20;
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

.dark .hero-gradient {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #374151 100%);
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

.dark .hero-badge {
  @apply bg-primary-900/20 text-primary-400 border-primary-800;
}

.hero-title {
  @apply text-5xl lg:text-6xl font-bold leading-tight;
  @apply text-secondary-900;
}

.dark .hero-title {
  @apply text-white;
}

.text-gradient-primary {
  background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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

.dark .hero-description {
  @apply text-secondary-300;
}

.hero-actions {
  @apply flex flex-col sm:flex-row gap-4;
}

.hero-stats {
  @apply grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8;
  @apply border-t border-secondary-200;
}

.dark .hero-stats {
  @apply border-secondary-700;
}

.stat-item {
  @apply text-center;
}

.stat-number {
  @apply text-2xl font-bold text-primary-600;
}

.dark .stat-number {
  @apply text-primary-400;
}

.stat-label {
  @apply text-sm text-secondary-500 mt-1;
}

.dark .stat-label {
  @apply text-secondary-400;
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

.dark .hero-card {
  @apply bg-secondary-800 border-secondary-700;
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

.dark .hero-card h4 {
  @apply text-white;
}

.hero-card p {
  @apply text-sm text-secondary-600;
}

.dark .hero-card p {
  @apply text-secondary-300;
}

/* About Section */
.about-section {
  @apply bg-white relative;
}

.dark .about-section {
  @apply bg-secondary-900;
}

.about-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}

.about-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #fafafa 0%, #f8fafc 50%, #f1f5f9 100%);
}

.dark .about-gradient {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
}

.about-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
                    radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.05) 0%, transparent 50%);
}

.floating-shapes {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
  animation: float 8s ease-in-out infinite;
}

.shape-1 {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  top: 10%;
  left: 5%;
  animation-delay: 0s;
}

.shape-2 {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #10b981, #06b6d4);
  top: 20%;
  right: 10%;
  animation-delay: 2s;
}

.shape-3 {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #f59e0b, #ef4444);
  bottom: 30%;
  left: 10%;
  animation-delay: 4s;
}

.shape-4 {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  bottom: 10%;
  right: 5%;
  animation-delay: 6s;
}

.about-badge {
  @apply inline-flex items-center px-6 py-3 rounded-full;
  @apply bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 text-sm font-semibold;
  @apply border border-primary-200 shadow-lg;
}

.dark .about-badge {
  @apply bg-gradient-to-r from-primary-900/30 to-accent-900/30 text-primary-400 border-primary-800;
}

.about-title {
  @apply text-5xl lg:text-6xl font-bold leading-tight mb-6;
  @apply text-secondary-900;
}

.dark .about-title {
  @apply text-white;
}

.about-subtitle {
  @apply text-xl lg:text-2xl text-secondary-600 leading-relaxed max-w-4xl mx-auto;
  @apply font-medium;
}

.dark .about-subtitle {
  @apply text-secondary-300;
}

/* Mission Card */
.mission-card {
  @apply bg-white rounded-3xl p-8 shadow-2xl border border-secondary-100;
  @apply transform transition-all duration-500 hover:scale-105 hover:shadow-2xl;
}

.dark .mission-card {
  @apply bg-secondary-800 border-secondary-700;
}

.mission-header {
  @apply flex items-center space-x-4 mb-6;
}

.mission-icon {
  @apply w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl;
  @apply flex items-center justify-center shadow-lg;
}

.mission-title {
  @apply text-2xl font-bold text-secondary-900;
}

.dark .mission-title {
  @apply text-white;
}

.mission-description {
  @apply text-lg text-secondary-600 leading-relaxed mb-8;
}

.dark .mission-description {
  @apply text-secondary-300;
}

.mission-features {
  @apply space-y-6;
}

.mission-features .feature-item {
  @apply flex items-start space-x-4 p-4 rounded-xl;
  @apply bg-secondary-50 border border-secondary-100;
  @apply transition-all duration-300 hover:bg-secondary-100;
}

.dark .mission-features .feature-item {
  @apply bg-secondary-700/50 border-secondary-600 hover:bg-secondary-700;
}

.mission-features .feature-icon {
  @apply w-10 h-10 rounded-lg flex items-center justify-center;
  @apply bg-white shadow-md;
}

.dark .mission-features .feature-icon {
  @apply bg-secondary-600;
}

.feature-content h4 {
  @apply text-lg font-semibold text-secondary-900 mb-2;
}

.dark .feature-content h4 {
  @apply text-white;
}

.feature-content p {
  @apply text-secondary-600 text-sm leading-relaxed;
}

.dark .feature-content p {
  @apply text-secondary-300;
}

/* Vision Card */
.vision-card {
  @apply relative rounded-3xl overflow-hidden;
  @apply transform transition-all duration-500 hover:scale-105;
}

.vision-glow {
  @apply absolute inset-0 bg-gradient-to-br from-primary-500 via-accent-500 to-purple-600;
  @apply opacity-90;
}

.vision-content {
  @apply relative z-10 p-8 text-white;
}

.vision-icon {
  @apply w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6;
  @apply backdrop-blur-sm;
}

.vision-title {
  @apply text-3xl font-bold mb-6;
}

.vision-description {
  @apply text-lg leading-relaxed mb-8 text-white/90;
}

.vision-stats {
  @apply grid grid-cols-2 gap-6;
}

.vision-stats .stat-item {
  @apply text-center;
}

.vision-stats .stat-number {
  @apply text-3xl font-bold text-white mb-2;
}

.vision-stats .stat-label {
  @apply text-sm text-white/80 font-medium;
}

/* Values Section */
.values-section {
  @apply text-center;
}

.values-title {
  @apply text-3xl font-bold text-secondary-900 mb-12;
}

.dark .values-title {
  @apply text-white;
}

.values-grid {
  @apply grid md:grid-cols-2 lg:grid-cols-4 gap-8;
}

.value-card {
  @apply bg-white rounded-2xl p-6 shadow-lg border border-secondary-100;
  @apply transform transition-all duration-300 hover:scale-105 hover:shadow-xl;
  @apply text-center;
}

.dark .value-card {
  @apply bg-secondary-800 border-secondary-700;
}

.value-icon {
  @apply w-16 h-16 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl;
  @apply flex items-center justify-center mx-auto mb-4;
}

.dark .value-icon {
  @apply from-secondary-700 to-secondary-600;
}

.value-card h4 {
  @apply text-xl font-bold text-secondary-900 mb-3;
}

.dark .value-card h4 {
  @apply text-white;
}

.value-card p {
  @apply text-secondary-600 leading-relaxed;
}

.dark .value-card p {
  @apply text-secondary-300;
}

.features-section {
  @apply bg-secondary-50;
}

.dark .features-section {
  @apply bg-secondary-800;
}

.contact-section {
  @apply bg-secondary-50;
}

.dark .contact-section {
  @apply bg-secondary-800;
}

.section-title {
  @apply text-4xl font-bold text-secondary-900 mb-4;
}

.dark .section-title {
  @apply text-white;
}

.section-description {
  @apply text-xl text-secondary-600 max-w-3xl mx-auto;
}

.dark .section-description {
  @apply text-secondary-300;
}

/* Features */
.feature-card {
  @apply h-full;
}

.feature-icon {
  @apply w-16 h-16 bg-primary-50 rounded-xl;
  @apply flex items-center justify-center mb-4;
}

.dark .feature-icon {
  @apply bg-primary-900/20;
}

.feature-title {
  @apply text-xl font-semibold text-secondary-900 mb-3;
}

.dark .feature-title {
  @apply text-white;
}

.feature-description {
  @apply text-secondary-600 leading-relaxed;
}

.dark .feature-description {
  @apply text-secondary-300;
}

/* Contact */
.contact-card {
  @apply p-8;
}

.contact-item {
  @apply flex items-center space-x-4;
}

.contact-icon {
  @apply w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center;
}

.dark .contact-icon {
  @apply bg-primary-900/20;
}

.contact-label {
  @apply text-lg font-semibold text-secondary-900 mb-2;
}

.dark .contact-label {
  @apply text-white;
}

.contact-value {
  @apply text-primary-600 hover:text-primary-700 transition-colors;
}

.dark .contact-value {
  @apply text-primary-400 hover:text-primary-300;
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
}
</style>
