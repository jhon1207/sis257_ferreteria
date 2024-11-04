<script setup lang="ts">
import DetalleVentaList from '@/components/detalleventa/DetalleVentaList.vue'
import DetalleVentaSave from '@/components/detalleventa/DetalleVentaSave.vue'
import Button from 'primevue/button'
import { ref } from 'vue'
import type { Venta } from '@/models/venta'
const mostrarDialog = ref<boolean>(false)
const ventaListRef = ref<typeof DetalleVentaList | null>(null)
const ventaEdit = ref<Venta | null>(null)

function handleCreate() {
  ventaEdit.value = null
  mostrarDialog.value = true
}

function handleEdit(venta: Venta) {
  ventaEdit.value = venta
  mostrarDialog.value = true
}

function handleCloseDialog() {
  mostrarDialog.value = false
}

function handleGuardar() {
  ventaListRef.value?.obtenerLista()
}

function handleDelete(venta: Venta) {
  if (confirm('¿Estás seguro de que deseas eliminar esta venta?')) {
    http
      .delete(`ventas/${venta.id_venta}`)
      .then(() => {
        ventaListRef.value?.obtenerLista()
      })
      .catch(err => {
        console.error(err)
        alert('Error al eliminar la venta. Inténtalo de nuevo.')
      })
  }
}
</script>

<template>
  <div>
    <h1>Gestión de Ventas</h1>
    <Button label="Crear Nueva Venta" icon="pi pi-plus" @click="handleCreate" />
    <DetalleVentaList
      ref="ventaListRef"
      @edit="handleEdit"
      @delete="handleDelete"
    />
    <DetalleVentaSave
      :mostrar="mostrarDialog"
      :venta="ventaEdit"
      :modoEdicion="!!ventaEdit"
      @guardar="handleGuardar"
      @close="handleCloseDialog"
    />
  </div>
</template>

<style scoped></style>
