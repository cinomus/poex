import { FC, useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import React from 'react';
import '../client/styles/styles.css';
import '../client/styles/all.min.css';
import { CookiesProvider, useCookies } from 'react-cookie';
import { wrapper } from '../client/store/store';
import axios, { AxiosError } from 'axios';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const [cookies, setCookies] = useCookies(['authentication', 'refresh']);
  const [isLoading, setIsLoading] = useState(false);

  async function checkAuth() {
    setIsLoading(true);
    await axios.post('/auth/refresh').catch((e: AxiosError) => {});
    setIsLoading(false);
  }

  useEffect(() => {
    if (!cookies.authentication) {
      checkAuth();
    }
  }, []);
  if (isLoading) {
    return <div id="app" className="initial-loading" />;
  }
  return (
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  );
};

export default wrapper.withRedux(App);
