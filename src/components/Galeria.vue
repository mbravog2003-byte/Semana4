<template>
  <div>
    <h1>{{ titulo }}</h1>
    <div class="galeria">
      <figure v-for="(foto, index) in fotos" :key="index">
        <img
          :src="foto.url"
          :alt="foto.nombre"
          @click="abrirFoto(foto)"
        >
        <figcaption>{{ foto.nombre }}</figcaption>
      </figure>
    </div>
    <ModalImagen
      :show="estaModalAbierto"
      :src="urlFotoAmpliada"
      :alt="nombreFotoAmpliada"
      @close="cerrarModal"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ModalImagen from './ModalImagen.vue'

// Estado: qué foto está ampliada (null = modal cerrado). ref() porque cambia al hacer clic.
const imagenAmpliada = ref(null)

// Funciones para abrir y cerrar el modal. El template usa nombres claros en español.
function abrirFoto(foto) {
  imagenAmpliada.value = foto
}
function cerrarModal() {
  imagenAmpliada.value = null
}

// Valores derivados del estado: así el template no repite lógica (?. y !!). computed = se recalcula solo cuando imagenAmpliada cambia.
const estaModalAbierto = computed(() => imagenAmpliada.value !== null)
const urlFotoAmpliada = computed(() => imagenAmpliada.value?.url ?? '')
const nombreFotoAmpliada = computed(() => imagenAmpliada.value?.nombre ?? 'Foto ampliada')

// Título de la página. Edita aquí el texto del h1.
const titulo = 'Galería de fotos de vacaciones'

// Lista de fotos: cada una tiene url y nombre. Edita aquí tus fotos.
const fotos = [
  { url: 'https://d3p3fw3rutb1if.cloudfront.net/photos/907fcf4c-4493-4be4-9381-ef04f8748b12', nombre: 'Playa tranquila' },
  { url: 'https://d3p3fw3rutb1if.cloudfront.net/photos/1fdf937c-30d4-4606-88ac-19ed543ddfcc', nombre: 'Montañas nubladas' },
  { url: 'https://d3p3fw3rutb1if.cloudfront.net/photos/acfa5cca-29f7-4de8-9a59-ad89cb1576a0', nombre: 'Mar calmo' },
  { url: 'https://d3p3fw3rutb1if.cloudfront.net/photos/f670ecdc-7c86-4ef8-b1d1-ae4edfe91101', nombre: 'Valle primaveral' },
  { url: 'https://d3p3fw3rutb1if.cloudfront.net/photos/76d23b2a-b621-45cb-9dbf-4b7a5e3d7cd3', nombre: 'Pueblo al anochecer' },
  { url: 'https://d3p3fw3rutb1if.cloudfront.net/photos/6f8d5a89-819f-4228-94fb-18eaf14ed4a9', nombre: 'Bosque nevado' },
]
</script>
