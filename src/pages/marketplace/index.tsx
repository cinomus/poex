import React from 'react';

class MarketPlacePage extends React.Component {
  render() {
    return (
      <div id="app" className="gray-bg">
        <div className="nprogress-container" />
        <div className="notifications" />
        <div className="modal-bg" />
        <div id="content">
          <div data-v-1daabd86="" data-v-469ec6d3="" className="main-top-menu">
            <a data-v-1daabd86="" href="/" className="logo"></a>
            <ul data-v-cfce1b08="" data-v-1daabd86="" className="menu-left">
              <li data-v-cfce1b08="">
                <a
                  data-v-cfce1b08=""
                  href="https://www.nicehash.com/my/dashboard"
                  className=""
                >
                  Кабинет
                </a>
              </li>
              {/*<li data-v-cfce1b08="" className="marketplace top">*/}
              {/*  <a*/}
              {/*    data-v-cfce1b08=""*/}
              {/*    href="#"*/}
              {/*    className="router-link-exact-active router-link-active"*/}
              {/*    aria-current="page"*/}
              {/*  >*/}
              {/*    Рынок мощности*/}
              {/*  </a>*/}
              {/*</li>*/}
              <li data-v-cfce1b08="" className="wallets top">
                <a
                  data-v-cfce1b08=""
                  href="https://www.nicehash.com/my/wallets/"
                  className=""
                >
                  Кошельки
                </a>
              </li>
            </ul>
            <div data-v-1daabd86="" className="mobile-menu">
              <div data-v-1daabd86="" className="selected">
                <i data-v-1daabd86="" className="fa fa-bars icon" /> Меню
              </div>
              <div data-v-1daabd86="" className="options">
                <a
                  data-v-1daabd86=""
                  href="https://www.nicehash.com/my/dashboard"
                  className=""
                >
                  Кабинет
                </a>
                <a
                  data-v-1daabd86=""
                  href="https://www.nicehash.com/my/wallets/"
                  className="wallets"
                >
                  <i data-v-1daabd86="" className="icon-wallet" /> Кошельки
                  <span data-v-1daabd86="" className="amount">
                    ≈ 0.00000000 BTC
                  </span>
                </a>
              </div>
            </div>
            <div data-v-1daabd86="" className="menu-right">
              <a
                data-v-1daabd86=""
                href="https://www.nicehash.com/my/wallets/"
                className="wallets"
              >
                <i data-v-1daabd86="" className="icon-wallet" />
                <span data-v-1daabd86="" className="value">
                  {' '}
                  ≈ 0.00000000 BTC
                </span>
              </a>
              <div data-v-76c87c56="" data-v-1daabd86="" className="dropdown">
                <div data-v-76c87c56="" className="selected">
                  <div
                    data-v-56d794d0=""
                    data-v-76c87c56=""
                    className="avatar icon"
                    style={{
                      color: 'white',
                      fontSize: '20px',
                      lineHeight: '40px',
                      width: '40px',
                      height: '40px',
                      borderRadius: '40px',
                      backgroundColor: 'rgb(251, 163, 66)',
                    }}
                  >
                    R
                  </div>
                </div>
                <div data-v-76c87c56="" className="options">
                  <div data-v-76c87c56="" className="options-wrap">
                    <div data-v-76c87c56="" className="menu">
                      <div
                        data-v-76c87c56=""
                        className="option profile undefined"
                      >
                        <div
                          data-v-56d794d0=""
                          data-v-76c87c56=""
                          className="avatar icon"
                          style={{
                            color: 'white',
                            fontSize: '32px',
                            lineHeight: '72px',
                            width: '72px',
                            height: '72px',
                            borderRadius: '72px',
                            backgroundColor: 'rgb(251, 163, 66)',
                          }}
                        >
                          R
                        </div>
                        <div data-v-76c87c56="" className="name" />
                        <div data-v-76c87c56="" className="email">
                          redsog@mail.ru
                        </div>
                        <a
                          data-v-76c87c56=""
                          href="https://www.nicehash.com/my/settings/"
                          className="btn small primary"
                        >
                          Мои настройки
                        </a>
                      </div>
                      <div data-v-76c87c56="" className="option">
                        <a data-v-76c87c56="" className="nohover">
                          <i
                            data-v-76c87c56=""
                            className="far fa-window-restore"
                          />{' '}
                          Темная тема
                          <label
                            data-v-69e88f62=""
                            data-v-76c87c56=""
                            className="pull-right switch"
                          >
                            <input data-v-69e88f62="" type="checkbox" />
                            <span data-v-69e88f62="" className="slider" />
                          </label>
                        </a>
                      </div>
                      <div data-v-76c87c56="" className="option">
                        <a
                          data-v-76c87c56=""
                          href="https://www.nicehash.com/support"
                          className="pointer"
                        >
                          <i
                            data-v-76c87c56=""
                            className="fa fa-question-circle"
                          />
                          Справка и поддержка
                        </a>
                      </div>
                      <div data-v-76c87c56="" className="option">
                        <a data-v-76c87c56="" className="pointer">
                          <i
                            data-v-76c87c56=""
                            className="fa fa-sign-out-alt"
                          />{' '}
                          Выйти
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-v-3a5fbf82="" data-v-469ec6d3="">
            <div data-v-3a5fbf82="" className="container">
              <div data-v-3a5fbf82="" className="header flex">
                <div
                  data-v-3a5fbf82=""
                  className="flex__fill-gap flex--align-vertical flex"
                >
                  <h1
                    data-v-3a5fbf82=""
                    className="text-bold visible-xs-down-block"
                  >
                    Рынок мощности
                  </h1>
                </div>
                <div data-v-3a5fbf82="" className="btn-group">
                  <a
                    data-v-3a5fbf82=""
                    href="https://www.nicehash.com/my/marketplace/SCRYPT"
                    className="btn normal secondary selected"
                  >
                    <span data-v-3a5fbf82="">Рынок</span>
                  </a>{' '}
                  <a
                    data-v-3a5fbf82=""
                    href="https://www.nicehash.com/my/marketplace/orders"
                    className="btn normal secondary unselected"
                  >
                    <span data-v-3a5fbf82="">Мои ордеры</span>
                  </a>{' '}
                  <a
                    data-v-3a5fbf82=""
                    href="https://www.nicehash.com/my/marketplace/pools"
                    className="btn normal secondary unselected"
                  >
                    <span data-v-3a5fbf82="">Мои пулы</span>
                  </a>
                </div>
                <div
                  data-v-3a5fbf82=""
                  className="flex__fill-gap flex--align-vertical flex flex--justify-right"
                />
              </div>
            </div>
            <div data-v-1e611a18="" data-v-3a5fbf82="">
              <div data-v-1e611a18="" className="container4x">
                <div data-v-1e611a18="" className="header mt40">
                  <h3 data-v-1e611a18="" className="inline-block">
                    Отображать
                    <span data-v-1e611a18="" className="text-bold pointer">
                      {' Все ордеры '}
                    </span>
                    для
                  </h3>
                  <div
                    data-v-5760e22c=""
                    data-v-1e611a18=""
                    tabIndex={0}
                    className="sel-box selectbox"
                  >
                    <div
                      data-v-5760e22c=""
                      aria-haspopup="true"
                      className="field"
                    >
                      <div data-v-5760e22c="" className="arrows">
                        <i data-v-5760e22c="" className="fa fa-caret-up" />
                        <i data-v-5760e22c="" className="fa fa-caret-down" />
                      </div>
                      Scrypt
                    </div>
                    <div
                      data-v-5760e22c=""
                      className="dropdown flex flex--no-wrap"
                    >
                      <div
                        data-v-5760e22c=""
                        role="listbox"
                        className="options"
                      >
                        <div
                          data-v-5760e22c=""
                          role="option"
                          aria-selected="true"
                          className="option selected"
                        >
                          <span data-v-1e611a18="" data-v-5760e22c="">
                            Scrypt{' '}
                          </span>
                        </div>
                        <div
                          data-v-5760e22c=""
                          role="option"
                          className="option"
                        >
                          <span data-v-1e611a18="" data-v-5760e22c="">
                            SHA256
                          </span>
                        </div>
                        <div
                          data-v-5760e22c=""
                          role="option"
                          className="option"
                        >
                          <span data-v-1e611a18="" data-v-5760e22c="">
                            X11
                          </span>
                        </div>
                        <div
                          data-v-5760e22c=""
                          role="option"
                          className="option"
                        >
                          <span data-v-1e611a18="" data-v-5760e22c="">
                            X13
                          </span>
                        </div>
                        <div
                          data-v-5760e22c=""
                          role="option"
                          className="option"
                        >
                          <span data-v-1e611a18="" data-v-5760e22c="">
                            Keccak
                          </span>
                        </div>
                        <div
                          data-v-5760e22c=""
                          role="option"
                          className="option"
                        >
                          <span data-v-1e611a18="" data-v-5760e22c="">
                            NeoScrypt
                          </span>
                        </div>
                        <div
                          data-v-5760e22c=""
                          role="option"
                          className="option"
                        >
                          <span data-v-1e611a18="" data-v-5760e22c="">
                            Qubit
                          </span>
                        </div>
                        <div
                          data-v-5760e22c=""
                          role="option"
                          className="option"
                        >
                          <span data-v-1e611a18="" data-v-5760e22c="">
                            Quark
                          </span>
                        </div>
                        <div
                          data-v-5760e22c=""
                          role="option"
                          className="option"
                        >
                          <span data-v-1e611a18="" data-v-5760e22c="">
                            Lyra2REv2
                          </span>
                        </div>
                        <div
                          data-v-5760e22c=""
                          role="option"
                          className="option"
                        >
                          <span data-v-1e611a18="" data-v-5760e22c="">
                            DaggerHashimoto
                          </span>
                        </div>
                        <div
                          data-v-5760e22c=""
                          role="option"
                          className="option"
                        >
                          <span data-v-1e611a18="" data-v-5760e22c="">
                            Decred
                          </span>
                        </div>
                        <div
                          data-v-5760e22c=""
                          role="option"
                          className="option"
                        >
                          <span data-v-1e611a18="" data-v-5760e22c="">
                            Lbry
                          </span>
                        </div>
                        <div
                          data-v-5760e22c=""
                          role="option"
                          className="option"
                        >
                          <span data-v-1e611a18="" data-v-5760e22c="">
                            Equihash
                          </span>
                        </div>
                        <div
                          data-v-5760e22c=""
                          role="option"
                          className="option"
                        >
                          <span data-v-1e611a18="" data-v-5760e22c="">
                            Blake2s
                          </span>
                        </div>
                        <div
                          data-v-5760e22c=""
                          role="option"
                          className="option"
                        >
                          <span data-v-1e611a18="" data-v-5760e22c="">
                            Lyra2Z
                          </span>
                        </div>
                        <div
                          data-v-5760e22c=""
                          role="option"
                          className="option"
                        >
                          <span data-v-1e611a18="" data-v-5760e22c="">
                            X16R
                          </span>
                        </div>
                        <div
                          data-v-5760e22c=""
                          role="option"
                          className="option"
                        >
                          <span data-v-1e611a18="" data-v-5760e22c="">
                            SHA256AsicBoost
                          </span>
                        </div>
                        <div
                          data-v-5760e22c=""
                          role="option"
                          className="option"
                        >
                          <span data-v-1e611a18="" data-v-5760e22c="">
                            ZHash
                          </span>
                        </div>
                        <div
                          data-v-5760e22c=""
                          role="option"
                          className="option"
                        >
                          <span data-v-1e611a18="" data-v-5760e22c="">
                            GrinCuckatoo31
                          </span>
                        </div>
                        <div
                          data-v-5760e22c=""
                          role="option"
                          className="option"
                        >
                          <span data-v-1e611a18="" data-v-5760e22c="">
                            Lyra2REv3
                          </span>
                        </div>
                        <div
                          data-v-5760e22c=""
                          role="option"
                          className="option"
                        >
                          <span data-v-1e611a18="" data-v-5760e22c="">
                            CryptoNightR
                          </span>
                        </div>
                        <div
                          data-v-5760e22c=""
                          role="option"
                          className="option"
                        >
                          <span data-v-1e611a18="" data-v-5760e22c="">
                            CuckooCycle
                          </span>
                        </div>
                        <div
                          data-v-5760e22c=""
                          role="option"
                          className="option"
                        >
                          <span data-v-1e611a18="" data-v-5760e22c="">
                            X16Rv2
                          </span>
                        </div>
                        <div
                          data-v-5760e22c=""
                          role="option"
                          className="option"
                        >
                          <span data-v-1e611a18="" data-v-5760e22c="">
                            RandomXmonero
                          </span>
                        </div>
                        <div
                          data-v-5760e22c=""
                          role="option"
                          className="option"
                        >
                          <span data-v-1e611a18="" data-v-5760e22c="">
                            Eaglesong
                          </span>
                        </div>
                        <div
                          data-v-5760e22c=""
                          role="option"
                          className="option"
                        >
                          <span data-v-1e611a18="" data-v-5760e22c="">
                            GrinCuckatoo32
                          </span>
                        </div>
                        <div
                          data-v-5760e22c=""
                          role="option"
                          className="option"
                        >
                          <span data-v-1e611a18="" data-v-5760e22c="">
                            Handshake
                          </span>
                        </div>
                        <div
                          data-v-5760e22c=""
                          role="option"
                          className="option"
                        >
                          <span data-v-1e611a18="" data-v-5760e22c="">
                            KAWPOW
                          </span>
                        </div>
                        <div
                          data-v-5760e22c=""
                          role="option"
                          className="option"
                        >
                          <span data-v-1e611a18="" data-v-5760e22c="">
                            BeamV3
                          </span>
                        </div>
                        <div
                          data-v-5760e22c=""
                          role="option"
                          className="option"
                        >
                          <span data-v-1e611a18="" data-v-5760e22c="">
                            Octopus
                          </span>
                        </div>
                        <div
                          data-v-5760e22c=""
                          role="option"
                          className="option"
                        >
                          <span data-v-1e611a18="" data-v-5760e22c="">
                            Autolykos
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-v-1e611a18="" className="checkboxes">
                    <div
                      data-v-7bd39ff2=""
                      data-v-1e611a18=""
                      tabIndex={0}
                      className="hide-charts mr24 checkbox"
                    >
                      <input
                        data-v-7bd39ff2=""
                        type="checkbox"
                        id="checkbox97"
                      />{' '}
                      <label data-v-7bd39ff2="">
                        <span data-v-7bd39ff2="">
                          Показывать только мои ордеры
                        </span>
                      </label>
                    </div>
                    <div
                      data-v-7bd39ff2=""
                      data-v-1e611a18=""
                      tabIndex={0}
                      className="hide-charts mr24 checkbox"
                    >
                      <input
                        data-v-7bd39ff2=""
                        type="checkbox"
                        id="checkbox98"
                      />{' '}
                      <label data-v-7bd39ff2="">
                        <span data-v-7bd39ff2="">
                          Скрыть графики на моих ордерах
                        </span>
                      </label>
                    </div>
                    <div
                      data-v-7bd39ff2=""
                      data-v-1e611a18=""
                      tabIndex={0}
                      className="hide-charts checkbox"
                    >
                      <input
                        data-v-7bd39ff2=""
                        type="checkbox"
                        id="checkbox99"
                      />{' '}
                      <label data-v-7bd39ff2="">
                        <span data-v-7bd39ff2="">
                          Скрыть ордеры с нулевой скоростью
                        </span>
                      </label>
                    </div>
                  </div>
                  <br data-v-1e611a18="" style={{ clear: 'both' }} />
                </div>
                <div data-v-1e611a18="" className="text-center">
                  <p data-v-1e611a18="">
                    Размещение ордеров на данный момент отключено для вашего
                    аккаунта
                    <br data-v-1e611a18="" />{' '}
                    <a
                      data-v-1e611a18=""
                      className="btn primary small normal mt8"
                    >
                      Включить покупку
                    </a>
                  </p>
                </div>
              </div>

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
                                <div
                                  data-v-518f13f8=""
                                  className="icon-small EU"
                                />
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
                                      <br
                                        data-v-518f13f8=""
                                        data-v-46aefae6=""
                                      />
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
                                      <br
                                        data-v-518f13f8=""
                                        data-v-46aefae6=""
                                      />
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
                                      <br
                                        data-v-518f13f8=""
                                        data-v-46aefae6=""
                                      />
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
                                <div
                                  data-v-518f13f8=""
                                  className="icon-small EU"
                                />
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
                              <tbody data-v-46aefae6=""></tbody>
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
        <footer data-v-0d7e0366="" data-v-469ec6d3="">
          <div data-v-0d7e0366="" className="row">
            <div data-v-0d7e0366="" className="col-lg-7 col-sm-12 left-part">
              <ul data-v-0d7e0366="">
                <li data-v-0d7e0366="">
                  <a data-v-0d7e0366="" href="https://www.nicehash.com/">
                    <i
                      data-v-0d7e0366=""
                      className="fa fa-level-up-alt fa-rotate-270 mr8"
                    />
                    На главную
                  </a>
                </li>
              </ul>
            </div>
            <div data-v-0d7e0366="" className="col-lg-5 col-sm-12 right-part">
              <div data-v-0d7e0366="" className="copy-rights">
                © 2022 Все права защищены
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default MarketPlacePage;
