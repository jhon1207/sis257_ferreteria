import type { Producto } from './producto'
//import type { Venta } from './venta'

export interface DetalleVenta {
  id: number
  //idVenta: number
  idProducto: number
  cantidad: number
  precioUnitario: number
  subTotal: number
  producto: Producto
  //venta: Venta
}
