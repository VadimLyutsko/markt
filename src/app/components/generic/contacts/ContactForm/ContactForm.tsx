import React from 'react';
import { ConsultationButton } from '../../ConsultationButton/ConsultationButton';
import { ContactFormType, SubmitType } from '@/app/common/types/types';
import { validationSchema } from '@/app/common/validates/validates';
import { yupResolver } from '@hookform/resolvers/yup';
import { MontserratFont } from '@/app/fonts';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import clsx from 'clsx';
import styles from './ContactForm.module.scss';

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
      // обе строки выше необходимы для очистки масок (phoneNumber в данном случае)
    });
  };

  const handler = () => {
    gratitudeHandler(true);
    setTimeout(() => {
      gratitudeHandler(false);
    }, 4500);
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
            {`Согласен на сохранение\nи обработку персональных данных`}
          </label>
        </div>
      </div>

      <button
        className={clsx(styles.formButton, {
          [styles.disableButton]: !isValid,
        })}
        disabled={!isValid}
        onClick={() => {
          handler();
        }}
      >
        <ConsultationButton id="1" description={buttonTitle} descriptionMobile="Заказать обратный звонок" />
      </button>
    </form>
  );
};
