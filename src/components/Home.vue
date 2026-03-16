<template>
  <div class="home">
    <div class="portada">
      <img
        :src="portadaUrl"
        :alt="portadaAlt"
        @click="abrirModal"
      >
    </div>
    <h1>{{ titulo }}</h1>
    <p style="text-align: center; max-width: 400px; margin: 0 auto;">
      Bienvenido. Ve a <router-link to="/galeria" style="color: #8ab4f8;">Galería</router-link> para ver las fotos.
    </p>
    <ModalImagen
      :show="mostrarAmpliada"
      :src="portadaUrl"
      :alt="portadaAlt"
      @close="cerrarModal"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ModalImagen from './ModalImagen.vue'

// Estado: ¿está abierto el modal? (true/false). ref() porque cambia al hacer clic.
const mostrarAmpliada = ref(false)

// Funciones para abrir y cerrar el modal. Así el template se lee en español y la lógica está aquí.
function abrirModal() {
  mostrarAmpliada.value = true
}
function cerrarModal() {
  mostrarAmpliada.value = false
}

// Textos y datos de la página. Edita aquí lo que quieras mostrar.
const titulo = 'Inicio'
const portadaUrl = 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
const portadaAlt = 'Portada'
</script>
