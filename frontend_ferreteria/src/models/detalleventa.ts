import type { Producto } from './producto'
import type { Venta } from './venta';

export interface DetalleVenta {
  id?: number;
  idProducto: number;
  idVenta: number;
  cantidad: number;
  producto?: {
    id: number;
    idCategoria: number;
    nombreProducto: string;
    descripcion: string;
    precio: number;
    stock: number;
    categoria: {
      id: number;
      descripcion: string;
    };
  };
  venta: Venta
}

