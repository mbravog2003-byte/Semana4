// Nombre de la caché (obligatorio: caches.open() lo pide). Puedes usar cualquier string.
const CACHE_NAME = 'app-cache'

// Archivos que se guardan en caché nada más instalar el service worker (página principal, manifest e iconos).
const FILES_TO_CACHE = [
  '/',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  )
})

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET' || event.request.url.startsWith('chrome-extension')) return
  const url = new URL(event.request.url)
  if (url.origin !== self.location.origin) return

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.status === 200 && response.type === 'basic') {
          const copy = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy))
        }
        return response
      })
      .catch(() => {
        return caches.match(event.request).then((cached) => cached || new Response('Offline', { status: 503, statusText: 'Offline' }))
      })
  )
})
