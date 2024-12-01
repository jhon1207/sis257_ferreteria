<script setup lang="ts">
import type { Producto } from '@/models/producto'
import type { Categoria } from '@/models/categoria'
import http from '@/plugins/axios'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import { computed, ref, watch } from 'vue'

const ENDPOINT = 'productos'
const props = defineProps({
  mostrar: Boolean,
  producto: {
    type: Object as () => Producto,
    default: () => ({}) as Producto,
  },
  modoEdicion: Boolean,
})
const emit = defineEmits(['guardar', 'close'])

const categorias = ref<Categoria[]>([])

const categoria = ref<Categoria>({} as Categoria)
const producto = ref<Producto>({ ...props.producto })

const dialogVisible = computed({
  get: () => props.mostrar,
  set: value => {
    if (!value) emit('close')
  },
})

// Watch para cargar datos al editar
watch(
  () => props.producto,
  async newVal => {
    producto.value = { ...newVal }
    categoria.value = producto.value?.categoria ?? ({} as Categoria)
    if (categoria.value?.id) {
      await obtenerCategorias()
      producto.value.categoria =
        categorias.value.find(
          categoria => categoria.id === producto.value.categoria.id,
        ) || ({} as Categoria)
    }
  },
)

async function obtenerCategorias() {
  categorias.value = await http
    .get('categorias')
    .then(response => response.data)
}

async function handleSave() {
  try {
    producto.value.categoria = categoria.value
    const body = {
      idCategoria: producto.value.categoria.id,
      nombreProducto: producto.value.nombreProducto,
      descripcion: producto.value.descripcion,
      precio: producto.value.precio,
      stock: producto.value.stock,
    }
    if (props.modoEdicion) {
      await http.patch(`${ENDPOINT}/${producto.value.id}`, body)
    } else {
      await http.post(ENDPOINT, body)
    }
    emit('guardar')
    producto.value = {} as Producto
    categoria.value = {} as Categoria
    dialogVisible.value = false
  } catch (error: any) {
    alert(error?.response?.data?.message)
  }
}

watch(
  () => props.mostrar,
  nuevoValor => {
    if (nuevoValor) {
      obtenerCategorias()
    }
  },
)
</script>

<template>
  <div class="card flex justify-center">
    <Dialog
      v-model:visible="dialogVisible"
      :header="(props.modoEdicion ? 'Editar' : 'Crear') + ' Producto'"
      style="width: 25rem"
    >
      <div class="flex items-center gap-4 mb-4">
        <label for="categoria" class="font-semibold w-4">Categorias</label>
        <Select
          id="categoria"
          v-model="categoria"
          :options="categorias"
          optionLabel="descripcion"
          class="flex-auto"
        />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="nombreProducto" class="font-semibold w-4"
          >Nombre Producto</label
        >
        <InputText
          id="nombreProducto"
          v-model="producto.nombreProducto"
          class="flex-auto"
          autocomplete="off"
        />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="descripcion" class="font-semibold w-4">Descripcion</label>
        <InputText
          id="descripcion"
          v-model="producto.descripcion"
          class="flex-auto"
          autocomplete="off"
        />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="precio" class="font-semibold w-4">Precio</label>
        <input
          type="number"
          class="form-control"
          v-model="producto.precio"
          placeholder="Precio"
          required
        />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="stock" class="font-semibold w-4">Stock</label>
        <input
          type="number"
          class="form-control"
          v-model="producto.stock"
          placeholder="stock"
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
