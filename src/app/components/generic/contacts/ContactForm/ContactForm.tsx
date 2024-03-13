import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import InputMask from 'react-input-mask';
import styles from './ContactForm.module.scss';
import { validationSchema } from '@/app/common/validates/validates';
import { ConsultationButton } from '../../ConsultationButton/ConsultationButton';
import { MontserratFont } from '@/app/fonts';

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
    reset({
      firstName: '',
      phoneNumber: 'luo',
      // обе строки выше необходимы для очистки масок
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
          className={clsx(styles.nickName, MontserratFont.className)}
          {...register('firstName')}
        />
      </label>
      {errors.firstName && (
        <p className={clsx(styles.errorBlock, MontserratFont.className)}>{errors.firstName?.message}</p>
      )}

      <label>
        <InputMask
          id="phoneNumber"
          mask="+7 ( 999 ) 999-9999"
          placeholder={placeholders['phoneNumber']}
          {...register('phoneNumber')}
          className={clsx(styles.phone, MontserratFont.className)}
          autoComplete="off"
        ></InputMask>
      </label>

      {errors.phoneNumber && (
        <p className={clsx(styles.lastErrorBlock, MontserratFont.className)}>{errors.phoneNumber?.message}</p>
      )}

      <div className={styles.item}>
        <div className={styles.checkboxRect}>
          <input type="checkbox" id="checkbox-rect1" name="check" />
          <label htmlFor="checkbox-rect1" className={clsx(styles.privacy, MontserratFont.className)}>
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
        <ConsultationButton description={buttonTitle} descriptionMobile="Заказать обратный звонок" />
      </button>
    </form>
  );
};
