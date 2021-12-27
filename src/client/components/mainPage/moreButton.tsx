import React, { FC } from 'react';

interface buttonProps {
  buttonState: boolean;
  onClickHandler: () => void;
}

const MoreButton: FC<buttonProps> = ({ buttonState, onClickHandler }) => {
  return (
    <button
      data-v-2839e574=""
      type="button"
      className="more is-www"
      onClick={onClickHandler}
    >
      <span data-v-2839e574="" className="text">
        {buttonState ? 'ЗАКРЫТЬ' : 'БОЛЬШЕ'}
      </span>
      {buttonState ? (
        <span data-v-2839e574="" className="close">
          ×
        </span>
      ) : (
        <span data-v-2839e574="" className="bars">
          <div data-v-2839e574="" />
          <div data-v-2839e574="" />
          <div data-v-2839e574="" />
        </span>
      )}
    </button>
  );
};

export default MoreButton;
