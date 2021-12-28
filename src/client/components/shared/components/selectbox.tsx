import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import classnames from 'classnames';
import container4xStyles from '../../../styles/container4xStyles.module.css';
import s from '../../../styles/selectbox.module.css';
import AlgorithmBox from '../../marketplace/algorithmBox';

interface SelectboxProps {
  selectedAlg?: string;
  selectAlgFunc: Dispatch<SetStateAction<string>> | (() => void);
}

const Selectbox: FC<SelectboxProps> = ({ selectedAlg, selectAlgFunc }) => {
  const algorithms = [
    'Scrypt',
    'SHA256',
    'X11',
    'X13',
    'Keccak',
    'NeoScrypt',
    'Qubit',
    'Quark',
    'Lyra2REv2',
    'DaggerHashimoto',
    'Decred',
    'Lbry',
    'Equihash',
    'Blake2s',
    'Lyra2Z',
    'X16R',
    'SHA256AsicBoost',
    'ZHash',
    'GrinCuckatoo31',
    'Lyra2REv3',
    'CryptoNightR',
    'CuckooCycle',
    'X16Rv2',
    'RandomXmonero',
    'Eaglesong',
    'GrinCuckatoo32',
    'Handshake',
    'KAWPOW',
    'BeamV3',
    'Octopus',
    'Autolykos',
  ];
  const [selectboxOpen, setSelectBoxOpen] = useState(false);

  function selectboxClickHandler() {
    setSelectBoxOpen(!selectboxOpen);
  }
  return (
    <div
      onClick={selectboxClickHandler}
      tabIndex={0}
      className={
        selectboxOpen
          ? classnames(s.selBox, s.selectbox, s.open)
          : classnames(s.selBox, s.selectbox)
      }
    >
      <div aria-haspopup="true" className={s.field}>
        <div className={s.arrows}>
          <i className="fa fa-caret-up" />
          <i className="fa fa-caret-down" />
        </div>
        {selectedAlg}
      </div>
      <div className={classnames(s.dropdown, 'flex flex--no-wrap')}>
        <div role="listbox" className={s.options}>
          {algorithms.map((item, key) => {
            return (
              <AlgorithmBox
                key={key}
                selected={item === selectedAlg}
                selectAlgFunc={selectAlgFunc}
              >
                {item}
              </AlgorithmBox>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Selectbox;
