import type { AppProps } from "next/app";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

import theme from "./../themes/themes";

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <ChakraProvider theme={theme}>
         <ColorModeScript initialColorMode={theme.config.initialColorMode} />
         <Navigation />

         <Component {...pageProps} />
         <Footer />
      </ChakraProvider>
   );
}

export default MyApp;
