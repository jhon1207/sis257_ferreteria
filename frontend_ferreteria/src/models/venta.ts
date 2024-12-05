import type { Cliente } from './cliente'
import type { DetalleVenta } from './detalleventa'
import type { Producto } from './producto'

export interface Venta {
  id: number
  idCliente: number
  idProducto: number
  fecha: Date
  total: number
  cliente: Cliente
  producto: Producto
  detalles: DetalleVenta[]
}
