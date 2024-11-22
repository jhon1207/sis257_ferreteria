import type { Cliente } from './cliente'
import type { Usuario } from './usuario'

export interface Venta {
  id: number
  idCliente: number
  fecha: Date
  total: number
  cliente: Cliente
}
