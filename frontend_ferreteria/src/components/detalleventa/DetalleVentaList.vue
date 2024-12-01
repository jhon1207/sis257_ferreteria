<script setup lang="ts">
import type { DetalleVenta } from '@/models/detalleventa'
import http from '@/plugins/axios'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import { onMounted, ref } from 'vue'

const ENDPOINT = 'detalles-ventas'
const detalleVenta = ref<DetalleVenta[]>([])
const emit = defineEmits(['edit'])
const detalleVentaDelete = ref<DetalleVenta | null>(null)
const mostrarConfirmDialog = ref<boolean>(false)

async function obtenerLista() {
  detalleVenta.value = await http.get(ENDPOINT).then(response => response.data)
}

function emitirEdicion(detalleVenta: DetalleVenta) {
  emit('edit', detalleVenta)
}

function mostrarEliminarConfirm(detalleVenta: DetalleVenta) {
  detalleVentaDelete.value = detalleVenta
  mostrarConfirmDialog.value = true
}

async function eliminar() {
  await http.delete(`${ENDPOINT}/${detalleVentaDelete.value?.id}`)
  obtenerLista()
  mostrarConfirmDialog.value = false
}

onMounted(() => {
  obtenerLista()
})
defineExpose({ obtenerLista })
</script>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Nro.</th>
          <th>Productos</th>
          <th>Cantidad</th>
          <th>Precio Unitario</th>
          <th>SubTotal</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(detalleVenta, index) in detalleVenta"
          :key="detalleVenta.id"
        >
          <td>{{ index + 1 }}</td>
          <td>{{ detalleVenta.producto.nombreProducto }}</td>
          <td>{{ detalleVenta.cantidad }}</td>
          <td>{{ detalleVenta.precioUnitario }}</td>
          <td>{{ detalleVenta.subTotal }}</td>
          <td>
            <Button
              icon="pi pi-pencil"
              aria-label="Editar"
              text
              @click="emitirEdicion(detalleVenta)"
            />
            <Button
              icon="pi pi-trash"
              aria-label="Eliminar"
              text
              @click="mostrarEliminarConfirm(detalleVenta)"
            />
          </td>
        </tr>
      </tbody>
    </table>

    <Dialog
      v-model:visible="mostrarConfirmDialog"
      header="Confirmar Eliminación"
      :style="{ width: '25rem' }"
    >
      <p>¿Estás seguro de que deseas eliminar este registro?</p>
      <div class="flex justify-end gap-2">
        <Button
          type="button"
          label="Cancelar"
          severity="secondary"
          @click="mostrarConfirmDialog = false"
        />
        <Button type="button" label="Eliminar" @click="eliminar" />
      </div>
    </Dialog>
  </div>
</template>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}
</style>
