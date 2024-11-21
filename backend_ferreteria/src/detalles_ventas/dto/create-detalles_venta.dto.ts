import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class CreateDetallesVentaDto {
<<<<<<< HEAD
=======
  @ApiProperty()
  @IsUUID('4', { message: 'El ID de la venta debe ser un UUID válido' })
  @IsNotEmpty({ message: 'El campo id_venta no debe ser vacío' })
  readonly id: number;

  @ApiProperty()
  @IsUUID('4', { message: 'El ID del producto debe ser un UUID válido' })
  @IsNotEmpty({ message: 'El campo id_producto no debe ser vacío' })
  readonly id_producto: number;
>>>>>>> c99a4fd29b138cec348ee33b947b02e9c9dfbb00

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

  @ApiProperty({
    description: 'ID de la venta que realiza la compra',
  })
  @IsNotEmpty({ message: 'El campo id_venta es obligatorio' })
  @IsNumber({}, { message: 'El campo id_venta debe ser de tipo numérico' })
  readonly id_venta: number;

  @ApiProperty({
    description: 'ID del producto que realiza la compra',
  })
  @IsNotEmpty({ message: 'El campo id_producto es obligatorio' })
  @IsNumber({}, { message: 'El campo id_producto debe ser de tipo numérico' })
  readonly id_producto: number;
}
