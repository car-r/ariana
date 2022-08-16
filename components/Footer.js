import React from 'react'

const Footer = () => {
    const year = new Date()
    return (
        <footer className='flex justify-center border-t border-gray-100 dark:border-stone-700'>
            <p className='py-10'>
                Ariana Richter<span className='pl-1'>|</span> 
                <span className='pl-1'>{year.getFullYear()}</span>
            </p>
        </footer>
    )
}

export default Footer