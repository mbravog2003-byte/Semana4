<template>
  <div class="app">
    <div class="main">
      <nav>
        <router-link to="/">Inicio</router-link>
        <router-link to="/galeria">Galería</router-link>
      </nav>
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Footer from './components/Footer.vue'
</script>
