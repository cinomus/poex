import React, { useState } from 'react';
import s from '../../../styles/dropdownStyle.module.css';
import classnames from 'classnames';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import axios from 'axios';
import { useActions } from '../../../hooks/useAction';
import { useRouter } from 'next/router';

const DropdownBoxWithoutEmail = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { email } = useTypedSelector((state) => state.user);
  const { unsetUser } = useActions();
  const router = useRouter();

  function dropdownOnClickHandler() {
    setDropdownOpen(!dropdownOpen);
  }

  async function logout() {
    await axios.post('http://localhost:3000/auth/logout');
    unsetUser();
    await router.push('/');
  }

  return (
    <div className={dropdownOpen ? classnames(s.dropdown, s.open) : s.dropdown}>
      <div className={s.selected} onClick={dropdownOnClickHandler}>
        <div
          className={classnames(s.avatar, s.icon)}
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
          {email ? email[0].toUpperCase() : ''}
        </div>
      </div>
      <div className={s.options}>
        <div className={s.optionsWrap}>
          <div className={s.menu}>
            <div
              className={classnames(s.option, s.profile, s.undefined)}
              onClick={dropdownOnClickHandler}
            >
              <div
                className={classnames(s.avatar, s.icon)}
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
                {email ? email[0].toUpperCase() : ''}
              </div>
              <div className={s.name} />
              <div className={s.email}>{email}</div>
              {/*<a*/}
              {/*  href="https://www.nicehash.com/my/settings/"*/}
              {/*  className={classnames(s.btn, s.primary, 'btn primary small')}*/}
              {/*>*/}
              {/*  Мои настройки*/}
              {/*</a>*/}
            </div>
            {/*<div className={s.option}>*/}
            {/*  <a className={s.nohover}>*/}
            {/*    <i className="far fa-window-restore" /> Темная тема*/}
            {/*    <label className={classnames('pull-right', s.switch)}>*/}
            {/*      <input type="checkbox" />*/}
            {/*      <span className={s.slider} />*/}
            {/*    </label>*/}
            {/*  </a>*/}
            {/*</div>*/}
            {/*<div className={s.option}>*/}
            {/*  <a href="https://www.nicehash.com/support" className="pointer">*/}
            {/*    <i className="fa fa-question-circle" />*/}
            {/*    Справка и поддержка*/}
            {/*  </a>*/}
            {/*</div>*/}
            <div className={s.option}>
              <a className="pointer" onClick={logout}>
                <i className="fa fa-sign-out-alt" /> Выйти
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownBoxWithoutEmail;
