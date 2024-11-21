import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Categoria } from '../../categorias/entities/categoria.entity';
import { DetalleVenta } from 'src/detalles_ventas/entities/detalles_venta.entity';

@Entity('productos')
export class Producto {
<<<<<<< HEAD
  @PrimaryGeneratedColumn()
=======
  @PrimaryGeneratedColumn('uuid')
>>>>>>> c99a4fd29b138cec348ee33b947b02e9c9dfbb00
  id: number;

  @Column({ name: 'nombre_producto', type: 'varchar', length: 255 })
  nombreProducto: string;

  @Column({ name: 'descripcion', type: 'text', nullable: true })
  descripcion: string;

  @Column({ name: 'precio', type: 'decimal', precision: 10, scale: 2 })
  precio: number;

  @Column({ name: 'stock', type: 'int' })
  stock: number;

  @ManyToOne(() => Categoria, categoria => categoria.productos)
  @JoinColumn({ name: 'id_categoria', referencedColumnName: 'id' })
  categoria: Categoria;

  @OneToMany(() => DetalleVenta, detalleventa => detalleventa.producto)
  detalleventas: DetalleVenta[];
}
