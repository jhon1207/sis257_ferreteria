import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsDateString, IsNotEmpty } from 'class-validator';

export class CreateVentaDto {
  @ApiProperty({
    description: 'Fecha de la transacción en formato ISO',
    example: '2024-10-14T10:30:00',
  })
  @IsNotEmpty({ message: 'El campo fecha es obligatorio' })
  @IsDateString({}, { message: 'El campo fecha debe ser una cadena válida en formato de fecha' })
  readonly fecha: string;

  @ApiProperty({
    description: 'ID del cliente que realiza la compra',
    example: 1,
  })
  @IsNotEmpty({ message: 'El campo id_cliente es obligatorio' })
  @IsNumber({}, { message: 'El campo id_cliente debe ser de tipo numérico' })
  readonly id_cliente: number;
<<<<<<< HEAD
  /*
=======
/*
>>>>>>> fbe64d1fc9f0c8e9e140bef705243c7cce7031b3
  @ApiProperty({
    description: 'ID del usuario que registra la venta',
    example: 2,
  })
  @IsNotEmpty({ message: 'El campo id_usuario es obligatorio' })
  @IsNumber({}, { message: 'El campo id_usuario debe ser de tipo numérico' })
  readonly id_usuario: number;
*/
  @ApiProperty({
    description: 'Monto total de la venta',
    example: 150.75,
  })
  @IsNotEmpty({ message: 'El campo total es obligatorio' })
  @IsNumber({}, { message: 'El campo total debe ser de tipo numérico' })
  readonly total: number;
}
