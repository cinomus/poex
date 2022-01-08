import React, { useEffect } from 'react';
import axios from 'axios';
import { useActions } from '../../../client/hooks/useAction';
import { useCookies } from 'react-cookie';
import { useTypedSelector } from '../../../client/hooks/useTypedSelector';
import s from '../../../client/styles/contentStyles.module.css';
import MainLayout from '../../../client/layouts/main';
import classnames from 'classnames';

const Dashboard = () => {
  const [cookies, setCookies] = useCookies(['authentication']);
  const { email, isLoading } = useTypedSelector((state) => state.user);
  const { setUser, setUserLoading } = useActions();

  async function getMe() {
    try {
      setUserLoading(true);
      const res = await axios.post('http://localhost:3000/users/getMe');
      setUser(res.data);
      setUserLoading(false);
    } catch (e) {
      console.log(e);
    }
  }
  if (cookies.authentication) {
    useEffect(() => {
      getMe();
    }, []);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <MainLayout>
      <div data-v-603df505="" data-v-72f6983e="" className="container">
        <div data-v-603df505="" className={s.dashboardContainer}>
          <div data-v-603df505="" className={s.content}>
            <div data-v-603df505="">
              <div data-v-603df505="" className="row">
                <div data-v-603df505="" className="col-nano-6">
                  <h2 data-v-603df505="">Избранное</h2>
                </div>
                <div data-v-603df505="" className="col-nano-6 text-right" />
              </div>
              <div data-v-603df505="" className="row mb24">
                <div data-v-603df505="" className="col-nano-6">
                  <div data-v-603df505="" className="text-muted">
                    Отображение ваших избранных криптовалют
                  </div>
                </div>
              </div>
              <div data-v-b047f630="" data-v-603df505="" className={s.embedded}>
                <div data-v-b047f630="" className={s.emptyWatchlist}>
                  <div data-v-b047f630="" className={s.content}>
                    <div data-v-46aefae6="" className={classnames(s.icon)}>
                      <i data-v-46aefae6="" className="fas fa-coins" />
                    </div>
                    <h2 data-v-b047f630="">У вас нет избранных криптовалют</h2>
                    <p data-v-b047f630="">
                      Добавьте криптовалюты в список избранных и просматривайте
                      цены ваших любимых криптовалют
                    </p>
                    <hr data-v-b047f630="" />
                    <a
                      data-v-b047f630=""
                      href="/my/markets"
                      className="btn primary normal outline"
                    >
                      Просмотр цен
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-v-603df505="" className={s.sidebar}>
            <div
              data-v-603df505=""
              className={classnames(s.sidebarHeader, 'mb16')}
            >
              <h2 data-v-603df505="">Мои кошельки</h2>
              <h3 data-v-603df505="" className={s.details}>
                <a data-v-603df505="" href="/my/wallets/" className="">
                  Подробности
                </a>
              </h3>
            </div>
            <div className={classnames(s.panel, 'transactions-list mt16 mb32')}>
              <div data-v-603df505="" className={s.totalBalance}>
                <small data-v-603df505="" className="text-muted">
                  {'Всего активов '}
                  <i
                    data-v-15eb5000=""
                    data-v-603df505=""
                    className="fa fa-info-circle info has-tooltip"
                    data-original-title="null"
                  />
                </small>
                <h1 data-v-603df505="" className="pt8 pb16 balance pointer">
                  0.00000000 BTC
                </h1>
              </div>
              <div data-v-603df505="" className={s.emptyState}>
                <div data-v-603df505="" className={s.emptyContent}>
                  <div data-v-603df505="" className={s.emptyIcon}>
                    <i data-v-603df505="" className="far fa-file" />
                  </div>
                  <div
                    data-v-603df505=""
                    className={classnames(s.emptyTitle, 'mt16 mb16')}
                  >
                    Транзакций нет
                  </div>
                  <div data-v-603df505="" className={s.emptySubtitle}>
                    Похоже, в вашем аккаунте
                    <br />
                    еще нет средств.
                  </div>
                </div>
              </div>
            </div>
            <div
              data-v-603df505=""
              className={classnames(s.sidebarHeader, 'mb16')}
            >
              <h2 data-v-603df505="">Недавние действия</h2>
            </div>
            <div
              data-v-603df505=""
              className={classnames(s.panel, 'transactions-list mt16 mb32')}
            >
              <div data-v-603df505="" className={s.emptyState}>
                <div data-v-603df505="" className={s.emptyContent}>
                  <div data-v-603df505="" className={s.emptyIcon}>
                    <i data-v-603df505="" className="far fa-file" />
                  </div>
                  <div
                    data-v-603df505=""
                    className={classnames(s.emptyTitle, 'mt16 mb16')}
                  >
                    Транзакций нет
                  </div>
                  <div data-v-603df505="" className={s.emptySubtitle}>
                    Похоже, в вашем аккаунте
                    <br />
                    еще нет средств.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
