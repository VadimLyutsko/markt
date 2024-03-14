import React from 'react';
import { ConsultationButtonPropsType } from '@/app/common/types/types';
import phoneImage from '@public/arr.svg';
import SVG from 'react-inlinesvg';
import { clsx } from 'clsx';
import styles from './ConsultationButton.module.scss';

export const ConsultationButton: React.FC<ConsultationButtonPropsType> = ({
  description,
  descriptionMobile,
  isRecord,
  isButton,
}) => {
  const buttonClasses = clsx(styles.buttonContainer, {
    [styles.recordButton]: isRecord,
    [styles.freeButton]: !isRecord,
  });

  // Странное ветвление button/div появилось из-за сабмит-кнопки в форрме для избежания проблем с гидратацией
  return isButton ? (
    <button className={buttonClasses}>
      <p className={styles.description}>{description}</p>
      <p className={styles.descriptionMobile}>{descriptionMobile}</p>
      <div className={styles.imageContainer}>
        <SVG src={phoneImage.src} title="consultation-button" className={styles.consultationImage} />
      </div>
    </button>
  ) : (
    <div className={buttonClasses}>
      <p className={styles.description}>{description}</p>
      <p className={styles.descriptionMobile}>{descriptionMobile}</p>
      <div className={styles.imageContainer}>
        <SVG src={phoneImage.src} title="consultation-button" className={styles.consultationImage} />
      </div>
    </div>
  );
};
