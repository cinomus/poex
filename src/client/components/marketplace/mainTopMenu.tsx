import React, { FC, useState } from 'react';
import s from '../../styles/mainTopMenu.module.css';
import Dropdown from '../shared/components/dropdown';
import classnames from 'classnames';

const MainTopMenu: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function mobileMenuNnClickHandler() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  return (
    <div className={s.mainTopMenu}>
      <a href="/" className={s.logo} />
      <ul className={s.menuLeft}>
        <li>
          <a href="/my/dashboard" className="">
            Кабинет
          </a>
        </li>
        <li>
          <a href="/my/wallets/" className="">
            Кошельки
          </a>
        </li>
      </ul>
      <div
        className={
          mobileMenuOpen ? classnames(s.mobileMenu, s.open) : s.mobileMenu
        }
      >
        <div
          data-v-1daabd86=""
          onClick={mobileMenuNnClickHandler}
          className={s.selected}
        >
          <i data-v-1daabd86="" className="fa fa-bars icon" /> Меню
        </div>
        <div data-v-1daabd86="" className={s.options}>
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
            className={s.wallets}
          >
            <i data-v-1daabd86="" className="icon-wallet" /> Кошельки
            <span data-v-1daabd86="" className={s.amount}>
              ≈ 0.00000000 BTC
            </span>
          </a>
        </div>
      </div>
      <div className={s.menuRight}>
        <a href="https://www.nicehash.com/my/wallets/" className={s.wallets}>
          <i className="fas fa-wallet" />
          <span className={s.value}> ≈ 0.00000000 BTC</span>
        </a>
        <Dropdown />
      </div>
    </div>
  );
};

export default MainTopMenu;
