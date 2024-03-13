'use client';
import React from 'react';
import { ConsultationButton } from '../generic/ConsultationButton/ConsultationButton';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { useState, KeyboardEvent, EventHandler } from 'react';
import { MainPagePropsType } from '@/app/common/types/types';
import { Container } from '../generic/Container/Container';
import Contacts from '../generic/contacts/Contacts';
import { Header } from '../generic/Header/Header';
import { Card } from '../generic/Card/Card';
import mentor2 from '@public/mentor 2.png';
import mentor from '@public/mentor.png';
import Image from 'next/image';
import { clsx } from 'clsx';
import styles from './MainPage.module.scss';

export const MainPage: React.FC<MainPagePropsType> = ({ title, comment, commentMobile, buttonsData, cardsData }) => {
  const [isGratitude, setIsGratitude] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

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

  // buttons
  const buttons = buttonsData.map((item) => {
    return (
      <div
        key={item.id}
        className={styles.marginContainer}
        onClick={() => {
          setIsFormOpen(true);
          disablePageScroll();
        }}
      >
        <ConsultationButton
          descriptionMobile={item.descriptionMobile}
          description={item.description}
          isRecord={item.isRecord}
          isButton={item.isButton}
          id={item.id}
        />
      </div>
    );
  });

  // cards
  const cards = cardsData.map((item) => {
    return (
      <div key={item.id} className={styles.item}>
        <Card
          mobileDescription={item.mobileDescription}
          description={item.description}
          title={item.title}
          id={item.id}
        />
      </div>
    );
  });

  return (
    <Container>
      <Header isFormOpen={isFormOpen} />
      <div
        className={clsx(styles.container, {
          [styles.blur]: isFormOpen,
        })}
        onKeyDown={(e) => {
          handleKeyDown(e);
        }}
      >
        <main className={styles.main}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.comment}>{comment}</p>
          <p className={styles.commentMobile}>{commentMobile}</p>
          <div className={styles.consultationContainer} data-scroll-lock-scrollable>
            {buttons}
          </div>
          <div className={styles.fetchDataContainer}>{cards}</div>
        </main>

        <Image src={mentor} className={styles.mentorImage} alt={`mentor`} fill={false} priority={true} />
        <Image src={mentor2} className={styles.mentor2Image} alt={`mentor`} fill={false} priority={true} />
      </div>

      <Contacts
        gratitudeHandler={gratitudeHandler}
        handleClose={formMenuHandler}
        isGratitude={isGratitude}
        open={isFormOpen}
      />
    </Container>
  );
};
