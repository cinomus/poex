import React from 'react';

const MoreMenu = () => {
  return (
    <div data-v-2839e574="" className="more-menu">
      <div data-v-2839e574="" className="container">
        <div
          data-v-2839e574=""
          className="visible-md-down-block text-center get-started"
        >
          <a
            data-v-2839e574=""
            href="https://www.nicehash.com/my/login"
            className="btn secondary normal"
          >
            ВОЙТИ
          </a>
          <a
            data-v-2839e574=""
            href="https://www.nicehash.com/my/register"
            className="btn primary normal"
          >
            Регистрация
          </a>
        </div>
        <div data-v-2839e574="" className="row">
          <div data-v-2839e574="" className="col-sm-3">
            <div data-v-2839e574="" className="section">
              РЫНОК МОЩНОСТИ
            </div>
            <hr data-v-2839e574="" />
            <a
              data-v-2839e574=""
              href="/marketplace"
              className="router-link-active"
            >
              Онлайн-рынок
            </a>{' '}
            <a data-v-2839e574="" href="/pricing" className="">
              Цены
            </a>
            {/*<a data-v-2839e574="" href="/compatible-pools" className="">*/}
            {/*  Совместимые пулы*/}
            {/*</a>*/}
            {/*<a data-v-2839e574="" href="/countdown" className="">*/}
            {/*  Обратный отсчет*/}
            {/*</a>*/}
            {/*<a data-v-2839e574="" href="/referrals" className="">*/}
            {/*  Партнерская программа для покупателей*/}
            {/*</a>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreMenu;
