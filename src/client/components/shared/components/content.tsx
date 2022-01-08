import React, { FC, useEffect, useState } from 'react';
import s from '../../../styles/contentStyles.module.css';
import Header from '../../marketplace/header';
import Container4xHeader from '../../marketplace/container4xHeader';
import Container4XMarket from '../../marketplace/container4xMarket';
import { fetch } from '../../../../shared/utils/fetch';
import { IOrder, IStats } from '../../../../shared/types/types';
import { useCookies } from 'react-cookie';
import classnames from 'classnames';

interface ContentProps {
  orders?: IOrder[];
  children?: React.ReactChildren | React.ReactElement;
}

const Content: FC<ContentProps> = ({ children }) => {
  return <div id={s.content}>{children}</div>;
};

export default Content;
