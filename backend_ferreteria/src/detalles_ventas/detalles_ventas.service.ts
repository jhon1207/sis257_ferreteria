import { Injectable } from '@nestjs/common';
import { CreateDetallesVentaDto } from './dto/create-detalles_venta.dto';
import { UpdateDetallesVentaDto } from './dto/update-detalles_venta.dto';

@Injectable()
export class DetallesVentasService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(_createDetallesVentaDto: CreateDetallesVentaDto) {
    return 'This action adds a new detallesVenta';
  }

  findAll() {
    return `This action returns all detallesVentas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detallesVenta`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateDetallesVentaDto: UpdateDetallesVentaDto) {
    return `This action updates a #${id} detallesVenta`;
  }

  remove(id: number) {
    return `This action removes a #${id} detallesVenta`;
  }
}
