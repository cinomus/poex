import React, { FC, useEffect, useState } from 'react';
import s from '../../styles/container4xMarket.module.css';
import classnames from 'classnames';
import { GetServerSideProps } from 'next';
import { fetch } from '../../../shared/utils/fetch';
import { Property } from 'csstype';
import { IOrder } from '../../../shared/types/types';

interface Container4XMarketProps {
  orders?: IOrder[];
  countryKey?: string;
}

const Container4XMarket: FC<Container4XMarketProps> = ({
  orders,
  countryKey,
}) => {
  const [overallSpeed, setOverallSpeed] = useState<number>(0);
  const countriesObj = {
    USA: 'USA - West',
    USA_E: 'USA - East',
    EU_N: 'EU - North',
    EU: 'EU - West',
  };
  function sumOfSpeed(orders: IOrder[]): number {
    let sum = 0;
    orders.map((order) => {
      sum += Number(order.payingSpeed);
    });
    return Number(sum.toFixed(4));
  }

  useEffect(() => {
    setOverallSpeed(sumOfSpeed(orders));
  });
  return (
    <div
      data-v-1e611a18=""
      className={classnames(s.market, s.colMd3, 'col-md-3 selected-market')}
    >
      <div
        data-v-518f13f8=""
        data-v-1e611a18=""
        style={{ position: 'relative' }}
      >
        <div data-v-518f13f8="" className={s.marketHeader}>
          <div data-v-518f13f8="" className={classnames(s.collapse, s.off)} />
          <div data-v-518f13f8="" className="row">
            <div
              data-v-518f13f8=""
              className={classnames('col-micro-7 relative', s.marketMove)}
            >
              <div
                data-v-518f13f8=""
                className={classnames(s.headerLabel, s.marketLabel)}
              >
                Рынок
              </div>
              <h1 data-v-518f13f8="" className={s.headerValue}>
                <div
                  data-v-518f13f8=""
                  className={classnames(s.icon, s[countryKey])}
                >
                  <div
                    data-v-518f13f8=""
                    className={classnames(s.iconSmall, s[countryKey])}
                  />
                </div>
                <span data-v-518f13f8="" className={s.marketName}>
                  {countriesObj[countryKey]}
                </span>
              </h1>
            </div>
            <div data-v-518f13f8="" className="col-micro-5 text-right">
              <div data-v-518f13f8="" className={s.headerLabel}>
                Общая доступная скорость
              </div>
              <h1 data-v-518f13f8="" className={s.headerValue}>
                {overallSpeed} TH/s
              </h1>
            </div>
          </div>
        </div>
        <div data-v-518f13f8="" className={s.marketOrders}>
          <div
            data-v-46aefae6=""
            data-v-518f13f8=""
            className={classnames(s.table, 'table-wrap relative')}
          >
            <div data-v-46aefae6="" className={s.tableContainer}>
              <table
                data-v-46aefae6=""
                cellSpacing="0"
                cellPadding="0"
                className="nh padding-normal"
              >
                <thead data-v-46aefae6="">
                  <tr data-v-46aefae6="">
                    <th data-v-46aefae6="">
                      ID ордера{' '}
                      <span data-v-46aefae6="" className="small">
                        <br data-v-46aefae6="" />
                        &nbsp;{' '}
                      </span>
                    </th>
                    <th data-v-46aefae6="" className="text-right">
                      Цена{' '}
                      <span data-v-46aefae6="" className="small">
                        <br data-v-46aefae6="" />
                        &nbsp; BTC/TH/day
                      </span>
                    </th>
                    <th data-v-46aefae6="" className="text-right">
                      Ограничение{' '}
                      <span data-v-46aefae6="" className="small">
                        <br data-v-46aefae6="" />
                        &nbsp; TH/s
                      </span>
                    </th>
                    <th data-v-46aefae6="" className="text-right">
                      Майнеры{' '}
                      <span data-v-46aefae6="" className="small">
                        <br data-v-46aefae6="" />
                        &nbsp;{' '}
                      </span>
                    </th>
                    <th data-v-46aefae6="" className="text-right">
                      Скорость{' '}
                      <span data-v-46aefae6="" className="small">
                        <br data-v-46aefae6="" />
                        &nbsp; TH/s
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody data-v-46aefae6="">
                  {orders.map((order, key) => {
                    return (
                      <tr data-v-46aefae6="" key={key} className="standard">
                        <td data-v-46aefae6="">
                          <div
                            data-v-f61360be=""
                            data-v-518f13f8=""
                            id={`order${order.id}`}
                            className="order-id flex flex--align-vertical"
                            data-v-46aefae6=""
                          >
                            <div
                              data-v-f61360be=""
                              className={classnames(
                                s.badge,
                                s.orderType,
                                s.STANDARDType,
                              )}
                            >
                              S
                            </div>
                            <span data-v-f61360be="" className="">
                              {order.id.split('-')[0].toLowerCase()}
                            </span>
                          </div>
                        </td>
                        <td data-v-46aefae6="" className="text-right no-wrap">
                          <span
                            data-v-518f13f8=""
                            data-v-46aefae6=""
                            className="relative"
                          >
                            <div
                              data-v-518f13f8=""
                              data-v-46aefae6=""
                              className="badge round-button outbid inline-block has-tooltip"
                              data-original-title="null"
                              style={{ lineHeight: 1.33 }}
                            >
                              <i
                                data-v-518f13f8=""
                                data-v-46aefae6=""
                                className="fa fa-level-up-alt text-success"
                              />
                            </div>
                          </span>
                          <span
                            data-v-274d7700=""
                            data-v-518f13f8=""
                            className="inline-block"
                            data-v-46aefae6=""
                          >
                            {Number(order.price).toFixed(4)}
                          </span>
                          <br data-v-518f13f8="" data-v-46aefae6="" />
                        </td>
                        <td data-v-46aefae6="" className="text-right no-wrap">
                          <div data-v-518f13f8="" data-v-46aefae6="">
                            <span
                              data-v-274d7700=""
                              data-v-518f13f8=""
                              className=""
                              data-v-46aefae6=""
                            >
                              {Number(order.limit).toFixed(4)}
                            </span>
                            <br data-v-518f13f8="" data-v-46aefae6="" />
                          </div>
                        </td>
                        <td data-v-46aefae6="" className="text-right no-wrap">
                          <span
                            data-v-274d7700=""
                            data-v-518f13f8=""
                            className="red"
                            data-v-46aefae6=""
                          >
                            {order.rigsCount}
                          </span>
                        </td>
                        <td data-v-46aefae6="" className="text-right no-wrap">
                          <span
                            data-v-274d7700=""
                            data-v-518f13f8=""
                            className="red"
                            data-v-46aefae6=""
                          >
                            {Number(order.payingSpeed).toFixed(4)}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container4XMarket;
