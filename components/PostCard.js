import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function PostCard({ title, date, description, featureImage, slug, youTubeLink }) {
    return (
        <div className="lg:grid grid-cols-2 pb-20 last:pb-12 mb-14 border-b-2 border-gray-200 last:border-b-0 dark:border-stone-700">
            <a href={youTubeLink}
                className="cursor-pointer  hover:drop-shadow-lg"
            >
                <Image 
                    src={featureImage.url}
                    alt={title}
                    className="rounded-lg"
                    width='1080'
                    height='600'
                />
            </a>
            <div className="mt-2 flex flex-col lg:pl-7 lg:mt-4 mb-2">
                <h3 className="text-md font-semibold md:text-xl lg:text-2xl">
                    <Link href={`/posts/${slug}`}>{title}</Link>
                </h3>
                <p className="font-thin text-sm md:text-base lg:text-lg mb-2">{date}</p>
                <p className="font-light text-sm md:text-base lg:text-lg">{description}</p>
                <Link href={`/posts/${slug}`}>
                    <button 
                        className='border-2 border-gray-400 mb-2 py-3 w-full md:w-1/2 mx-auto lg:w-5/12 lg:mx-0 lg:mb-0 
                        hover:text-white  hover:bg-gray-400 rounded-lg bg-gray-50 text-black  
                        transition ease-in duration-200 text-center mt-6 lg:mt-auto dark:bg-stone-700 dark:text-stone-200 dark:hover:bg-stone-500'
                    >
                        Read More
                    </button>
                </Link>
            </div>
        </div>
    )
}