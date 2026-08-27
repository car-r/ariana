import Head from 'next/head'

const roles = [
    {
        dates: '2021–now',
        company: 'Munich Re Specialty Insurance',
        title: 'Broker Relationship Leader',
    },
    {
        dates: '2018–2021',
        company: 'American Modern Insurance Group',
        title: 'Senior Territory Sales Manager',
    },
    {
        dates: '2014–2018',
        company: 'Munich Re',
        title: 'HR Business Partner',
    },
    {
        dates: '2011–2014',
        company: 'Munich Re',
        title: 'HR Service Center',
    },
]

const education = [
    {
        school: 'Rutgers University',
        degree: 'Masters in Human Resources',
    },
    {
        school: 'The College of New Jersey',
        degree: 'Bachelors Business Administration',
    },
]

const credentials = [
    'Certified Insurance Counselor (CIC)',
    'Property & Casualty state license',
]

export default function Resume() {
    return (
        <div className="w-full bg-cream text-charcoal dark:bg-black dark:text-stone-300">
            <Head>
                <title>Resume — Ariana Richter</title>
            </Head>
            <div className="mx-auto w-11/12 max-w-6xl py-10 md:py-14">
                <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
                    <div className="lg:w-[65%] lg:pr-14">
                        <h1 className="font-serif text-4xl font-semibold tracking-tight text-charcoal md:text-5xl dark:text-stone-200">
                            Experience
                        </h1>

                        <div className="relative mt-10 ml-1.5">
                            <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gold" aria-hidden="true" />
                            <div>
                                {roles.map((role) => (
                                    <div key={`${role.company}-${role.dates}`} className="relative pb-10 pl-8 last:pb-0">
                                        <span
                                            className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-gold bg-cream dark:bg-black"
                                            aria-hidden="true"
                                        />
                                        <p className="text-sm tracking-wide text-gold">{role.dates}</p>
                                        <h2 className="mt-1 font-serif text-xl font-semibold text-charcoal md:text-2xl dark:text-stone-200">
                                            {role.company}
                                        </h2>
                                        <p className="mt-1 font-serif italic text-charcoal dark:text-stone-300">
                                            {role.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <aside className="lg:w-[35%] lg:border-l lg:border-stone-300/70 lg:pl-10 dark:lg:border-stone-700">
                        <section>
                            <h2 className="font-serif text-2xl font-semibold text-charcoal dark:text-stone-200">
                                Education
                            </h2>
                            <div className="mt-3 h-px w-12 bg-gold" />
                            <div className="mt-6 space-y-6">
                                {education.map((item) => (
                                    <div key={item.school}>
                                        <h3 className="font-serif text-lg font-semibold text-charcoal dark:text-stone-200">
                                            {item.school}
                                        </h3>
                                        <p className="mt-1 text-sm text-charcoal-muted dark:text-stone-400">
                                            {item.degree}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="mt-12">
                            <h2 className="font-serif text-2xl font-semibold text-charcoal dark:text-stone-200">
                                Credentials
                            </h2>
                            <div className="mt-3 h-px w-12 bg-gold" />
                            <ul className="mt-6 space-y-3 text-sm text-charcoal-muted dark:text-stone-400">
                                {credentials.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        <a
                            href="https://www.linkedin.com/in/arianarichter24"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-12 inline-flex items-center justify-center rounded-md bg-charcoal px-6 py-3 text-center font-medium text-cream transition hover:bg-charcoal/90 dark:bg-stone-200 dark:text-black dark:hover:bg-white"
                        >
                            Connect on LinkedIn
                        </a>
                    </aside>
                </div>
            </div>
        </div>
    )
}
