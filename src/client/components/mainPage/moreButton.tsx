import React, { FC } from 'react';
import s from '../../styles/moreButton.module.css';
import classnames from 'classnames';

interface buttonProps {
  buttonState: boolean;
  onClickHandler: () => void;
}

const MoreButton: FC<buttonProps> = ({ buttonState, onClickHandler }) => {
  return (
    <button
      data-v-2839e574=""
      type="button"
      className={classnames(s.more, s.isWww)}
      onClick={onClickHandler}
    >
      <span data-v-2839e574="" className={s.text}>
        {buttonState ? 'ЗАКРЫТЬ' : 'БОЛЬШЕ'}
      </span>
      {buttonState ? (
        <span data-v-2839e574="" className={s.close}>
          ×
        </span>
      ) : (
        <span data-v-2839e574="" className={s.bars}>
          <div data-v-2839e574="" />
          <div data-v-2839e574="" />
          <div data-v-2839e574="" />
        </span>
      )}
    </button>
  );
};

export default MoreButton;
