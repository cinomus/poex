import { FC } from 'react';

const Checkbox: FC = (props) => {
  return (
    <div className="mb24 checkbox">
      <input type="checkbox" id="checkbox20" />
      <label htmlFor="checkbox20">
        <span>Запомнить меня на этом компьютере</span>
      </label>
    </div>
  );
};

export default Checkbox;
