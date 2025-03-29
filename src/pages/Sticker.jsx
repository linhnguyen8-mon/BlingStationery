import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Eye } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'

const products = {
    study: [
        {
            id: 'study-1',
            name: 'Sticker Học Tập - Toán Học',
            description: 'Bộ sticker toán học với các công thức và biểu tượng quan trọng.',
            image: '/images/sticker-math-1.jpg',
        },
        {
            id: 'study-2',
            name: 'Sticker Học Tập - Tiếng Anh',
            description: 'Sticker từ vựng và ngữ pháp tiếng Anh thông dụng.',
            image: '/images/sticker-english-1.jpg',
        },
    ],
    work: [
        {
            id: 'work-1',
            name: 'Sticker Công Việc - Quản Lý',
            description: 'Bộ sticker quản lý công việc và dự án.',
            image: '/images/sticker-work-1.jpg',
        },
        {
            id: 'work-2',
            name: 'Sticker Công Việc - Lịch Hẹn',
            description: 'Sticker đánh dấu lịch hẹn và deadline.',
            image: '/images/sticker-work-2.jpg',
        },
    ],
    decorative: [
        {
            id: 'decorative-1',
            name: 'Sticker Trang Trí - Hoa',
            description: 'Bộ sticker hoa đẹp mắt cho trang trí.',
            image: '/images/sticker-flower-1.jpg',
        },
        {
            id: 'decorative-2',
            name: 'Sticker Trang Trí - Động Vật',
            description: 'Sticker động vật dễ thương cho trang trí.',
            image: '/images/sticker-animal-1.jpg',
        },
    ],
}

const categories = [
    { name: 'Sticker Học tập', href: '/stickers/study', category: 'study' },
    { name: 'Sticker Công việc', href: '/stickers/work', category: 'work' },
    { name: 'Sticker Trang trí', href: '/stickers/decorative', category: 'decorative' }
]

const categoryTitles = {
    study: 'Sticker Học Tập',
    work: 'Sticker Công Việc',
    decorative: 'Sticker Trang Trí',
}

const Sticker = () => {
    const { category } = useParams()
    const categoryProducts = category ? products[category] : null

    const breadcrumbItems = [
        { label: 'Trang Chủ', link: '/' },
        { label: 'Sticker', link: '/stickers' },
        ...(category ? [{ label: categoryTitles[category] }] : [])
    ]

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Breadcrumb items={breadcrumbItems} />

            {category ? (
                // Category page
                <>
                    <div className="text-center mb-12">
                        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            {categoryTitles[category]}
                        </h1>
                        <p className="mt-4 max-w-2xl mx-auto text-gray-500">
                            Tìm sticker hoàn hảo cho {category === 'study' ? 'học tập' : category === 'work' ? 'công việc' : 'trang trí'} của bạn
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {categoryProducts.map((product) => (
                            <div
                                key={product.id}
                                className="group relative bg-white rounded-lg shadow-sm overflow-hidden"
                            >
                                <div className="relative h-64 w-full overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover object-center"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                                        <Link
                                            to={`/product/${product.id}`}
                                            className="opacity-0 group-hover:opacity-100 bg-white text-primary px-4 py-2 rounded-md flex items-center space-x-2 transition-opacity duration-300"
                                        >
                                            <Eye className="h-5 w-5" />
                                            <span>Xem Chi Tiết</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                                    <p className="mt-2 text-gray-500">{product.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                // Main stickers page
                <>
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
                </>
            )}
        </div>
    )
}

export default Sticker 