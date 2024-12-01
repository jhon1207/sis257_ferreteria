<script setup lang="ts">
import VentaList from '@/components/venta/VentaList.vue'
import VentaSave from '@/components/venta/VentaSave.vue'
import Button from 'primevue/button'
import { ref } from 'vue'

const mostrarDialog = ref<boolean>(false)
const ventaListRef = ref<typeof VentaList | null>(null)
const ventaEdit = ref<any>(null)

function handleCreate() {
  ventaEdit.value = null
  mostrarDialog.value = true
}

function handleEdit(venta: any) {
  ventaEdit.value = venta
  mostrarDialog.value = true
}

function handleCloseDialog() {
  mostrarDialog.value = false
}

function handleGuardar() {
  ventaListRef.value?.obtenerLista()
}
</script>

<template>
  <div class="venta-container">
    <h1 class="venta-titulo">Ventas</h1>
    <Button
      class="crear-btn"
      label="Crear Nueva Venta"
      icon="pi pi-plus"
      @click="handleCreate"
    />
    <VentaList ref="ventaListRef" @edit="handleEdit" />
    <VentaSave
      :mostrar="mostrarDialog"
      :venta="ventaEdit"
      :modoEdicion="!!ventaEdit"
      @guardar="handleGuardar"
      @close="handleCloseDialog"
    />
  </div>
</template>


<style scoped>
.venta-container {
  background-color: rgba(255, 255, 255, 0.8); /* Fondo blanco con transparencia */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Sombra para destacar */
}

.venta-titulo {
  color: #940f0f; /* Rojo oscuro para el título */
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
}

.crear-btn {
  display: block;
  margin: 0 auto 20px;
  background-color: #28a745; /* Botón verde */
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
}

.crear-btn:hover {
  background-color: #218838; /* Color más oscuro al pasar el ratón */
  cursor: pointer;
}
</style>

