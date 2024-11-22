<script setup lang="ts">
import type { DetalleVenta } from '@/models/detalleventa'
import type { Producto } from '@/models/producto'
import type { Venta } from '@/models/venta'
import http from '@/plugins/axios'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import Select from 'primevue/select'
import { computed, ref, watch } from 'vue'

const ENDPOINT = 'detalles-ventas'
const props = defineProps({
  mostrar: Boolean,
  detalleVenta: {
    type: Object as () => DetalleVenta,
    default: () => ({}) as DetalleVenta
  },
  modoEdicion: Boolean
})
const emit = defineEmits(['guardar', 'close'])

const ventas = ref<Venta[]>([])
const productos = ref<Producto[]>([])

const venta = ref<Venta>({} as Venta)
const producto = ref<Producto>({} as Producto)
const detalleVenta = ref<DetalleVenta>({ ...props.detalleVenta })

const dialogVisible = computed({
  get: () => props.mostrar,
  set: (value) => {
    if (!value) emit('close')
  }
})

// Watch para cargar datos al editar
watch(
  () => props.detalleVenta,
  async (newVal) => {
    detalleVenta.value = { ...newVal }
    venta.value = detalleVenta.value?.venta ?? ({} as Venta)
    producto.value = detalleVenta.value?.producto ?? ({} as Producto)
  }
)

async function obtenerVentas() {
  ventas.value = await http.get('ventas').then((response) => response.data)
}

async function obtenerProductos() {
  productos.value = await http.get('productos').then((response) => response.data)
}

async function handleSave() {
  try {
    const body = {
      idVenta: detalleVenta.value.venta.id,
      idProducto: detalleVenta.value.producto.id,
      cantidad: detalleVenta.value.cantidad,
      precioUnitario: detalleVenta.value.precioUnitario,
      subTotal: detalleVenta.value.subTotal,
    }
    if (props.modoEdicion) {
      await http.patch(`${ENDPOINT}/${detalleVenta.value.id}`, body)
    } else {
      await http.post(ENDPOINT, body)
    }
    emit('guardar')
    detalleVenta.value = {} as DetalleVenta
    venta.value = {} as Venta
    producto.value = {} as Producto
    dialogVisible.value = false
  } catch (error: any) {
    alert(error?.response?.data?.message)
  }
}

watch(
  () => props.mostrar,
  (nuevoValor) => {
    if (nuevoValor) {
      obtenerVentas()
      obtenerProductos()
    }
  }
)
</script>

<template>
  <div class="card flex justify-center">
    <Dialog v-model:visible="dialogVisible" :header="(props.modoEdicion ? 'Editar' : 'Crear') + ' DetalleVenta'"
      style="width: 25rem">
      <div class="flex items-center gap-4 mb-4">
        <label for="venta" class="font-semibold w-4">Ventas</label>
        <Select id="venta" v-model="detalleVenta.venta" :options="ventas" optionLabel="total" class="flex-auto"
          autofocus />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="producto" class="font-semibold w-4">Productos</label>
        <Select id="producto" v-model="detalleVenta.producto" :options="productos" optionLabel="nombreProducto"
          class="flex-auto" />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="cantidad" class="font-semibold w-4">Cantidad</label>
        <Input id="cantidad" v-model="detalleVenta.cantidad" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="preciounitario" class="font-semibold w-4">Precio Unitario</label>
        <Input id="preciounitario" v-model="detalleVenta.precioUnitario" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="subtotal" class="font-semibold w-4">SubTotal</label>
        <Input id="subtotal" v-model="detalleVenta.subTotal" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex justify-end gap-2">
        <Button type="button" label="Cancelar" icon="pi pi-times" severity="secondary"
          @click="dialogVisible = false"></Button>
        <Button type="button" label="Guardar" icon="pi pi-save" @click="handleSave"></Button>
      </div>
    </Dialog>
  </div>
</template>

<style scoped></style>
