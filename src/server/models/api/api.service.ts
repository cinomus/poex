import { Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios';
import { IStats } from '../../../shared/types/types';

interface IOrderBookData {
  EU?: IStats;
  EU_N?: IStats;
  USA?: IStats;
  USA_E?: IStats;
}
@Injectable()
export class ApiService {
  private async getStatsArray(data: IOrderBookData) {}

  public async getOrderBook(size: string | number, alg: string) {
    const res = await axios.get(
      `https://api2.nicehash.com/main/api/v2/hashpower/orderBook?size=${size}&algorithm=${alg}`,
    );
    return res.data;
  }
}
