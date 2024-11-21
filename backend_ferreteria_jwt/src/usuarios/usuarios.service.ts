import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const existe = await this.usuariosRepository.findOneBy({
      usuario: createUsuarioDto.usuario.trim(),
    });
    if (existe) throw new ConflictException('El usuario ya existe');

    const usuario = this.usuariosRepository.create({
      usuario: createUsuarioDto.usuario.trim(),
      clave: process.env.DEFAULT_PASSWORD,
      email: createUsuarioDto.email.trim(),
      rol: createUsuarioDto.rol.trim(),
      premium: createUsuarioDto.premium,
    });

    return this.usuariosRepository.save(usuario);
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuariosRepository.find();
  }

  async findOne(id: number): Promise<Usuario> {
    const usuario = await this.usuariosRepository.findOneBy({ id });
    if (!usuario) throw new NotFoundException('El usuario no existe');
    return usuario;
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    const usuario = await this.findOne(id);
    const usuarioUpdate = Object.assign(usuario, updateUsuarioDto);
    return this.usuariosRepository.save(usuarioUpdate);
  }

  async validate(usuario: string, clave: string): Promise<Usuario> {
    const usuarioOk = await this.usuariosRepository.findOne({
      where: { usuario },
      select: ['id', 'usuario', 'clave', 'email', 'rol', 'premium'],
    });

    if (!usuarioOk) throw new NotFoundException('Usuario inexistente');

    if (!(await usuarioOk.validatePassword(clave))) {
      throw new UnauthorizedException('Clave incorrecta');
    }

    delete usuarioOk.clave;
    return usuarioOk;
  }

  async remove(id: number): Promise<void> {
    const usuario = await this.findOne(id);
    await this.usuariosRepository.softRemove(usuario);
  }
}
