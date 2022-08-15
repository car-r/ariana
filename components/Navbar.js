import Link from 'next/link'
import { MenuIcon } from '@heroicons/react/solid'
import { XIcon } from '@heroicons/react/solid'
import { MoonIcon } from '@heroicons/react/solid'

const Navbar = ({toggle, isOpen}) => {
    return (
        <>
        <nav className="flex sticky top-0 bg-white z-50">
            <div className="flex w-full justify-end md:hidden">
            { isOpen ? 
                <XIcon 
                    className="h-10 w-10 mt-2 mr-2 justify-end cursor-pointer md:hidden"
                    onClick={toggle}
                /> : 
                <MenuIcon 
                    className="h-10 w-10 mt-2 mr-2 justify-end cursor-pointer md:hidden"
                    onClick={toggle}
            />
            }
            
            </div>
            <div className="w-full py-4 border-b-2 border-gray-100 hidden md:block ">
                <div className="flex items-center mx-auto max-w-5xl w-11/12 justify-between ">
                    <div className="text-4xl">
                        <Link href="/">A.</Link>
                    </div>
                    <div className="flex gap-4 items-center">
                        <Link href="/about">
                            <a className="py-1 px-4 rounded-2xl hover:bg-gray-50 hover:-translate-y-0.5 transition-all ease-in-out">
                                About
                            </a>
                        </Link>
                        <Link href="/resume">
                            <a className="py-1 px-4 rounded-2xl hover:bg-gray-50 hover:-translate-y-0.5 transition-all ease-in-out">
                                Resume
                            </a>
                        </Link>
                        <Link href="/posts">
                            <a className="py-1 px-4 rounded-2xl hover:bg-gray-50 hover:-translate-y-0.5 transition-all ease-in-out">
                                Posts
                            </a>
                        </Link>
                        <MoonIcon className="h-8 w-8 cursor-pointer"/>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar
