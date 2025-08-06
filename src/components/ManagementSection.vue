<template>
  <div class="management-dashboard">
    <div class="container mx-auto px-4 py-16">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Dashboard Manajemen Bisnis
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Kelola operasional bisnis Anda dengan efisiensi maksimal
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Business Operations Metrics -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Metrik Operasional Bisnis
          </h3>
          
          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <span class="text-gray-600 dark:text-gray-300">Waktu Rata-rata Layanan</span>
              <span class="font-semibold text-blue-600 dark:text-blue-400">15-20 menit</span>
            </div>
            
            <div class="flex justify-between items-center">
              <span class="text-gray-600 dark:text-gray-300">Transaksi Hari Ini</span>
              <span class="font-semibold text-blue-600 dark:text-blue-400">127</span>
            </div>
            
            <div class="flex justify-between items-center">
              <span class="text-gray-600 dark:text-gray-300">Rating Layanan</span>
              <span class="font-semibold text-blue-600 dark:text-blue-400">4.8/5.0</span>
            </div>
            
            <div class="flex justify-between items-center">
              <span class="text-gray-600 dark:text-gray-300">Efisiensi Operasional</span>
              <span class="font-semibold text-blue-600 dark:text-blue-400">92%</span>
            </div>
          </div>
        </div>

        <!-- Team Performance -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Performa Tim
          </h3>
          
          <div class="space-y-4">
            <div class="team-card">
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white">Tim Layanan A</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300">Spesialisasi: Customer Service</p>
                </div>
                <div class="text-right">
                  <div class="text-lg font-bold text-blue-600 dark:text-blue-400">4.9/5.0</div>
                  <div class="text-sm text-gray-600 dark:text-gray-300">98 layanan/hari</div>
                </div>
              </div>
            </div>
            
            <div class="team-card">
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white">Tim Operasional B</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300">Spesialisasi: Manajemen Produk</p>
                </div>
                <div class="text-right">
                  <div class="text-lg font-bold text-blue-600 dark:text-blue-400">4.7/5.0</div>
                  <div class="text-sm text-gray-600 dark:text-gray-300">85 tugas/hari</div>
                </div>
              </div>
            </div>
            
            <div class="team-card">
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white">Tim Support C</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300">Spesialisasi: Technical Support</p>
                </div>
                <div class="text-right">
                  <div class="text-lg font-bold text-blue-600 dark:text-blue-400">4.8/5.0</div>
                  <div class="text-sm text-gray-600 dark:text-gray-300">67 ticket/hari</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Real-time Analytics -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 lg:col-span-2">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Analitik Real-time
          </h3>
          
          <div class="grid md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">1,247</div>
              <div class="text-gray-600 dark:text-gray-300">Total Transaksi Bulan Ini</div>
            </div>
            
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">Rp 2.8M</div>
              <div class="text-gray-600 dark:text-gray-300">Revenue Bulan Ini</div>
            </div>
            
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">98.5%</div>
              <div class="text-gray-600 dark:text-gray-300">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    title: 'Voice Command',
    description: 'Catat transaksi dan kelola inventaris hanya dengan suara',
    icon: 'mdi-microphone',
    color: 'primary'
  },
  {
    title: 'QR-Based Solutions',
    description: 'Sistem pembayaran dan onboarding berbasis QR code',
    icon: 'mdi-qrcode-scan',
    color: 'accent'
  },
  {
    title: 'AI Analytics',
    description: 'Rekomendasi cerdas untuk stok, harga, dan strategi promosi',
    icon: 'mdi-brain',
    color: 'success'
  }
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
</script>

<style scoped>
.management-dashboard {
  @apply bg-gray-50 dark:bg-gray-900;
}

.team-card {
  @apply p-4 border border-gray-200 dark:border-gray-700 rounded-lg;
}

.metric-card {
  @apply p-4 border border-gray-200 dark:border-gray-700 rounded-lg;
}

.metric-value {
  @apply text-2xl font-bold text-blue-600;
}

.metric-label {
  @apply text-sm text-gray-600 dark:text-gray-300;
}
</style>
