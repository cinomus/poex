import React, { FC } from 'react';

interface props {
  value?: string;
}

const ErrorBox: FC<props> = ({ value }) => {
  return (
    <div
      data-v-70c03fa5=""
      data-v-75842485=""
      className="alert alert-error mb24"
    >
      {value}
    </div>
  );
};

export default ErrorBox;
