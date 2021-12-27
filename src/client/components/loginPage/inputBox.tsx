import { Dispatch, FC, SetStateAction, useState } from 'react';
import { Simulate } from 'react-dom/test-utils';
import change = Simulate.change;

type inputProps = {
  type: string; // password text
  name: string; // password email
  value: string; // Пароль
  autoComplete: string; //"current-password" "username"
  setFunc?: Dispatch<SetStateAction<string>>;
  showError?: boolean;
};

const InputBox: FC<inputProps> = ({
  setFunc,
  type,
  name,
  value,
  autoComplete,
  showError,
}) => {
  const [show, setShow] = useState(false);
  const [focus, setFocus] = useState(false);

  function changeShow(e) {
    console.log(e);
    e.stopPropagation();
    setShow(!show);
  }

  function inputFocus(value) {
    if (value == '') setFocus(!focus);
  }

  return (
    <div
      className={
        showError
          ? 'mb24 field-wrap input-error'
          : 'mb24 field-wrap input-undefined'
      }
    >
      <div className="input-group auth">
        <div className="input-group-prepend">
          <i className={type === 'password' ? 'fa fa-lock' : 'fa fa-user'} />
        </div>
        <input
          onChange={(event) => setFunc(event.target.value)}
          data-v-732639dc=""
          type={show ? 'text' : type}
          name={name}
          placeholder=""
          autoComplete={autoComplete}
          className={focus ? 'form-control up' : 'form-control'}
          style={{ paddingLeft: '56px' }}
          onFocus={(e) => inputFocus(e.target.value)}
          onBlur={(e) => inputFocus(e.target.value)}
        />
        <span
          data-v-732639dc=""
          className={
            focus
              ? 'floating-placeholder prepend up'
              : 'floating-placeholder prepend'
          }
        >
          {value ? value : 'text'}
        </span>
        {type === 'password' ? (
          <div
            onClick={changeShow}
            data-v-732639dc=""
            className={show ? 'show-password show' : 'show-password'}
          >
            <span data-v-732639dc="">{show ? 'Hide' : 'Show'}</span>
            <i
              data-v-732639dc=""
              className={show ? 'fa fa-eye-slash' : 'fa fa-eye'}
            />
          </div>
        ) : (
          ''
        )}
      </div>
      {showError ? (
        <div data-v-d4cf6a2a="" className="input-error-msg">
          <i data-v-d4cf6a2a="" className="input-error-icon" />
          Пароль не соответствует минимальным требованиям безопасности
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default InputBox;
