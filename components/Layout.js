import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import { useState } from 'react'
import Footer from "./Footer"

const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className="flex flex-col min-h-screen w-full bg-cream text-charcoal dark:bg-black dark:text-stone-300">
                <Navbar toggle={toggle} isOpen={isOpen}/>
                <Sidebar toggle={toggle} isOpen={isOpen}/>
                    <main>{children}</main>
                <Footer />
            </div>

        </>
    )
}

export default Layout
