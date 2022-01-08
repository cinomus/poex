import React, { FC } from 'react';
import classnames from 'classnames';
import s from '../../styles/walletsStyles.module.css';
import { ICurrency } from '../shared/constants/types';

interface WalletProps {
  currency: ICurrency;
}

const Wallet: FC<WalletProps> = ({ currency }) => {
  return (
    <div
      data-v-c5d5ceec=""
      className={classnames(s.wallet, 'col-md-4 pointer')}
    >
      <div data-v-c5d5ceec="" className={s.name}>
        <img
          data-v-c5d5ceec=""
          src={`https://www.nicehash.com/static/currencies/${currency.symbol.toLowerCase()}.png`}
        />
        <div data-v-c5d5ceec="" className={s.cholder}>
          <span data-v-c5d5ceec="" className={s.ccurrency}>
            {currency.symbol}
          </span>{' '}
          <span data-v-c5d5ceec="" className={s.cname}>
            {currency.name}
          </span>
        </div>
        <div
          data-v-c5d5ceec=""
          className={classnames(s.inactiveButtons, 'row')}
        >
          <div data-v-c5d5ceec="" className="col-nano-6 stop-propagation">
            <button
              data-v-b4a534bc=""
              data-v-c5d5ceec=""
              className={classnames(
                s.btn,
                'btn primary success small outline fluid',
              )}
            >
              Депозит
            </button>
          </div>
          <div data-v-c5d5ceec="" className="col-nano-6 stop-propagation">
            <a
              data-v-c5d5ceec=""
              href={`/my/tradeview/${currency.symbol}BTC`}
              className={classnames(
                s.btn,
                'btn primary small fluid text-center outline',
              )}
            >
              Торги
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
