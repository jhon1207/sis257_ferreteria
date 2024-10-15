import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Venta } from '../../ventas/entities/venta.entity'; // Ensure this path is correct
import { Producto } from '../../productos/entities/producto.entity'; // Ensure this path is correct

@Entity('detalles_ventas')
export class DetalleVenta {
  @PrimaryGeneratedColumn('uuid')
  id_detalle: string;

  @ManyToOne(() => Venta, venta => venta.detalleVentas)
  venta: Venta;

  @ManyToOne(() => Producto)
  producto: Producto; // Ensure this entity is defined correctly

  @Column('int', { nullable: false })
  cantidad: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  precio_unitario: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  subtotal: number; // Ensure this is calculated or stored correctly
}
