import React, { Dispatch, FC, SetStateAction } from 'react';
import s from '../../styles/container4xStyles.module.css';
import classnames from 'classnames';
import Selectbox from '../shared/components/selectbox';

interface Container4xProps {
  selectedAlg?: string;
  selectAlgFunc: Dispatch<SetStateAction<string>> | (() => void);
}

const Container4x: FC<Container4xProps> = ({ selectedAlg, selectAlgFunc }) => {
  return (
    <div className={s.container4x}>
      <div className={classnames(s.header, 'mt40')}>
        <h3 className="inline-block">
          Отображать
          <span className="text-bold pointer">{' Все ордеры '}</span>
          для
        </h3>
        <Selectbox selectedAlg={selectedAlg} selectAlgFunc={selectAlgFunc} />
        <div data-v-1e611a18="" className="checkboxes">
          <div
            data-v-7bd39ff2=""
            data-v-1e611a18=""
            tabIndex={0}
            className="hide-charts mr24 checkbox"
          >
            <input data-v-7bd39ff2="" type="checkbox" id="checkbox97" />{' '}
            <label data-v-7bd39ff2="">
              <span data-v-7bd39ff2="">Показывать только мои ордеры</span>
            </label>
          </div>
          <div
            data-v-7bd39ff2=""
            data-v-1e611a18=""
            tabIndex={0}
            className="hide-charts mr24 checkbox"
          >
            <input data-v-7bd39ff2="" type="checkbox" id="checkbox98" />{' '}
            <label data-v-7bd39ff2="">
              <span data-v-7bd39ff2="">Скрыть графики на моих ордерах</span>
            </label>
          </div>
          <div
            data-v-7bd39ff2=""
            data-v-1e611a18=""
            tabIndex={0}
            className="hide-charts checkbox"
          >
            <input data-v-7bd39ff2="" type="checkbox" id="checkbox99" />{' '}
            <label data-v-7bd39ff2="">
              <span data-v-7bd39ff2="">Скрыть ордеры с нулевой скоростью</span>
            </label>
          </div>
        </div>
        <br data-v-1e611a18="" style={{ clear: 'both' }} />
      </div>
      <div data-v-1e611a18="" className="text-center">
        <p data-v-1e611a18="">
          Размещение ордеров на данный момент отключено для вашего аккаунта
          <br data-v-1e611a18="" />{' '}
          <a data-v-1e611a18="" className="btn primary small normal mt8">
            Включить покупку
          </a>
        </p>
      </div>
    </div>
  );
};

export default Container4x;
