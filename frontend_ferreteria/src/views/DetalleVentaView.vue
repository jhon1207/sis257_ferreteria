<script setup lang="ts">
import DetalleVentaList from '@/components/detalleventa/DetalleVentaList.vue'
import DetalleVentaSave from '@/components/detalleventa/DetalleVentaSave.vue'
import Button from 'primevue/button'
import { ref } from 'vue'

const mostrarDialog = ref<boolean>(false)
const detalleVentaListRef = ref<typeof DetalleVentaList | null>(null)
const detalleVentaEdit = ref<any>(null)

function handleCreate() {
  detalleVentaEdit.value = null
  mostrarDialog.value = true
}

function handleEdit(detalleVenta: any) {
  detalleVentaEdit.value = detalleVenta
  mostrarDialog.value = true
}

function handleCloseDialog() {
  mostrarDialog.value = false
}

function handleGuardar() {
  detalleVentaListRef.value?.obtenerLista()
}
</script>

<template>
  <div class="detalle-venta-container">
    <h1 class="detalle-venta-titulo">Detalle de Ventas</h1>
    <Button
      class="crear-btn"
      label="Crear Nuevo"
      icon="pi pi-plus"
      @click="handleCreate"
    />
    <DetalleVentaList ref="detalleVentaListRef" @edit="handleEdit" />
    <DetalleVentaSave
      :mostrar="mostrarDialog"
      :detalleVenta="detalleVentaEdit"
      :modoEdicion="!!detalleVentaEdit"
      @guardar="handleGuardar"
      @close="handleCloseDialog"
    />
  </div>
</template>

<style scoped>
.detalle-venta-container {
  background-color: rgba(255, 255, 255, 0.8); /* Fondo blanco con transparencia */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Sombra para destacar */
}

.detalle-venta-titulo {
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
