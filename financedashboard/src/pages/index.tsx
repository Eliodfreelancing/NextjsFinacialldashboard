import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Dashboard from './dashboard'
import Header from '@/pages/components/Headers/Header'
import Sidemenu from '@/pages/components/sidemenu'
import Login from './components/Login'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Financial App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
         <Header/>
         <Sidemenu/>
         <Dashboard/>
         <Login/>
      </main>
    </>
  )
}
