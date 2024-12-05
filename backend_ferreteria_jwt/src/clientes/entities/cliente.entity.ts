import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Venta } from '../../ventas/entities/venta.entity';

@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { name: 'nombre_apellido', length: 100, nullable:true})
  nombreApellido: string;
  /*
  @Column('varchar', { length: 100, nullable: true })
  apellido: string;
  */
  @Column('varchar', { length: 20 })
  telefono: string;

  @Column('varchar', { length: 255 })
  email: string;

  @Column('varchar', { length: 100 })
  direccion: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @DeleteDateColumn({ name: 'fecha_eliminacion', select: false })
  fechaEliminacion: Date;
  
  @OneToMany(() => Venta, venta => venta.cliente)
  ventas: Venta[]; 
}
