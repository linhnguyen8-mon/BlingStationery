import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/image/Logo.svg'

const navigation = [
    {
        name: 'Sổ tay',
        href: '/notebooks',
        subcategories: [
            { name: 'Sổ kế hoạch', href: '/notebooks/plan' },
            { name: 'Sổ học tập', href: '/notebooks/study' },
            { name: 'Sổ công việc', href: '/notebooks/work' }
        ]
    },
    {
        name: 'Notepad',
        href: '/notepads'
    },
    {
        name: 'Sticker',
        href: '/stickers'
    },
    {
        name: 'Sổ xóa được',
        href: '/erasable-notebooks'
    },
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
        <nav className="bg-white shadow-sm relative" ref={navRef}>
            {/* Main Navigation (Top) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-12 items-end">
                    {/* Logo */}
                    <Link to="/" className="flex items-center my-auto">
                        <img src={Logo} alt="Bling Stationery Logo" className="h-8 w-auto" />
                    </Link>

                    {/* Main Nav Items */}
                    <div className="hidden sm:flex space-x-4">
                        {navigation.map((item) => (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => setActiveCategory(item.name)}
                                onMouseLeave={() => setActiveCategory(null)}
                            >
                                <Link
                                    to={item.href}
                                    className={`text-sm pb-3 font-semibold px-3 pt-2 text-gray-900 hover:text-primary transition-colors duration-200 ${activeCategory === item.name
                                        ? 'text-primary border-b-4 border-primary pb-3'
                                        : ''
                                        }`}
                                >
                                    {item.name}
                                </Link>
                                {item.subcategories && activeCategory === item.name && (
                                    <div className="absolute w-full bg-white shadow-lg border-t border-gray-100 z-50">
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
