import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className='flex justify-center border-t border-gold/25 bg-cream text-charcoal-muted dark:border-stone-700 dark:bg-black dark:text-stone-400'>
            <p className='py-8 font-serif text-sm tracking-wide'>
                Ariana Richter <span className='px-1 text-gold'>·</span> {year}
            </p>
        </footer>
    )
}

export default Footer
