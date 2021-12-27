import React from 'react';
import NprogressContainer from '../../client/components/shared/components/nprogress-container';
import Notifications from '../../client/components/shared/components/notifications';
import ModalBg from '../../client/components/shared/components/modalBg';
import Content from '../../client/components/shared/components/content';
import Footer from '../../client/components/shared/components/footer';
import MainTopMenu from '../../client/components/marketplace/mainTopMenu';

const Copy = () => {
  return (
    <div id="app">
      <NprogressContainer />
      <Notifications />
      <ModalBg />
      <Content>
        <MainTopMenu />
      </Content>
      <Footer />
    </div>
  );
};

export default Copy;
