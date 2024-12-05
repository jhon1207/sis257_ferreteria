import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Venta } from './entities/venta.entity';
import { VentasService } from './ventas.service';
import { VentasController } from './ventas.controller';
import { Producto } from 'src/productos/entities/producto.entity';
import { DetallesVentasModule } from 'src/detalles_ventas/detalles_ventas.module';
import { DetalleVenta } from 'src/detalles_ventas/entities/detalles_venta.entity';
import { Cliente } from 'src/clientes/entities/cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Venta, Producto, DetalleVenta, Cliente]),forwardRef(() => DetallesVentasModule), ],
  providers: [VentasService],
  controllers: [VentasController],
  exports: [TypeOrmModule],
})
export class VentasModule {}
