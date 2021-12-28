import { Body, Controller, Get, Param, Query } from '@nestjs/common';
import { ApiService } from './api.service';

interface getOrderBookProps {
  size: string | number;
  algorithm: string;
}

@Controller('/api')
export class ApiController {
  constructor(private apiService: ApiService) {}

  @Get('/hashpower/orderBook')
  async getOrderBook(@Query() { size, algorithm }: getOrderBookProps) {
    return this.apiService.getOrderBook(size, algorithm);
  }
}
