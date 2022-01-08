import React, { FC } from 'react';
import s from '../../styles/pricingPageStyles.module.css';

interface PriceBoxProps {
  priceData: {
    id: string;
    type: string;
    market: string;
    algorithm: string;
    price: number;
    speedLimit: number;
    alive: boolean;
    acceptedCurrentSpeed: number;
    rigsCount: number;
    amount: number;
    averagePrice: number;
  };
}

const PriceBox: FC<PriceBoxProps> = ({ priceData }) => {
  return (
    <tr data-v-00753351="" className={s.tr}>
      <td data-v-00753351="" className={s.td}>
        {priceData.algorithm}
      </td>
      <td data-v-00753351="" className="text-right">
        {priceData.price}
        <br data-v-00753351="" />
        <small data-v-00753351="">BTC/TH/day</small>
      </td>
      <td data-v-00753351="" className="text-right">
        {priceData.averagePrice}
        <br data-v-00753351="" />
        <small data-v-00753351="">BTC/TH/day</small>
      </td>
      <td data-v-00753351="" className="text-right">
        <a data-v-00753351="" href="/marketplace/SCRYPT">
          <button
            data-v-b4a534bc=""
            data-v-00753351=""
            className="btn primary small outline"
          >
            <span data-v-b4a534bc="">marketplace</span>
          </button>
        </a>
      </td>
    </tr>
  );
};

export default PriceBox;
