import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {
  createUser(): string {
    return 'Hello World!';
  }
  editUser(): string {
    return 'Hello World!';
  }
  getListUsers(): string {
    return 'Hello World!';
  }
}