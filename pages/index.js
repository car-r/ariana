import Head from 'next/head'
import Image from 'next/image'
import Accomplishments from '../components/Accomplishments'
import HeroSection from '../components/HeroSection'
import Skills from '../components/Skills'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center min-h-screen bg-gray-100">
      <Head>
        <title>Ariana Richter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-full flex-1 text-center bg-white ">
        <HeroSection />
        <Skills />
        <Accomplishments />
        <div>Content</div>
      </main>
    </div>
  )
}
