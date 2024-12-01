<script setup lang="ts">
import ProductoList from '@/components/producto/ProductoList.vue'
import ProductoSave from '@/components/producto/ProductoSave.vue'
import Button from 'primevue/button'
import { ref } from 'vue'

const mostrarDialog = ref<boolean>(false)
const productoListRef = ref<typeof ProductoList | null>(null)
const productoEdit = ref<any>(null)

function hableCreate() {
  productoEdit.value = null
  mostrarDialog.value = true
}

function handleEdit(producto: any) {
  productoEdit.value = producto
  mostrarDialog.value = true
}

function handleCloseDialog() {
  mostrarDialog.value = false
}

function handleGuardar() {
  productoListRef.value?.obtenerLista()
}
</script>

<template>
  <div class="producto-container">
    <h1 class="producto-titulo">Productos</h1>
    <Button
      class="crear-btn"
      label="Crear Nuevo"
      icon="pi pi-plus"
      @click="hableCreate"
    />
    <ProductoList ref="productoListRef" @edit="handleEdit" />
    <ProductoSave
      :mostrar="mostrarDialog"
      :producto="productoEdit"
      :modoEdicion="!!productoEdit"
      @guardar="handleGuardar"
      @close="handleCloseDialog"
    />
  </div>
</template>

<style scoped>
.producto-container {
  background-color: rgba(255, 255, 255, 0.8); /* Fondo blanco con transparencia */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Sombra para destacar */
}

.producto-titulo {
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

