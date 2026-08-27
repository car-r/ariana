import Head from 'next/head'
import Image from 'next/image'
import {
    AcademicCapIcon,
    IdentificationIcon,
    SparklesIcon,
    TranslateIcon,
    BadgeCheckIcon,
    StarIcon,
} from '@heroicons/react/outline'

const facts = [
    {
        title: 'Education',
        icon: AcademicCapIcon,
        items: [
            'The College of New Jersey, B.A. Business Administration & Marketing',
            'Rutgers University, M.S. HR Management',
        ],
    },
    {
        title: 'Licenses',
        icon: IdentificationIcon,
        items: [
            'Certified Insurance Counselor (CIC)',
            'Property & Casualty state license',
        ],
    },
    {
        title: 'Languages',
        icon: TranslateIcon,
        items: ['Fluent in Spanish'],
    },
    {
        title: 'Outside work',
        icon: SparklesIcon,
        items: ['Traveling, cooking, riding her e-bike, and improving her golf game'],
    },
]

const pills = [
    { label: 'CIC', icon: BadgeCheckIcon },
    { label: 'APCIA Emerging Leaders', icon: StarIcon },
    { label: 'West Region MVP', icon: SparklesIcon },
]

export default function About() {
    return (
        <div className="w-full bg-cream text-charcoal dark:bg-black dark:text-stone-300">
            <Head>
                <title>About — Ariana Richter</title>
            </Head>
            <div className="mx-auto w-11/12 max-w-6xl py-10 md:py-14">
                <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
                    <div className="lg:w-[55%]">
                        <h1 className="font-serif text-5xl font-semibold tracking-tight text-charcoal md:text-6xl dark:text-stone-200">
                            About
                        </h1>
                        <div className="mt-4 h-px w-16 bg-gold" />

                        <div className="mt-8 space-y-5 text-base leading-relaxed text-charcoal dark:text-stone-300 md:text-[1.05rem]">
                            <p>
                                Ariana joined Munich Re in 2010 and has held roles across three entities. She started in Human Resources at the Princeton headquarters, then moved to American Modern sales covering Northern California and Northern Nevada, where she was named West Region MVP.
                            </p>
                            <p>
                                She has served as Broker Relationship Leader on the Munich Re Specialty Insurance Distribution team since June 2021 and is an Ambassador for the Cross Platform Team. She is responsible for the Munich Re / Alliant partnership and is an embedded resource in the Insurance Programs practice.
                            </p>
                            <p>
                                She lives in Scottsdale with her husband Carson. Born in Argentina, she is fluent in Spanish.
                            </p>
                            <p>
                                She earned a Bachelor’s in Business Administration & Marketing from The College of New Jersey and a Master’s in HR Management from Rutgers University.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {facts.map((fact) => (
                                <div
                                    key={fact.title}
                                    className="rounded-xl bg-cream-200 p-5 dark:bg-stone-900"
                                >
                                    <fact.icon className="h-5 w-5 text-gold" aria-hidden="true" />
                                    <h2 className="mt-3 font-serif text-lg font-semibold text-charcoal dark:text-stone-200">
                                        {fact.title}
                                    </h2>
                                    <ul className="mt-2 space-y-1 text-sm leading-relaxed text-charcoal-muted dark:text-stone-400">
                                        {fact.items.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-[42%] lg:flex-shrink-0">
                        <div className="relative overflow-hidden rounded-2xl shadow-[0_16px_40px_rgba(44,41,38,0.14)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.45)]">
                            <Image
                                src="/headshot.JPG"
                                alt="Ariana Richter"
                                width={720}
                                height={900}
                                priority
                                className="h-auto w-full object-cover"
                            />
                            <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-charcoal/90 px-5 py-3">
                                <p className="font-serif text-cream">Meet Ariana Richter</p>
                                <div className="h-px flex-1 bg-gold" />
                            </div>
                        </div>
                        <div className="mt-5 flex flex-wrap items-center gap-2">
                            {pills.map((pill) => (
                                <span
                                    key={pill.label}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-white/40 px-3 py-1 text-sm text-charcoal dark:border-gold/40 dark:bg-stone-900/60 dark:text-stone-300"
                                >
                                    <pill.icon className="h-4 w-4 text-gold" aria-hidden="true" />
                                    {pill.label}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
