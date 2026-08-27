import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
    return (
        <section
            id="connect"
            className="w-full bg-cream text-charcoal dark:bg-black dark:text-stone-300"
        >
            <div className="mx-auto flex w-11/12 max-w-6xl flex-col items-center gap-8 py-8 lg:min-h-[calc(100svh-4rem)] lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:py-0">
                <div className="flex w-full flex-col justify-center text-center lg:w-[55%] lg:text-left">
                    <h1 className="font-serif text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
                        Ariana Richter
                    </h1>
                    <p className="mt-4 text-lg text-charcoal/80 dark:text-stone-400 md:text-xl">
                        Broker relationships & specialty insurance distribution
                    </p>
                    <div className="mx-auto mt-5 h-px w-16 bg-gold lg:mx-0" />
                    <p className="mt-5 text-base tracking-wide text-charcoal-muted dark:text-stone-400">
                        Munich Re · Scottsdale
                    </p>
                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                        <a
                            href="https://www.linkedin.com/in/arianarichter24"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center rounded-md bg-charcoal px-6 py-3 text-center font-medium text-cream transition hover:bg-charcoal/90 sm:w-auto dark:bg-stone-200 dark:text-black dark:hover:bg-white"
                        >
                            Connect on LinkedIn
                        </a>
                        <Link href="/resume">
                            <a className="inline-flex w-full items-center justify-center rounded-md border border-charcoal px-6 py-3 text-center font-medium text-charcoal transition hover:bg-charcoal hover:text-cream sm:w-auto dark:border-stone-400 dark:text-stone-200 dark:hover:bg-stone-200 dark:hover:text-black">
                                View resume
                            </a>
                        </Link>
                    </div>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm tracking-wide text-charcoal/80 lg:justify-start dark:text-stone-400">
                        <span className="rounded-full border border-gold/50 bg-white/40 px-3 py-1 dark:border-gold/40 dark:bg-stone-900/60">
                            CIC
                        </span>
                        <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                        <span className="rounded-full border border-gold/50 bg-white/40 px-3 py-1 dark:border-gold/40 dark:bg-stone-900/60">
                            APCIA Emerging Leader
                        </span>
                        <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                        <span className="rounded-full border border-gold/50 bg-white/40 px-3 py-1 dark:border-gold/40 dark:bg-stone-900/60">
                            West Region MVP
                        </span>
                    </div>
                </div>
                <div className="w-full max-w-xs sm:max-w-sm lg:max-w-none lg:w-[42%] lg:flex-shrink-0">
                    <div className="overflow-hidden rounded-2xl shadow-[0_16px_40px_rgba(44,41,38,0.14)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.45)]">
                        <Image
                            src="/headshot.JPG"
                            alt="Ariana Richter"
                            width={560}
                            height={700}
                            priority
                            className="h-auto w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
