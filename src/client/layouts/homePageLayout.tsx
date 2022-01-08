import React, { FC, useEffect } from 'react';
import NprogressContainer from '../components/shared/components/nprogress-container';
import Notifications from '../components/shared/components/notifications';
import ModalBg from '../components/shared/components/modalBg';
import Navbar from '../components/shared/components/navbar';
import { useCookies } from 'react-cookie';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useAction';
import axios from 'axios';

const HomePageLayout: FC = ({ children }) => {
  const [cookies, setCookies] = useCookies(['authentication', 'acceptCookies']);
  const { email, isLoading } = useTypedSelector((state) => state.user);
  const { setUser, setUserLoading } = useActions();

  function cookieButtonClickHandler() {
    setCookies('acceptCookies', true);
  }

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
      getMe();
    }, []);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div id="app">
      <NprogressContainer />
      <Notifications />
      <ModalBg />
      <Navbar />
      {children}
      <footer data-v-742affac="" data-v-f6e5e9f4="">
        <div data-v-742affac="" className="container pt48">
          <hr data-v-742affac="" />
          <div data-v-742affac="" className="row">
            <div data-v-742affac="" className="col-sm-6 text-center legal">
              <br data-v-742affac="" />
              Copyright © 2021
            </div>
          </div>
        </div>
      </footer>
      {!cookies.acceptCookies ? (
        <div
          data-v-c3717c66=""
          data-v-f6e5e9f4=""
          className="Cookie Cookie--bottom Cookie--base"
        >
          <div data-v-c3717c66="" className="container">
            <div data-v-c3717c66="" className="row">
              <div data-v-c3717c66="" className="col-sm-8 text">
                Этот веб-сайт использует куки для обеспечения наилучшего опыта.
              </div>
              <div data-v-c3717c66="" className="col-sm-4 text-right">
                <button
                  onClick={cookieButtonClickHandler}
                  data-v-b4a534bc=""
                  data-v-c3717c66=""
                  className="btn primary success normal"
                >
                  Понятно!
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default HomePageLayout;
