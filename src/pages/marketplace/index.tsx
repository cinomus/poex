import React, { FC, useEffect } from 'react';
import axios from 'axios';
import { useActions } from '../../client/hooks/useAction';
import { useCookies } from 'react-cookie';
import { useTypedSelector } from '../../client/hooks/useTypedSelector';
import MarketplaceContent from '../../client/components/marketplace/marketplaceContent';
import { GetServerSideProps } from 'next';
import { fetch } from '../../shared/utils/fetch';
import { IStats } from '../../shared/types/types';
import MainLayout from '../../client/layouts/main';

interface IMarketData {
  EU?: IStats;
  EU_N?: IStats;
  USA?: IStats;
  USA_E?: IStats;
}
interface MarketplaceProps {
  data: IMarketData;
}

const Marketplace: FC<MarketplaceProps> = ({ data }) => {
  const [cookies, setCookies] = useCookies(['authentication']);
  const { email, isLoading } = useTypedSelector((state) => state.user);
  const { setUser, setUserLoading } = useActions();

  async function getMe() {
    try {
      setUserLoading(true);
      const res = await axios.post('/users/getMe');
      setUser(res.data);
      setUserLoading(false);
    } catch (e) {
      console.log(e);
    }
  }
  if (cookies.authentication) {
    useEffect(() => {
      console.log('email', email);
      getMe();
    }, []);
  }

  if (isLoading) {
    return <div id="app" className="initial-loading" />;
  }
  return (
    <MainLayout>
      <MarketplaceContent data={data} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log('getServerSideProps marketplaceContent');
  const { stats } = await fetch(
    `http://localhost:3000/api/hashpower/orderBook?size=1000&algorithm=${'scrypt'.toUpperCase()}`,
  );
  console.log(stats);
  return { props: { data: stats } };
};
export default Marketplace;
