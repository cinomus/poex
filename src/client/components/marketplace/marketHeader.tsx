import React, { FC } from 'react';
import s from '../../styles/container4xMarket.module.css';
import classnames from 'classnames';

const MarketHeader: FC = () => {
  return (
    <div data-v-518f13f8="" className={s.marketHeader}>
      <div data-v-518f13f8="" className={classnames(s.collapse, s.off)} />
      <div data-v-518f13f8="" className="row">
        <div
          data-v-518f13f8=""
          className={classnames('col-micro-7 relative', s.marketMove)}
        >
          <div
            data-v-518f13f8=""
            className={classnames(s.headerLabel, s.marketLabel)}
          >
            Рынок
          </div>
          <h1 data-v-518f13f8="" className={s.headerValue}>
            <div
              data-v-518f13f8=""
              className={classnames(s.icon, s[countryKey])}
            >
              <div
                data-v-518f13f8=""
                className={classnames(s.iconSmall, s[countryKey])}
              />
            </div>
            <span data-v-518f13f8="" className={s.marketName}>
              {countriesObj[countryKey]}
            </span>
          </h1>
        </div>
        <div data-v-518f13f8="" className="col-micro-5 text-right">
          <div data-v-518f13f8="" className={s.headerLabel}>
            Общая доступная скорость
          </div>
          <h1 data-v-518f13f8="" className={s.headerValue}>
            {overallSpeed} TH/s
          </h1>
        </div>
      </div>
      <div data-v-2460df9b="" data-v-518f13f8="" className="market-order">
        <hr data-v-2460df9b="" />
        <button
          data-v-b4a534bc=""
          data-v-2460df9b=""
          className="mb24 btn primary normal outline fluid"
        >
          <span data-v-b4a534bc="">Скрыть форму ордера</span>
        </button>
        <div
          data-v-d4cf6a2a=""
          data-v-2460df9b=""
          className="mb8 field-wrap input-null"
        >
          <div data-v-d4cf6a2a="">
            <label data-v-d4cf6a2a="" className="mb8">
              Выберите ваш пул{' '}
            </label>
          </div>
          <div
            data-v-5760e22c=""
            data-v-2460df9b=""
            tabIndex={0}
            className="selectbox"
            data-v-d4cf6a2a=""
          >
            <div
              data-v-5760e22c=""
              aria-haspopup="true"
              className="field placeholder"
            >
              <div data-v-5760e22c="" className="arrows">
                <i data-v-5760e22c="" className="fa fa-caret-up" />
                <i data-v-5760e22c="" className="fa fa-caret-down" />
              </div>
            </div>
            <div data-v-5760e22c="" className="dropdown flex flex--no-wrap">
              <div data-v-5760e22c="" role="listbox" className="options">
                <div data-v-5760e22c="" role="option" className="option">
                  Добавить новый пул...
                </div>
              </div>
            </div>
          </div>
          <small data-v-2460df9b="" data-v-d4cf6a2a="" className="field-note">
            Воспользуйтесь&nbsp;
            <a data-v-2460df9b="" data-v-d4cf6a2a="" className="pointer">
              Верификатором пула
            </a>
            &nbsp;для проверки пула на совместимость
          </small>
        </div>
        <div data-v-2460df9b="" className="row mt24">
          <div data-v-2460df9b="" className="col-sm-4">
            <div
              data-v-d4cf6a2a=""
              data-v-2460df9b=""
              className="field-wrap input-null"
            >
              <div data-v-d4cf6a2a="">
                <label data-v-d4cf6a2a="" className="mb8">
                  Цена (BTC/TH/day)
                  <i
                    data-v-15eb5000=""
                    data-v-d4cf6a2a=""
                    className="fa fa-info-circle info has-tooltip"
                    data-original-title="null"
                  />
                </label>
              </div>
              <div
                data-v-1e3c7d4e=""
                data-v-2460df9b=""
                className="input-group"
                data-v-d4cf6a2a=""
              >
                <input
                  data-v-1e3c7d4e=""
                  type="text"
                  placeholder="Цена"
                  className="form-control"
                />
              </div>
            </div>
            <small data-v-2460df9b="" className="field-note">
              &nbsp;
            </small>
          </div>
          <div data-v-2460df9b="" className="col-sm-4">
            <div
              data-v-d4cf6a2a=""
              data-v-2460df9b=""
              className="field-wrap input-null"
            >
              <div data-v-d4cf6a2a="">
                <label data-v-d4cf6a2a="" className="mb8">
                  Ограничение (TH/s)
                  <i
                    data-v-15eb5000=""
                    data-v-d4cf6a2a=""
                    className="fa fa-info-circle info has-tooltip"
                    data-original-title="null"
                  />
                </label>
              </div>
              <div
                data-v-1e3c7d4e=""
                data-v-2460df9b=""
                className="input-group"
                data-v-d4cf6a2a=""
              >
                <input
                  data-v-1e3c7d4e=""
                  type="text"
                  placeholder="Ограничение"
                  className="form-control"
                />
              </div>
              <small
                data-v-2460df9b=""
                data-v-d4cf6a2a=""
                className="field-note "
              >
                Мин: 0.001
              </small>
            </div>
          </div>
          <div data-v-2460df9b="" className="col-sm-4">
            <div
              data-v-d4cf6a2a=""
              data-v-2460df9b=""
              className="field-wrap input-null"
            >
              <div data-v-d4cf6a2a="">
                <label data-v-d4cf6a2a="" className="mb8">
                  Сумма (BTC)
                  <i
                    data-v-15eb5000=""
                    data-v-d4cf6a2a=""
                    className="fa fa-info-circle info has-tooltip"
                    data-original-title="null"
                  />
                </label>
              </div>
              <div
                data-v-1e3c7d4e=""
                data-v-2460df9b=""
                className="input-group"
                data-v-d4cf6a2a=""
              >
                <input
                  data-v-1e3c7d4e=""
                  type="text"
                  placeholder="сумма"
                  className="form-control"
                />
              </div>
              <small
                data-v-2460df9b=""
                data-v-d4cf6a2a=""
                className="field-note "
              >
                Баланс 0.00000000 BTC
              </small>
            </div>
          </div>
        </div>
        <div
          data-v-2460df9b=""
          className="alert alert-info flex flex--justify-space-between mt24"
        >
          <span data-v-2460df9b="">Приблизительная длительность майнинга</span>{' '}
          <span data-v-2460df9b="" className="text-bold">
            0d 14h 11min
          </span>
        </div>
        <div data-v-2460df9b="" className="row mt24">
          <div data-v-2460df9b="" className="col-sm-12">
            <div
              data-v-d4cf6a2a=""
              data-v-2460df9b=""
              className="field-wrap input-undefined flex--align-vertical flex "
            >
              <div
                data-v-7bd39ff2=""
                data-v-2460df9b=""
                tabIndex={0}
                className="checkbox"
                data-v-d4cf6a2a=""
              >
                <input data-v-7bd39ff2="" type="checkbox" id="checkbox57217" />{' '}
                <label data-v-7bd39ff2="" htmlFor="checkbox57217">
                  <span data-v-2460df9b="" data-v-7bd39ff2="">
                    Я согласен с{' '}
                    <a
                      data-v-2460df9b=""
                      data-v-7bd39ff2=""
                      href="https://www.nicehash.com/terms"
                      target="_blank"
                    >
                      Условиями и положениями
                    </a>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div data-v-2460df9b="" className="text-center">
          <button
            data-v-b4a534bc=""
            data-v-2460df9b=""
            className="btn primary medium fluid mt24"
          >
            <span data-v-b4a534bc="">Разместить ордер на EU - West рынке</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketHeader;
