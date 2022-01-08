import React, { FC } from 'react';
import { Head } from 'next/document';
import NprogressContainer from '../components/shared/components/nprogress-container';
import Notifications from '../components/shared/components/notifications';
import ModalBg from '../components/shared/components/modalBg';
import s from '../styles/contentStyles.module.css';
import MainTopMenu from '../components/marketplace/mainTopMenu';
import Footer from '../components/shared/components/footer';

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <div id="app">
        <NprogressContainer />
        <Notifications />
        <ModalBg />
        <div id={s.content}>
          <MainTopMenu />
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
