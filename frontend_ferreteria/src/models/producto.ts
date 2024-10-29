import type { Categoria } from "./categoria"

export interface Producto {
    id: number
    nombreProducto: string
    descripcion: string
    precio: number
    stock: number
    categoria: Categoria
}