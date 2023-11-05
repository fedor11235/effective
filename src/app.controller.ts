import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('create')
  createUser(@Body() createUserDto: CreateUserDto): string {
    return this.appService.createUser(createUserDto);
  }

  @Post('update/:id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): string {
    return this.appService.updateUser(Number(id), updateUserDto);
  }

  @Get('all')
  getListUsers(): string {
    return this.appService.getListUsers();
  }
}
