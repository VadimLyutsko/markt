/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
import styles from './MainPage.module.scss';
import { Container } from '../generic/Container/Container';
import Image from 'next/image';
import mentor from '../../../../public/mentor.png';
import mentor2 from '../../../../public/mentor 2.png';
import { ConsultationButton } from '../generic/ConsultationButton/ConsultationButton';
import { Card } from '../generic/Card/Card';
import Contacts from '../generic/contacts/Contacts';
import { useState, KeyboardEvent, EventHandler } from 'react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { clsx } from 'clsx';
import { Header } from '../generic/Header/Header';

type MainPagePropsType = {
  gbrCourse: number;
};

export const MainPage: React.FC<MainPagePropsType> = ({ gbrCourse }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isGratitude, setIsGratitude] = useState(false);
  const date = new Date();
  const dateArr = (date.getDate().toString() + (date.getMonth() + 1).toString() + date.getFullYear().toString())
    .split('')
    .filter((i) => i !== '0')
    .map((i) => +i)
    .reduce((partialSum, a) => partialSum + a, 0);

  const formMenuHandler = () => {
    setIsFormOpen(false);
    enablePageScroll();
  };

  const gratitudeHandler = (toggle: boolean) => {
    setIsGratitude(toggle);
  };

  const handleKeyDown: EventHandler<KeyboardEvent<HTMLDivElement>> = (event) => {
    if (event.key === 'Escape' || event.keyCode === 27) {
      setIsFormOpen(false);
      enablePageScroll();
    }
  };

  const blur = clsx(styles.container, {
    [styles.blur]: isFormOpen,
  });

  return (
    <Container>
      <Header isFormOpen={isFormOpen} />
      <div
        className={blur}
        onKeyDown={(e) => {
          handleKeyDown(e);
        }}
      >
        <main className={styles.main}>
          <h1 className={styles.title}>СОЗДАЮ УСЛОВИЯ ДЛЯ ВАШЕГО УСПЕХА</h1>
          <p className={styles.comment}>
            Когда ваше время и энергия лучше сфокусированы, стремление к новым возможностям становится реальностью, ваш
            успех зависит от ваших действий
          </p>
          <p className={styles.commentMobile}>Ваш успех зависит от ваших действий</p>
          <div className={styles.consultationContainer}>
            <div
              data-scroll-lock-scrollable
              className={styles.marginContainer}
              onClick={() => {
                setIsFormOpen(true);
                disablePageScroll();
              }}
            >
              <ConsultationButton
                description={'Записаться на консультацию'}
                descriptionMobile={'Записаться'}
                isRecord
                isButton
              />
            </div>
            <div
              onClick={() => {
                alert(`Don't touch me at all 😑`);
              }}
            >
              <ConsultationButton
                description={'Бесплатная консультация'}
                descriptionMobile={'Заказать звонок'}
                isButton
              />
            </div>
          </div>
          <div className={styles.fetchDataContainer}>
            <div className={styles.item}>
              <Card description={'техник для\nдостижения целей'} title={`${dateArr}+`} />
            </div>
            <div className={styles.item}>
              <Card description={'увеличение личной\nпродуктивности'} title={`${gbrCourse}%`} />
            </div>
          </div>
        </main>
        <Image src={mentor} className={styles.mentorImage} alt={`mentor`} fill={false} priority={true} />
        <Image src={mentor2} className={styles.mentor2Image} alt={`mentor`} fill={false} priority={true} />
      </div>
      <Contacts
        open={isFormOpen}
        handleClose={formMenuHandler}
        gratitudeHandler={gratitudeHandler}
        isGratitude={isGratitude}
      />
    </Container>
  );
};
