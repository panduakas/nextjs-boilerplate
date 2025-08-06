<template>
  <div class="not-found-page">
    <div class="container mx-auto text-center py-20">
      <div class="not-found-content" data-aos="fade-up">
        <div class="error-icon mb-8">
          <v-icon icon="mdi-emoticon-sad-outline" size="120" class="text-primary-400" />
        </div>

        <h1 class="error-title mb-4">404</h1>

        <h2 class="error-subtitle mb-6">Halaman Tidak Ditemukan</h2>

        <p class="error-description mb-8">
          Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman telah
          dipindahkan atau URL yang Anda masukkan salah.
        </p>

        <div class="error-actions">
          <BaseButton variant="primary" size="large" prepend-icon="mdi-home" to="/">
            Kembali ke Beranda
          </BaseButton>

          <BaseButton
            variant="outline"
            size="large"
            prepend-icon="mdi-arrow-left"
            @click="goBack"
          >
            Kembali
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from "vue-router";
  import BaseButton from "@/components/base/BaseButton.vue";

  const router = useRouter();

  const goBack = () => {
    if (window.history.length > 1) {
      router.go(-1);
    } else {
      router.push("/");
    }
  };
</script>

<style scoped>
  .not-found-page {
    min-height: 80vh;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  }

  .error-title {
    @apply text-8xl font-bold text-primary-500;
  }

  .error-subtitle {
    @apply text-3xl font-semibold text-secondary-800;
  }

  .error-description {
    @apply text-lg text-secondary-600 max-w-2xl mx-auto leading-relaxed;
  }

  .error-actions {
    @apply flex flex-col sm:flex-row gap-4 justify-center;
  }

  @media (max-width: 768px) {
    .error-title {
      @apply text-6xl;
    }

    .error-subtitle {
      @apply text-2xl;
    }
  }
</style>
