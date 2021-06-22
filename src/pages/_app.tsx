import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import '../styles/global.scss'

import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Provider session={ pageProps.session } >
        <Header />
        <Component {...pageProps} />
      </Provider>
    ) 
    
}

export default MyApp
