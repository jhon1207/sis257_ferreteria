import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import { Venta } from '../../ventas/entities/venta.entity';
import * as bcrypt from 'bcrypt';

@Entity('usuarios')
export class Usuario {
  // Primary Key
  @PrimaryGeneratedColumn('identity')
  id: number;

  // Campos principales
  @Column('varchar', { length: 15 })
  usuario: string;

  @Column('varchar', { length: 250, select: false })
  clave: string;

  @Column('varchar', { length: 50 })
  email: string;

  @Column('varchar', { length: 15 })
  rol: string;

  @Column('boolean')
  premium: boolean;

  // Timestamps
  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @DeleteDateColumn({ name: 'fecha_eliminacion', select: false })
  fechaEliminacion: Date;

  // Relaciones
  //@OneToMany(() => Venta, venta => venta.usuario)
  //ventas: Venta[];

  // Métodos
  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    const salt = await bcrypt.genSalt();
    this.clave = await bcrypt.hash(this.clave, salt);
  }

  async validatePassword(plainPassword: string): Promise<boolean> {
    return bcrypt.compare(plainPassword, this.clave);
  }
}
