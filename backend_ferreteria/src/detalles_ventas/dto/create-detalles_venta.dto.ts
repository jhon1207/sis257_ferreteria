import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class CreateDetallesVentaDto {
  @ApiProperty()
  @IsUUID('4', { message: 'El ID de la venta debe ser un UUID válido' })
  @IsNotEmpty({ message: 'El campo id_venta no debe ser vacío' })
  readonly id: number;

  @ApiProperty()
  @IsUUID('4', { message: 'El ID del producto debe ser un UUID válido' })
  @IsNotEmpty({ message: 'El campo id_producto no debe ser vacío' })
  readonly id_producto: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo cantidad no debe ser vacío' })
  @IsNumber({}, { message: 'El campo cantidad debe ser un número' })
  readonly cantidad: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo precio_unitario no debe ser vacío' })
  @IsNumber({}, { message: 'El campo precio_unitario debe ser un número' })
  readonly precio_unitario: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo subtotal no debe ser vacío' })
  @IsNumber({}, { message: 'El campo subtotal debe ser un número' })
  readonly subtotal: number;
}
