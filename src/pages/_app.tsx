
import { Header } from '@/components/header';
import { theme } from '@/styles/theme'
import { ChakraBaseProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return(
  <ChakraBaseProvider theme={theme}>
    <Header/>
    <Component {...pageProps} />
  </ChakraBaseProvider>
  ) 
  

}
