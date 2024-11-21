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

  async create(createVentaDto: CreateVentaDto): Promise<Venta> {
    const nuevaVenta = this.ventasRepository.create(createVentaDto);
    return this.ventasRepository.save(nuevaVenta);
  }

  findAll(): Promise<Venta[]> {
    return this.ventasRepository.find({ relations: ['cliente', 'usuario'] });
  }

  async findOne(id: number): Promise<Venta> {
    const venta = await this.ventasRepository.findOne({
      where: { id },

      relations: ['cliente', 'usuario'],
    });
    if (!venta) {
      throw new NotFoundException(`Venta con ID ${id} no encontrada`);
    }
    return venta;
  }

  async update(id: number, updateVentaDto: UpdateVentaDto): Promise<Venta> {
    const venta = await this.findOne(id);
    if (!venta) {
      throw new NotFoundException(`Venta con ID ${id} no encontrada`);
    }
    await this.ventasRepository.update(id, updateVentaDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    const resultado = await this.ventasRepository.delete(id);
    if (!resultado.affected) {
      throw new NotFoundException(`Venta con ID ${id} no encontrada`);
    }
  }
}
