import { FC, useEffect, useState } from 'react';
import loginStyles from '../../../client/styles/loginFormStyle.module.css';
import InputBox from '../../../client/components/loginPage/inputBox';
import axios from 'axios';
import { useRouter } from 'next/router';
import SelectBox from '../../../client/components/registerPage/selectBox';
import ErrorBox from '../../../client/components/shared/components/errorBox';
import Link from 'next/link';

type TLoginProps = {
  // ДОбавить тип
  users;
};

const Register: FC<TLoginProps> = (props) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [secondPassword, setSecondPassword] = useState<string>('');
  const [showInputError, setShowInputError] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [errorValue, setErrorValue] = useState<string>('');

  const router = useRouter();

  const [uppercaseChar, setUppercaseChar] = useState<boolean>(false);
  const [lowercaseChar, setLowercaseChar] = useState<boolean>(false);
  const [eightChars, setEightChars] = useState<boolean>(false);
  const [oneNumber, setOneNumber] = useState<boolean>(false);
  const [oneSpecialSymbol, setOneSpecialSymbol] = useState<boolean>(false);
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(false);
  const [terms, setTerms] = useState<boolean>(false);
  const [sub, setSub] = useState<boolean>(false);

  function checkUppercaseLetter(pass: string): void {
    const arrayOfAllowedValues: string[] = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ];
    const arrayOfChars: string[] = pass.split('');

    const filteredChars = arrayOfChars.filter((char: string) => {
      if (arrayOfAllowedValues.includes(char)) return char;
    });

    setUppercaseChar(filteredChars.length !== 0);

    // console.log('checkUppercaseLetter', uppercaseChar);

    return;
  }
  function checkLowercaseLetter(pass: string): void {
    const arrayOfAllowedValues: string[] = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ];
    const arrayOfChars: string[] = pass.split('');

    const filteredChars = arrayOfChars.filter((char: string) => {
      if (arrayOfAllowedValues.includes(char)) return char;
    });
    setLowercaseChar(filteredChars.length !== 0);

    // console.log('checkLowercaseLetter', lowercaseChar);
    return;
  }
  function checkStringLength(pass: string): void {
    setEightChars(pass.length >= 8);

    // console.log('checkStringLength', eightChars);
    return;
  }
  function checkNumbersInString(pass: string): void {
    const arrayOfAllowedValues: string[] = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
    ];
    const arrayOfChars: string[] = pass.split('');

    const filteredChars = arrayOfChars.filter((char: string) => {
      if (arrayOfAllowedValues.includes(char)) return char;
    });
    setOneNumber(filteredChars.length !== 0);

    // console.log('checkNumbersInString', oneNumber);
    return;
  }
  function checkSpecialSymbols(pass: string): void {
    const arrayOfAllowedValues: string[] = [
      '!',
      '@',
      '#',
      '$',
      '%',
      '&',
      '?',
      '-',
      '+',
      '=',
      '~',
      '.',
      ',',
      '/',
      '*',
    ];
    const arrayOfChars: string[] = pass.split('');

    const filteredChars = arrayOfChars.filter((char: string) => {
      if (arrayOfAllowedValues.includes(char)) return char;
    });
    setOneSpecialSymbol(filteredChars.length !== 0);
    // console.log('checkSpecialSymbols', oneSpecialSymbol);
    return;
  }
  function checkPasswordsMatch(secondPass: string): void {
    if (!(password === '') && !(secondPass === ''))
      setPasswordsMatch(password === secondPass);
    console.log(
      `second_pass: ${secondPass} passwordState:${password}, second pass: ${secondPassword}`,
    );
    return;
  }
  function checkAll(pass: string): void {
    checkUppercaseLetter(pass);
    checkLowercaseLetter(pass);
    checkStringLength(pass);
    checkNumbersInString(pass);
    checkSpecialSymbols(pass);
    checkPasswordsMatch(secondPassword);
  }

  useEffect(() => {
    checkAll(password);
  }, [password, secondPassword]);

  function verification(): boolean {
    if (
      !uppercaseChar ||
      !lowercaseChar ||
      !eightChars ||
      !oneNumber ||
      !oneSpecialSymbol
    ) {
      setShowInputError(true);
      return false;
    } else {
      setShowInputError(false);
    }
    if (!terms) {
      setShowError(true);
      setErrorValue('Пожалуйста, согласитесь с Условиями и положениями');
      return false;
    } else {
      setShowError(false);
    }
    return true;
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!verification()) return;
    const body = {
      email: email,
      password: password,
      sub: sub,
      terms: terms,
    };
    console.log('submit', e);
    try {
      // const res = await fetch('http://localhost:3000/auth/registration', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(body),
      // });
      const res = await axios.post(
        'http://localhost:3000/auth/registration',
        body,
      );
      console.log('-----------------------------', res);
      if (res.status === 201) {
        await router.push('/');
        console.log('Отправлен запрос');
      } else {
        throw new Error();
      }
    } catch (error) {
      if (error.response.status === 401) {
        console.log(error.response.data);
        setShowError(true);
        setErrorValue(error.response.data.message);
      }
      console.error('An unexpected error happened occurred:', error);
    }
  }

  function onChangeInputTermsHandler() {
    setTerms(!terms);
  }
  function onChangeInputSubHandler() {
    setSub(!terms);
  }

  return (
    <div data-v-72f6983e="" id="content">
      <div data-v-75842485="" data-v-70c03fa5="" data-v-72f6983e="">
        <div data-v-75842485="" className={loginStyles.background} />
        <div data-v-75842485="" className={loginStyles.box}>
          <div data-v-75842485="" className={loginStyles.boxInner}>
            <div data-v-70c03fa5="" data-v-75842485="">
              <h1
                data-v-70c03fa5=""
                data-v-75842485=""
                className="text-center text-light mt8 mb24"
              >
                Создание нового <br />
                аккаунта
                <b> PoEx</b>
              </h1>
              {showError ? <ErrorBox value={errorValue} /> : ''}

              <form data-v-70c03fa5="" data-v-75842485="" onSubmit={onSubmit}>
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
                  autoComplete="new-password"
                  setFunc={setPassword}
                  // checkFunc={checkAll}
                  showError={showInputError}
                />
                <InputBox
                  type="password"
                  name="password2"
                  value="Повторите пароль"
                  autoComplete="new-password"
                  setFunc={setSecondPassword}
                  // checkFunc={checkPasswordsMatch}
                />
                <div
                  data-v-00ee3f6e=""
                  data-v-70c03fa5=""
                  className="requirements mb24"
                  data-v-75842485=""
                >
                  <span
                    data-v-00ee3f6e=""
                    className={lowercaseChar ? 'text-success' : 'text-disabled'}
                  >
                    <small data-v-00ee3f6e="">
                      <i
                        data-v-00ee3f6e=""
                        className={
                          lowercaseChar ? 'far fa-smile' : 'far fa-circle'
                        }
                      />
                      Одна строчная буква
                    </small>
                  </span>
                  <br data-v-00ee3f6e="" />
                  <br data-v-00ee3f6e="" />
                  <span
                    data-v-00ee3f6e=""
                    className={uppercaseChar ? 'text-success' : 'text-disabled'}
                  >
                    <small data-v-00ee3f6e="">
                      <i
                        data-v-00ee3f6e=""
                        className={
                          uppercaseChar ? 'far fa-smile' : 'far fa-circle'
                        }
                      />
                      Одна прописная буква
                    </small>
                  </span>
                  <br data-v-00ee3f6e="" />
                  <br data-v-00ee3f6e="" />
                  <span
                    data-v-00ee3f6e=""
                    className={eightChars ? 'text-success' : 'text-disabled'}
                  >
                    <small data-v-00ee3f6e="">
                      <i
                        data-v-00ee3f6e=""
                        className={
                          eightChars ? 'far fa-smile' : 'far fa-circle'
                        }
                      />
                      Минимум 8 символов
                    </small>
                  </span>
                  <br data-v-00ee3f6e="" />
                  <br data-v-00ee3f6e="" />
                  <span
                    data-v-00ee3f6e=""
                    className={oneNumber ? 'text-success' : 'text-disabled'}
                  >
                    <small data-v-00ee3f6e="">
                      <i
                        data-v-00ee3f6e=""
                        className={oneNumber ? 'far fa-smile' : 'far fa-circle'}
                      />
                      Одна цифра
                    </small>
                  </span>
                  <br data-v-00ee3f6e="" />
                  <br data-v-00ee3f6e="" />
                  <span
                    data-v-00ee3f6e=""
                    className={
                      oneSpecialSymbol ? 'text-success' : 'text-disabled'
                    }
                  >
                    <small data-v-00ee3f6e="">
                      <i
                        data-v-00ee3f6e=""
                        className={
                          oneSpecialSymbol ? 'far fa-smile' : 'far fa-circle'
                        }
                      />
                      Один специальный символ
                    </small>
                  </span>
                  <br data-v-00ee3f6e="" />
                  <br data-v-00ee3f6e="" />
                  <span
                    data-v-00ee3f6e=""
                    className={
                      passwordsMatch ? 'text-success' : 'text-disabled'
                    }
                  >
                    <small data-v-00ee3f6e="">
                      <i
                        data-v-00ee3f6e=""
                        className={
                          passwordsMatch ? 'far fa-smile' : 'far fa-circle'
                        }
                      />
                      Пароли совпадают
                    </small>
                  </span>
                </div>
                <SelectBox />
                <div data-v-70c03fa5="" data-v-75842485="" className="mb16">
                  <div
                    data-v-7bd39ff2=""
                    data-v-70c03fa5=""
                    className="checkbox"
                    data-v-75842485=""
                  >
                    <input
                      data-v-7bd39ff2=""
                      type="checkbox"
                      onChange={onChangeInputTermsHandler}
                      id="checkbox33"
                    />
                    <label data-v-7bd39ff2="" htmlFor="checkbox33">
                      <span
                        data-v-70c03fa5=""
                        data-v-7bd39ff2=""
                        className="terms-text"
                      >
                        {
                          'Я подтверждаю, что страна выбрана верно, соглашаюсь с '
                        }
                        <a
                          data-v-70c03fa5=""
                          data-v-7bd39ff2=""
                          href="https://www.nicehash.com/legal-privacy/terms"
                          target="_blank"
                        >
                          Условиями использования
                        </a>
                        {'и даю согласие на сбор, использование и хранение моих\n' +
                          'данных в соответствии с нашей '}
                        <a
                          data-v-70c03fa5=""
                          data-v-7bd39ff2=""
                          href="https://www.nicehash.com/legal-privacy/privacy"
                          target="_blank"
                        >
                          Политикой конфиденциальности
                        </a>
                        .
                      </span>
                    </label>
                  </div>
                </div>
                <div data-v-70c03fa5="" data-v-75842485="" className="mb32">
                  <div
                    data-v-7bd39ff2=""
                    data-v-70c03fa5=""
                    className="checkbox"
                    data-v-75842485=""
                  >
                    <input
                      data-v-7bd39ff2=""
                      type="checkbox"
                      id="checkbox34"
                      onChange={onChangeInputSubHandler}
                    />
                    <label data-v-7bd39ff2="" htmlFor="checkbox34">
                      <span data-v-7bd39ff2="">
                        Подпишитесь на наши новости и обновления блога
                      </span>
                    </label>
                  </div>
                </div>
                <div
                  data-v-70c03fa5=""
                  data-v-75842485=""
                  className="text-center"
                >
                  <div data-v-70c03fa5="" data-v-75842485="">
                    <button
                      data-v-b4a534bc=""
                      data-v-70c03fa5=""
                      className="btn primary medium fluid"
                      type="submit"
                    >
                      <span data-v-b4a534bc="">Создать аккаунт</span>
                    </button>
                  </div>
                </div>
                <div
                  data-v-70c03fa5=""
                  data-v-75842485=""
                  className="text-center mt24"
                >
                  <Link href="/auth/login">
                    <a
                      data-v-70c03fa5=""
                      className="text-muted"
                      data-v-75842485=""
                    >
                      Уже есть аккаунт?
                    </a>
                  </Link>{' '}
                  <Link href="/auth/login">
                    <a data-v-70c03fa5="" className="" data-v-75842485="">
                      Войти
                    </a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
