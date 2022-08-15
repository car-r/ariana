import Image from 'next/image'
import profilePic from '../public/headshot.jpg'

export default function HeroSection() {
    return (
        <div className="items-center max-w-6xl mx-auto lg:flex lg:w-11/12 justify-around my-20">
            <div className="text-center flex flex-col mb-8 lg:mr-10 lg:mb-0 lg:text-left justify-center">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                {`Hi, I'm Ariana.`}
                </h1>
                <h3 className="text-xl lg:text-2xl mb-2 lg:mb-0">
                Business development and sales professional
                </h3>
                <h2 className="lg:text-lg font-thin mb-4 tracking-wide">
                {`I'm here to build long lasting relationships with clients`}
                </h2>
                <a href="https://www.linkedin.com/in/arianarichter24" 
                className="border-2 border-gray-400 mb-2 py-3 w-10/12 mx-auto lg:w-5/12 lg:mx-0 lg:mb-0 hover:text-white  hover:bg-gray-400 rounded-lg bg-gray-50 text-black  transition ease-in duration-200 text-center
                ">
                <button className="font-bold tracking-wider">Connect with me</button>
                </a>
            </div>
            <div className="p-0 m-0">
                <Image 
                src={profilePic}
                alt="ariana richter"
                width={250}
                height={325}
                className="rounded-lg"
                />
            </div>
        </div>
    )
}