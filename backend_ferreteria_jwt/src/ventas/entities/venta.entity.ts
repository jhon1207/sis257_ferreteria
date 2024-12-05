import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
  OneToMany,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
} from 'typeorm';
import { Cliente } from '../../clientes/entities/cliente.entity';
import { DetalleVenta } from '../../detalles_ventas/entities/detalles_venta.entity'; // Asegúrate de importar DetalleVenta
import { Producto } from 'src/productos/entities/producto.entity';

@Entity('ventas')
export class Venta {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: 'fecha' })
  fecha: Date;

  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  total: number;

  @ManyToOne(() => Cliente, cliente => cliente.ventas)
  @JoinColumn({ name: 'id_cliente', referencedColumnName: 'id' })
  cliente: Cliente;

  @ManyToOne(() => Producto, producto => producto.ventas)
  @JoinColumn({ name: 'idProducto', referencedColumnName: 'id' })
  producto: Producto;
  
  @OneToMany(() => DetalleVenta, detalleventa => detalleventa.venta)
  detalleventas: DetalleVenta[];

  @OneToMany(() => DetalleVenta, (detalle) => detalle.venta, { cascade: true })
  detalles: DetalleVenta[];

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @DeleteDateColumn({ name: 'fecha_eliminacion', select: false })
  fechaEliminacion: Date;
}
