import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

//? Include custom option in here... colors, fonts, etc!!
const customTheme = {};

const config: ThemeConfig = {
   initialColorMode: 'dark',
   useSystemColorMode: true
}

const colors = {
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


const theme = extendTheme({
   customTheme,
   config,
   fonts: {
      Heading: `'Poppins', sans-serif`,
      body: `'Poppins', sans-serif`,
   },
   colors
});

export default theme;
