import type { Venta } from './venta'

export interface Cliente {
  id: number
  idVenta: number
  nombre: string
  apellido: string
  telefono: string
  email: string
  direccion: string
  venta: Venta
}
