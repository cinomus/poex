export interface ICountry {
  lang: string;
  countryName: string;
}

export interface IUser {
  email: string;
  password: string;
  country: ICountry;
  sub: boolean;
}
export interface IStats {
  updatedTs: string;
  totalSpeed: string;
  marketFactor: string;
  displayMarketFactor: string;
  priceFactor: string;
  displayPriceFactor: string;
  orders: IOrder[];
  pagination: string;
}
export interface IOrder {
  id: string;
  type: string;
  price: string;
  limit: string;
  rigsCount: number;
  acceptedSpeed: string;
  payingSpeed: string;
  alive: boolean;
}
