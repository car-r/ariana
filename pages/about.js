import Image from 'next/image'
import brl from '../public/BRL.png'

export default function About() {
    return (
        <div className="flex flex-col w-11/12 mx-auto justify-center items-center mt-16 max-w-3xl">
            <Image src={brl} className="rounded-lg" alt="ariana richter BRL"/>
            <div className="flex flex-col w-full mb-14">
                <h1 className="text-3xl my-8 md:text-4xl ">{`Hi. I'm Ariana Richter`}</h1>
                <p className="mb-4">
                    {`I joined Munich Re in 2010 and have held various roles across three different entities. My career
                    started in Human Resources in the Princeton, NJ Headquarters and later went on to the American Modern
                    Insurance Group Sales team to manage the Northern California & Northern Nevada territories where I was
                    awarded West Region MVP. I then assumed the Broker Relationship Leader role on the Munich Re Specialty
                    Insurance Distribution team in June 2021 and am an Ambassador for the Cross Platform Team.`}
                </p>
                <p className="mb-4">
                    {`I live with my husband Carson in sunny Scottsdale, Arizona. I graduated with a Bachelor’s Degree
                    in Business Administration &amp; Marketing from The College of New Jersey and also hold a Master’s in HR
                    Management from Rutgers University. I'm a Certified Insurance Counselor (CIC) and have a Property &
                    Casualty State License.`} 
                </p> 
                <p className="mb-4">
                    {`I've also won several awards at Munich Re and was part of the 2021 Class of
                    Emerging Leaders issued by the APCIA. Little known fact about me: I was born in Argentina and am
                    fluent in Spanish. My hobbies include traveling, cooking, riding my e-bike and continuing to improve my golf
                    game.`}
                </p>          
                <p className="mb-4">
                    {`As a BRL, I'm responsible for the partnership between Munich Re and Alliant. I'm also an embedded
                    distribution resource within the Insurance Programs practice.`}
                </p>   
                <p>Ariana</p>
            </div>
            
        </div>
    )
}