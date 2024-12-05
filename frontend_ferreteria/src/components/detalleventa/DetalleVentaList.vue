<script setup lang="ts">
import type { DetalleVenta } from '@/models/detalleventa';
import type { Venta } from '@/models/venta';
import type { Cliente } from '@/models/cliente';
import type { Producto } from '@/models/producto';
import http from '@/plugins/axios';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import { onMounted, ref } from 'vue';

const ENDPOINT = 'ventas';
let ventas = ref<Venta[]>([]);
let clientes = ref<Cliente[]>([]);
let productos = ref<Producto[]>([]);

const emit = defineEmits(['edit']);
const ventaDelete = ref<Venta | null>(null);
const mostrarConfirmDialog = ref<boolean>(false);

// Obtener la lista de ventas
async function obtenerLista() {
  ventas.value = await http.get(ENDPOINT).then((response) => response.data);
}
// Mostrar diálogo de confirmación para eliminar
function mostrarEliminarConfirm(venta: Venta) {
  ventaDelete.value = venta;
  mostrarConfirmDialog.value = true;
}

// Eliminar venta
async function eliminar() {
  try {
    await http.delete(`${ENDPOINT}/${ventaDelete.value?.id}`);
    obtenerLista();
    mostrarConfirmDialog.value = false;
  } catch (error) {
    console.error('Error al eliminar la venta:', error);
  }
}

onMounted(() => {
  obtenerLista();
});
</script>

<template>
  <div>
    <!-- Listado de ventas -->
    <table>
      <thead>
        <tr>
          <th>Nro.</th>
          <th>Cliente</th>
          <th>Productos</th>
          <th>Total</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(venta, index) in ventas" :key="venta.id">
          <td>{{ index + 1 }}</td>
          <td>{{ venta.cliente?.nombreApellido }}</td>
          <td>
            <ul>
              <li v-for="detalle in venta.detalles" :key="detalle.idProducto">
                {{ detalle.producto?.nombreProducto }} - Cantidad: {{ detalle.cantidad }}
              </li>
            </ul>
          </td>
          <td>{{ venta.total }}</td>
          <td>
            <Button icon="pi pi-pencil" aria-label="Editar" text @click="emit('edit', venta)" />
            <Button icon="pi pi-trash" aria-label="Eliminar" text @click="mostrarEliminarConfirm(venta)" />
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Confirmación de eliminación -->
    <Dialog v-model:visible="mostrarConfirmDialog" header="Confirmar Eliminación" :style="{ width: '25rem' }">
      <p>¿Estás seguro de que deseas eliminar este registro?</p>
      <div class="flex justify-end gap-2">
        <Button type="button" label="Cancelar" severity="secondary" @click="mostrarConfirmDialog = false" />
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
