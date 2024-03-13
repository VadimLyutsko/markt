import React from 'react';
import styles from './Header.module.scss';
import logoImage from '../../../../../public/logo.svg';
import phoneImage from '../../../../../public/phone.svg';

import SVG from 'react-inlinesvg';

import { Container } from '../Container/Container';
import clsx from 'clsx';
import { MontserratFont } from '@/app/fonts';
// const

export type HeaderPropsType = {
  // children: React.ReactNode;
};

const navContent = ['Обо мне', 'Наставничество', 'Мероприятия', 'Кейсы', 'Отзывы', 'Контакты'];

export const Header: React.FC<HeaderPropsType> = ({}) => {
  const navData = navContent.map((item, i) => {
    return (
      <span key={i} className={clsx(styles.navItem, MontserratFont.className)}>
        {item}
      </span>
    );
  });

  return (
    <Container>
      <header className={styles.header}>
        <SVG src={logoImage.src} title="logo-image" className={styles.logo} />
        <div className={styles.navContainer}>{navData}</div>
        <div className={styles.contactsContainer}>
          <SVG src={phoneImage.src} title="phone-button" className={styles.phoneImage} />
          <p className={clsx(styles.phone, MontserratFont.className)}>8-345-123-34-45</p>
        </div>
      </header>
    </Container>
  );
};
