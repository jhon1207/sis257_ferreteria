<script setup lang="ts">
import type { Venta } from '@/models/venta'
import http from '@/plugins/axios'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
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

const dialogVisible = computed({
  get: () => props.mostrar,
  set: value => {
    if (!value) emit('close')
  },
})

const venta = ref<Venta>({ ...props.venta })
watch(
  () => props.venta,
  newVal => {
    venta.value = { ...newVal }
  },
)

async function handleSave() {
  try {
    const body = {
      fecha: venta.value.fecha,
      id_cliente: venta.value.id_cliente,
      id_usuario: venta.value.id_usuario,
      total: venta.value.total,
    }
    if (props.modoEdicion) {
      await http.patch(`${ENDPOINT}/${venta.value.id_venta}`, body)
    } else {
      await http.post(ENDPOINT, body)
    }
    emit('guardar')
    venta.value = {} as Venta
    dialogVisible.value = false
  } catch (error: any) {
    alert(error?.response?.data?.message)
  }
}
</script>
<template>
  <div class="card flex justify-center">
    <Dialog
      v-model:visible="dialogVisible"
      :header="props.modoEdicion ? 'Editar Venta' : 'Crear Venta'"
      style="width: 25rem"
    >
      <div class="flex items-center gap-4 mb-4">
        <label for="fecha" class="font-semibold w-4">Fecha</label>
        <InputText
          id="fecha"
          v-model="venta.fecha"
          class="flex-auto"
          autocomplete="off"
        />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="id_cliente" class="font-semibold w-4">ID Cliente</label>
        <InputText
          id="id_cliente"
          v-model="venta.id_cliente"
          class="flex-auto"
          autocomplete="off"
        />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="id_usuario" class="font-semibold w-4">ID Usuario</label>
        <InputText
          id="id_usuario"
          v-model="venta.id_usuario"
          class="flex-auto"
          autocomplete="off"
        />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="total" class="font-semibold w-4">Total</label>
        <InputText
          id="total"
          v-model.number="venta.total"
          class="flex-auto"
          autocomplete="off"
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
