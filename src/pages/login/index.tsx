import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { FC } from 'react';
import { fetch } from 'src/shared/utils/fetch';
import loginStyles from '../../client/styles/loginFormStyle.module.css';
import mainStyles from '../../client/styles/mainStyles.module.css';
import classnames from 'classnames';
import LoginBox from '../../client/components/loginPage/loginBox';

type TLoginProps = {
  // ДОбавить тип
  users;
};

const Login: FC<TLoginProps> = (props) => {
  return (
    <div data-v-469ec6d3="" id="content">
      <div data-v-75842485="" data-v-6e8fd0e4="" data-v-469ec6d3="">
        <div className={loginStyles.background} />
        <LoginBox />
      </div>
    </div>
  );
};

export default Login;
