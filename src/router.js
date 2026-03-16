import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Galeria from './components/Galeria.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/galeria', name: 'Galeria', component: Galeria },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Enviar page_view a Google Analytics en cada cambio de ruta (SPA)
router.afterEach((to) => {
  if (typeof gtag === 'function') {
    gtag('config', 'G-XXXXXXXXXX', { page_path: to.path })
  }
})

export default router
