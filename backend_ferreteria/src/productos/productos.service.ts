import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Repository } from 'typeorm';
import { Categoria } from 'src/categorias/entities/categoria.entity';

@Injectable()
export class ProductosService {
  constructor(@InjectRepository(Producto) private productosRepository: Repository<Producto>) {}

  async create(createProductoDto: CreateProductoDto): Promise<Producto> {
    const existe = await this.productosRepository.findOne({
      where: {
        nombreProducto: createProductoDto.nombreProducto.trim(), // Asegúrate de que el nombre de la propiedad sea correcto
        descripcion: createProductoDto.descripcion.trim(), // El nombre de la propiedad también debe ser correcto
        categoria: { id_categoria: createProductoDto.idCategoria }, // Asegúrate de que la propiedad sea correcta
      },
      relations: ['categoria'], // Esto asegura que se carguen las relaciones si es necesario
    });

    if (existe) {
      throw new ConflictException('El producto ya existe');
    }

    const productoNuevo = this.productosRepository.create({
      nombreProducto: createProductoDto.nombreProducto.trim(),
      descripcion: createProductoDto.descripcion.trim(),
      precio: createProductoDto.precio,
      stock: createProductoDto.stock,
      categoria: { id_categoria: createProductoDto.idCategoria }, // Asegúrate de que la propiedad sea correcta
    });

    return this.productosRepository.save(productoNuevo);
  }

  async findAll(): Promise<Producto[]> {
    return this.productosRepository.find({ relations: ['categoria'] });
  }

  async findAllByCliente(idCategoria: number): Promise<Producto[]> {
    return this.productosRepository
      .createQueryBuilder('producto')
      .leftJoinAndSelect('producto.categoria', 'categoria')
      .where('categoria.id_categoria = :idCategoria', { idCategoria })
      .getMany();
  }

  async findOne(id: string): Promise<Producto> {
    const producto = await this.productosRepository.findOne({
      where: { id_producto: id }, // Asegúrate de que el nombre de la propiedad sea correcto
      relations: ['categoria'],
    });
    if (!producto) {
      throw new NotFoundException(`El producto ${id} no existe`);
    }
    return producto;
  }

  async update(id: string, updateProductoDto: UpdateProductoDto): Promise<Producto> {
    const producto = await this.findOne(id);
    const productoUpdate = Object.assign(producto, updateProductoDto);
    productoUpdate.categoria = { id_categoria: updateProductoDto.idCategoria } as Categoria; // Asegúrate de que la propiedad sea correcta
    return this.productosRepository.save(productoUpdate);
  }

  async remove(id: string) {
    const producto = await this.findOne(id);
    return this.productosRepository.delete(producto.id_producto); // Asegúrate de que el nombre de la propiedad sea correcto
  }
}
