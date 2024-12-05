<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import type { Venta } from '@/models/venta';
import type { Cliente } from '@/models/cliente';
import type { Producto } from '@/models/producto';
import http from '@/plugins/axios';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Select from 'primevue/select';

const ENDPOINT = 'ventas';

const props = defineProps({
  mostrar: Boolean,
  venta: {
    type: Object as () => Venta,
    default: () => ({}) as Venta,
  },
  modoEdicion: Boolean,
});
const emit = defineEmits(['guardar', 'close']);

const clientes = ref<Cliente[]>([]);
const productos = ref<Producto[]>([]);

const venta = ref<Venta>({ ...props.venta, total: 0 });
const cliente = ref<Cliente | null>(null);
const productoSeleccionado = ref<Producto | null>(null);
const cantidadProducto = ref<number>(1);
const detallesVenta = ref<
  { idProducto: number; cantidad: number; producto?: Producto }[]
>([]);

const dialogVisible = computed({
  get: () => props.mostrar,
  set: (value) => {
    if (!value) emit('close');
  },
});

// Watch para cargar datos al editar
watch(
  () => props.venta,
  async (newVal) => {
    venta.value = { ...newVal };
    cliente.value = venta.value.cliente ?? null;
    detallesVenta.value = venta.value.detalles || [];
    calcularTotal();
    if (props.modoEdicion) {
      await obtenerClientesYProductos();
    }
  },
);

// Cargar clientes y productos al abrir el modal
watch(
  () => props.mostrar,
  async (nuevoValor) => {
    if (nuevoValor) {
      await obtenerClientesYProductos();
    }
  },
);

async function obtenerClientesYProductos() {
  try {
    [clientes.value, productos.value] = await Promise.all([
      http.get('clientes').then((response) => response.data),
      http.get('productos').then((response) => response.data),
    ]);
  } catch (error) {
    console.error('Error al cargar datos:', error);
  }
}

// Calcular el total de la venta
function calcularTotal() {
  venta.value.total = detallesVenta.value.reduce(
    (acumulador, detalle) =>
      acumulador + (detalle.producto?.precio || 0) * detalle.cantidad,
    0
  );
}

// Agregar un producto a los detalles
function agregarProducto() {
  if (productoSeleccionado.value && cantidadProducto.value > 0) {
    const producto = productos.value.find(
      (p) => p.id === productoSeleccionado.value?.id
    );
    detallesVenta.value.push({
      idProducto: productoSeleccionado.value.id,
      cantidad: cantidadProducto.value,
      producto,
    });
    productoSeleccionado.value = null;
    cantidadProducto.value = 1;
    calcularTotal(); // Actualizar el total
  }
}

// Eliminar un detalle
function eliminarDetalle(index: number) {
  detallesVenta.value.splice(index, 1);
  calcularTotal(); // Actualizar el total
}

async function handleSave() {
  try {
    // Verificar si el cliente está seleccionado correctamente
    if (!cliente.value || !cliente.value.id) {
      throw new Error('El cliente es obligatorio.');
    }

    // Verificar si se han agregado productos
    if (detallesVenta.value.length === 0) {
      throw new Error('Debe agregar al menos un producto.');
    }

    const body = {
      idCliente: cliente.value.id,
      detalles: detallesVenta.value.map(detalle => ({
        idProducto: detalle.idProducto,
        cantidad: detalle.cantidad,
      })),
      fecha: venta.value.fecha,
      total: venta.value.total,
    };

    if (props.modoEdicion) {
      await http.patch(`${ENDPOINT}/${venta.value.id}`, body);
    } else {
      await http.post(ENDPOINT, body);
    }

    emit('guardar');
    limpiarFormulario();
  } catch (error: any) {
    alert(error.message || 'Error al guardar la venta');
  }
}

function limpiarFormulario() {
  venta.value = {} as Venta;
  cliente.value = {} as Cliente;
  detallesVenta.value = [];
  dialogVisible.value = false;
}
</script>

<template>
  <Dialog v-model:visible="dialogVisible" :header="(props.modoEdicion ? 'Editar' : 'Crear') + ' Venta'"
    style="width: 40rem">
    <div class="form-group">
      <label for="cliente">Cliente</label>
      <Select id="cliente" v-model="cliente" :options="clientes" optionLabel="nombreApellido" optionValue="id"
        placeholder="Seleccione un cliente" />
    </div>

    <div class="form-group">
      <label for="producto">Producto</label>
      <Select id="producto" v-model="productoSeleccionado" :options="productos" optionLabel="nombreProducto"
        optionValue="id" placeholder="Seleccione un producto" />
    </div>

    <div class="form-group">
      <label for="cantidad">Cantidad</label>
      <input type="number" v-model="cantidadProducto" min="1" placeholder="Cantidad" />
    </div>

    <Button label="Agregar Producto" @click="agregarProducto" />
    <ul>
      <li v-for="(detalle, index) in detallesVenta" :key="detalle.idProducto">
        Producto: {{ detalle.producto?.nombreProducto }} | Cantidad: {{ detalle.cantidad }} | Subtotal: {{
          (detalle.producto?.precio || 0) * detalle.cantidad }}
        <Button label="Eliminar" icon="pi pi-trash" @click="eliminarDetalle(index)" />
      </li>
    </ul>

    <div class="form-group">
      <label for="fecha">Fecha</label>
      <input type="date" v-model="venta.fecha" />
    </div>

    <div class="form-group">
      <label for="total">Total</label>
      <input type="number" v-model="venta.total" readonly />
    </div>

    <div class="flex justify-end gap-2">
      <Button label="Cancelar" icon="pi pi-times" severity="secondary" @click="dialogVisible = false" />
      <Button label="Guardar" icon="pi pi-save" @click="handleSave" />
    </div>
  </Dialog>
</template>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}
</style>
