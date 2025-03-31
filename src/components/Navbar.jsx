import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/image/Logo.svg'

const navigation = [
    {
        name: 'Test phong cách học',
        href: '/learning-type-test'
    },
    {
        name: 'AI Prompt',
        href: '/ai-prompts'
    }
]

const Navbar = () => {
    const [activeCategory, setActiveCategory] = useState(null)
    const [showHomeText, setShowHomeText] = useState(false)
    const navRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setActiveCategory(null)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <nav className="bg-white shadow-md relative" ref={navRef}>
            {/* Main Navigation (Top) */}
            <div className="h-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-full items-center">
                    {/* Logo with home text */}
                    <Link
                        to="/"
                        className="flex items-center space-x-2 group"
                        onMouseEnter={() => setShowHomeText(true)}
                        onMouseLeave={() => setShowHomeText(false)}
                    >
                        <img src={Logo} alt="Bling Stationary Logo" className="h-10 w-auto transition-transform duration-200 group-hover:scale-105" />
                        {showHomeText && (
                            <span className="text-sm text-gray-600 group-hover:text-primary transition-colors duration-200 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to home
                            </span>
                        )}
                    </Link>

                    {/* Main Nav Items */}
                    <div className="hidden sm:flex space-x-6">
                        {navigation.map((item) => (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => setActiveCategory(item.name)}
                                onMouseLeave={() => setActiveCategory(null)}
                            >
                                <Link
                                    to={item.href}
                                    className={`text-sm font-medium px-3 py-2 text-gray-700 hover:text-primary transition-all duration-200 ${activeCategory === item.name
                                        ? 'text-primary border-b-2 border-primary'
                                        : ''
                                        }`}
                                >
                                    {item.name}
                                </Link>
                                {item.subcategories && activeCategory === item.name && (
                                    <div className="absolute w-full bg-white shadow-lg border border-gray-100 rounded-md z-50 mt-1">
                                        <div className="py-2">
                                            {item.subcategories.map((sub) => (
                                                <Link
                                                    key={sub.name}
                                                    to={sub.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50"
                                                    onClick={() => setActiveCategory(null)}
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
