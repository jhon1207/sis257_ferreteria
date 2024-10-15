import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany, // Asegúrate de importar OneToMany
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Venta } from '../../ventas/entities/venta.entity'; // Ajusta la ruta según tu estructura

@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 100, nullable: false })
  nombre: string;

  @Column('varchar', { length: 100, nullable: true })
  apellido: string;

  @Column('varchar', { length: 20, nullable: false })
  telefono: string;

  @Column('varchar', { length: 255, nullable: true })
  email: string;

  @Column('varchar', { length: 100, nullable: false })
  direccion: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @DeleteDateColumn({ name: 'fecha_eliminacion', select: false })
  fechaEliminacion: Date;

  // Relación con la entidad Venta
  @OneToMany(() => Venta, venta => venta.cliente)
  ventas: Venta[];
}
