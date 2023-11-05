import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('create')
  createUser(): string {
    return this.appService.createUser();
  }

  @Post('edit')
  editUser(): string {
    return this.appService.editUser();
  }

  @Get('all')
  getListUsers(): string {
    return this.appService.getListUsers();
  }
}
