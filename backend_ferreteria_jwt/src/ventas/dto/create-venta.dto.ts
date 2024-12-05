import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsDateString, IsNotEmpty, IsArray, ValidateNested } from 'class-validator';
import { CreateDetallesVentaDto } from 'src/detalles_ventas/dto/create-detalles_venta.dto';
import { DetalleVenta } from 'src/detalles_ventas/entities/detalles_venta.entity';

export class CreateVentaDto {
  @ApiProperty({
    example: '2024-10-14',
  })
  @IsNotEmpty({ message: 'El campo fecha es obligatorio' })
  @IsDateString({}, { message: 'El campo fecha debe ser una cadena válida en formato de fecha' })
  readonly fecha: Date;

  @ApiProperty({
    description: 'ID del cliente que realiza la venta',
    example: 1,
  })
  @IsNotEmpty({ message: 'El campo idCliente es obligatorio' })
  @IsNumber({}, { message: 'El campo idCliente debe ser de tipo numérico' })
  readonly idCliente: number;

  @ApiProperty({
    description: 'ID del producto que realiza la venta',
    example: 1,
  })
  @IsNotEmpty({ message: 'El campo idProducto es obligatorio' })
  @IsNumber({}, { message: 'El campo idProdcuto debe ser de tipo numérico' })
  readonly idProducto: number;
  /*
  @ApiProperty({
    description: 'Monto total de la venta',
  })
  @IsNotEmpty({ message: 'El campo total es obligatorio' })
  @IsNumber({}, { message: 'El campo total debe ser de tipo numérico' })
  readonly total: number;
*/
  @ApiProperty({
    description: 'Detalles de la venta (productos comprados, cantidad, precio, etc.)',
    type: [CreateDetallesVentaDto], // Indica que es un array de objetos DetalleVentaDto
  })
  @IsArray()
  @ValidateNested({ each: true }) // Valida cada elemento del arreglo
  @Type(() => CreateDetallesVentaDto) // Transforma el objeto para validación
  detalles: CreateDetallesVentaDto[];
}
