import type { AppProps } from 'next/app'
import '@/styles/globals.css';
import '@/styles/weather.css'
import '@/styles/toggle.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
