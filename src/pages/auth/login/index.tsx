import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { FC, useEffect } from 'react';
import { fetch } from 'src/shared/utils/fetch';
import loginStyles from '../../../client/styles/loginFormStyle.module.css';
import mainStyles from '../../../client/styles/mainStyles.module.css';
import classnames from 'classnames';
import LoginBox from '../../../client/components/loginPage/loginBox';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

type TLoginProps = {
  // ДОбавить тип
  users;
};

const Login: FC<TLoginProps> = ({ users }) => {
  const [cookies, setCookies] = useCookies(['authentication']);
  const router = useRouter();

  if (cookies.authentication) {
    router.push('/').then((res) => {});
    return null;
  }

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
