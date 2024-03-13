import React from 'react';
import { CardPropsType } from '@/app/common/types/types';
import { MontserratFont } from '@/app/fonts';
import { clsx } from 'clsx';
import styles from './Card.module.scss';

export const Card: React.FC<CardPropsType> = ({ description, title, mobileDescription }) => {
  return (
    <div className={styles.card}>
      <h3 className={clsx(styles.title, MontserratFont.className)}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <p className={styles.mobileDescription}>{mobileDescription}</p>
    </div>
  );
};
