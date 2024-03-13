/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import styles from './Contacts.module.scss';
import clsx from 'clsx';
import logoImage from '../../../../../public/logo.svg';
import SVG from 'react-inlinesvg';

type ContactsType = {
  open: boolean;
  handleClose: () => void;
  gratitudeHandler: (toggle: boolean) => void;
  isGratitude: boolean;
};

const Contacts: React.FC<ContactsType> = ({ open, handleClose, gratitudeHandler, isGratitude }) => {
  // const [isOpen, setIsOpen] = useState(true);

  const placeholders = {
    firstName: 'Имя',
    phoneNumber: 'Телефон',
  };

  const buttonTitle = 'Записаться на консультацию';

  const contactsClass = clsx(styles.contacts, {
    [styles.open]: open,
  });

  const gratitudeClass = clsx(styles.noGratitude, {
    [styles.gratitude]: isGratitude,
  });

  return (
    <div className={contactsClass}>
      <header className={styles.header}>
        <button className={styles.button} onClick={handleClose}></button>
      </header>
      <p className={styles.formTitle}>{'Закажите\nобратный звонок'}</p>
      <ContactForm placeholders={placeholders} buttonTitle={buttonTitle} gratitudeHandler={gratitudeHandler} />

      <div className={clsx(gratitudeClass)}>
        <header className={styles.header}>
          <button
            className={styles.button}
            onClick={() => {
              gratitudeHandler(false);
            }}
          ></button>
        </header>
        <p className={styles.gratitudeTitle}>Спасибо за заявку</p>
        <p className={styles.gratitudeDescription}>{'Я обязательно\nсвяжусь с вами\nв ближайшее время.'}</p>
        <div className={styles.logoContainer}>
          <SVG src={logoImage.src} title="logo-image" className={styles.logo} />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
