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
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { DetalleVenta } from '../../detalles_ventas/entities/detalles_venta.entity';

@Entity('ventas')
export class Venta {
<<<<<<< HEAD
  @PrimaryGeneratedColumn()
=======
  @PrimaryGeneratedColumn('uuid')
>>>>>>> c99a4fd29b138cec348ee33b947b02e9c9dfbb00
  id: number;

  @CreateDateColumn({ name: 'fecha' })
  fecha: Date;

<<<<<<< HEAD
=======
  @ManyToOne(() => Cliente, (Cliente) => cliente.ventas)
  @JoinColumn({ name: 'id_cliente', referencedColumnName: 'id' })
  genero: Cliente;

>>>>>>> c99a4fd29b138cec348ee33b947b02e9c9dfbb00
  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  total: number;

  //@ManyToOne(() => Usuario, usuario => usuario.ventas, { nullable: false })
  //usuario: Usuario;

  @ManyToOne(() => Cliente, cliente => cliente.ventas)
  @JoinColumn({ name: 'id_cliente', referencedColumnName: 'id' })
  cliente: Cliente;

  @OneToMany(() => DetalleVenta, detalleventa => detalleventa.venta)
  detalleventas: DetalleVenta[];

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @DeleteDateColumn({ name: 'fecha_eliminacion', select: false })
  fechaEliminacion: Date;
}
