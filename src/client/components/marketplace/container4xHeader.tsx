import React, { Dispatch, FC, SetStateAction } from 'react';
import s from '../../styles/container4xHeader.module.css';
import classnames from 'classnames';
import Selectbox from '../shared/components/selectbox';
import { useCookies } from 'react-cookie';

interface Container4xHeaderProps {
  selectedAlg?: string;
  selectAlgFunc: Dispatch<SetStateAction<string>> | (() => void);
}

const Container4xHeader: FC<Container4xHeaderProps> = ({
  selectedAlg,
  selectAlgFunc,
}) => {
  const [cookies, setCookies] = useCookies(['authentication']);

  return (
    <div className={classnames(s.header, 'mt40')}>
      <h3 className="inline-block">
        Отображать
        <span className="text-bold pointer">{' Все ордеры '}</span>
        для
      </h3>

      <Selectbox selectedAlg={selectedAlg} selectAlgFunc={selectAlgFunc} />
      {cookies.authentication ? (
        <div className={s.checkboxes}>
          <div
            tabIndex={0}
            className={classnames(s.hideCharts, s.checkbox, 'mr24')}
          >
            <input type="checkbox" id="checkbox97" />{' '}
            <label htmlFor="checkbox97">
              <span>Показывать только мои ордеры</span>
            </label>
          </div>
          <div
            tabIndex={0}
            className={classnames(s.hideCharts, s.checkbox, 'mr24')}
          >
            <input type="checkbox" id="checkbox98" />{' '}
            <label htmlFor="checkbox98">
              <span>Скрыть графики на моих ордерах</span>
            </label>
          </div>
          <div tabIndex={0} className={classnames(s.hideCharts, s.checkbox)}>
            <input type="checkbox" id="checkbox99" />{' '}
            <label htmlFor="checkbox99">
              <span>Скрыть ордеры с нулевой скоростью</span>
            </label>
          </div>
        </div>
      ) : (
        ''
      )}

      <br style={{ clear: 'both' }} />
    </div>
  );
};

export default Container4xHeader;
