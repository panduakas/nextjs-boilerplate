import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/SinglePage.vue'),
    meta: {
      title: 'AkuLagiBisnis - AI-Powered SaaS untuk UMKM',
      description: 'Platform SaaS bertenaga AI untuk membantu UMKM menjalankan bisnisnya dengan lebih efisien dan modern.'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFoundPage.vue'),
    meta: {
      title: 'Halaman Tidak Ditemukan - AkuLagiBisnis'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Global navigation guards
router.beforeEach((to) => {
  // Update document title
  if (to.meta?.['title']) {
    document.title = to.meta['title'] as string
  }
  
  // Update meta description
  if (to.meta?.['description']) {
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', to.meta['description'] as string)
    }
  }
  
  return true
})

export default router
