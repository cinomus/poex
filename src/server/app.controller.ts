import { Controller, Get, Param, ParseIntPipe, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('index')
  home() {
    console.log('index');
    return {};
  }
  @Get('pricing')
  @Render('pricing')
  pricing() {
    console.log('pricing');
    return {};
  }
  @Get('my/dashboard')
  @Render('my/dashboard')
  dashboard() {
    console.log('dashboard');
    return {};
  }
  @Get('my/wallets')
  @Render('my/wallets')
  wallets() {
    console.log('wallets');
    return {};
  }
}
