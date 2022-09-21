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
        <div className={
            isOpen ? `bg-gray-200 dark:bg-stone-900 min-h-screen fixed z-50 w-10/12 px-2 transform transition duration-200 ease-in-out md:hidden` 
            : `bg-gray-200 min-h-screen fixed z-50 w-10/12 px-2 inset-y-0 left-0 transform -translate-x-full transition duration-200 ease-in-out md:hidden`
            }
            onClick={toggle}
            >
            <div className="text-4xl py-4 px-4"><Link href="/">A.</Link></div>
            <nav className="">
                <div className="grid grid-cols-1 gap-4">
                    <Link href="/about">
                        <a className="h-10 px-4 flex items-center text-xl rounded-lg hover:bg-gray-100 dark:hover:bg-stone-700 hover:-translate-y-0.5 transition-all ease-in-out">
                            About
                        </a>
                    </Link>
                    <Link href="/resume">
                        <a className="h-10 px-4 flex items-center text-xl rounded-lg hover:bg-gray-100 dark:hover:bg-stone-700 hover:-translate-y-0.5 transition-all ease-in-out">
                            Resume
                        </a>
                    </Link>
                    <Link href="/posts">
                        <a className="h-10 px-4 flex items-center text-xl rounded-lg hover:bg-gray-100 dark:hover:bg-stone-700 hover:-translate-y-0.5 transition-all ease-in-out">
                            Posts
                        </a>
                    </Link>
                    <div className='px-3'>
                    {renderThemeChanger()}
                    </div>
                </div>
            </nav>
        </div>
  
    )
}

export default Sidebar