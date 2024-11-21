import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDetallesVentaDto } from './dto/create-detalles_venta.dto';
import { UpdateDetallesVentaDto } from './dto/update-detalles_venta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DetalleVenta } from './entities/detalles_venta.entity';
import { Repository } from 'typeorm';
import { Venta } from '../ventas/entities/venta.entity';
import { Producto } from '../productos/entities/producto.entity';

@Injectable()
export class DetallesVentasService {
  constructor(
    @InjectRepository(DetalleVenta)
    private detallesVentasRepository: Repository<DetalleVenta>,
    @InjectRepository(Venta)
    private ventasRepository: Repository<Venta>,
    @InjectRepository(Producto)
    private productosRepository: Repository<Producto>,
  ) {}

  async create(createDetallesVentaDto: CreateDetallesVentaDto): Promise<DetalleVenta> {
    const venta = await this.ventasRepository.findOneBy({
      id: createDetallesVentaDto.id_venta,
    });
    if (!venta) {
      throw new NotFoundException(`La venta con ID ${createDetallesVentaDto.id_venta} no existe`);
    }

    const producto = await this.productosRepository.findOneBy({
      id: createDetallesVentaDto.id_producto,
    });
    if (!producto) {
      throw new NotFoundException(
        `El producto con ID ${createDetallesVentaDto.id_producto} no existe`,
      );
    }

    const detalleVenta = this.detallesVentasRepository.create({
      venta,
      producto,
      cantidad: createDetallesVentaDto.cantidad,
      precio_unitario: createDetallesVentaDto.precio_unitario,
      subtotal: createDetallesVentaDto.subtotal,
    });

    return this.detallesVentasRepository.save(detalleVenta);
  }

  async findAll(): Promise<DetalleVenta[]> {
    return this.detallesVentasRepository.find({ relations: ['venta', 'producto'] });
  }

  async findOne(id: number): Promise<DetalleVenta> {
    const detalleVenta = await this.detallesVentasRepository.findOne({
      where: { id },
      relations: ['venta', 'producto'],
    });
    if (!detalleVenta) {
      throw new NotFoundException(`El detalle de venta con ID ${id} no existe`);
    }
    return detalleVenta;
  }

  async update(id: number, updateDetallesVentaDto: UpdateDetallesVentaDto): Promise<DetalleVenta> {
    const detalleVenta = await this.findOne(id);

    Object.assign(detalleVenta, updateDetallesVentaDto);

    return this.detallesVentasRepository.save(detalleVenta);
  }

  async remove(id: number): Promise<void> {
    const detalleVenta = await this.findOne(id);
    await this.detallesVentasRepository.delete(detalleVenta.id);
  }
}
