import { FC, useEffect } from 'react';
import { AppProps } from 'next/app';
import React from 'react';
import '../client/styles/styles.css';
import '../client/styles/all.min.css';
import { CookiesProvider, useCookies } from 'react-cookie';
import { wrapper } from '../client/store/store';
import axios from 'axios';
import { useActions } from '../client/hooks/useAction';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const [cookies, setCookies] = useCookies(['authentication', 'refresh']);

  async function checkAuth() {
    try {
      const res = await axios.post('http://localhost:3000/auth/refresh');
      if (!cookies.authentication) {
        setCookies('authentication', res.data.accessToken, {
          path: '/',
          maxAge: 60 * 60 * 1000,
        });
        setCookies('refresh', res.data.refreshToken, {
          path: '/',
          httpOnly: true,
          maxAge: 30 * 24 * 60 * 60 * 1000,
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    if (!cookies.authentication) {
      checkAuth();
    }
  });
  return (
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  );
};

export default wrapper.withRedux(App);
