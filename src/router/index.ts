import { createRouter, createWebHistory } from 'vue-router'

import LandingLayout from '@/modules/landing/layout/LandingLayout.vue'
import HomePage from '@/modules/landing/views/HomePage.vue'
import LatteProductos from '@/modules/landing/views/LatteProductos.vue'
import OurHistory from '@/modules/landing/views/OurHistory.vue'

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
          path: '/nuestraHistoria',
          name: 'historia',
          component: OurHistory
        },
        {
          path: '/Productos',
          name: 'productos',
          component: LatteProductos
        }
      ]
    }
  ]
})

export default router
