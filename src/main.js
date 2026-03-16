import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import './style.css'

const app = createApp(App)
app.use(router)
app.mount('#app')

// Registrar el service worker para que la PWA funcione offline (dev y producción).
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').catch(() => {})
  })
}
