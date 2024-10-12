import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity('productos')
  export class Producto {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column('varchar', { length: 100, nullable: false })
    nombreProducto: string;
  
    @Column('varchar', { length: 100, nullable: true })
    descripcion: string;
  
    @Column('decimal', { precision: 10, scale: 2 })
    precio: number;
  
    @Column('int', { default: 0 })
    stock: number;
  
    @Column('varchar', { length: 100, nullable: true })
    categoria: string;
  
    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;
  
    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;
  
    @DeleteDateColumn({ name: 'fecha_eliminacion', select: false })
    fechaEliminacion: Date;
  }
  

