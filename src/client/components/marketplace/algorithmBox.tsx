import React, { Dispatch, FC, SetStateAction } from 'react';
import s from '../../styles/selectbox.module.css';
import classnames from 'classnames';

interface AlgorithmBoxProps {
  selectAlgFunc: Dispatch<SetStateAction<string>> | (() => void);
  selected: boolean;
  children: string;
}

const AlgorithmBox: FC<AlgorithmBoxProps> = ({
  selected,
  selectAlgFunc,
  children,
}) => {
  return (
    <div
      onClick={() => {
        selectAlgFunc(children);
      }}
      role="option"
      className={selected ? classnames(s.option, s.selected) : s.option}
    >
      <span>{children}</span>
    </div>
  );
};

export default AlgorithmBox;
