import React, { FC, useEffect, useState } from 'react';
import s from '../../../styles/contentStyles.module.css';
import Header from '../../marketplace/header';
import Container4xHeader from '../../marketplace/container4xHeader';
import Container4XMarket from '../../marketplace/container4xMarket';
import { fetch } from '../../../../shared/utils/fetch';
import { IOrder, IStats } from '../../../../shared/types/types';
import { useCookies } from 'react-cookie';

interface ContentProps {
  orders?: IOrder[];
  children?: React.ReactChildren | React.ReactElement;
}
interface IMarketData {
  EU?: IStats;
  EU_N?: IStats;
  USA?: IStats;
  USA_E?: IStats;
}

const Content: FC<ContentProps> = ({ children }) => {
  const [selectedAlg, setSelectedAlg] = useState('Scrypt');
  const [marketData, setMarketData] = useState<IMarketData>(null);
  const [cookies, setCookies] = useCookies(['authentication']);

  function getMarketDataKeys(data: IMarketData): string[] {
    return data ? Object.keys(data) : [];
  }
  useEffect(() => {
    fetch(
      `http://localhost:3000/api/hashpower/orderBook?size=1000&algorithm=${selectedAlg.toUpperCase()}`,
    ).then((res) => {
      setMarketData(res.stats);
    });
  }, [selectedAlg]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch(
        `http://localhost:3000/api/hashpower/orderBook?size=1000&algorithm=${selectedAlg.toUpperCase()}`,
      ).then((res) => {
        setMarketData(res.stats);
      });
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div id={s.content}>
      {children}
      <div data-v-3a5fbf82="" data-v-469ec6d3="">
        <div data-v-3a5fbf82="" className="container">
          {cookies.authentication ? <Header /> : ''}
        </div>
        <div data-v-1e611a18="" data-v-3a5fbf82="">
          <div className={s.container4x}>
            <Container4xHeader
              selectedAlg={selectedAlg}
              selectAlgFunc={setSelectedAlg}
            />
          </div>
          <div data-v-1e611a18="" className={s.container4x}>
            <div data-v-1e611a18="" className="row mt24">
              {getMarketDataKeys(marketData)
                .sort()
                .map((countryKey, key) => {
                  return (
                    <Container4XMarket
                      key={key}
                      orders={marketData ? marketData[countryKey].orders : []}
                      countryKey={countryKey}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
