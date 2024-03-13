/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { MainPage } from './components/application/MainPage';
import { getData } from './api/getData';

export default async function Home() {
  const res: any = await getData();
  const gbrCourse = Math.round(res.Valute.GBP.Value);

  return (
    <>
      <MainPage gbrCourse={gbrCourse} />
    </>
  );
}
