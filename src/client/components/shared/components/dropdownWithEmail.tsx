import React, { FC } from 'react';
import s from '../../../styles/dropdownWithEmailStyles.module.css';
import classnames from 'classnames';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const DropdownWithEmail: FC = () => {
  const { email } = useTypedSelector((state) => state.user);
  return (
    <a data-v-c753c8d2="" data-v-2839e574="" className={s.dropdown}>
      <div data-v-c753c8d2="" className={s.selected}>
        <div
          data-v-56d794d0=""
          data-v-c753c8d2=""
          className={classnames(s.avatar, s.icon)}
          style={{
            color: 'white',
            fontSize: '24px',
            lineHeight: '40px',
            width: '40px',
            height: '40px',
            borderRadius: '40px',
            backgroundColor: 'rgb(251, 163, 66)',
          }}
        >
          {email ? email[0].toUpperCase() : ''}
        </div>
        <div data-v-c753c8d2="" className={s.user}>
          {email}
        </div>
      </div>
    </a>
  );
};

export default DropdownWithEmail;
