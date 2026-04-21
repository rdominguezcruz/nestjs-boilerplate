import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('secret-test')
  getSecretTest() {
    return {
      value: process.env.SQL_PASSWORD,
      source: 'Inyectado por ESO desde Azure Key Vault',
    };
  }
}
