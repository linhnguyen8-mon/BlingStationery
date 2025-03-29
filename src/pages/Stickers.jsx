import { Link } from 'react-router-dom'

const categories = [
    { name: 'Sticker Học tập', href: '/stickers/study' },
    { name: 'Sticker Công việc', href: '/stickers/work' },
    { name: 'Sticker Trang trí', href: '/stickers/decorative' }
]

const Stickers = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Sticker</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {categories.map((category) => (
                    <Link
                        key={category.name}
                        to={category.href}
                        className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                                {category.name}
                            </h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Stickers 