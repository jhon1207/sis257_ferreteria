import type { Cliente } from './cliente'
import type { Usuario } from './usuario'

export interface Venta {
  id_venta: string
  fecha: string
  id_cliente: number
  id_usuario: number
  total: number
  cliente: Cliente
  usuario: Usuario
}
