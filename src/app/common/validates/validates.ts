import * as Yup from 'yup';
const validationRules = {
  required: 'Обязательно к заполнению',
  firstName: {
    min: {
      length: 2,
      title: 'Минимально 2 символа',
    },
    max: {
      length: 10,
      title: 'Максимально 10 символов',
    },
    invalid: 'Введите валидное имя',
  },
  phoneNumber: {
    min: {
      length: 11,
      title: 'Минимально 11 символов',
    },
    max: {
      length: 11,
      title: 'Максимально 11 символов',
    },
  },
};
// form validation rules
export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .required(validationRules.required)
    .min(validationRules.firstName.min.length, validationRules.firstName.min.title)
    .matches(/^[a-zA-Zа-яёА-ЯЁ]+$/u, validationRules.firstName.invalid)
    .max(validationRules.firstName.max.length, validationRules.firstName.max.title),
  phoneNumber: Yup.string().required(validationRules.required),
  // .min(validationRules.phoneNumber.min.length, validationRules.phoneNumber.min.title)
  // .max(validationRules.phoneNumber.max.length, validationRules.phoneNumber.max.title),
});
