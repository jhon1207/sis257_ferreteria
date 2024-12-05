<script setup lang="ts">
import type { DetalleVenta } from '@/models/detalleventa'
import type { Producto } from '@/models/producto'
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

// Watch para cargar datos al editar
watch(
  () => props.detalleVenta,
  async newVal => {
    detalleVenta.value = { ...newVal }
    producto.value = detalleVenta.value?.producto ?? ({} as Producto)
    if (producto.value?.id) {
      await obtenerProductos()
      detalleVenta.value.producto =
        productos.value.find(
          producto => producto.id === detalleVenta.value.producto.id,
        ) || ({} as Producto)
    }
  },
)

async function obtenerProductos() {
  productos.value = await http.get('productos').then(response => response.data)
}

async function handleSave() {
  try {
    const body = {
      idProducto: detalleVenta.value.producto.id,
      cantidad: detalleVenta.value.cantidad,
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
    <Dialog v-model:visible="dialogVisible" :header="(props.modoEdicion ? 'Editar' : 'Crear') + ' DetalleVenta'"
      style="width: 25rem">
      <div class="flex items-center gap-4 mb-4">
        <label for="producto" class="font-semibold w-4">Productos</label>
        <Select id="producto" v-model="detalleVenta.producto" :options="productos" optionLabel="nombreProducto"
          class="flex-auto" autofocus />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="cantidad" class="font-semibold w-4">Cantidad</label>
        <input type="number" class="form-control" v-model="detalleVenta.cantidad" placeholder="cantidad" required />
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
