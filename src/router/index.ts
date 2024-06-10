import { createRouter, createWebHistory } from 'vue-router'

import LandingLayout from '@/modules/landing/layout/LandingLayout.vue'
import HomePage from '@/modules/landing/views/HomePage.vue'
import OurHistory from '@/modules/landing/views/OurHistory.vue'
import QuieroEmprender from '@/views/QuieroEmprender.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomePage
        },
        {
          path: '/',
          name: 'historia',
          component: OurHistory
        },
        {
          path: '/',
          name: 'Emprender',
          component: QuieroEmprender
        }
      ]
    }
  ]
})

export default router
