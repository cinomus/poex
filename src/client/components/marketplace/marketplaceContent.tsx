import React, { FC, useEffect, useState } from 'react';
import Header from './header';
import s from '../../styles/contentStyles.module.css';
import Container4xHeader from './container4xHeader';
import Container4XMarket from './container4xMarket';
import classnames from 'classnames';
import { useCookies } from 'react-cookie';
import { fetch } from '../../../shared/utils/fetch';
import { IStats } from '../../../shared/types/types';
import { GetServerSideProps } from 'next';
import axios from 'axios';

interface IMarketData {
  EU?: IStats;
  EU_N?: IStats;
  USA?: IStats;
  USA_E?: IStats;
}
interface MarketplaceContentProps {
  data: IMarketData;
}

const MarketplaceContent: FC<MarketplaceContentProps> = ({ data }) => {
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const [selectedAlg, setSelectedAlg] = useState('Scrypt');
  const [selectedContentValue, setSelectedContentValue] = useState(0);
  const [marketData, setMarketData] = useState<IMarketData>(data);
  const [cookies, setCookies] = useCookies(['authentication']);

  function getMarketDataKeys(data: IMarketData): string[] {
    return data ? Object.keys(data) : [];
  }

  useEffect(() => {
    axios
      .get(
        `/api/hashpower/orderBook?size=1000&algorithm=${selectedAlg.toUpperCase()}`,
      )
      .then((res) => {
        setMarketData(res.data.stats);
      });
  }, [selectedAlg]);

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get(
          `/api/hashpower/orderBook?size=1000&algorithm=${selectedAlg.toUpperCase()}`,
        )
        .then((res) => {
          setMarketData(res.data.stats);
        });
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div data-v-3a5fbf82="" data-v-469ec6d3="">
      <div data-v-3a5fbf82="" className="container">
        {cookies.authentication ? (
          <Header
            selectedContentValue={selectedContentValue}
            onClick={setSelectedContentValue}
          />
        ) : (
          ''
        )}
      </div>
      {selectedContentValue === 0 ? (
        <div data-v-1e611a18="" data-v-3a5fbf82="">
          <div className={s.container4x}>
            <Container4xHeader
              selectedAlg={selectedAlg}
              selectAlgFunc={setSelectedAlg}
            />
          </div>
          <div data-v-1e611a18="" className={s.container4x}>
            <div data-v-1e611a18="" className="row mt24">
              {getMarketDataKeys(marketData)
                .sort()
                .map((countryKey, key) => {
                  return (
                    <Container4XMarket
                      key={key}
                      orders={marketData ? marketData[countryKey].orders : []}
                      countryKey={countryKey}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
      {selectedContentValue === 1 ? (
        <div data-v-1d53ce1d="" data-v-3a5fbf82="" className="container">
          <div data-v-1d53ce1d="" className={classnames(s.panel, 'mt32')}>
            <div data-v-1d53ce1d="">
              <div
                data-v-d0d351ee=""
                data-v-1d53ce1d=""
                className={s.statsBlock}
              >
                <div data-v-d0d351ee="" className={s.statsHeader}>
                  <div data-v-d0d351ee="" className={s.title}>
                    {'Показаны '}
                    <div
                      data-v-1d53ce1d=""
                      className={classnames(s.dropdownLink, 'dropdown')}
                      data-v-d0d351ee=""
                    >
                      <span>
                        <span className="" style={{ display: 'none' }}>
                          <div className={s.popper}>
                            <div className={s.dropdownOptions}>
                              <div
                                data-v-21399534=""
                                data-v-1d53ce1d=""
                                className={s.radios}
                              >
                                <div data-v-21399534="" className={s.radio}>
                                  <input
                                    data-v-21399534=""
                                    type="radio"
                                    id="radio243230"
                                    value=""
                                  />
                                  <label
                                    data-v-21399534=""
                                    htmlFor="radio243230"
                                    className=""
                                  >
                                    Все ордеры
                                  </label>
                                </div>
                                <div data-v-21399534="" className={s.radio}>
                                  <input
                                    data-v-21399534=""
                                    type="radio"
                                    id="radio243231"
                                    value="true"
                                  />
                                  <label
                                    data-v-21399534=""
                                    htmlFor="radio243231"
                                    className=""
                                  >
                                    Активные ордеры
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </span>
                        <span className={s.placeholder}>{' Все ордеры '}</span>
                      </span>
                    </div>
                    {' для '}
                    <div
                      data-v-5760e22c=""
                      data-v-1d53ce1d=""
                      tabIndex={0}
                      className={classnames(s.selBox, s.selectbox)}
                      data-v-d0d351ee=""
                    >
                      <div
                        data-v-5760e22c=""
                        aria-haspopup="true"
                        className={s.field}
                      >
                        <div data-v-5760e22c="" className={s.arrows}>
                          <i data-v-5760e22c="" className="fa fa-caret-up" />
                          <i data-v-5760e22c="" className="fa fa-caret-down" />
                        </div>
                        All Algorithms
                      </div>
                      <div
                        data-v-5760e22c=""
                        className={classnames(s.dropdown, 'flex flex--no-wrap')}
                      >
                        <div
                          data-v-5760e22c=""
                          role="listbox"
                          className={s.options}
                        >
                          <div
                            data-v-5760e22c=""
                            role="option"
                            aria-selected="true"
                            className={classnames(s.option, s.selected)}
                          >
                            All Algorithms
                          </div>
                          <div
                            data-v-5760e22c=""
                            role="option"
                            className={s.option}
                          >
                            Scrypt
                          </div>
                          <div
                            data-v-5760e22c=""
                            role="option"
                            className={s.option}
                          >
                            SHA256
                          </div>
                          <div
                            data-v-5760e22c=""
                            role="option"
                            className={s.option}
                          >
                            X11
                          </div>
                          <div
                            data-v-5760e22c=""
                            role="option"
                            className={s.option}
                          >
                            X13
                          </div>
                          <div
                            data-v-5760e22c=""
                            role="option"
                            className={s.option}
                          >
                            Keccak
                          </div>
                          <div
                            data-v-5760e22c=""
                            role="option"
                            className={s.option}
                          >
                            NeoScrypt
                          </div>
                          <div
                            data-v-5760e22c=""
                            role="option"
                            className={s.option}
                          >
                            Qubit
                          </div>
                          <div
                            data-v-5760e22c=""
                            role="option"
                            className={s.option}
                          >
                            Quark
                          </div>
                          <div
                            data-v-5760e22c=""
                            role="option"
                            className={s.option}
                          >
                            Lyra2REv2
                          </div>
                          <div
                            data-v-5760e22c=""
                            role="option"
                            className={s.option}
                          >
                            DaggerHashimoto
                          </div>
                          <div
                            data-v-5760e22c=""
                            role="option"
                            className={s.option}
                          >
                            Decred
                          </div>
                          <div
                            data-v-5760e22c=""
                            role="option"
                            className={s.option}
                          >
                            Lbry
                          </div>
                          <div
                            data-v-5760e22c=""
                            role="option"
                            className={s.option}
                          >
                            Equihash
                          </div>
                          <div
                            data-v-5760e22c=""
                            role="option"
                            className={s.option}
                          >
                            Blake2s
                          </div>
                          <div
                            data-v-5760e22c=""
                            role="option"
                            className={s.option}
                          >
                            Lyra2Z
                          </div>
                          <div
                            data-v-5760e22c=""
                            role="option"
                            className={s.option}
                          >
                            X16R
                          </div>
                          <div
                            data-v-5760e22c=""
                            role="option"
                            className={s.option}
                          >
                            SHA256AsicBoost
                          </div>
                          <div
                            data-v-5760e22c=""
                            role="option"
                            className={s.option}
                          >
                            ZHash
                          </div>
                          <div
                            data-v-5760e22c=""
                            role="option"
                            className={s.option}
                          >
                            GrinCuckatoo31
                          </div>
                          <div
                            data-v-5760e22c=""
                            role="option"
                            className={s.option}
                          >
                            Lyra2REv3
                          </div>
                          <div
                            data-v-5760e22c=""
                            role="option"
                            className={s.option}
                          >
                            CryptoNightR
                          </div>
                          <div
                            data-v-5760e22c=""
                            role="option"
                            className={s.option}
                          >
                            CuckooCycle
                          </div>
                          <div
                            data-v-5760e22c=""
                            role="option"
                            className={s.option}
                          >
                            X16Rv2
                          </div>
                          <div
                            data-v-5760e22c=""
                            role="option"
                            className={s.option}
                          >
                            RandomXmonero
                          </div>
                          <div
                            data-v-5760e22c=""
                            role="option"
                            className={s.option}
                          >
                            Eaglesong
                          </div>
                          <div
                            data-v-5760e22c=""
                            role="option"
                            className={s.option}
                          >
                            GrinCuckatoo32
                          </div>
                          <div
                            data-v-5760e22c=""
                            role="option"
                            className={s.option}
                          >
                            Handshake
                          </div>
                          <div
                            data-v-5760e22c=""
                            role="option"
                            className={s.option}
                          >
                            KAWPOW
                          </div>
                          <div
                            data-v-5760e22c=""
                            role="option"
                            className={s.option}
                          >
                            BeamV3
                          </div>
                          <div
                            data-v-5760e22c=""
                            role="option"
                            className={s.option}
                          >
                            Octopus
                          </div>
                          <div
                            data-v-5760e22c=""
                            role="option"
                            className={s.option}
                          >
                            Autolykos
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-v-46aefae6=""
                  data-v-1d53ce1d=""
                  className="table-wrap relative table"
                  data-v-d0d351ee=""
                >
                  <div data-v-46aefae6="" className="table-container">
                    <table
                      data-v-46aefae6=""
                      cellSpacing="0"
                      cellPadding="0"
                      className="nh padding-large"
                    >
                      <thead data-v-46aefae6="">
                        <tr data-v-46aefae6="">
                          <th data-v-46aefae6="">ID ордера</th>
                          <th data-v-46aefae6="">Начало</th>
                          <th data-v-46aefae6="">Статус</th>
                          <th data-v-46aefae6="" className="text-right">
                            Потрачено и осталось{' '}
                          </th>
                          <th data-v-46aefae6="">Алгоритм, рынок и пул</th>
                          <th data-v-46aefae6="" className="text-right">
                            Действия{' '}
                          </th>
                        </tr>
                      </thead>
                      <tbody data-v-46aefae6="">
                        <tr data-v-46aefae6="">
                          <th data-v-46aefae6="">#3a4f9fa2</th>
                          <th data-v-46aefae6="">2022.01.05: 11.24.45</th>
                          <th data-v-46aefae6="">Alive</th>
                          <th data-v-46aefae6="" className="text-right">
                            0.00534332 BTC 1.21342903 BTC
                          </th>
                          <th data-v-46aefae6="">Scrypt, USA, 2Miners.com</th>
                          <th data-v-46aefae6="" className="text-right">
                            <i className="fas fa-ellipsis-v field" />
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
      {/*{selectedContentValue === 2 ? (*/}
      {/*  <div data-v-48ef0c50="" data-v-3a5fbf82="" className="container">*/}
      {/*    <div data-v-48ef0c50="" className={classnames(s.pools, 'mt40')}>*/}
      {/*      <div*/}
      {/*        data-v-48ef0c50=""*/}
      {/*        className="top-row flex flex--justify-space-between flex--align-baseline"*/}
      {/*      >*/}
      {/*        <div data-v-48ef0c50="">*/}
      {/*          Отображать мои пулы для*/}
      {/*          <div*/}
      {/*            data-v-5760e22c=""*/}
      {/*            data-v-1d53ce1d=""*/}
      {/*            tabIndex={0}*/}
      {/*            className={classnames(s.selBox, s.selectbox)}*/}
      {/*            data-v-d0d351ee=""*/}
      {/*          >*/}
      {/*            <div*/}
      {/*              data-v-5760e22c=""*/}
      {/*              aria-haspopup="true"*/}
      {/*              className={s.field}*/}
      {/*            >*/}
      {/*              <div data-v-5760e22c="" className={s.arrows}>*/}
      {/*                <i data-v-5760e22c="" className="fa fa-caret-up" />*/}
      {/*                <i data-v-5760e22c="" className="fa fa-caret-down" />*/}
      {/*              </div>*/}
      {/*              All Algorithms*/}
      {/*            </div>*/}
      {/*            <div*/}
      {/*              data-v-5760e22c=""*/}
      {/*              className={classnames(s.dropdown, 'flex flex--no-wrap')}*/}
      {/*            >*/}
      {/*              <div*/}
      {/*                data-v-5760e22c=""*/}
      {/*                role="listbox"*/}
      {/*                className={s.options}*/}
      {/*              >*/}
      {/*                <div*/}
      {/*                  data-v-5760e22c=""*/}
      {/*                  role="option"*/}
      {/*                  aria-selected="true"*/}
      {/*                  className={classnames(s.option, s.selected)}*/}
      {/*                >*/}
      {/*                  All Algorithms*/}
      {/*                </div>*/}
      {/*                <div*/}
      {/*                  data-v-5760e22c=""*/}
      {/*                  role="option"*/}
      {/*                  className={s.option}*/}
      {/*                >*/}
      {/*                  Scrypt*/}
      {/*                </div>*/}
      {/*                <div*/}
      {/*                  data-v-5760e22c=""*/}
      {/*                  role="option"*/}
      {/*                  className={s.option}*/}
      {/*                >*/}
      {/*                  SHA256*/}
      {/*                </div>*/}
      {/*                <div*/}
      {/*                  data-v-5760e22c=""*/}
      {/*                  role="option"*/}
      {/*                  className={s.option}*/}
      {/*                >*/}
      {/*                  X11*/}
      {/*                </div>*/}
      {/*                <div*/}
      {/*                  data-v-5760e22c=""*/}
      {/*                  role="option"*/}
      {/*                  className={s.option}*/}
      {/*                >*/}
      {/*                  X13*/}
      {/*                </div>*/}
      {/*                <div*/}
      {/*                  data-v-5760e22c=""*/}
      {/*                  role="option"*/}
      {/*                  className={s.option}*/}
      {/*                >*/}
      {/*                  Keccak*/}
      {/*                </div>*/}
      {/*                <div*/}
      {/*                  data-v-5760e22c=""*/}
      {/*                  role="option"*/}
      {/*                  className={s.option}*/}
      {/*                >*/}
      {/*                  NeoScrypt*/}
      {/*                </div>*/}
      {/*                <div*/}
      {/*                  data-v-5760e22c=""*/}
      {/*                  role="option"*/}
      {/*                  className={s.option}*/}
      {/*                >*/}
      {/*                  Qubit*/}
      {/*                </div>*/}
      {/*                <div*/}
      {/*                  data-v-5760e22c=""*/}
      {/*                  role="option"*/}
      {/*                  className={s.option}*/}
      {/*                >*/}
      {/*                  Quark*/}
      {/*                </div>*/}
      {/*                <div*/}
      {/*                  data-v-5760e22c=""*/}
      {/*                  role="option"*/}
      {/*                  className={s.option}*/}
      {/*                >*/}
      {/*                  Lyra2REv2*/}
      {/*                </div>*/}
      {/*                <div*/}
      {/*                  data-v-5760e22c=""*/}
      {/*                  role="option"*/}
      {/*                  className={s.option}*/}
      {/*                >*/}
      {/*                  DaggerHashimoto*/}
      {/*                </div>*/}
      {/*                <div*/}
      {/*                  data-v-5760e22c=""*/}
      {/*                  role="option"*/}
      {/*                  className={s.option}*/}
      {/*                >*/}
      {/*                  Decred*/}
      {/*                </div>*/}
      {/*                <div*/}
      {/*                  data-v-5760e22c=""*/}
      {/*                  role="option"*/}
      {/*                  className={s.option}*/}
      {/*                >*/}
      {/*                  Lbry*/}
      {/*                </div>*/}
      {/*                <div*/}
      {/*                  data-v-5760e22c=""*/}
      {/*                  role="option"*/}
      {/*                  className={s.option}*/}
      {/*                >*/}
      {/*                  Equihash*/}
      {/*                </div>*/}
      {/*                <div*/}
      {/*                  data-v-5760e22c=""*/}
      {/*                  role="option"*/}
      {/*                  className={s.option}*/}
      {/*                >*/}
      {/*                  Blake2s*/}
      {/*                </div>*/}
      {/*                <div*/}
      {/*                  data-v-5760e22c=""*/}
      {/*                  role="option"*/}
      {/*                  className={s.option}*/}
      {/*                >*/}
      {/*                  Lyra2Z*/}
      {/*                </div>*/}
      {/*                <div*/}
      {/*                  data-v-5760e22c=""*/}
      {/*                  role="option"*/}
      {/*                  className={s.option}*/}
      {/*                >*/}
      {/*                  X16R*/}
      {/*                </div>*/}
      {/*                <div*/}
      {/*                  data-v-5760e22c=""*/}
      {/*                  role="option"*/}
      {/*                  className={s.option}*/}
      {/*                >*/}
      {/*                  SHA256AsicBoost*/}
      {/*                </div>*/}
      {/*                <div*/}
      {/*                  data-v-5760e22c=""*/}
      {/*                  role="option"*/}
      {/*                  className={s.option}*/}
      {/*                >*/}
      {/*                  ZHash*/}
      {/*                </div>*/}
      {/*                <div*/}
      {/*                  data-v-5760e22c=""*/}
      {/*                  role="option"*/}
      {/*                  className={s.option}*/}
      {/*                >*/}
      {/*                  GrinCuckatoo31*/}
      {/*                </div>*/}
      {/*                <div*/}
      {/*                  data-v-5760e22c=""*/}
      {/*                  role="option"*/}
      {/*                  className={s.option}*/}
      {/*                >*/}
      {/*                  Lyra2REv3*/}
      {/*                </div>*/}
      {/*                <div*/}
      {/*                  data-v-5760e22c=""*/}
      {/*                  role="option"*/}
      {/*                  className={s.option}*/}
      {/*                >*/}
      {/*                  CryptoNightR*/}
      {/*                </div>*/}
      {/*                <div*/}
      {/*                  data-v-5760e22c=""*/}
      {/*                  role="option"*/}
      {/*                  className={s.option}*/}
      {/*                >*/}
      {/*                  CuckooCycle*/}
      {/*                </div>*/}
      {/*                <div*/}
      {/*                  data-v-5760e22c=""*/}
      {/*                  role="option"*/}
      {/*                  className={s.option}*/}
      {/*                >*/}
      {/*                  X16Rv2*/}
      {/*                </div>*/}
      {/*                <div*/}
      {/*                  data-v-5760e22c=""*/}
      {/*                  role="option"*/}
      {/*                  className={s.option}*/}
      {/*                >*/}
      {/*                  RandomXmonero*/}
      {/*                </div>*/}
      {/*                <div*/}
      {/*                  data-v-5760e22c=""*/}
      {/*                  role="option"*/}
      {/*                  className={s.option}*/}
      {/*                >*/}
      {/*                  Eaglesong*/}
      {/*                </div>*/}
      {/*                <div*/}
      {/*                  data-v-5760e22c=""*/}
      {/*                  role="option"*/}
      {/*                  className={s.option}*/}
      {/*                >*/}
      {/*                  GrinCuckatoo32*/}
      {/*                </div>*/}
      {/*                <div*/}
      {/*                  data-v-5760e22c=""*/}
      {/*                  role="option"*/}
      {/*                  className={s.option}*/}
      {/*                >*/}
      {/*                  Handshake*/}
      {/*                </div>*/}
      {/*                <div*/}
      {/*                  data-v-5760e22c=""*/}
      {/*                  role="option"*/}
      {/*                  className={s.option}*/}
      {/*                >*/}
      {/*                  KAWPOW*/}
      {/*                </div>*/}
      {/*                <div*/}
      {/*                  data-v-5760e22c=""*/}
      {/*                  role="option"*/}
      {/*                  className={s.option}*/}
      {/*                >*/}
      {/*                  BeamV3*/}
      {/*                </div>*/}
      {/*                <div*/}
      {/*                  data-v-5760e22c=""*/}
      {/*                  role="option"*/}
      {/*                  className={s.option}*/}
      {/*                >*/}
      {/*                  Octopus*/}
      {/*                </div>*/}
      {/*                <div*/}
      {/*                  data-v-5760e22c=""*/}
      {/*                  role="option"*/}
      {/*                  className={s.option}*/}
      {/*                >*/}
      {/*                  Autolykos*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*        <div*/}
      {/*          data-v-48ef0c50=""*/}
      {/*          className={classnames('flex', s.controls)}*/}
      {/*        >*/}
      {/*          <div*/}
      {/*            data-v-4aab7ee2=""*/}
      {/*            data-v-48ef0c50=""*/}
      {/*            className={classnames(s.search, s.inactive)}*/}
      {/*          >*/}
      {/*            <div*/}
      {/*              data-v-1e3c7d4e=""*/}
      {/*              data-v-4aab7ee2=""*/}
      {/*              className={s.inputGroup}*/}
      {/*            >*/}
      {/*              <input*/}
      {/*                data-v-1e3c7d4e=""*/}
      {/*                type="text"*/}
      {/*                onFocus={() => {*/}
      {/*                  setShowPlaceholder(true);*/}
      {/*                }}*/}
      {/*                onBlur={() => {*/}
      {/*                  setShowPlaceholder(false);*/}
      {/*                }}*/}
      {/*                placeholder={showPlaceholder ? 'Поиск...' : ''}*/}
      {/*                className={s.formControl}*/}
      {/*              />*/}
      {/*            </div>*/}
      {/*            <i*/}
      {/*              data-v-4aab7ee2=""*/}
      {/*              className={classnames('fa fa-search', s.icon)}*/}
      {/*            />*/}
      {/*          </div>*/}
      {/*          <button*/}
      {/*            data-v-b4a534bc=""*/}
      {/*            data-v-48ef0c50=""*/}
      {/*            className="ml32 btn primary normal outline"*/}
      {/*          >*/}
      {/*            <span data-v-b4a534bc="">+ Добавить новый пул</span>*/}
      {/*          </button>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*      <div data-v-48ef0c50="" className="panel mt16">*/}
      {/*        <div*/}
      {/*          data-v-46aefae6=""*/}
      {/*          data-v-48ef0c50=""*/}
      {/*          className="table-wrap relative table"*/}
      {/*        >*/}
      {/*          <div data-v-46aefae6="" className="table-container">*/}
      {/*            <table*/}
      {/*              data-v-46aefae6=""*/}
      {/*              cellSpacing="0"*/}
      {/*              cellPadding="0"*/}
      {/*              className="nh padding-normal"*/}
      {/*            >*/}
      {/*              <thead data-v-46aefae6="">*/}
      {/*                <tr data-v-46aefae6="">*/}
      {/*                  <th data-v-46aefae6="">Имя пула </th>*/}
      {/*                  <th data-v-46aefae6="">Алгоритм </th>*/}
      {/*                  <th data-v-46aefae6="">Stratum </th>*/}
      {/*                  <th data-v-46aefae6="">Порт </th>*/}
      {/*                  <th data-v-46aefae6="" className="usernameColumn">*/}
      {/*                    Имя пользователя{' '}*/}
      {/*                  </th>*/}
      {/*                  <th data-v-46aefae6="" className="passwordColumn">*/}
      {/*                    Пароль{' '}*/}
      {/*                  </th>*/}
      {/*                  <th data-v-46aefae6="" className="text-right">*/}
      {/*                    Действия{' '}*/}
      {/*                  </th>*/}
      {/*                </tr>*/}
      {/*              </thead>*/}
      {/*              <tbody data-v-46aefae6="" />*/}
      {/*            </table>*/}
      {/*            <div data-v-46aefae6="" className={s.emptyState}>*/}
      {/*              <div data-v-46aefae6="" className={s.emptyContent}>*/}
      {/*                <div data-v-46aefae6="" className={s.emptyIcon}>*/}
      {/*                  <i data-v-46aefae6="" className="far fa-file" />*/}
      {/*                </div>*/}
      {/*                <div data-v-46aefae6="" className={s.emptyTitle}>*/}
      {/*                  Нет данных для отображения*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*) : (*/}
      {/*  ''*/}
      {/*)}*/}
    </div>
  );
};

export default MarketplaceContent;
