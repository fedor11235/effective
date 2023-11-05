import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  createUser(createUserDto: CreateUserDto): any {
    return this.prisma.user.create({ data: createUserDto });
  }
  updateUser(id: number, updateUserDto: UpdateUserDto): any {
    return this.prisma.user.update({ where: { id }, data: updateUserDto });
  }
  getListUsers(): any {
    return this.prisma.user.findMany();
  }
}