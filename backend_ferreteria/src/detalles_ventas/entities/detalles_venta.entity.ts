import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Venta } from '../../ventas/entities/venta.entity';
import { Producto } from '../../productos/entities/producto.entity';

@Entity('detalles_ventas')
export class DetalleVenta {
  @PrimaryGeneratedColumn('uuid')
  id_detalle: string;

  @ManyToOne(() => Venta, venta => venta.detalleVentas)
  venta: Venta;

  @ManyToOne(() => Producto)
  producto: Producto;

  @Column('int', { nullable: false })
  cantidad: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  precio_unitario: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  subtotal: number;
}
