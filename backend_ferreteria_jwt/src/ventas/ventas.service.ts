import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Venta } from './entities/venta.entity';
import { Producto } from 'src/productos/entities/producto.entity';
import { CreateVentaDto } from './dto/create-venta.dto';
import { DetalleVenta } from 'src/detalles_ventas/entities/detalles_venta.entity';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { Cliente } from 'src/clientes/entities/cliente.entity';
import { EntityManager } from 'typeorm'; // Para transacciones

@Injectable()
export class VentasService {
  constructor(
    @InjectRepository(Venta)
    private readonly ventasRepository: Repository<Venta>,
    @InjectRepository(DetalleVenta)
    private readonly detallesRepository: Repository<DetalleVenta>,
    @InjectRepository(Producto)
    private readonly productosRepository: Repository<Producto>,
    @InjectRepository(Cliente)
    private readonly clientesRepository: Repository<Cliente>,
    private readonly entityManager: EntityManager, // Inyectamos EntityManager para manejo de transacciones
  ) {}

  async create(createVentaDto: CreateVentaDto): Promise<Venta> {
    // Inicia una transacción para garantizar que todas las operaciones sean atómicas
    return await this.entityManager.transaction(async (manager) => {
      // Verificar existencia del cliente
      const cliente = await this.clientesRepository.findOne({
        where: { id: createVentaDto.idCliente },
      });
      if (!cliente) {
        throw new NotFoundException(`Cliente con ID ${createVentaDto.idCliente} no encontrado`);
      }

      const detalles: DetalleVenta[] = [];
      let total = 0;

      for (const detalleDto of createVentaDto.detalles) {
        
        const producto = await this.productosRepository.findOne({
          where: { id: createVentaDto.idProducto },
        });
        if (!producto) {
          throw new NotFoundException(`Producto con ID ${detalleDto.idProducto} no encontrado`);
        }

        // Verificación de stock
        if (producto.stock < detalleDto.cantidad) {
          throw new ConflictException(`Stock insuficiente para el producto ${producto.nombreProducto}`);
        }

        // Reducir el stock del producto
        producto.stock -= detalleDto.cantidad;
        await manager.save(producto); // Usamos el manager para guardar dentro de la transacción

        // Calcular el subtotal
        const subTotal = producto.precio * detalleDto.cantidad;
        total += subTotal;

        // Crear el detalle de la venta
        const detalle = manager.create(DetalleVenta, {
          producto,
          cantidad: detalleDto.cantidad,
          subTotal,
        });
        detalles.push(detalle);
      }

      // Crear la venta
      const venta = manager.create(Venta, {
        cliente, // Directamente asociamos la entidad cliente
        detalles,
        total,
      });

      // Guardar la venta en la transacción
      return await manager.save(venta);
    });
  }

  findAll(): Promise<Venta[]> {
    return this.ventasRepository.find({ relations: ['cliente', 'detalles', 'detalles.producto'] });
  }

  async findOne(id: number): Promise<Venta> {
    const venta = await this.ventasRepository.findOne({
      where: { id },
      relations: ['cliente', 'detalles', 'detalles.producto'],
    });

    if (!venta) {
      throw new NotFoundException(`Venta con ID ${id} no encontrada`);
    }
    return venta;
  }

  async update(id: number, updateVentaDto: UpdateVentaDto): Promise<Venta> {
    const venta = await this.findOne(id);
    const ventaUpdate = Object.assign(venta, updateVentaDto);
    ventaUpdate.cliente = { id: updateVentaDto.idCliente } as Cliente;
    return this.ventasRepository.save(ventaUpdate);
  }

  async remove(id: string): Promise<void> {
    const resultado = await this.ventasRepository.delete(id);
    if (!resultado.affected) {
      throw new NotFoundException(`Venta con ID ${id} no encontrada`);
    }
  }
}
