import { FC } from 'react';

const EnterBtn: FC = (props) => {
  return (
    <div className="text-center mb40">
      <button className="btn primary medium fluid" type="submit">
        <span>Войти</span>
      </button>
    </div>
  );
};

export default EnterBtn;
