import React from 'react';
import styles from './Card.module.scss';
import phoneImage from '../../../../../public/arr.svg';

import SVG from 'react-inlinesvg';
import { clsx } from 'clsx';
import { MontserratFont } from '@/app/fonts';

export type CardPropsType = {
  title: string;
  description: string;
};

export const Card: React.FC<CardPropsType> = ({ description, title }) => {
  return (
    <div className={styles.card}>
      <h3 className={clsx(styles.title, MontserratFont.className)}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
