import { Font } from '@react-pdf/renderer';
import { GilroyRegular } from './GilroyRegular';

export function registerFonts(): void {
  Font.register({
    family: 'Gilroy',
    fonts: [
      {
        fontWeight: 400,
        fontStyle: 'normal',
        fontDisplay: 'swap',
        src: './fonts/Gilroy-Regular.ttf',
      },
    ],
  });
}