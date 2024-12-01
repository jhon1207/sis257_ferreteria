<script setup lang="ts">
import CategoriaList from '@/components/categoria/CategoriaList.vue'
import CategoriaSave from '@/components/categoria/CategoriaSave.vue'
import Button from 'primevue/button'
import { ref } from 'vue'

const mostrarDialog = ref<boolean>(false)
const categoriaListRef = ref<typeof CategoriaList | null>(null)
const categoriaEdit = ref<any>(null)

function hableCreate() {
  categoriaEdit.value = null
  mostrarDialog.value = true
}

function handleEdit(categoria: any) {
  categoriaEdit.value = categoria
  mostrarDialog.value = true
}

function handleCloseDialog() {
  mostrarDialog.value = false
}

function handleGuardar() {
  categoriaListRef.value?.obtenerLista()
}
</script>

<template>
  <div class="categoria-container">
    <h1 class="categoria-titulo">Categorías</h1>
    <Button
      label="Crear Nuevo"
      icon="pi pi-plus"
      class="crear-btn"
      @click="hableCreate"
    />
    <CategoriaList
      ref="categoriaListRef"
      @edit="handleEdit"
    />
    <CategoriaSave
      :mostrar="mostrarDialog"
      :categoria="categoriaEdit"
      :modoEdicion="!!categoriaEdit"
      @guardar="handleGuardar"
      @close="handleCloseDialog"
    />
  </div>
</template>


<style scoped>

.categoria-titulo {
  color: #940f0f; /* Texto completamente negro */
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
