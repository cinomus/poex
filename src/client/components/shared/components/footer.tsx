import React from 'react';
import s from '../../../styles/footer-1.module.css';
import classnames from 'classnames';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.row}>
        <div className={classnames('col-lg-7', 'col-sm-12', s.leftPart)}>
          <ul>
            <li>
              <a href="https://www.nicehash.com/">
                <i className="fa fa-level-up-alt fa-rotate-270 mr8" />
                На главную
              </a>
            </li>
          </ul>
        </div>
        <div className={classnames('col-lg-5', 'col-sm-12', s.rightPart)}>
          <div className={s.copyRights}>© 2022 Все права защищены</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
