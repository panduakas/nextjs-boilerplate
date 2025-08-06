<template>
  <div class="about-page">
    <div class="container mx-auto py-20">
      <div class="text-center mb-16">
        <h1
          class="text-4xl font-bold text-secondary-900 mb-4"
          data-aos="fade-up"
        >
          Tentang <span class="text-gradient-primary">AkuLagiBisnis</span>
        </h1>
        <p
          class="text-xl text-secondary-600 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Kami berkomitmen untuk memberdayakan UMKM Indonesia melalui teknologi AI yang inovatif dan mudah digunakan.
        </p>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div data-aos="fade-right">
          <h2 class="text-3xl font-bold text-secondary-900 mb-6">
            Misi Kami
          </h2>
          <p class="text-lg text-secondary-600 leading-relaxed mb-6">
            Menghadirkan solusi teknologi yang dapat diakses oleh semua kalangan UMKM, 
            dari warung tradisional hingga bisnis modern, untuk meningkatkan efisiensi 
            dan profitabilitas mereka.
          </p>
          <BaseButton
            variant="primary"
            prepend-icon="mdi-rocket-launch"
          >
            Bergabung Sekarang
          </BaseButton>
        </div>
        
        <div
          class="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-8 text-white"
          data-aos="fade-left"
        >
          <h3 class="text-2xl font-bold mb-4">Visi 2030</h3>
          <p class="text-lg leading-relaxed">
            Menjadi platform SaaS terdepan di Asia Tenggara yang menghubungkan 
            jutaan UMKM dengan teknologi AI untuk menciptakan ekosistem bisnis 
            yang berkelanjutan dan inklusif.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
</script>

<style scoped>
.about-page {
  min-height: 80vh;
  background: linear-gradient(135deg, #f8fafc 0%, #f0f9ff 100%);
}
</style>
