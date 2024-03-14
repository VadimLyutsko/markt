import React from 'react';
import { MontserratFont } from '@/app/fonts';
import phoneImage from '@public/phone.svg';
import logoImage from '@public/logo.svg';
import menuImage from '@public/menu.svg';
import SVG from 'react-inlinesvg';
import Link from 'next/link';
import clsx from 'clsx';
import styles from './Header.module.scss';

export type HeaderPropsType = {
  isFormOpen: boolean;
};

const navContent = ['Обо мне', 'Наставничество', 'Мероприятия', 'Кейсы', 'Отзывы', 'Контакты'];

export const Header: React.FC<HeaderPropsType> = ({ isFormOpen }) => {
  const navData = navContent.map((item, i) => {
    return (
      <Link href={'javascript:void(0);'} key={i} className={clsx(styles.navItem, MontserratFont.className)}>
        {item}
      </Link>
    );
  });

  const headerClasses = clsx(styles.header, {
    [styles.blur]: isFormOpen,
  });

  return (
    <header className={headerClasses}>
      <SVG src={logoImage.src} title="logo-image" className={styles.logo} />
      <nav className={styles.navContainer}>{navData}</nav>
      <Link href={`tel: 8-345-123-34-45`} className={styles.contactsContainer}>
        <SVG src={menuImage.src} title="menu" className={styles.menuImage} />
        <SVG src={phoneImage.src} title="phone-button" className={styles.phoneImage} />
        <p className={clsx(styles.phone, MontserratFont.className)}>8-345-123-34-45</p>
      </Link>
    </header>
  );
};
