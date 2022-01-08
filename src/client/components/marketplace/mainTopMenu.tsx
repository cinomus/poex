import React, { FC, useState } from 'react';
import s from '../../styles/mainTopMenu.module.css';
import DropdownBoxWithoutEmail from '../shared/components/dropdownBoxWithoutEmail';
import classnames from 'classnames';
import Link from 'next/link';
import { useCookies } from 'react-cookie';

const MainTopMenu: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cookies, setCookies] = useCookies(['authentication']);

  function mobileMenuNnClickHandler() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  return (
    <div
      className={cookies.authentication ? s.mainTopMenu : s.mainTopMenuUnLog}
    >
      <Link href="/">
        <a className={s.logo} />
      </Link>

      {!cookies.authentication ? (
        ''
      ) : (
        <>
          <ul className={s.menuLeft}>
            <li>
              <Link href="/my/dashboard">
                <a className="">Кабинет</a>
              </Link>
            </li>
            <li>
              <Link href="/my/wallets/">
                <a className="">Кошельки</a>
              </Link>
            </li>
          </ul>
          <div
            className={
              mobileMenuOpen ? classnames(s.mobileMenu, s.open) : s.mobileMenu
            }
          >
            <div onClick={mobileMenuNnClickHandler} className={s.selected}>
              <i className="fa fa-bars icon" /> Меню
            </div>
            <div className={s.options}>
              <Link href="/my/dashboard">
                <a className="">Кабинет</a>
              </Link>
              <Link href="/my/wallets/">
                <a className={s.wallets}>
                  <i className="fas fa-wallet" /> Кошельки
                  <span className={s.amount}>≈ 0.00000000 BTC</span>
                </a>
              </Link>
            </div>
          </div>
        </>
      )}

      <div className={s.menuRight}>
        {cookies.authentication ? (
          <>
            <Link href="/my/wallets/">
              <a className={s.wallets}>
                <i className="fas fa-wallet" />
                <span className={s.value}> ≈ 0.00000000 BTC</span>
              </a>
            </Link>
            <DropdownBoxWithoutEmail />
          </>
        ) : (
          <span data-v-3120c5b3="">
            <a
              data-v-3120c5b3=""
              href="/auth/login"
              className={classnames(s.btn, 'btn secondary normal')}
            >
              <span data-v-3120c5b3="">Войти</span>
            </a>{' '}
            <a
              data-v-3120c5b3=""
              href="/auth/register"
              className={classnames(s.btn, 'btn primary normal')}
            >
              Создать аккаунт
            </a>
          </span>
        )}
      </div>
    </div>
  );
};

export default MainTopMenu;
