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
  <div>
    <h1>Gestión de Ventas</h1>
    <Button label="Crear Nueva Venta" icon="pi pi-plus" @click="handleCreate" />
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

<style scoped></style>
