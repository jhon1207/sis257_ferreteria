import { Module } from '@nestjs/common';
import { DetallesVentasService } from './detalles_ventas.service'; // Cambia al servicio correcto
import { DetallesVentasController } from './detalles_ventas.controller'; // Cambia al controlador correcto
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetalleVenta } from './entities/detalles_venta.entity'; // Cambia a la entidad correcta

@Module({
  imports: [TypeOrmModule.forFeature([DetalleVenta])],
  controllers: [DetallesVentasController],
  providers: [DetallesVentasService],
})
export class DetallesVentasModule {} // Cambia el nombre del módulo
