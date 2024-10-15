import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Categoria } from '../../categorias/entities/categoria.entity';
import { DetalleVenta } from 'src/detalles_ventas/entities/detalles_venta.entity';

@Entity('productos')
export class Producto {
  @PrimaryGeneratedColumn('uuid')
  id_producto: string;

  @Column({ name: 'nombre_producto', type: 'varchar', length: 255 })
  nombreProducto: string;

  @Column({ name: 'descripcion', type: 'text', nullable: true })
  descripcion: string;

  @Column({ name: 'precio', type: 'decimal', precision: 10, scale: 2 })
  precio: number;

  @Column({ name: 'stock', type: 'int' })
  stock: number;

  @ManyToOne(() => Categoria, categoria => categoria.productos, { nullable: false })
  categoria: Categoria; // Cambiado de Categoria[] a Categoria

  @OneToMany(() => DetalleVenta, detalleVenta => detalleVenta.producto) // Relación inversa
  detalleVentas: DetalleVenta[]; // Esta propiedad almacenará los detalles de venta
}
