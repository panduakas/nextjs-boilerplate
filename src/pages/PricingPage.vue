<template>
  <div class="pricing-page">
    <div class="container mx-auto py-20">
      <div class="text-center mb-16">
        <h1
          class="text-4xl font-bold text-secondary-900 mb-4"
          data-aos="fade-up"
        >
          Pilih Paket yang <span class="text-gradient-primary">Tepat</span>
        </h1>
        <p
          class="text-xl text-secondary-600 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Mulai gratis dan tingkatkan sesuai perkembangan bisnis Anda. Semua paket dilengkapi dengan dukungan AI terdepan.
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <BaseCard
          v-for="(plan, index) in pricingPlans"
          :key="plan.name"
          :variant="plan.featured ? 'elevated' : 'default'"
          :class="{ 'pricing-featured': plan.featured }"
          hover
          :data-aos="'fade-up'"
          :data-aos-delay="index * 200"
        >
          <template #header>
            <div v-if="plan.featured" class="featured-badge">
              <v-icon icon="mdi-star" size="16" class="mr-1" />
              Paling Populer
            </div>
            
            <h3 class="text-2xl font-bold text-secondary-900 mb-2">
              {{ plan.name }}
            </h3>
            
            <div class="pricing-amount mb-4">
              <span class="text-4xl font-bold text-primary-600">
                {{ plan.price }}
              </span>
              <span class="text-secondary-500 ml-2">
                {{ plan.period }}
              </span>
            </div>
            
            <p class="text-secondary-600">
              {{ plan.description }}
            </p>
          </template>
          
          <div class="space-y-4 mb-6">
            <div
              v-for="feature in plan.features"
              :key="feature"
              class="flex items-start space-x-3"
            >
              <v-icon
                icon="mdi-check-circle"
                color="success"
                size="20"
                class="mt-0.5"
              />
              <span class="text-secondary-700">{{ feature }}</span>
            </div>
          </div>
          
          <template #actions>
            <BaseButton
              :variant="plan.featured ? 'primary' : 'outline'"
              block
              size="large"
              :elevated="plan.featured"
            >
              {{ plan.buttonText }}
            </BaseButton>
          </template>
        </BaseCard>
      </div>
      
      <!-- FAQ Section -->
      <div class="mt-20">
        <h2
          class="text-3xl font-bold text-center text-secondary-900 mb-12"
          data-aos="fade-up"
        >
          Pertanyaan yang Sering Diajukan
        </h2>
        
        <div class="max-w-4xl mx-auto space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="faq.question"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <BaseCard
              variant="outlined"
              clickable
              @click="toggleFaq(index)"
            >
              <div class="flex items-center justify-between">
                <h4 class="font-semibold text-secondary-900">
                  {{ faq.question }}
                </h4>
                <v-icon
                  :icon="openFaqs.includes(index) ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                  class="text-secondary-500"
                />
              </div>
              
              <transition name="faq-content">
                <div
                  v-if="openFaqs.includes(index)"
                  class="mt-4 pt-4 border-t border-secondary-200"
                >
                  <p class="text-secondary-600 leading-relaxed">
                    {{ faq.answer }}
                  </p>
                </div>
              </transition>
            </BaseCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const openFaqs = ref<number[]>([])

const pricingPlans = [
  {
    name: 'Starter',
    price: 'Gratis',
    period: 'selamanya',
    description: 'Cocok untuk bisnis kecil yang baru memulai',
    features: [
      'Maksimal 100 transaksi/bulan',
      'Dashboard dasar',
      'QR Code payment',
      'Support email',
      '1 lokasi bisnis'
    ],
    buttonText: 'Mulai Gratis',
    featured: false
  },
  {
    name: 'Professional',
    price: 'Rp 299K',
    period: '/bulan',
    description: 'Untuk bisnis yang berkembang dengan fitur lengkap',
    features: [
      'Transaksi unlimited',
      'AI Analytics & Predictions',
      'Voice Command',
      'Multi-location support',
      'Priority support',
      'Custom branding',
      'Advanced reporting'
    ],
    buttonText: 'Pilih Professional',
    featured: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'harga',
    description: 'Solusi khusus untuk bisnis besar dan franchise',
    features: [
      'Semua fitur Professional',
      'Dedicated account manager',
      'Custom integrations',
      'White-label solution',
      'SLA guarantee',
      'On-premise deployment',
      'Training & consultation'
    ],
    buttonText: 'Hubungi Sales',
    featured: false
  }
]

const faqs = [
  {
    question: 'Apakah ada biaya setup atau instalasi?',
    answer: 'Tidak ada biaya setup atau instalasi. Anda bisa langsung mulai menggunakan platform kami setelah mendaftar.'
  },
  {
    question: 'Bisakah saya upgrade atau downgrade paket kapan saja?',
    answer: 'Ya, Anda bisa mengubah paket kapan saja. Perubahan akan berlaku pada periode billing berikutnya.'
  },
  {
    question: 'Apakah data saya aman?',
    answer: 'Keamanan data adalah prioritas utama kami. Kami menggunakan enkripsi tingkat bank dan mematuhi standar keamanan internasional.'
  },
  {
    question: 'Bagaimana cara pembayaran?',
    answer: 'Kami menerima pembayaran melalui transfer bank, kartu kredit, dan e-wallet. Pembayaran diproses secara otomatis setiap bulan.'
  },
  {
    question: 'Apakah ada masa trial untuk paket berbayar?',
    answer: 'Ya, kami menyediakan trial 14 hari gratis untuk semua paket berbayar tanpa perlu kartu kredit.'
  }
]

const toggleFaq = (index: number) => {
  const faqIndex = openFaqs.value.indexOf(index)
  if (faqIndex > -1) {
    openFaqs.value.splice(faqIndex, 1)
  } else {
    openFaqs.value.push(index)
  }
}
</script>

<style scoped>
.pricing-page {
  min-height: 80vh;
  background: linear-gradient(135deg, #f8fafc 0%, #f0f9ff 100%);
}

.pricing-featured {
  @apply relative;
  transform: scale(1.05);
}

.pricing-featured::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(135deg, #0ea5e9, #eab308);
  border-radius: inherit;
  z-index: -1;
}

.featured-badge {
  @apply absolute -top-4 left-1/2 transform -translate-x-1/2;
  @apply bg-gradient-to-r from-primary-500 to-accent-500;
  @apply text-white text-sm font-medium px-4 py-1 rounded-full;
  @apply flex items-center;
}

.pricing-amount {
  @apply flex items-baseline;
}

/* FAQ Transitions */
.faq-content-enter-active,
.faq-content-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.faq-content-enter-from,
.faq-content-leave-to {
  opacity: 0;
  max-height: 0;
  padding-top: 0;
  margin-top: 0;
}

.faq-content-enter-to,
.faq-content-leave-from {
  opacity: 1;
  max-height: 200px;
}

@media (max-width: 768px) {
  .pricing-featured {
    transform: none;
  }
}
</style>
