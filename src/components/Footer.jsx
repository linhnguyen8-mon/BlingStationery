import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
    const footerLinks = {
        Products: [
            { name: 'Work Planners', href: '/planner/work' },
            { name: 'Study Planners', href: '/planner/study' },
            { name: 'Life Planners', href: '/planner/plan' },
        ],
        Resources: [
            { name: 'AI Prompts', href: '/ai-prompts' },
            { name: 'Freebies', href: '/freebies' },
            { name: 'How to Use', href: '/how-to-use' },
        ],
        Company: [
            { name: 'About Us', href: '/about' },
            { name: 'Contact', href: '/contact' },
            { name: 'Blog', href: '/blog' },
        ],
    }

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand section */}
                    <div>
                        <Link to="/" className="text-xl font-serif font-bold">
                            BlingStationary
                        </Link>
                        <p className="mt-2 text-gray-400 text-sm">
                            Beautiful planners for your work, study, and life organization needs.
                        </p>
                    </div>

                    {/* Links sections */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h3 className="text-sm font-semibold uppercase tracking-wider">{title}</h3>
                            <ul className="mt-4 space-y-2">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.href}
                                            className="text-gray-400 hover:text-white text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Social links and copyright */}
                <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <Facebook className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <Instagram className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <Twitter className="h-6 w-6" />
                        </a>
                    </div>
                    <p className="mt-4 md:mt-0 text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} BlingStationary. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer 