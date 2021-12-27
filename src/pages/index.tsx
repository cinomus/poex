import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { FC, useState } from 'react';
import { fetch } from 'src/shared/utils/fetch';
import MoreMenu from '../client/components/mainPage/moreMenu';
import MoreButton from '../client/components/mainPage/moreButton';

type THomeProps = {
  orders;
};

interface order {
  id: string;
  type: string;
  market: string;
  algorithm: string;
  price: number;
  speedLimit: number;
  alive: boolean;
  acceptedCurrentSpeed: number;
  rigsCount: number;
}

const Home: FC<THomeProps> = ({ orders }) => {
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [openMoreButtonValue, setOpenMoreButtonValue] = useState(false);
  const [showCookieMessage, setShowCookieMessage] = useState(true); // todo: Убрать это состояние в redux

  function moreButtonClickHandler() {
    setOpenMoreButtonValue(!openMoreButtonValue);
    setShowMoreMenu(!showMoreMenu);
  }
  function cookieButtonClickHandler() {
    setShowCookieMessage(!showCookieMessage);
  }

  return (
    <div id="app">
      <div data-v-f6e5e9f4="" className="nprogress-container" />
      <div data-v-f6e5e9f4="" className="notifications" />
      <div data-v-f6e5e9f4="" className="modal-bg" />
      <div data-v-2839e574="" data-v-f6e5e9f4="">
        <nav data-v-2839e574="">
          <div data-v-2839e574="" className="menu-container">
            <div data-v-2839e574="" className="logo-holder">
              <a
                data-v-2839e574=""
                href="/"
                className="logo router-link-active"
              />
            </div>
            <div data-v-2839e574="" className="left">
              <ul data-v-2839e574="" className="is-www">
                <li data-v-2839e574="">
                  <a data-v-2839e574="" href="/marketplace" className="">
                    Онлайн-рынок
                  </a>
                </li>
                <li data-v-2839e574="">
                  <a data-v-2839e574="" href="https://pricing" className="">
                    Цены
                  </a>
                </li>
              </ul>
            </div>
            <div data-v-2839e574="" className="right">
              <ul data-v-2839e574="">
                <li data-v-2839e574="">
                  <a data-v-2839e574="" href="/auth/login" className="">
                    ВОЙТИ
                  </a>
                </li>
              </ul>
              <a href="/auth/register">
                <button
                  data-v-b4a534bc=""
                  data-v-2839e574=""
                  className="get-started btn primary normal"
                >
                  Зарегистрироваться
                </button>
              </a>
              {openMoreButtonValue ? (
                <MoreButton
                  buttonState={openMoreButtonValue}
                  onClickHandler={moreButtonClickHandler}
                />
              ) : (
                <MoreButton
                  buttonState={openMoreButtonValue}
                  onClickHandler={moreButtonClickHandler}
                />
              )}
            </div>
          </div>
          {showMoreMenu ? <MoreMenu /> : ''}
        </nav>
      </div>
      <div data-v-f6e5e9f4="" className="page">
        <div data-v-33d3efc4="" data-v-f6e5e9f4="">
          <div
            data-v-1759faec=""
            data-v-33d3efc4=""
            className="sun-holder relative sun text-center"
          >
            <div data-v-1759faec="" className="sun">
              <div
                data-v-33d3efc4=""
                data-v-1759faec=""
                className="mb24 container text-center"
              >
                <h1 data-v-33d3efc4="" data-v-1759faec="">
                  <strong>Рынок </strong>мощности для майнинга
                </h1>
                <div data-v-33d3efc4="" data-v-1759faec="" className="row">
                  <div
                    data-v-33d3efc4=""
                    data-v-1759faec=""
                    className="col-md-2"
                  />
                  <div
                    data-v-33d3efc4=""
                    data-v-1759faec=""
                    className="col-md-8"
                  >
                    <p data-v-33d3efc4="" data-v-1759faec="" className="mb80">
                      Забудьте о скамах облачного майнинга. PoEx позволяет вам
                      покупать
                      <br /> мощность для майнинга у других людей.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-1759faec="" className="sun-spot" />
          </div>
          <div data-v-33d3efc4="" className="container mt120 mb48">
            <div data-v-33d3efc4="">
              <div data-v-33d3efc4="" className="hash-power pb150 mb48">
                <div data-v-33d3efc4="" className="row">
                  <div data-v-33d3efc4="" className="col-sm-1" />
                  <div data-v-33d3efc4="" className="col-sm-10 text-center">
                    <h2 data-v-33d3efc4="" className="mb48">
                      Самые популярные алгоритмы за{' '}
                      <strong>последние 24 часа</strong>
                    </h2>
                  </div>
                  <div data-v-33d3efc4="" className="col-sm-1" />
                </div>
                <div data-v-33d3efc4="" className="row">
                  <div data-v-33d3efc4="" className="col-md-4">
                    <div data-v-33d3efc4="" className="coin">
                      <div data-v-33d3efc4="" className="speed">
                        <img
                          data-v-33d3efc4=""
                          src="images/shared/btc.png"
                          alt=""
                        />{' '}
                        Bitcoin
                        <div data-v-33d3efc4="" className="value">
                          <strong data-v-33d3efc4="">1.00</strong> PH/s
                        </div>
                        <small data-v-33d3efc4="">SHA256 на 24 часа</small>
                      </div>
                      <div data-v-33d3efc4="" className="price">
                        <small data-v-33d3efc4="">начиная от</small>
                        <div data-v-33d3efc4="" className="value">
                          <strong data-v-33d3efc4="">
                            {orders['SHA256'].price.toFixed(4)}
                          </strong>
                          <span data-v-33d3efc4="" className="unit">
                            BTC
                          </span>
                        </div>
                        <small data-v-33d3efc4="">(≈$234.26)</small>
                      </div>
                      <div
                        data-v-33d3efc4=""
                        className="line"
                        style={{
                          backgroundImage:
                            'linear-gradient(to left, rgb(251, 163, 66), rgba(251, 163, 66, 0.4))',
                        }}
                      />
                    </div>
                    <a data-v-33d3efc4="" href="/marketplace/SHA256">
                      <button
                        data-v-b4a534bc=""
                        data-v-33d3efc4=""
                        className="btn primary medium fluid"
                      >
                        <span data-v-b4a534bc="">Buy HashPower</span>
                      </button>
                    </a>
                  </div>
                  <div data-v-33d3efc4="" className="col-md-4">
                    <div data-v-33d3efc4="" className="coin">
                      <div data-v-33d3efc4="" className="speed">
                        <img
                          data-v-33d3efc4=""
                          src="images/shared/eth.png"
                          alt=""
                        />{' '}
                        Ether
                        <div data-v-33d3efc4="" className="value">
                          <strong data-v-33d3efc4="">1.00</strong> TH/s
                        </div>
                        <small data-v-33d3efc4="">
                          DAGGERHASHIMOTO на 24 часа
                        </small>
                      </div>
                      <div data-v-33d3efc4="" className="price">
                        <small data-v-33d3efc4="">начиная от</small>
                        <div data-v-33d3efc4="" className="value">
                          <strong data-v-33d3efc4="">
                            {orders['DAGGERHASHIMOTO'].price.toFixed(4)}
                          </strong>
                          <span data-v-33d3efc4="" className="unit">
                            BTC
                          </span>
                        </div>
                        <small data-v-33d3efc4="">(≈$56287.56)</small>
                      </div>
                      <div
                        data-v-33d3efc4=""
                        className="line"
                        style={{
                          backgroundImage:
                            'linear-gradient(to left, rgb(101, 128, 227), rgba(101, 128, 227, 0.4))',
                        }}
                      />
                    </div>
                    <a data-v-33d3efc4="" href="/marketplace/DAGGERHASHIMOTO">
                      <button
                        data-v-b4a534bc=""
                        data-v-33d3efc4=""
                        className="btn primary medium fluid"
                      >
                        <span data-v-b4a534bc="">Buy HashPower</span>
                      </button>
                    </a>
                  </div>
                  <div data-v-33d3efc4="" className="col-md-4">
                    <div data-v-33d3efc4="" className="coin">
                      <div data-v-33d3efc4="" className="speed">
                        <img
                          data-v-33d3efc4=""
                          src="images/shared/ltc.png"
                          alt=""
                        />{' '}
                        Litecoin
                        <div data-v-33d3efc4="" className="value">
                          <strong data-v-33d3efc4="">1.00</strong> TH/s
                        </div>
                        <small data-v-33d3efc4="">SCRYPT на 24 часа</small>
                      </div>
                      <div data-v-33d3efc4="" className="price">
                        <small data-v-33d3efc4="">начиная от</small>
                        <div data-v-33d3efc4="" className="value">
                          <strong data-v-33d3efc4="">
                            {orders['SCRYPT'].price.toFixed(4)}
                          </strong>
                          <span data-v-33d3efc4="" className="unit">
                            BTC
                          </span>
                        </div>
                        <small data-v-33d3efc4="">(≈$9440.61)</small>
                      </div>
                      <div
                        data-v-33d3efc4=""
                        className="line"
                        style={{
                          backgroundImage:
                            'linear-gradient(to left, rgb(149, 149, 149), rgba(149, 149, 149, 0.4))',
                        }}
                      />
                    </div>
                    <a data-v-33d3efc4="" href="/marketplace/SCRYPT">
                      <button
                        data-v-b4a534bc=""
                        data-v-33d3efc4=""
                        className="btn primary medium fluid"
                      >
                        <span data-v-b4a534bc="">Buy HashPower</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div data-v-33d3efc4="" className="row">
                <div data-v-33d3efc4="" className="col-sm-1" />
                <div data-v-33d3efc4="" className="col-sm-10 text-center">
                  <a data-v-33d3efc4="" href="/pricing" className="">
                    <h4 data-v-33d3efc4="" className="mb48">
                      Посмотреть все цены
                    </h4>
                  </a>
                </div>
                <div data-v-33d3efc4="" className="col-sm-1" />
              </div>
            </div>
            <div data-v-33d3efc4="" className="row">
              <div data-v-33d3efc4="" className="col-sm-1" />
              <div data-v-33d3efc4="" className="col-sm-10 text-center">
                <h2 data-v-33d3efc4="" className="mb24">
                  Особенности
                </h2>
              </div>
              <div data-v-33d3efc4="" className="col-sm-1" />
            </div>
            <div data-v-33d3efc4="" className="mt24 mb120 three-steps">
              <div data-v-33d3efc4="" className="row">
                <div data-v-33d3efc4="" className="col-sm-4">
                  <div data-v-33d3efc4="" className="step step-3">
                    <div data-v-33d3efc4="" className="icon">
                      <i data-v-33d3efc4="" className="bitcoin" />
                    </div>
                    <small data-v-33d3efc4="" className="mt16 mb24 text-color">
                      Начиная с 0.001 BTC (-)
                    </small>
                    <br data-v-33d3efc4="" />
                    <br data-v-33d3efc4="" />
                    <p data-v-33d3efc4="">
                      Минимальная цена ордера — 0.001 BTC для каждого из
                      алгоритмов.
                    </p>
                    <div data-v-33d3efc4="" className="line" />
                  </div>
                </div>
                <div data-v-33d3efc4="" className="col-sm-4">
                  <div data-v-33d3efc4="" className="step step-3">
                    <div data-v-33d3efc4="" className="icon">
                      <i data-v-33d3efc4="" className="contract" />
                    </div>
                    <small data-v-33d3efc4="" className="mt16 mb24">
                      Без контрактов
                    </small>
                    <br data-v-33d3efc4="" />
                    <br data-v-33d3efc4="" />
                    <p data-v-33d3efc4="">
                      Отменяйте в любое время и получайте ваши оставшиеся
                      средства назад без комиссии отмены.
                    </p>
                    <div data-v-33d3efc4="" className="line" />
                  </div>
                </div>
                <div data-v-33d3efc4="" className="col-sm-4">
                  <div data-v-33d3efc4="" className="step step-3">
                    <div data-v-33d3efc4="" className="icon">
                      <i data-v-33d3efc4="" className="fast" />
                    </div>
                    <small data-v-33d3efc4="" className="mt16 mb24">
                      Быстрая доставка возможна!
                    </small>
                    <br data-v-33d3efc4="" />
                    <br data-v-33d3efc4="" />
                    <p data-v-33d3efc4="">
                      Массивная мощность для майнинга за короткое время.
                    </p>
                    <div data-v-33d3efc4="" className="line" />
                  </div>
                </div>
              </div>
              <div data-v-33d3efc4="" className="row">
                <div data-v-33d3efc4="" className="col-sm-4">
                  <div data-v-33d3efc4="" className="step step-3">
                    <div data-v-33d3efc4="" className="icon">
                      <i data-v-33d3efc4="" className="share" />
                    </div>
                    <small data-v-33d3efc4="" className="mt16 mb24">
                      Только валидные шары
                    </small>
                    <br data-v-33d3efc4="" />
                    <br data-v-33d3efc4="" />
                    <p data-v-33d3efc4="">
                      Никогда не платите за нерабочие, неправильно
                      сконфигурированные риги или невалидные шары.
                    </p>
                    <div data-v-33d3efc4="" className="line" />
                  </div>
                </div>
                <div data-v-33d3efc4="" className="col-sm-4">
                  <div data-v-33d3efc4="" className="step step-3">
                    <div data-v-33d3efc4="" className="icon">
                      <i data-v-33d3efc4="" className="realtime" />
                    </div>
                    <small data-v-33d3efc4="" className="mt16 mb24">
                      Точная статистика в режиме реального времени
                    </small>
                    <br data-v-33d3efc4="" />
                    <br data-v-33d3efc4="" />
                    <p data-v-33d3efc4="">
                      Следите за вашими ордерами и их производительностью в
                      режиме реального времени.
                    </p>
                    <div data-v-33d3efc4="" className="line" />
                  </div>
                </div>
                <div data-v-33d3efc4="" className="col-sm-4">
                  <div data-v-33d3efc4="" className="step step-3">
                    <div data-v-33d3efc4="" className="icon">
                      <i data-v-33d3efc4="" className="heart" />
                    </div>
                    <small data-v-33d3efc4="" className="mt16 mb24">
                      Майните на вашем любимом пуле
                    </small>
                    <br data-v-33d3efc4="" />
                    <br data-v-33d3efc4="" />
                    <p data-v-33d3efc4="">
                      Начните использовать PoEx. Это самый простой способ начать
                      майнинг и обмен криптовалют.
                    </p>
                    <div data-v-33d3efc4="" className="line" />
                  </div>
                </div>
              </div>
            </div>
            <h2 data-v-33d3efc4="" className="mb24 text-center">
              Как PoEx <strong>работает для вас?</strong>
            </h2>
            <div data-v-33d3efc4="" className="row">
              <div data-v-33d3efc4="" className="col-md-3" />
              <div data-v-33d3efc4="" className="col-md-6 text-center">
                PoEx — это открытый рынок, который соединяет продавцов или
                майнеров мощности с покупателями мощности. Покупатели выбирают
                криптовалюту, которую они хотят майнить, пул, на котором они
                хотят майнить, устанавливают цену, которую они готовы заплатить
                за это, и размещают ордер. Этот ордер затем передается всем, кто
                подключен к PoEx. Предоставленная вами вычислительная мощность
                будет выполнять ордеры покупателей, и вы будете получать оплату
                за эту услугу.
              </div>
            </div>
            <div data-v-33d3efc4="" className="row mb96">
              <div data-v-33d3efc4="" className="col-md-1" />
              <div data-v-33d3efc4="" className="col-md-10 text-center">
                <br data-v-33d3efc4="" />
                <br data-v-33d3efc4="" />
                <a
                  data-v-33d3efc4=""
                  href="/marketplace"
                  className="btn primary medium buy-hashpower-btn"
                >
                  КУПИТЬ МОЩНОСТЬ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer data-v-742affac="" data-v-f6e5e9f4="">
        <div data-v-742affac="" className="container pt48">
          <hr data-v-742affac="" />
          <div data-v-742affac="" className="row">
            <div data-v-742affac="" className="col-sm-6 text-center legal">
              <br data-v-742affac="" />
              Copyright © 2021
            </div>
          </div>
        </div>
      </footer>

      {showCookieMessage ? (
        <div
          data-v-c3717c66=""
          data-v-f6e5e9f4=""
          className="Cookie Cookie--bottom Cookie--base"
        >
          <div data-v-c3717c66="" className="container">
            <div data-v-c3717c66="" className="row">
              <div data-v-c3717c66="" className="col-sm-8 text">
                Этот веб-сайт использует куки для обеспечения наилучшего опыта.
              </div>
              <div data-v-c3717c66="" className="col-sm-4 text-right">
                <button
                  onClick={cookieButtonClickHandler}
                  data-v-b4a534bc=""
                  data-v-c3717c66=""
                  className="btn primary success normal"
                >
                  Понятно!
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<THomeProps> = async () => {
  const { list: orders } = await fetch(
    'https://api2.nicehash.com/main/api/v2/public/orders/active2',
  );
  const worstOrders = getBestOrdersByAlgorithm(orders);

  function getBestOrdersByAlgorithm(orders: order[]) {
    let obj = {};
    for (let order of orders) {
      if (obj.hasOwnProperty(order.algorithm)) {
        if (obj[order.algorithm].price >= order.price && order.rigsCount != 0) {
          obj[order.algorithm] = {
            ...obj[order.algorithm],
            ...order,
            amount: obj[order.algorithm].amount + 1,
          };
        }
      } else {
        obj[order.algorithm] = order;
        obj[order.algorithm].amount = 1;
      }
    }
    return obj;
  }
  return { props: { orders: worstOrders } };
};

export default Home;
