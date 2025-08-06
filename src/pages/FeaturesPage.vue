<template>
  <div class="features-page">
    <div class="container mx-auto py-20">
      <div class="text-center mb-16">
        <h1
          class="text-4xl font-bold text-secondary-900 mb-4"
          data-aos="fade-up"
        >
          Fitur <span class="text-gradient-primary">Lengkap</span> untuk Bisnis Anda
        </h1>
        <p
          class="text-xl text-secondary-600 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Jelajahi semua fitur canggih yang dirancang khusus untuk membantu UMKM berkembang pesat.
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BaseCard
          v-for="(feature, index) in detailedFeatures"
          :key="feature.title"
          variant="elevated"
          hover
          :data-aos="'fade-up'"
          :data-aos-delay="index * 100"
        >
          <template #header>
            <div class="feature-icon mb-4">
              <v-icon
                :icon="feature.icon"
                :color="feature.color"
                size="40"
              />
            </div>
            <h3 class="text-xl font-semibold text-secondary-900 mb-2">
              {{ feature.title }}
            </h3>
          </template>
          
          <p class="text-secondary-600 mb-4">
            {{ feature.description }}
          </p>
          
          <ul class="space-y-2">
            <li
              v-for="benefit in feature.benefits"
              :key="benefit"
              class="flex items-start space-x-2 text-sm text-secondary-600"
            >
              <v-icon
                icon="mdi-check-circle"
                color="success"
                size="16"
                class="mt-0.5"
              />
              <span>{{ benefit }}</span>
            </li>
          </ul>
        </BaseCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseCard from '@/components/base/BaseCard.vue'

const detailedFeatures = [
  {
    title: 'Voice Command',
    description: 'Sistem pencatatan otomatis dengan teknologi speech-to-text terdepan.',
    icon: 'mdi-microphone',
    color: 'primary',
    benefits: [
      'Pencatatan transaksi hands-free',
      'Akurasi tinggi dalam bahasa Indonesia',
      'Integrasi dengan sistem inventory',
      'Dukungan multi-dialek'
    ]
  },
  {
    title: 'QR Integration',
    description: 'Solusi pembayaran dan onboarding berbasis QR code yang mudah.',
    icon: 'mdi-qrcode-scan',
    color: 'accent',
    benefits: [
      'Pembayaran instan via QRIS',
      'Onboarding pelanggan cepat',
      'Menu digital interaktif',
      'Tracking transaksi real-time'
    ]
  },
  {
    title: 'AI Analytics',
    description: 'Dashboard analitik cerdas dengan prediksi bisnis akurat.',
    icon: 'mdi-chart-line',
    color: 'success',
    benefits: [
      'Prediksi penjualan harian',
      'Analisis tren pelanggan',
      'Optimasi stok otomatis',
      'Laporan keuangan detail'
    ]
  },
  {
    title: 'Smart Inventory',
    description: 'Manajemen stok otomatis dengan AI recommendation.',
    icon: 'mdi-package-variant',
    color: 'info',
    benefits: [
      'Auto-reorder berdasarkan prediksi',
      'Tracking expired date',
      'Optimasi space gudang',
      'Integrasi supplier'
    ]
  },
  {
    title: 'Customer Service AI',
    description: 'Chatbot cerdas untuk layanan pelanggan 24/7.',
    icon: 'mdi-robot',
    color: 'warning',
    benefits: [
      'Respon otomatis FAQ',
      'Escalation ke human agent',
      'Multi-platform support',
      'Learning dari interaksi'
    ]
  },
  {
    title: 'Multi-Platform',
    description: 'Satu dashboard untuk berbagai jenis bisnis UMKM.',
    icon: 'mdi-apps',
    color: 'error',
    benefits: [
      'Template bisnis siap pakai',
      'Customizable workflow',
      'Cross-platform sync',
      'Scalable architecture'
    ]
  }
]
</script>

<style scoped>
.features-page {
  min-height: 80vh;
  background: linear-gradient(135deg, #f8fafc 0%, #f0f9ff 100%);
}

.feature-icon {
  @apply w-20 h-20 bg-primary-50 rounded-xl flex items-center justify-center;
}
</style>
