import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {


    return (
        <footer className="bg-gray-900 text-white relative">
            {/* Background image with overlay */}
            <div className="absolute inset-0 bg-[url('/src/assets/image/footer.png')] bg-cover bg-center opacity-100"></div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand section */}
                    <div>
                        <Link to="/" className="text-xl font-serif font-bold text-primary">
                            BlingStationary
                        </Link>
                        <p className="mt-2 text-gray-400 text-sm">
                            Planner đẹp giúp bạn tổ chức công việc, học tập và cuộc sống hiệu quả.
                        </p>
                    </div>



                    {/* Social links and copyright */}
                    <div className="my-8  pt-8 flex flex-col md:flex-row justify-between items-center">
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
                </div></div>
        </footer>
    )
}

export default Footer 