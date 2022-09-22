import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

//? Include custom option in here... colors, fonts, etc!!
const customTheme = {};

const config: ThemeConfig = {
   initialColorMode: 'dark',
   useSystemColorMode: true
}

const theme = extendTheme({
   customTheme,
   config,
   fonts: {
      body: `'Poppins', sans-serif`,
   },
   colors: {
      red: {
         10: '#EF233C',
         20: '#D90429'
      },
      gray: {
         10: '#EDF2F4',
         20: '#8D99AE',
         40: '#2B2D42',
      }
   }
});

export default theme;
