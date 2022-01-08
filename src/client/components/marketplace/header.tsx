import React, { Dispatch, FC, SetStateAction } from 'react';
import s from '../../styles/headerStyle.module.css';
// import bs from '../../styles/btnStyles.css';
import classnames from 'classnames';

interface HeaderProps {
  selectedContentValue: number;
  onClick: Dispatch<SetStateAction<number>>;
}

const Header: FC<HeaderProps> = ({ selectedContentValue, onClick }) => {
  return (
    <div className={classnames(s.header, 'flex')}>
      <div className="flex__fill-gap flex--align-vertical flex">
        <h1 className="text-bold visible-xs-down-block">Рынок мощности</h1>
      </div>
      <div className={classnames(s.btnGroup, 'btn-group')}>
        <a
          onClick={() => {
            onClick(0);
          }}
          className={classnames(
            s.btn,
            'btn normal secondary',
            selectedContentValue === 0 ? 'selected' : 'unselected',
          )}
        >
          <span>Рынок</span>
        </a>{' '}
        <a
          onClick={() => {
            onClick(1);
          }}
          className={classnames(
            s.btn,
            'btn normal secondary',
            selectedContentValue === 1 ? 'selected' : 'unselected',
          )}
        >
          <span>Мои ордеры</span>
        </a>{' '}
        {/*<a*/}
        {/*  onClick={() => {*/}
        {/*    onClick(2);*/}
        {/*  }}*/}
        {/*  className={classnames(*/}
        {/*    s.btn,*/}
        {/*    'btn normal secondary',*/}
        {/*    selectedContentValue === 2 ? 'selected' : 'unselected',*/}
        {/*  )}*/}
        {/*>*/}
        {/*  <span>Мои пулы</span>*/}
        {/*</a>*/}
      </div>
      <div className="flex__fill-gap flex--align-vertical flex flex--justify-right" />
    </div>
  );
};

export default Header;
