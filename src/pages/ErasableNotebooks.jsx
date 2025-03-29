import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Eye } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'

const products = {
    a4: [
        {
            id: 'a4-1',
            name: 'Sổ Xóa Được A4 - Kẻ Dòng',
            description: 'Sổ xóa được kẻ dòng A4, phù hợp cho ghi chú và học tập.',
            image: '/images/erasable-a4-lined-1.jpg',
        },
        {
            id: 'a4-2',
            name: 'Sổ Xóa Được A4 - Kẻ Ô',
            description: 'Sổ xóa được kẻ ô A4, lý tưởng cho vẽ sơ đồ và bảng.',
            image: '/images/erasable-a4-grid-1.jpg',
        },
    ],
    a5: [
        {
            id: 'a5-1',
            name: 'Sổ Xóa Được A5 - Kẻ Dòng',
            description: 'Sổ xóa được kẻ dòng A5, tiện lợi để mang theo.',
            image: '/images/erasable-a5-lined-1.jpg',
        },
        {
            id: 'a5-2',
            name: 'Sổ Xóa Được A5 - Kẻ Ô',
            description: 'Sổ xóa được kẻ ô A5, hoàn hảo cho ghi chú có cấu trúc.',
            image: '/images/erasable-a5-grid-1.jpg',
        },
    ],
    mini: [
        {
            id: 'mini-1',
            name: 'Sổ Xóa Được Mini - Kẻ Dòng',
            description: 'Sổ xóa được kẻ dòng mini, dễ dàng mang theo.',
            image: '/images/erasable-mini-lined-1.jpg',
        },
        {
            id: 'mini-2',
            name: 'Sổ Xóa Được Mini - Kẻ Ô',
            description: 'Sổ xóa được kẻ ô mini, lý tưởng cho ghi chú nhanh.',
            image: '/images/erasable-mini-grid-1.jpg',
        },
    ],
}

const categories = [
    { name: 'Sổ Xóa được A4', href: '/erasable/a4', category: 'a4' },
    { name: 'Sổ Xóa được A5', href: '/erasable/a5', category: 'a5' },
    { name: 'Sổ Xóa được Mini', href: '/erasable/mini', category: 'mini' }
]

const categoryTitles = {
    a4: 'Sổ Xóa Được A4',
    a5: 'Sổ Xóa Được A5',
    mini: 'Sổ Xóa Được Mini',
}

const ErasableNotebooks = () => {
    const { category } = useParams()
    const categoryProducts = category ? products[category] : null

    const breadcrumbItems = [
        { label: 'Trang Chủ', link: '/' },
        { label: 'Sổ xóa được', link: '/erasable-notebooks' },
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
                            Tìm sổ xóa được hoàn hảo cho nhu cầu ghi chú của bạn
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
                // Main erasable notebooks page
                <>
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Sổ xóa được</h1>
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

export default ErasableNotebooks 