import React from 'react';
import styles from './ConsultationButton.module.scss';
import phoneImage from '../../../../../public/arr.svg';

import SVG from 'react-inlinesvg';
import { clsx } from 'clsx';

export type ConsultationButtonPropsType = {
  description: string;
  isRecord?: true;
};

export const ConsultationButton: React.FC<ConsultationButtonPropsType> = ({ description, isRecord }) => {
  const buttonClasses = clsx(styles.buttonContainer, {
    [styles.recordButton]: isRecord,
    [styles.freeButton]: !isRecord,
  });
  return (
    <div className={buttonClasses}>
      <p className={styles.description}>{description}</p>
      <div className={styles.imageContainer}>
        <SVG src={phoneImage.src} title="consultation-button" className={styles.consultationImage} />
      </div>
    </div>
  );
};
