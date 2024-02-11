import Head from 'next/head'
import { Noto_Sans } from 'next/font/google'
import WeatherWidget from '../components/WeatherWidget'

const openSans = Noto_Sans({
  weight: '700',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Weather App - Task Admin</title>
        <meta name='description' content='Weather app task admin' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${openSans.className}`} id='main-container'>
        <WeatherWidget />
      </main>
    </>
  )
}
