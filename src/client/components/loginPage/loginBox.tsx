import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { FC, useState } from 'react';
import { fetch } from 'src/shared/utils/fetch';
import loginStyles from '../../styles/loginFormStyle.module.css';
import mainStyles from '../../styles/mainStyles.module.css';
import classnames from 'classnames';
import Checkbox from './checkbox';
import EnterBtn from './enterBtn';
import InputBox from './inputBox';
import { useRouter } from 'next/router';
import axios from 'axios';
import ErrorBox from '../shared/components/errorBox';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useAction';
import { useCookies } from 'react-cookie';
import { timeout } from 'rxjs';

const LoginBox: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showError, setShowError] = useState<boolean>(false);
  const [errorValue, setErrorValue] = useState<string>('');
  const [cookies, setCookies] = useCookies(['authentication', 'refresh']);
  const router = useRouter();
  const { setUser } = useActions();

  async function onSubmit(e) {
    console.log('submit', e);
    e.preventDefault();

    const body = {
      email: email,
      password: password,
    };

    try {
      const res = await axios.post('/auth/login', body);
      if (res.status === 201) {
        console.log(res.data);
        setUser(res.data);
        await router.push('/');
        console.log('Отправлен запрос');
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        console.log(error.response.data);
        setShowError(true);
        setErrorValue(error.response.data.message);
      }
      console.error('An unexpected error happened occurred:', error);
    }
  }

  function spinLogo() {
    setTimeout(() => {
      setInterval(() => {}, 5000);
    }, 2000);
  }

  return (
    <div className={loginStyles.box}>
      <div className={loginStyles.boxInner}>
        <div>
          <div className={loginStyles.icon}>
            <div className={loginStyles.logo} />
          </div>
          <h1
            className={classnames('text-center', 'text-light', 'mt8', 'mb16')}
          >
            Войдите с помощью вашего <br />
            аккаунта <b>PoEx</b>
          </h1>
          {showError ? <ErrorBox value={errorValue} /> : ''}
          <div className="text-center mb24">
            <span className="text-muted">Первый раз у нас? </span>
            <Link href="/auth/register">
              <a className="">Зарегистрируйтесь</a>
            </Link>
          </div>
          <form onSubmit={onSubmit}>
            <InputBox
              type="text"
              name="email"
              value="Адрес электронной почты"
              autoComplete="username"
              setFunc={setEmail}
            />
            <InputBox
              type="password"
              name="password"
              value="Пароль"
              autoComplete="current-password"
              setFunc={setPassword}
            />
            <Checkbox />
            <EnterBtn />
          </form>
          <div className="text-center">
            <a className="text-muted pointer">
              <i className="fa fa-lock mr8" />
              Забыли пароль?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps<TLoginProps> = async () => {
//   const users = await fetch('/users/getUsers');
//   return { props: { users } };
// };

export default LoginBox;
