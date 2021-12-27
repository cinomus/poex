import { FC } from 'react';
import { AppProps } from 'next/app';
import React from 'react';
import '../client/styles/styles.css';
import '../client/styles/all.min.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
