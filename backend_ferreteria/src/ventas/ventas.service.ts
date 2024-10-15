import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Venta } from './entities/venta.entity';

@Injectable()
export class VentasService {
  constructor(
    @InjectRepository(Venta)
    private readonly ventasRepository: Repository<Venta>,
  ) {}

  // Crear nueva venta
  async create(createVentaDto: CreateVentaDto): Promise<Venta> {
    const nuevaVenta = this.ventasRepository.create(createVentaDto);
    return this.ventasRepository.save(nuevaVenta);
  }

  // Obtener todas las ventas
  findAll(): Promise<Venta[]> {
    return this.ventasRepository.find({ relations: ['cliente', 'usuario'] });
  }

  // Obtener una venta por ID
  async findOne(id_venta: string): Promise<Venta> {
    const venta = await this.ventasRepository.findOne({
      where: { id_venta }, // Asegúrate de usar el campo 'id' si es la clave primaria

      relations: ['cliente', 'usuario'],
    });
    if (!venta) {
      throw new NotFoundException(`Venta con ID ${id_venta} no encontrada`);
    }
    return venta;
  }

  // Actualizar una venta por ID
  async update(id: string, updateVentaDto: UpdateVentaDto): Promise<Venta> {
    const venta = await this.findOne(id);
    if (!venta) {
      throw new NotFoundException(`Venta con ID ${id} no encontrada`);
    }
    await this.ventasRepository.update(id, updateVentaDto);
    return this.findOne(id);
  }

  // Eliminar una venta por ID
  async remove(id: string): Promise<void> {
    const resultado = await this.ventasRepository.delete(id);
    if (!resultado.affected) {
      throw new NotFoundException(`Venta con ID ${id} no encontrada`);
    }
  }
}
