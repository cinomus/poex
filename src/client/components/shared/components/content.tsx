import React, { FC, useState } from 'react';
import s from '../../../styles/contentStyles.module.css';
import Header from '../../marketplace/header';
import Container4x from '../../marketplace/container4x';

interface ContentProps {
  children?: React.ReactChildren | React.ReactElement;
}

const Content: FC<ContentProps> = ({ children }) => {
  const [selectedAlg, setSelectedAlg] = useState('Scrypt');

  return (
    <div id={s.content}>
      {children}
      <div data-v-3a5fbf82="" data-v-469ec6d3="">
        <div data-v-3a5fbf82="" className="container">
          <Header />
        </div>
        <div data-v-1e611a18="" data-v-3a5fbf82="">
          <Container4x
            selectedAlg={selectedAlg}
            selectAlgFunc={setSelectedAlg}
          />
          <div data-v-1e611a18="" className="container4x">
            <div data-v-1e611a18="" className="row mt24">
              <div
                data-v-1e611a18=""
                className="market col-md-3 selected-market"
              >
                <div
                  data-v-518f13f8=""
                  data-v-1e611a18=""
                  style={{ position: 'relative' }}
                >
                  <div data-v-518f13f8="" className="market-header">
                    <div data-v-518f13f8="" className="collapse off" />
                    <div data-v-518f13f8="" className="row">
                      <div
                        data-v-518f13f8=""
                        className="col-micro-7 relative market-move"
                      >
                        <div
                          data-v-518f13f8=""
                          className="header-label market-label"
                        >
                          Рынок
                        </div>
                        <h1 data-v-518f13f8="" className="header-value">
                          <div data-v-518f13f8="" className="icon EU">
                            <div data-v-518f13f8="" className="icon-small EU" />
                          </div>
                          <span data-v-518f13f8="" className="market-name">
                            EU - West
                          </span>
                        </h1>
                      </div>
                      <div
                        data-v-518f13f8=""
                        className="col-micro-5 text-right"
                      >
                        <div data-v-518f13f8="" className="header-label">
                          Общая доступная скорость
                        </div>
                        <h1 data-v-518f13f8="" className="header-value">
                          24.4271 TH/s
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div data-v-518f13f8="" className="market-orders">
                    <div
                      data-v-46aefae6=""
                      data-v-518f13f8=""
                      className="table-wrap relative table"
                    >
                      <div data-v-46aefae6="" className="table-container">
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
                            <tr data-v-46aefae6="" className="standard">
                              <td data-v-46aefae6="">
                                <div
                                  data-v-f61360be=""
                                  data-v-518f13f8=""
                                  id="order4fab29e3-8e24-4b48-aa23-199c1ad202bc"
                                  className="order-id flex flex--align-vertical"
                                  data-v-46aefae6=""
                                >
                                  <div
                                    data-v-f61360be=""
                                    className="badge order-type STANDARD-type"
                                  >
                                    S
                                  </div>
                                  <span data-v-f61360be="" className="">
                                    4fab29e3
                                  </span>
                                </div>
                              </td>
                              <td
                                data-v-46aefae6=""
                                className="text-right no-wrap"
                              >
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
                                  0.2792
                                </span>
                                <br data-v-518f13f8="" data-v-46aefae6="" />
                              </td>
                              <td
                                data-v-46aefae6=""
                                className="text-right no-wrap"
                              >
                                <div data-v-518f13f8="" data-v-46aefae6="">
                                  <span
                                    data-v-274d7700=""
                                    data-v-518f13f8=""
                                    className=""
                                    data-v-46aefae6=""
                                  >
                                    0.0100
                                  </span>
                                  <br data-v-518f13f8="" data-v-46aefae6="" />
                                </div>
                              </td>
                              <td
                                data-v-46aefae6=""
                                className="text-right no-wrap"
                              >
                                <span
                                  data-v-274d7700=""
                                  data-v-518f13f8=""
                                  className="red"
                                  data-v-46aefae6=""
                                >
                                  0
                                </span>
                              </td>
                              <td
                                data-v-46aefae6=""
                                className="text-right no-wrap"
                              >
                                <span
                                  data-v-274d7700=""
                                  data-v-518f13f8=""
                                  className="red"
                                  data-v-46aefae6=""
                                >
                                  1.4325
                                </span>
                              </td>
                            </tr>
                            <tr data-v-46aefae6="" className="standard">
                              <td data-v-46aefae6="">
                                <div
                                  data-v-f61360be=""
                                  data-v-518f13f8=""
                                  id="order23d9b1cb-b1bf-4afa-a50d-5a37e154f617"
                                  className="order-id flex flex--align-vertical"
                                  data-v-46aefae6=""
                                >
                                  <div
                                    data-v-f61360be=""
                                    className="badge order-type STANDARD-type"
                                  >
                                    S
                                  </div>
                                  <span data-v-f61360be="" className="">
                                    23d9b1cb
                                  </span>
                                </div>
                              </td>
                              <td
                                data-v-46aefae6=""
                                className="text-right no-wrap"
                              >
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
                                  0.2791
                                </span>
                                <br data-v-518f13f8="" data-v-46aefae6="" />
                              </td>
                              <td
                                data-v-46aefae6=""
                                className="text-right no-wrap"
                              >
                                <div data-v-518f13f8="" data-v-46aefae6="">
                                  <span
                                    data-v-274d7700=""
                                    data-v-518f13f8=""
                                    className="red"
                                    data-v-46aefae6=""
                                  >
                                    0.0100
                                  </span>
                                  <br data-v-518f13f8="" data-v-46aefae6="" />
                                </div>
                              </td>
                              <td
                                data-v-46aefae6=""
                                className="text-right no-wrap"
                              >
                                <span
                                  data-v-274d7700=""
                                  data-v-518f13f8=""
                                  className="red"
                                  data-v-46aefae6=""
                                >
                                  0
                                </span>
                              </td>
                              <td
                                data-v-46aefae6=""
                                className="text-right no-wrap"
                              >
                                <span
                                  data-v-274d7700=""
                                  data-v-518f13f8=""
                                  className="red"
                                  data-v-46aefae6=""
                                >
                                  0.5385
                                </span>
                              </td>
                            </tr>
                            <tr data-v-46aefae6="" className="standard">
                              <td data-v-46aefae6="">
                                <div
                                  data-v-f61360be=""
                                  data-v-518f13f8=""
                                  id="orderf87dda11-7883-4b2b-af09-843c095b6ead"
                                  className="order-id flex flex--align-vertical"
                                  data-v-46aefae6=""
                                >
                                  <div
                                    data-v-f61360be=""
                                    className="badge order-type STANDARD-type"
                                  >
                                    S
                                  </div>
                                  <span data-v-f61360be="" className="">
                                    f87dda11
                                  </span>
                                </div>
                              </td>
                              <td
                                data-v-46aefae6=""
                                className="text-right no-wrap"
                              >
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
                                  0.2787
                                </span>
                                <br data-v-518f13f8="" data-v-46aefae6="" />
                              </td>
                              <td
                                data-v-46aefae6=""
                                className="text-right no-wrap"
                              >
                                <div data-v-518f13f8="" data-v-46aefae6="">
                                  <span
                                    data-v-274d7700=""
                                    data-v-518f13f8=""
                                    className=""
                                    data-v-46aefae6=""
                                  >
                                    0.0100
                                  </span>
                                  <br data-v-518f13f8="" data-v-46aefae6="" />
                                </div>
                              </td>
                              <td
                                data-v-46aefae6=""
                                className="text-right no-wrap"
                              >
                                <span
                                  data-v-274d7700=""
                                  data-v-518f13f8=""
                                  className="red"
                                  data-v-46aefae6=""
                                >
                                  0
                                </span>
                              </td>
                              <td
                                data-v-46aefae6=""
                                className="text-right no-wrap"
                              >
                                <span
                                  data-v-274d7700=""
                                  data-v-518f13f8=""
                                  className="red"
                                  data-v-46aefae6=""
                                >
                                  0.4325
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-v-1e611a18=""
                className="market col-md-3 selected-market"
              >
                <div
                  data-v-518f13f8=""
                  data-v-1e611a18=""
                  style={{ position: 'relative' }}
                >
                  <div data-v-518f13f8="" className="market-header">
                    <div data-v-518f13f8="" className="collapse off" />
                    <div data-v-518f13f8="" className="row">
                      <div
                        data-v-518f13f8=""
                        className="col-micro-7 relative market-move"
                      >
                        <div
                          data-v-518f13f8=""
                          className="header-label market-label"
                        >
                          Рынок
                        </div>
                        <h1 data-v-518f13f8="" className="header-value">
                          <div data-v-518f13f8="" className="icon EU_N">
                            <div data-v-518f13f8="" className="icon-small EU" />
                          </div>
                          <span data-v-518f13f8="" className="market-name">
                            EU - North
                          </span>
                        </h1>
                      </div>
                      <div
                        data-v-518f13f8=""
                        className="col-micro-5 text-right"
                      >
                        <div data-v-518f13f8="" className="header-label">
                          Общая доступная скорость
                        </div>
                        <h1 data-v-518f13f8="" className="header-value">
                          7.9801 TH/s
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div data-v-518f13f8="" className="market-orders">
                    <div
                      data-v-46aefae6=""
                      data-v-518f13f8=""
                      className="table-wrap relative table"
                    >
                      <div data-v-46aefae6="" className="table-container">
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
                          <tbody data-v-46aefae6="" />
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-v-1e611a18=""
                className="market col-md-3 selected-market"
              >
                <div
                  data-v-518f13f8=""
                  data-v-1e611a18=""
                  style={{ position: 'relative' }}
                >
                  <div data-v-518f13f8="" className="market-header">
                    <div data-v-518f13f8="" className="collapse off" />
                    <div data-v-518f13f8="" className="row">
                      <div
                        data-v-518f13f8=""
                        className="col-micro-7 relative market-move"
                      >
                        <div
                          data-v-518f13f8=""
                          className="header-label market-label"
                        >
                          Рынок
                        </div>
                        <h1 data-v-518f13f8="" className="header-value">
                          <div data-v-518f13f8="" className="icon USA">
                            <div
                              data-v-518f13f8=""
                              className="icon-small USA"
                            />
                          </div>
                          <span data-v-518f13f8="" className="market-name">
                            USA - West
                          </span>
                        </h1>
                      </div>
                      <div
                        data-v-518f13f8=""
                        className="col-micro-5 text-right"
                      >
                        <div data-v-518f13f8="" className="header-label">
                          Общая доступная скорость
                        </div>
                        <h1 data-v-518f13f8="" className="header-value">
                          6.5910 TH/s
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div data-v-518f13f8="" className="market-orders">
                    <div
                      data-v-46aefae6=""
                      data-v-518f13f8=""
                      className="table-wrap relative table"
                    >
                      <div data-v-46aefae6="" className="table-container">
                        <table
                          data-v-46aefae6=""
                          cellSpacing="0"
                          cellPadding="0"
                          className="nh padding-normal"
                        >
                          <thead data-v-46aefae6="">
                            <tr data-v-46aefae6="">
                              <th data-v-46aefae6="">
                                {' '}
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
                          <tbody data-v-46aefae6="" />
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-v-1e611a18=""
                className="market col-md-3 selected-market"
              >
                <div
                  data-v-518f13f8=""
                  data-v-1e611a18=""
                  style={{ position: 'relative' }}
                >
                  <div data-v-518f13f8="" className="market-header">
                    <div data-v-518f13f8="" className="collapse off" />
                    <div data-v-518f13f8="" className="row">
                      <div
                        data-v-518f13f8=""
                        className="col-micro-7 relative market-move"
                      >
                        <div
                          data-v-518f13f8=""
                          className="header-label market-label"
                        >
                          Рынок
                        </div>
                        <h1 data-v-518f13f8="" className="header-value">
                          <div data-v-518f13f8="" className="icon USA_E">
                            <div
                              data-v-518f13f8=""
                              className="icon-small USA"
                            />
                          </div>
                          <span data-v-518f13f8="" className="market-name">
                            USA - East
                          </span>
                        </h1>
                      </div>
                      <div
                        data-v-518f13f8=""
                        className="col-micro-5 text-right"
                      >
                        <div data-v-518f13f8="" className="header-label">
                          Общая доступная скорость
                        </div>
                        <h1 data-v-518f13f8="" className="header-value">
                          4.9383 TH/s
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div data-v-518f13f8="" className="market-orders">
                    <div
                      data-v-46aefae6=""
                      data-v-518f13f8=""
                      className="table-wrap relative table"
                    >
                      <div data-v-46aefae6="" className="table-container">
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
                          <tbody data-v-46aefae6="" />
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
