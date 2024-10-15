import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
  OneToMany,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Cliente } from '../../clientes/entities/cliente.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { DetalleVenta } from '../../detalles_ventas/entities/detalles_venta.entity'; // Asegúrate de importar DetalleVenta

@Entity('ventas')
export class Venta {
  @PrimaryGeneratedColumn('uuid')
  id_venta: string;

  @CreateDateColumn({ name: 'fecha' })
  fecha: Date;

  @ManyToOne(() => Cliente, cliente => cliente.ventas, { nullable: false })
  cliente: Cliente;

  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  total: number;

  @ManyToOne(() => Usuario, usuario => usuario.ventas, { nullable: false })
  usuario: Usuario;

  @OneToMany(() => DetalleVenta, detalleVenta => detalleVenta.venta, { cascade: true })
  detalleVentas: DetalleVenta[]; // Relación uno a muchos con DetalleVenta

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @DeleteDateColumn({ name: 'fecha_eliminacion', select: false })
  fechaEliminacion: Date;
}
