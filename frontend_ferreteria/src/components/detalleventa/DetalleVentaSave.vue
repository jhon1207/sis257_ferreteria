<script setup lang="ts">
import type { DetalleVenta } from '@/models/detalleventa'
import type { Producto } from '@/models/producto'
import http from '@/plugins/axios'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown' 
import { computed, ref, watch } from 'vue'

const ENDPOINT = 'detalles_venta'
const props = defineProps({
  mostrar: Boolean,
  detalleVenta: {
    type: Object as () => DetalleVenta,
    default: () => ({}) as DetalleVenta,
  },
  modoEdicion: Boolean,
})
const emit = defineEmits(['guardar', 'close'])

const productos = ref<Producto[]>([])
const producto = ref<Producto>({} as Producto)
const detalleVenta = ref<DetalleVenta>({ ...props.detalleVenta })

const dialogVisible = computed({
  get: () => props.mostrar,
  set: value => {
    if (!value) emit('close')
  },
})


async function obtenerProductos() {
  productos.value = await http.get('productos').then(response => response.data)
}


watch(
  () => props.detalleVenta,
  async newVal => {
    detalleVenta.value = { ...newVal }
    producto.value = detalleVenta.value?.producto ?? ({} as Producto)
    if (producto.value?.id) {
      await obtenerProductos()
      detalleVenta.value.producto =
        productos.value.find(p => p.id === detalleVenta.value.producto?.id) ||
        ({} as Producto)
    }
  },
)

function calculateSubtotal() {
  detalleVenta.value.subtotal =
    detalleVenta.value.cantidad * detalleVenta.value.precio_unitario
}

async function handleSave() {
  try {
    const body = {
      id_venta: detalleVenta.value.id_venta,
      id_producto: producto.value.id,
      cantidad: detalleVenta.value.cantidad,
      precio_unitario: detalleVenta.value.precio_unitario,
      subtotal: detalleVenta.value.subtotal,
    }
    if (props.modoEdicion) {
      await http.patch(`${ENDPOINT}/${detalleVenta.value.id}`, body)
    } else {
      await http.post(ENDPOINT, body)
    }
    emit('guardar')
    detalleVenta.value = {} as DetalleVenta
    producto.value = {} as Producto
    dialogVisible.value = false
  } catch (error: any) {
    alert(error?.response?.data?.message)
  }
}

watch(
  () => props.mostrar,
  nuevoValor => {
    if (nuevoValor) {
      obtenerProductos()
    }
  },
)
</script>

<template>
  <div class="card flex justify-center">
    <Dialog
      v-model:visible="dialogVisible"
      :header="(props.modoEdicion ? 'Editar' : 'Crear') + ' Detalle de Venta'"
      style="width: 25rem"
    >
      <div class="flex items-center gap-4 mb-4">
        <label for="producto" class="font-semibold w-4">Producto</label>
        <Dropdown
          id="producto"
          v-model="producto"
          :options="productos"
          optionLabel="nombreProducto"
          class="flex-auto"
          placeholder="Seleccione un producto"
        />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="cantidad" class="font-semibold w-4">Cantidad</label>
        <InputText
          id="cantidad"
          type="number"
          v-model.number="detalleVenta.cantidad"
          @input="calculateSubtotal"
          class="flex-auto"
          autocomplete="off"
        />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="precio_unitario" class="font-semibold w-4"
          >Precio Unitario</label
        >
        <InputText
          id="precio_unitario"
          type="number"
          v-model.number="detalleVenta.precio_unitario"
          @input="calculateSubtotal"
          class="flex-auto"
          autocomplete="off"
        />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="subtotal" class="font-semibold w-4">Subtotal</label>
        <InputText
          id="subtotal"
          type="number"
          v-model.number="detalleVenta.subtotal"
          class="flex-auto"
          readonly
        />
      </div>
      <div class="flex justify-end gap-2">
        <Button
          type="button"
          label="Cancelar"
          icon="pi pi-times"
          severity="secondary"
          @click="dialogVisible = false"
        />
        <Button
          type="button"
          label="Guardar"
          icon="pi pi-save"
          @click="handleSave"
        />
      </div>
    </Dialog>
  </div>
</template>

<style scoped></style>
