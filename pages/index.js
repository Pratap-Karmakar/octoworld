import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useSession } from 'next-auth/react'
import Login from '@/components/Login'
import Sidebar from '@/components/Sidebar'
import Feed from '@/components/Feed'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

const {data:session}=useSession()


if(!session) return <Login/>

  return (
    <>
      <Head>
        <title>OctoWorld</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='relative max-w-[1400px] mx-auto'>
        <Sidebar/>
        <div className='flex gap-6'>
          <Feed/>
        </div>
      </main>
    </>
  )
}
