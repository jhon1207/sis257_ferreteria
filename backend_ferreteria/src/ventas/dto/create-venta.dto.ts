import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class CreateVentaDto {
  @ApiProperty({
    description: 'Fecha de la transacción en formato ISO',
    example: '2024-10-14T10:30:00',
  })
  @IsNotEmpty({ message: 'El campo fecha no debe ser vacío' })
  @IsDateString(
    {},
    { message: 'El campo fecha debe ser una cadena válida en formato de fecha ISO' },
  )
  readonly fecha: string;

  @ApiProperty({
    description: 'ID del cliente que realiza la compra',
    example: 1,
  })
<<<<<<< HEAD
  @IsNotEmpty({ message: 'El campo id_cliente es obligatorio' })
  @IsNumber({}, { message: 'El campo id_cliente debe ser de tipo numérico' })
  readonly id_cliente: number;
/*
=======
  @IsDefined({ message: 'El campo idCliente debe estar definido' })
  @IsNumber({}, { message: 'El campo idCliente debe ser de tipo numérico' })
  readonly idCliente: number;

>>>>>>> c99a4fd29b138cec348ee33b947b02e9c9dfbb00
  @ApiProperty({
    description: 'ID del usuario que registra la venta',
    example: 2,
  })
<<<<<<< HEAD
  @IsNotEmpty({ message: 'El campo id_usuario es obligatorio' })
  @IsNumber({}, { message: 'El campo id_usuario debe ser de tipo numérico' })
  readonly id_usuario: number;
*/
=======
  @IsDefined({ message: 'El campo idUsuario debe estar definido' })
  @IsNumber({}, { message: 'El campo idUsuario debe ser de tipo numérico' })
  readonly idUsuario: number;

>>>>>>> c99a4fd29b138cec348ee33b947b02e9c9dfbb00
  @ApiProperty({
    description: 'Monto total de la venta',
    example: 150.75,
  })
  @IsDefined({ message: 'El campo total debe estar definido' })
  @IsNumber({}, { message: 'El campo total debe ser de tipo numérico' })
  readonly total: number;
}
