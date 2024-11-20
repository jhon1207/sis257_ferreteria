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
  <div class="m-8">
    <h1>Detalle de Ventas</h1>
    <Button label="Crear Nuevo" icon="pi pi-plus" @click="handleCreate" />
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

<style scoped></style>
