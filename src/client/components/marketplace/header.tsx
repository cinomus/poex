import React, { FC } from 'react';
import s from '../../styles/headerStyle.module.css';
// import bs from '../../styles/btnStyles.css';
import classnames from 'classnames';

const Header: FC = () => {
  return (
    <div className={classnames(s.header, 'flex')}>
      <div className="flex__fill-gap flex--align-vertical flex">
        <h1 className="text-bold visible-xs-down-block">Рынок мощности</h1>
      </div>
      <div className={classnames(s.btnGroup, 'btn-group')}>
        <a
          href="https://www.nicehash.com/my/marketplace/SCRYPT"
          className={classnames(s.btn, 'btn normal secondary selected')}
        >
          <span>Рынок</span>
        </a>{' '}
        <a
          href="https://www.nicehash.com/my/marketplace/orders"
          className={classnames(s.btn, 'btn normal secondary unselected')}
        >
          <span>Мои ордеры</span>
        </a>{' '}
        <a
          href="https://www.nicehash.com/my/marketplace/pools"
          className={classnames(s.btn, 'btn normal secondary unselected')}
        >
          <span>Мои пулы</span>
        </a>
      </div>
      <div className="flex__fill-gap flex--align-vertical flex flex--justify-right" />
    </div>
  );
};

export default Header;
