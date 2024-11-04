import type { Producto } from './producto'
import type { Venta } from './venta'

export interface DetalleVenta {
  id_venta: string
  id_producto: string
  cantidad: number
  precio_unitario: number
  subtotal: number
  producto: Producto
  venta: Venta
}
