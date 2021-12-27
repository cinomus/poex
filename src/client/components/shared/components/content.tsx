import React, { FC } from 'react';
import s from '../../../styles/contentStyles.module.css';

interface ContentProps {
  children?: React.ReactChildren | React.ReactElement;
}

const Content: FC<ContentProps> = ({ children }) => {
  return <div id={s.content}>{children}</div>;
};

export default Content;
