import type { Venta } from './venta'

export interface Cliente {
  id: number
  idVenta: number
  nombreApellido: string
  telefono: string
  email: string
  direccion: string
  venta: Venta
}
