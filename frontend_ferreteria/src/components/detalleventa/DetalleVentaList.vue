<script setup lang="ts">
import type { DetalleVenta } from '@/models/detalleventa'
import http from '@/plugins/axios'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import { onMounted, ref, watch } from 'vue'

const ENDPOINT = 'detalle_venta'
const detalleVenta = ref<DetalleVenta[]>([]) // Use this variable consistently
const emit = defineEmits(['edit'])
const detalleDelete = ref<DetalleVenta | null>(null)
const mostrarConfirmDialog = ref<boolean>(false)
const ventaId = ref<number | null>(null)

async function obtenerLista() {
  if (ventaId.value) {
    detalleVenta.value = await http // Use 'detalleVenta' here
      .get(`${ENDPOINT}?id_venta=${ventaId.value}`)
      .then(response => response.data)
  }
}

function setVentaId(id: number) {
  ventaId.value = id
  obtenerLista()
}

function emitirEdicion(detalle: DetalleVenta) {
  emit('edit', detalle)
}

function mostrarEliminarConfirm(detalle: DetalleVenta) {
  detalleDelete.value = detalle
  mostrarConfirmDialog.value = true
}

async function eliminar() {
  await http.delete(`${ENDPOINT}/${detalleDelete.value?.id_detalle}`)
  await obtenerLista()
  mostrarConfirmDialog.value = false
}

watch(ventaId, newId => {
  if (newId) {
    obtenerLista()
  }
})

defineExpose({ setVentaId })
</script>

<template>
  <div>
    <h2>Detalles de Venta</h2>
    <table>
      <thead>
        <tr>
          <th>Nro.</th>
          <th>ID Producto</th>
          <th>Cantidad</th>
          <th>Precio Unitario</th>
          <th>Subtotal</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(detalle, index) in detalleVenta" :key="detalle.id_detalle">
          <!-- Use detalleVenta here -->
          <td>{{ index + 1 }}</td>
          <td>{{ detalle.id_producto }}</td>
          <td>{{ detalle.cantidad }}</td>
          <td>{{ detalle.precio_unitario.toFixed(2) }}</td>
          <td>{{ detalle.subtotal.toFixed(2) }}</td>
          <td>
            <Button
              icon="pi pi-pencil"
              aria-label="Editar"
              text
              @click="emitirEdicion(detalle)"
            />
            <Button
              icon="pi pi-trash"
              aria-label="Eliminar"
              text
              @click="mostrarEliminarConfirm(detalle)"
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

<style scoped></style>
