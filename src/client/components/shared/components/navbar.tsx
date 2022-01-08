import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import DropdownBoxWithEmail from './dropdownWithEmail';
import MoreButton from '../../mainPage/moreButton';
import MoreMenu from '../../mainPage/moreMenu';
import { useCookies } from 'react-cookie';

import s from '../../../styles/navbar.module.css';
import classnames from 'classnames';

const Navbar: FC = ({}) => {
  const [cookies, setCookies] = useCookies(['authentication']);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [openMoreButtonValue, setOpenMoreButtonValue] = useState(false);

  function moreButtonClickHandler() {
    setOpenMoreButtonValue(!openMoreButtonValue);
    setShowMoreMenu(!showMoreMenu);
  }
  return (
    <div data-v-2839e574="" data-v-f6e5e9f4="">
      <nav data-v-2839e574="" className={s.nav}>
        <div data-v-2839e574="" className={s.menuContainer}>
          <div data-v-2839e574="" className={s.logoHolder}>
            <Link href="/">
              <a
                data-v-2839e574=""
                className={classnames(s.logo, s.routerLinkActive)}
              />
            </Link>
          </div>
          <div data-v-2839e574="" className={s.left}>
            <ul data-v-2839e574="" className={s.isWww}>
              <li data-v-2839e574="">
                <Link href="/marketplace">
                  <a data-v-2839e574="" className="">
                    Онлайн-рынок
                  </a>
                </Link>
              </li>
              <li data-v-2839e574="">
                <Link data-v-2839e574="" href="/pricing">
                  <a data-v-2839e574="" className="">
                    Цены
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div data-v-2839e574="" className={s.right}>
            {cookies.authentication ? (
              <DropdownBoxWithEmail />
            ) : (
              <ul data-v-2839e574="">
                <li data-v-2839e574="">
                  <Link href="/auth/login">
                    <a data-v-2839e574="">ВОЙТИ</a>
                  </Link>
                </li>
                <li data-v-2839e574="">
                  <Link href="/auth/register">
                    <a>
                      <button
                        data-v-b4a534bc=""
                        data-v-2839e574=""
                        className={classnames(
                          s.getStarted,
                          'btn primary normal',
                        )}
                      >
                        Зарегистрироваться
                      </button>
                    </a>
                  </Link>
                </li>
              </ul>
            )}
            {/*<a href="/auth/register">*/}
            {/*  <button*/}
            {/*    data-v-b4a534bc=""*/}
            {/*    data-v-2839e574=""*/}
            {/*    className="get-started btn primary normal"*/}
            {/*  >*/}
            {/*    Зарегистрироваться*/}
            {/*  </button>*/}
            {/*</a>*/}
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
  );
};

export default Navbar;
