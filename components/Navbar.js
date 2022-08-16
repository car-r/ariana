import Link from 'next/link'
import { MenuIcon } from '@heroicons/react/solid'
import { XIcon } from '@heroicons/react/solid'
import {useTheme} from "next-themes"
import {useState, useEffect} from "react"
import{SunIcon ,MoonIcon} from "@heroicons/react/solid"


const Navbar = ({toggle, isOpen}) => {
    const [mounted, setMounted] = useState(false);
    const {systemTheme , theme, setTheme} = useTheme ();
  
    useEffect(() =>{
        setMounted(true);
    },[])

    const renderThemeChanger= () => {

        if(!mounted) return null;

      const currentTheme = theme === "system" ? systemTheme : theme ;

      if(currentTheme ==="dark"){
        return (
          <SunIcon className="w-8 h-8 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
        )
      }

      else {
        return (
          <MoonIcon className="w-8 h-8 text-gray-900 " role="button" onClick={() => setTheme('dark')} />
        )
      }
   }
     
    return (
        <>
        <nav className="flex sticky top-0 bg-white z-50 text-black dark:bg-black dark:text-stone-300">
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
            <div className="w-full py-4 border-b-2 border-gray-100 dark:border-stone-700 hidden md:block ">
                <div className="flex items-center mx-auto max-w-5xl w-11/12 justify-between ">
                    <div className="text-4xl">
                        <Link href="/">A.</Link>
                    </div>
                    <div className="flex gap-4 items-center">
                        <Link href="/about">
                            <a className="py-1 px-4 rounded-2xl hover:bg-gray-50 hover:-translate-y-0.5 transition-all ease-in-out dark:hover:bg-stone-800">
                                About
                            </a>
                        </Link>
                        <Link href="/resume">
                            <a className="py-1 px-4 rounded-2xl hover:bg-gray-50 hover:-translate-y-0.5 transition-all ease-in-out dark:hover:bg-stone-800">
                                Resume
                            </a>
                        </Link>
                        <Link href="/posts">
                            <a className="py-1 px-4 rounded-2xl hover:bg-gray-50 hover:-translate-y-0.5 transition-all ease-in-out dark:hover:bg-stone-800">
                                Posts
                            </a>
                        </Link>
                        {renderThemeChanger()}
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar
