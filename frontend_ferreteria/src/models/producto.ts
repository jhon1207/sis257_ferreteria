import type { Categoria } from './categoria'

export interface Producto {
  id: number
  idCategoria: number
  nombreProducto: string
  descripcion: string
  precio: number
  stock: number
  categoria: Categoria
}
