import './assets/main.css'

import { createApp } from 'vue'

import { createPinia } from 'pinia'
import Vue3Lottie from 'vue3-lottie'

import App from './App.vue'
import router from './router'

createApp(App).use(Vue3Lottie).use(createPinia()).use(router).mount('#app')
