import Link from 'next/link'
import {useTheme} from "next-themes"
import {useState, useEffect} from "react"
import{SunIcon ,MoonIcon} from "@heroicons/react/solid"

const Sidebar = ({toggle, isOpen}) => {
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
          <SunIcon className="w-7 h-7 text-gold" role="button" onClick={() => setTheme('light')} />
        )
      }

      else {
        return (
          <MoonIcon className="w-7 h-7 text-charcoal" role="button" onClick={() => setTheme('dark')} />
        )
      }
   }

    return (
        <div className={
            isOpen ? `bg-cream dark:bg-stone-900 min-h-screen fixed z-50 w-10/12 px-2 transform transition duration-200 ease-in-out md:hidden`
            : `bg-cream min-h-screen fixed z-50 w-10/12 px-2 inset-y-0 left-0 transform -translate-x-full transition duration-200 ease-in-out md:hidden`
            }
            onClick={toggle}
            >
            <div className="font-serif text-2xl font-semibold tracking-[0.12em] py-4 px-4">
                <Link href="/">AR</Link>
            </div>
            <nav className="">
                <div className="grid grid-cols-1 gap-4">
                    <Link href="/about">
                        <a className="h-10 px-4 flex items-center text-xl rounded-lg hover:bg-cream-200 dark:hover:bg-stone-700 hover:-translate-y-0.5 transition-all ease-in-out">
                            About
                        </a>
                    </Link>
                    <Link href="/resume">
                        <a className="h-10 px-4 flex items-center text-xl rounded-lg hover:bg-cream-200 dark:hover:bg-stone-700 hover:-translate-y-0.5 transition-all ease-in-out">
                            Resume
                        </a>
                    </Link>
                    <a
                        href="https://www.linkedin.com/in/arianarichter24"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-10 px-4 flex items-center text-xl rounded-lg hover:bg-cream-200 dark:hover:bg-stone-700 hover:-translate-y-0.5 transition-all ease-in-out"
                    >
                        Contact
                    </a>
                    <div className='px-3'>
                    {renderThemeChanger()}
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Sidebar
