import { Carousel } from "flowbite-react"
import Image from "next/image"
import Link from "next/link"


{/* <img src="/brl.png"/>
<img src="/headshot.jpg"/> */}

export default function ContentCarousel({posts}) {
    console.log(posts)
    return (
        <div className="w-full flex flex-col bg-gray-100 dark:bg-stone-900 py-40">
            <h2 className="text-3xl md:text-3xl text-center w-11/12 max-w-6xl mx-auto mb-6 font-semibold">
                Recent Posts
            </h2>
            <div className="mx-auto relative w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 h-52 xs:h-72 sm:h-80 md:h-96">
                <Carousel>
                    {posts.map((post) => (
                        <Link href={`/posts/${post.slug}`} key={post.slug}>
                            <Image  alt={post.title} src={post.featureImage.url} layout="fill" className=" object-cover h-96"/>
                        </Link>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}