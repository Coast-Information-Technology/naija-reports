import Head from 'next/head'
import { Inter } from '@next/font/google'
import Topnav from '../components/Topnav'
import Sidenav from '../components/Sidenav'
import Footer from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Naija Reports</title>
        <meta name="description" content="Social Media App with Information and news updates on events and happenings in nigeria" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Topnav />
      <Sidenav />
      <main>
        Home Page (Feed Page)
        {/* <Link href="/"> Home</Link>
          <Link href="/profile"> My profile</Link>
          <Link href="/post"> post</Link>
          <Link href="/saved_posts"> My Saved post</Link> */}
      </main>
      <Footer />
    </>
  )
}
