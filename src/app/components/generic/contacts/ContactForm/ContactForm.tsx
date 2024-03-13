import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import InputMask from 'react-input-mask';
import styles from './ContactForm.module.scss';
import { validationSchema } from '@/app/common/validates/validates';
import { ConsultationButton } from '../../ConsultationButton/ConsultationButton';

export type ContactFormType = {
  placeholders: {
    firstName: string;
    phoneNumber: string;
  };
  buttonTitle: string;
  gratitudeHandler: (toggle: boolean) => void;
};

export type SelectOptionType = { value: string; label: string };

export type SubmitType = {
  firstName: string;
  phoneNumber: string;
};

export const ContactForm: React.FC<ContactFormType> = ({ placeholders, buttonTitle, gratitudeHandler }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    // mode: 'onBlur',
    mode: 'all',
  });

  const onSubmit = (data: SubmitType) => {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
    // reset();
    reset({
      firstName: '',
      phoneNumber: 'luo',
    });
  };

  const handler = () => {
    gratitudeHandler(true);
    setTimeout(() => {
      gratitudeHandler(false);
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input
          autoComplete="off"
          placeholder={placeholders['firstName']}
          className={styles.nickName}
          {...register('firstName')}
        />
      </label>
      {errors.firstName && <p className={styles.errorBlock}>{errors.firstName?.message}</p>}

      {/* Ниже валидация номера с маской (криво дизейблится, но работает, нужно поколупать) */}

      <label>
        <InputMask
          id="phoneNumber"
          mask="+7 ( 999 ) 999-9999"
          placeholder={placeholders['phoneNumber']}
          {...register('phoneNumber')}
          className={styles.phone}
          autoComplete="off"
        ></InputMask>
      </label>

      {errors.phoneNumber && <p className={styles.lastErrorBlock}>{errors.phoneNumber?.message}</p>}

      <div className={styles.item}>
        <div className={styles.checkboxRect}>
          <input type="checkbox" id="checkbox-rect1" name="check" />
          <label htmlFor="checkbox-rect1" className={styles.privacy}>
            Согласен на сохранение и обработку персональных данных
          </label>
        </div>
      </div>

      <button
        className={clsx(styles.formButton, {
          [styles.dusableButton]: !isValid,
        })}
        disabled={!isValid}
        onClick={() => {
          handler();
        }}
      >
        <ConsultationButton description={buttonTitle} />
      </button>
    </form>
  );
};
