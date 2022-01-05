import Link from 'next/link';
import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const MoreMenu = () => {
  const { email } = useTypedSelector((state) => state.user);

  return (
    <div data-v-2839e574="" className="more-menu">
      <div data-v-2839e574="" className="container">
        {!email ? (
          <div
            data-v-2839e574=""
            className="visible-md-down-block text-center get-started"
          >
            <Link href="/auth/login">
              <a data-v-2839e574="" className="btn secondary normal">
                ВОЙТИ
              </a>
            </Link>
            <Link href="/auth/register">
              <a data-v-2839e574="" className="btn primary normal">
                Регистрация
              </a>
            </Link>
          </div>
        ) : (
          ''
        )}

        <div data-v-2839e574="" className="row">
          <div data-v-2839e574="" className="col-sm-3">
            <div data-v-2839e574="" className="section">
              РЫНОК МОЩНОСТИ
            </div>
            <hr data-v-2839e574="" />
            <Link href="/marketplace">
              <a data-v-2839e574="" className="router-link-active">
                Онлайн-рынок
              </a>
            </Link>
            <Link href="/pricing">
              <a data-v-2839e574="" className="">
                Цены
              </a>
            </Link>

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
