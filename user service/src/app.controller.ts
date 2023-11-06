import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';

@Controller('user')
@ApiTags('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('create')
  @ApiCreatedResponse({ type: UserEntity })
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.appService.createUser(createUserDto);
  }

  @Put('update/:id')
  @ApiOkResponse({ type: UserEntity })
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return await this.appService.updateUser(Number(id), updateUserDto);
  }

  @Get('all')
  @ApiOkResponse({ type: UserEntity, isArray: true })
  async getListUsers(): Promise<User[]> {
    return await this.appService.getListUsers();
  }
}
