<script setup lang="ts">
import type { Venta } from '@/models/venta'
import type { Cliente } from '@/models/cliente'
import http from '@/plugins/axios'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputMask from 'primevue/inputmask'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import { computed, ref, watch } from 'vue'

const ENDPOINT = 'ventas'
const props = defineProps({
  mostrar: Boolean,
  venta: {
    type: Object as () => Venta,
    default: () => ({}) as Venta,
  },
  modoEdicion: Boolean,
})
const emit = defineEmits(['guardar', 'close'])

const clientes = ref<Cliente[]>([])

const cliente = ref<Cliente>({} as Cliente)
const venta = ref<Venta>({ ...props.venta })

const dialogVisible = computed({
  get: () => props.mostrar,
  set: value => {
    if (!value) emit('close')
  },
})

// Watch para cargar datos al editar
watch(
  () => props.venta,
  async newVal => {
    venta.value = { ...newVal }
    cliente.value = venta.value?.cliente ?? ({} as Cliente)
    if (cliente.value?.id) {
      await obtenerClientes()
      venta.value.cliente =
        clientes.value.find(cliente => cliente.id === venta.value.cliente.id) ||
        ({} as Cliente)
    }
  },
)

async function obtenerClientes() {
  clientes.value = await http.get('clientes').then(response => response.data)
}

async function handleSave() {
  try {
    const body = {
      idCliente: venta.value.cliente.id,
      fecha: venta.value.fecha,
      total: venta.value.total,
    }
    if (props.modoEdicion) {
      await http.patch(`${ENDPOINT}/${venta.value.id}`, body)
    } else {
      await http.post(ENDPOINT, body)
    }
    emit('guardar')
    venta.value = {} as Venta
    cliente.value = {} as Cliente
    dialogVisible.value = false
  } catch (error: any) {
    alert(error?.response?.data?.message)
  }
}

watch(
  () => props.mostrar,
  nuevoValor => {
    if (nuevoValor) {
      obtenerClientes()
    }
  },
)
</script>

<template>
  <div class="card flex justify-center">
    <Dialog
      v-model:visible="dialogVisible"
      :header="(props.modoEdicion ? 'Editar' : 'Crear') + ' Venta'"
      style="width: 25rem"
    >
      <div class="flex items-center gap-4 mb-4">
        <label for="cliente" class="font-semibold w-4">Clientes</label>
        <Select
          id="cliente"
          v-model="venta.cliente"
          :options="clientes"
          optionLabel="nombre"
          class="flex-auto"
          autofocus
        />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="fecha" class="font-semibold w-4">Fecha</label>
        <input
          type="date"
          id="fecha"
          v-model="venta.fecha"
          class="flex-auto"
          autocomplete="off"
          required
        />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="total" class="font-semibold w-4">Total</label>
        <input
          type="number"
          class="form-control"
          v-model="venta.total"
          placeholder="total"
          required
        />
      </div>
      <div class="flex justify-end gap-2">
        <Button
          type="button"
          label="Cancelar"
          icon="pi pi-times"
          severity="secondary"
          @click="dialogVisible = false"
        ></Button>
        <Button
          type="button"
          label="Guardar"
          icon="pi pi-save"
          @click="handleSave"
        ></Button>
      </div>
    </Dialog>
  </div>
</template>

<style scoped></style>
