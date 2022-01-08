import React, { FC } from 'react';
import MainLayout from '../../client/layouts/main';
import s from '../../client/styles/walletsStyles.module.css';
import Head from 'next/head';
import classnames from 'classnames';
import { GetServerSideProps } from 'next';
import { fetch } from '../../shared/utils/fetch';
import { ICurrency } from '../../client/components/shared/constants/types';
import Wallet from '../../client/components/walletsPage/wallet';

interface WalletsProps {
  currencies: ICurrency[];
}

const Wallets: FC<WalletsProps> = ({ currencies }) => {
  return (
    <MainLayout>
      <div data-v-3298dd28="" data-v-72f6983e="">
        <div data-v-f3fea5be="" data-v-3298dd28="" className="container">
          <div data-v-f3fea5be="" className={s.walletContainer}>
            <div data-v-f3fea5be="" className={s.sidebar}>
              <div data-v-f3fea5be="">
                <h2 data-v-f3fea5be="" className="mb16">
                  Assets
                </h2>
                <div data-v-1c515d96="" data-v-f3fea5be="">
                  <div data-v-1c515d96="" className={s.box}>
                    <div data-v-1c515d96="" className={s.total}>
                      <i
                        data-v-15eb5000=""
                        data-v-1c515d96=""
                        className={classnames(
                          s.info,
                          'fa fa-info-circle info has-tooltip',
                        )}
                        data-original-title="null"
                      />
                      <small data-v-1c515d96="" className="text-muted">
                        {'ВСЕГО АКТИВОВ В '}
                        <span
                          data-v-1c515d96=""
                          className="text-primary pointer"
                        >
                          BTC
                          <i data-v-1c515d96="" className="fa fa-sort" />
                        </span>
                      </small>
                      <h1
                        data-v-1c515d96=""
                        className="pt8 pb16 balance pointer"
                      >
                        0.00000000 BTC
                      </h1>
                    </div>
                    <div data-v-1c515d96="" className={s.available}>
                      <i
                        data-v-15eb5000=""
                        data-v-1c515d96=""
                        className={classnames(
                          s.info,
                          'fa fa-info-circle info has-tooltip',
                        )}
                        data-original-title="null"
                      />
                      <small
                        data-v-1c515d96=""
                        className="text-muted text-uppercase"
                      >
                        Доступный баланс
                      </small>
                      <div
                        data-v-1c515d96=""
                        className="text-bold mt8 mb8 fs16"
                      >
                        0.00000000 BTC
                      </div>
                      <div data-v-1c515d96="" className={s.depositWithdraw}>
                        <button
                          data-v-b4a534bc=""
                          data-v-1c515d96=""
                          className={classnames(
                            s.btn,
                            'narrow btn secondary small',
                          )}
                        >
                          <span data-v-b4a534bc="">Вывод</span>
                        </button>
                        <button
                          data-v-b4a534bc=""
                          data-v-1c515d96=""
                          className={classnames(
                            s.btn,
                            'narrow pull-right btn primary success small',
                          )}
                        >
                          <span data-v-b4a534bc="">Депозит</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div data-v-1c515d96="" className={s.box}>
                    <div data-v-1c515d96="" className={s.pending}>
                      <small
                        data-v-1c515d96=""
                        className="text-muted text-uppercase"
                      >
                        В ожидании и в ордерах
                        <i
                          data-v-15eb5000=""
                          data-v-1c515d96=""
                          className={classnames(
                            s.info,
                            'fa fa-info-circle info has-tooltip',
                          )}
                          data-original-title="null"
                        />
                      </small>
                      <div
                        data-v-1c515d96=""
                        className="text-bold mt8 mb8 fs16"
                      >
                        0.00000000 BTC
                      </div>
                      <br data-v-1c515d96="" />
                      <table data-v-1c515d96="" className={s.table}>
                        <tr data-v-1c515d96="">
                          <td
                            data-v-1c515d96=""
                            className={classnames(s.mt, s.name, s.textBold)}
                          >
                            <i
                              data-v-1c515d96=""
                              className="fas fa-long-arrow-alt-down"
                            />
                            Депозиты
                          </td>
                          <td
                            data-v-1c515d96=""
                            className={classnames(s.value, s.mt)}
                          >
                            <span data-v-1c515d96="" className="text-color">
                              0.00000000 BTC
                            </span>
                          </td>
                        </tr>
                        <tr data-v-1c515d96="">
                          <td
                            data-v-1c515d96=""
                            className={classnames(s.mt, s.name, s.textBold)}
                          >
                            <i
                              data-v-1c515d96=""
                              className="fas fa-long-arrow-alt-up"
                            />
                            Выводы
                          </td>
                          <td
                            data-v-1c515d96=""
                            className={classnames(s.value, s.mt)}
                          >
                            <span data-v-1c515d96="" className="text-color">
                              0.00000000 BTC
                            </span>
                          </td>
                        </tr>
                        <tr data-v-1c515d96="">
                          <td
                            data-v-1c515d96=""
                            className={classnames(s.mt, s.name, s.textBold)}
                          >
                            <i
                              data-v-1c515d96=""
                              className="fas fa-exchange-alt"
                            />
                            Биржа
                          </td>
                          <td
                            data-v-1c515d96=""
                            className={classnames(s.value, s.mt)}
                          >
                            <span data-v-1c515d96="" className="text-color">
                              0.00000000 BTC
                            </span>
                          </td>
                        </tr>
                        <tr data-v-1c515d96="">
                          <td
                            data-v-1c515d96=""
                            className={classnames(s.mt, s.name, s.textBold)}
                          >
                            <i
                              data-v-1c515d96=""
                              className="fas fa-shopping-cart"
                            />
                            Ордеры на мощность
                          </td>
                          <td
                            data-v-1c515d96=""
                            className={classnames(s.value, s.mt)}
                          >
                            <span data-v-1c515d96="" className="text-color">
                              0.00000000 BTC
                            </span>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-f3fea5be="" className={s.content}>
              <div data-v-f3fea5be="">
                <div data-v-f3fea5be="">
                  <div data-v-f3fea5be="" className="row mb16">
                    <div data-v-f3fea5be="" className="col-nano-4">
                      <h2 data-v-f3fea5be="">Ваши кошельки</h2>
                    </div>
                    <div data-v-f3fea5be="" className="col-nano-8 text-right">
                      <div data-v-f3fea5be="" className={s.search}>
                        <div
                          data-v-1e3c7d4e=""
                          data-v-f3fea5be=""
                          className={s.inputGroup}
                        >
                          <input
                            data-v-1e3c7d4e=""
                            type="text"
                            placeholder="Поиск"
                            className="form-control"
                          />
                        </div>
                        <i
                          data-v-f3fea5be=""
                          className={classnames(s.fa, 'fa fa-search pointer')}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-v-c5d5ceec=""
                    data-v-f3fea5be=""
                    className="wallets"
                  >
                    <div
                      data-v-c5d5ceec=""
                      className="row"
                      style={{ marginBottom: '-16px' }}
                    >
                      <div
                        data-v-c5d5ceec=""
                        className={classnames(s.wallet, 'col-md-4 pointer')}
                      >
                        <div data-v-c5d5ceec="" className={s.name}>
                          <img
                            data-v-c5d5ceec=""
                            src="https://www.nicehash.com/static/currencies/eur.png"
                          />
                          <div data-v-c5d5ceec="" className={s.cholder}>
                            <span data-v-c5d5ceec="" className={s.ccurrency}>
                              EUR
                            </span>{' '}
                            <span data-v-c5d5ceec="" className={s.cname}>
                              EUR
                            </span>
                          </div>
                          <span
                            data-v-c5d5ceec=""
                            className={classnames(
                              s.coptions,
                              'stop-propagation',
                            )}
                          >
                            <div
                              data-v-c5d5ceec=""
                              className={classnames(
                                s.dropdown,
                                'flex flex--justify-right',
                              )}
                            >
                              <span>
                                <span className="" style={{ display: 'none' }}>
                                  <div className={s.popper}>
                                    <div className={s.dropdownOptions}>
                                      <div
                                        data-v-6f706d05=""
                                        data-v-c5d5ceec=""
                                        className={s.walletOptionsDropdown}
                                      >
                                        <div
                                          data-v-6f706d05=""
                                          className={s.actions}
                                        >
                                          Actions
                                        </div>
                                        <a
                                          data-v-6f706d05=""
                                          href="/my/exchange?sell=EURKM"
                                          className={s.option}
                                        >
                                          <div
                                            data-v-6f706d05=""
                                            className={s.icon}
                                          >
                                            <i
                                              data-v-6f706d05=""
                                              className="icon-exchange"
                                            />
                                          </div>{' '}
                                          <div
                                            data-v-6f706d05=""
                                            className="text"
                                          >
                                            Конвертировать
                                          </div>
                                        </a>{' '}
                                        <a
                                          data-v-6f706d05=""
                                          className={s.option}
                                        >
                                          <div
                                            data-v-6f706d05=""
                                            className={s.icon}
                                          >
                                            <i
                                              data-v-6f706d05=""
                                              className="fas fa-long-arrow-alt-down"
                                            />
                                          </div>{' '}
                                          <div
                                            data-v-6f706d05=""
                                            className="text"
                                          >
                                            Депозит
                                          </div>
                                        </a>{' '}
                                        <a
                                          data-v-6f706d05=""
                                          className={s.option}
                                        >
                                          <div
                                            data-v-6f706d05=""
                                            className={s.icon}
                                          >
                                            <i
                                              data-v-6f706d05=""
                                              className="fas fa-long-arrow-alt-up"
                                            />
                                          </div>{' '}
                                          <div
                                            data-v-6f706d05=""
                                            className="text"
                                          >
                                            Вывод средств
                                          </div>
                                        </a>{' '}
                                      </div>
                                    </div>
                                  </div>{' '}
                                </span>{' '}
                                <span className={s.placeholder}>
                                  <div className={s.dropdownField}>
                                    <i className="fas fa-ellipsis-v field" />
                                  </div>
                                </span>
                              </span>
                            </div>
                          </span>
                          <div data-v-c5d5ceec="" className={s.values}>
                            <div
                              data-v-c5d5ceec=""
                              className="section stop-propagation"
                            >
                              <span data-v-c5d5ceec="" className={s.cbalance}>
                                0.00{' '}
                                <span data-v-c5d5ceec="" className="text-muted">
                                  EUR
                                </span>
                              </span>
                              <br data-v-c5d5ceec="" />{' '}
                              <span data-v-c5d5ceec="" className={s.cfiat}>
                                0 BTC
                              </span>
                              <br data-v-c5d5ceec="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-v-f3fea5be="">
                  <div data-v-f3fea5be="" className="row mt32 mb16">
                    <div data-v-f3fea5be="" className="col-sm-6">
                      <h2 data-v-f3fea5be="">Новые</h2>
                    </div>
                  </div>
                  <div
                    data-v-c5d5ceec=""
                    data-v-f3fea5be=""
                    className="wallets"
                  >
                    <div
                      data-v-c5d5ceec=""
                      className="row"
                      style={{ marginBottom: '-16px' }}
                    >
                      {[
                        currencies[currencies.length - 1],
                        currencies[currencies.length - 2],
                        currencies[currencies.length - 3],
                        currencies[currencies.length - 4],
                      ].map((item) => {
                        return <Wallet currency={item} />;
                      })}
                    </div>
                  </div>
                </div>
                <div data-v-f3fea5be="">
                  <div data-v-f3fea5be="" className="row mt32 mb16">
                    <div data-v-f3fea5be="" className="col-sm-6">
                      <h2 data-v-f3fea5be="">Все криптовалюты</h2>
                    </div>
                  </div>
                  <div
                    data-v-c5d5ceec=""
                    data-v-f3fea5be=""
                    className="wallets"
                  >
                    <div
                      data-v-c5d5ceec=""
                      className="row"
                      style={{ marginBottom: '-16px' }}
                    >
                      {currencies.map((item) => {
                        return <Wallet currency={item} />;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps<WalletsProps> = async (
  context,
) => {
  console.log('getServerSideProps index');
  const { currencies } = await fetch(
    'https://api2.nicehash.com/main/api/v2/public/currencies',
  );
  console.log(currencies);
  return { props: { currencies } };
};

export default Wallets;
