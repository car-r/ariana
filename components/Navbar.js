import Link from 'next/link'
import { useRouter } from 'next/router'
import { MenuIcon } from '@heroicons/react/solid'
import { XIcon } from '@heroicons/react/solid'
import {useTheme} from "next-themes"
import {useState, useEffect} from "react"
import{SunIcon ,MoonIcon} from "@heroicons/react/solid"

const Navbar = ({toggle, isOpen}) => {
    const router = useRouter()
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

    const navItemClass = (href) => {
        const active = router.pathname === href
        return "relative py-1 px-3 text-sm tracking-wide hover:text-gold-dark transition-colors dark:hover:text-gold-light" + (active ? " text-charcoal dark:text-stone-100" : "")
    }

    return (
        <nav className="sticky top-0 z-50 h-16 border-b border-gold/20 bg-cream text-charcoal dark:border-stone-700 dark:bg-black dark:text-stone-300">
            <div className="mx-auto flex h-full w-11/12 max-w-6xl items-center justify-between">
                <Link href="/">
                    <a className="relative font-serif text-2xl font-semibold tracking-[0.12em]">
                        AR
                        <span className="absolute left-[11px] top-[11px] h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                    </a>
                </Link>
                <div className="hidden items-center gap-1 md:flex">
                    <Link href="/">
                        <a className={navItemClass('/')}>
                            Home
                            {router.pathname === '/' ? <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gold" aria-hidden="true" /> : null}
                        </a>
                    </Link>
                    <Link href="/about">
                        <a className={navItemClass('/about')}>
                            About
                            {router.pathname === '/about' ? <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gold" aria-hidden="true" /> : null}
                        </a>
                    </Link>
                    <Link href="/resume">
                        <a className={navItemClass('/resume')}>
                            Resume
                            {router.pathname === '/resume' ? <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gold" aria-hidden="true" /> : null}
                        </a>
                    </Link>
                    <a
                        href="https://www.linkedin.com/in/arianarichter24"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative py-1 px-3 text-sm tracking-wide hover:text-gold-dark transition-colors dark:hover:text-gold-light"
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
