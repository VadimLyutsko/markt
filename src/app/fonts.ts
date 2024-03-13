import { Montserrat, Raleway } from 'next/font/google';
import localFont from 'next/font/local';

export const RalewayFont = Raleway({
  subsets: ['latin'],
  display: 'swap',
});

export const MontserratFont = Montserrat({
  subsets: ['latin'],
  weight: '400',
});


