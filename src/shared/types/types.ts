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
