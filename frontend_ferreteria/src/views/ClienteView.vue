<script setup lang="ts">
import ClienteList from '@/components/cliente/ClienteList.vue'
import ClienteSave from '@/components/cliente/ClienteSave.vue'
import Button from 'primevue/button'
import { ref } from 'vue'

const mostrarDialog = ref<boolean>(false)
const clienteListRef = ref<typeof ClienteList | null>(null)
const clienteEdit = ref<any>(null)

function hableCreate() {
  clienteEdit.value = null
  mostrarDialog.value = true
}

function handleEdit(cliente: any) {
  clienteEdit.value = cliente
  mostrarDialog.value = true
}

function handleCloseDialog() {
  mostrarDialog.value = false
}

function handleGuardar() {
  clienteListRef.value?.obtenerLista()
}
</script>

<template>
  <div class="cliente-container">
    <h1 class="cliente-titulo">Clientes</h1>
    <Button
      class="crear-btn"
      label="Crear Nuevo"
      icon="pi pi-plus"
      @click="hableCreate"
    />
    <ClienteList ref="clienteListRef" @edit="handleEdit" />
    <ClienteSave
      :mostrar="mostrarDialog"
      :cliente="clienteEdit"
      :modoEdicion="!!clienteEdit"
      @guardar="handleGuardar"
      @close="handleCloseDialog"
    />
  </div>
</template>


<style scoped>
.cliente-container {
  background-color: rgba(255, 255, 255, 0.8); /* Fondo blanco con transparencia */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Sombra para destacar */
}

.cliente-titulo {
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


