import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Naija Reports | user11222343456</title>
        <meta name="description" content="Social Media App with Information and news updates on events and happenings in nigeria" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        Profile Page
        <Link href="/"> Home</Link>
      </main>
    </>
  )
}
