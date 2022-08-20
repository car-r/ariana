import Head from 'next/head'
import Image from 'next/image'
import Accomplishments from '../components/Accomplishments'
import ContentCarousel from '../components/Carousel'
import HeroSection from '../components/HeroSection'
import Skills from '../components/Skills'
import styles from '../styles/Home.module.css'

import { getPosts } from "../lib/data"
import Separator from '../components/Separator'

export async function getStaticProps() {
    const posts = await getPosts()
    return {
        props: {
            posts,
        }
    }
}

export default function Home({posts}) {
  console.log(posts)
  return (
    <div className="flex flex-col w-full items-center min-h-screen bg-gray-100">
      <Head>
        <title>Ariana Richter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-full flex-1 text-center bg-white ">
        <HeroSection />
        <Separator />
        <Skills />
        <Separator />
        <Accomplishments />
        <Separator />
        <ContentCarousel posts={posts}/>
      </main>
    </div>
  )
}

