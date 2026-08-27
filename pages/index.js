import Head from 'next/head'
import Accomplishments from '../components/Accomplishments'
import HeroSection from '../components/HeroSection'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center min-h-screen bg-cream dark:bg-black">
      <Head>
        <title>Ariana Richter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-full flex-1 text-center bg-cream dark:bg-black">
        <HeroSection />
        <Skills />
        <Accomplishments />
      </main>
    </div>
  )
}
