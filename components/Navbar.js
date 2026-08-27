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
          <SunIcon className="h-6 w-6 text-gold" role="button" onClick={() => setTheme('light')} />
        )
      }

      else {
        return (
          <MoonIcon className="h-6 w-6 text-charcoal" role="button" onClick={() => setTheme('dark')} />
        )
      }
   }

    const linkClass =
        "py-1 px-3 rounded-full text-sm tracking-wide hover:text-gold-dark transition-colors dark:hover:text-gold-light"

    return (
        <nav className="sticky top-0 z-50 h-16 border-b border-gold/20 bg-cream text-charcoal dark:border-stone-700 dark:bg-black dark:text-stone-300">
            <div className="mx-auto flex h-full w-11/12 max-w-6xl items-center justify-between">
                <Link href="/">
                    <a className="font-serif text-2xl font-semibold tracking-[0.12em]">AR</a>
                </Link>
                <div className="hidden items-center gap-1 md:flex">
                    <Link href="/about">
                        <a className={linkClass}>About</a>
                    </Link>
                    <Link href="/resume">
                        <a className={linkClass}>Resume</a>
                    </Link>
                    <a
                        href="https://www.linkedin.com/in/arianarichter24"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClass}
                    >
                        Contact
                    </a>
                    <div className="ml-2">
                        {renderThemeChanger()}
                    </div>
                </div>
                <div className="flex items-center gap-3 md:hidden">
                    {renderThemeChanger()}
                    { isOpen ?
                        <XIcon
                            className="h-8 w-8 cursor-pointer"
                            onClick={toggle}
                        /> :
                        <MenuIcon
                            className="h-8 w-8 cursor-pointer"
                            onClick={toggle}
                        />
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar
