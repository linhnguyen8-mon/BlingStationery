import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
    const footerLinks = {
        'Sổ tay': [
            { name: 'Sổ kế hoạch', href: '/notebooks/plan' },
            { name: 'Sổ học tập', href: '/notebooks/study' },
            { name: 'Sổ công việc', href: '/notebooks/work' }
        ],
        'Sản phẩm': [
            { name: 'Notepad', href: '/notepads' },
            { name: 'Sticker', href: '/stickers' },
            { name: 'Sổ xóa được', href: '/erasable' }
        ],
        'AI Prompt': [
            { name: 'AI Prompt', href: '/ai-prompts' },
            { name: 'Kiểm tra phong cách học tập', href: '/ai-prompts/learning-type-test' },
            { name: 'Thử thách học tập', href: '/ai-prompts/learning-challenges' },
            { name: 'Becoming', href: '/ai-prompts/becoming' },
            { name: 'Phương pháp học tập', href: '/ai-prompts/study-techniques' }
        ],
        'Công ty': [
            { name: 'Về chúng tôi', href: '/about' },
            { name: 'Liên hệ', href: '/contact' },
            { name: 'Blog', href: '/blog' }
        ]
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
                            Planner đẹp giúp bạn tổ chức công việc, học tập và cuộc sống hiệu quả.
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