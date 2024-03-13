/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { MainPage } from './components/application/MainPage';
import { getData } from './api/getData';

const MainPageData = {
  title: 'СОЗДАЮ УСЛОВИЯ ДЛЯ ВАШЕГО УСПЕХА',
  comment:
    'Когда ваше время и энергия лучше сфокусированы, стремление к новым возможностям становится реальностью, ваш успех зависит от ваших действий',
  commentMobile: 'Ваш успех зависит от ваших действий',
};

const buttonsData = [
  {
    id: '0',
    description: 'Записаться на консультацию',
    descriptionMobile: 'Записаться',
    isRecord: true,
    isButton: true,
  },
  {
    id: '1',
    description: 'Бесплатная консультация',
    descriptionMobile: 'Заказать звонок',
    isRecord: false,
    isButton: true,
  },
];
// суммирование текущей даты
const date = new Date();
const dateArr = (date.getDate().toString() + (date.getMonth() + 1).toString() + date.getFullYear().toString())
  .split('')
  .filter((i) => i !== '0')
  .map((i) => +i)
  .reduce((partialSum, a) => partialSum + a, 0);

export default async function Home() {
  const res: any = await getData();
  // any является типом получаемых данных, нет смысла описывать фикцию
  const gbrCourse = Math.round(res.Valute.GBP.Value);

  // Не вынес cardsData из-за запроса на 38 строке (нужен на 51)
  const cardsData = [
    {
      id: '0',
      title: `${dateArr}+`,
      description: 'техник для\nдостижения целей',
      mobileDescription: 'техники',
    },
    {
      id: '1',
      title: `${gbrCourse}%`,
      description: 'увеличение личной\nпродуктивности',
      mobileDescription: 'продуктивности',
    },
  ];

  return (
    <MainPage
      commentMobile={MainPageData.commentMobile}
      comment={MainPageData.comment}
      title={MainPageData.title}
      buttonsData={buttonsData}
      cardsData={cardsData}
    />
  );
}
