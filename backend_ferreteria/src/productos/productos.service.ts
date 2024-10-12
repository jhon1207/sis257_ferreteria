import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductosService {
  constructor(@InjectRepository(Producto) private productosRepository: Repository<Producto>) {}

  async create(createProductoDto: CreateProductoDto): Promise<Producto> {
    const existe = await this.productosRepository.findOneBy({
      nombreProducto: createProductoDto.nombreProducto.trim(),
      descripcion: createProductoDto.descripcion.trim(),
    });

    if (existe) {
      throw new ConflictException('El producto ya existe');
    }

    return this.productosRepository.save({
      nombreProducto: createProductoDto.nombreProducto.trim(),
      descripcion: createProductoDto.descripcion.trim(),
      precio: createProductoDto.precio,
      stock: createProductoDto.stock,
      categoria: createProductoDto.categoria.trim(),
    });
  }

  async findAll(): Promise<Producto[]> {
    return this.productosRepository.find();
  }

  async findOne(id: number): Promise<Producto> {
    const cliente = await this.productosRepository.findOneBy({ id });
    if (!cliente) {
      throw new NotFoundException(`El cliente ${id} no existe`);
    }
    return cliente;
  }

  async update(id: number, updateProductoDto: UpdateProductoDto): Promise<Producto> {
    const producto = await this.findOne(id);
    const clienteUpdate = Object.assign(producto, updateProductoDto);
    return this.productosRepository.save(clienteUpdate);
  }

  async remove(id: number) {
    const producto = await this.findOne(id);
    return this.productosRepository.delete(producto.id);
  }
}
