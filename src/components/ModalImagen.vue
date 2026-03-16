<template>
  <div v-if="show" class="modal-imagen" @click.self="cerrar">
    <button type="button" class="modal-imagen-cerrar" aria-label="Cerrar" @click="cerrar">×</button>
    <img :src="src" :alt="alt" @click.stop>
  </div>
</template>

<script setup>
// Props = datos que nos pasa el padre. show = si el modal está visible; src y alt = imagen.
defineProps({
  show: Boolean,
  src: { type: String, default: '' },
  alt: { type: String, default: '' },
})

// emit = avisar al padre cuando cerramos. 'close' es el nombre del evento.
const emit = defineEmits(['close'])

function cerrar() {
  emit('close')
}
</script>
