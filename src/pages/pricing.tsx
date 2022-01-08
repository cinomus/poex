import React, { FC } from 'react';
import HomePageLayout from '../client/layouts/homePageLayout';
import s from '../client/styles/pricingPageStyles.module.css';
import classnames from 'classnames';
import { GetServerSideProps } from 'next';
import { fetch } from '../shared/utils/fetch';
import PriceBox from '../client/components/pricingPage/price';

interface PricingPageProps {
  prices;
  algorithms;
}
interface priceObj {
  id: string;
  type: string;
  market: string;
  algorithm: string;
  price: number;
  speedLimit: number;
  alive: boolean;
  acceptedCurrentSpeed: number;
  rigsCount: number;
  averageSpeed: number;
  amount: number;
}
const Pricing: FC<PricingPageProps> = ({ prices, algorithms }) => {
  return (
    <HomePageLayout>
      <div data-v-4ea50c75="" className={s.page}>
        <div data-v-00753351="" data-v-4ea50c75="">
          <div
            data-v-1759faec=""
            data-v-00753351=""
            className="sun-holder relative sun text-center"
          >
            <div data-v-1759faec="" className="sun">
              <div
                data-v-00753351=""
                data-v-1759faec=""
                className={classnames(
                  s.container,
                  'mb24 container text-center',
                )}
              >
                <h1 data-v-00753351="" data-v-1759faec="" className="mb24">
                  Цены
                </h1>
                <h3 data-v-00753351="" data-v-1759faec="" className="mb70">
                  Просмотрите все доступные алгоритмы и монеты, для которых вы
                  можете купить мощность, и их текущие цены на рынке. Обратите
                  внимание, что вы можете начать с минимальной цены ордера —
                  0.001 BTC и что длительность ордера может быть больше или
                  меньше 1 дня.
                </h3>
              </div>
            </div>
            <div data-v-1759faec="" className="sun-spot" />
          </div>
          <div
            data-v-00753351=""
            className={classnames(s.container, 'container mt96 mb48')}
          >
            <div data-v-00753351="" className={s.tableHolder}>
              <table
                data-v-00753351=""
                cellSpacing="0"
                cellPadding="0"
                className={classnames(s.nh, 'nh')}
              >
                <thead data-v-00753351="" className="thead">
                  <tr data-v-00753351="">
                    <th data-v-00753351="">АЛГОРИТМ</th>
                    <th data-v-00753351="" className="text-right">
                      МИН. ЦЕНА
                    </th>
                    <th data-v-00753351="" className="text-right">
                      СРЕДНЯЯ ЦЕНА
                    </th>
                    <th data-v-00753351="">&nbsp;</th>
                  </tr>
                </thead>
                <tbody data-v-00753351="">
                  {algorithms.map((algObj) => {
                    return <PriceBox priceData={prices[algObj.algorithm]} />;
                  })}
                  <tr data-v-00753351="" className={s.tr}>
                    <td data-v-00753351="" className={s.td}>
                      Scrypt
                    </td>
                    <td data-v-00753351="" className="text-right">
                      0.1847
                      <br data-v-00753351="" />
                      <small data-v-00753351="">BTC/TH/day</small>
                    </td>
                    <td data-v-00753351="" className="text-right">
                      0.1906
                      <br data-v-00753351="" />
                      <small data-v-00753351="">BTC/TH/day</small>
                    </td>
                    <td data-v-00753351="" className="text-right">
                      <a
                        data-v-00753351=""
                        href="https://www.nicehash.com/my/marketplace/SCRYPT"
                      >
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </HomePageLayout>
  );
};

export const getServerSideProps: GetServerSideProps<PricingPageProps> = async (
  context,
) => {
  console.log('getServerSideProps index');
  const { list: orders } = await fetch(
    'https://api2.nicehash.com/main/api/v2/public/orders/active2',
  );
  const { miningAlgorithms: algs } = await fetch(
    'https://api2.nicehash.com/main/api/v2/mining/algorithms',
  );
  const worstOrders = getBestOrdersByAlgorithm(orders);

  function getBestOrdersByAlgorithm(orders: priceObj[]) {
    let obj = {};
    for (let order of orders) {
      if (obj.hasOwnProperty(order.algorithm)) {
        if (obj[order.algorithm].price >= order.price && order.rigsCount != 0) {
          obj[order.algorithm] = {
            ...obj[order.algorithm],
            ...order,
            amount: obj[order.algorithm].amount + 1,
            averageSpeed: obj[order.algorithm].averagePrice + order.price,
          };
        }
      } else {
        obj[order.algorithm] = order;
        obj[order.algorithm].amount = 1;
        obj[order.algorithm].averagePrice = order.price;
      }
    }
    for (let prop in obj) {
      obj[prop].averageSpeed = obj[prop].averagePrice / obj[prop].amount;
    }
    console.log(obj);
    return obj;
  }

  return { props: { prices: worstOrders, algorithms: algs } };
};

export default Pricing;
