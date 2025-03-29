import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Eye } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'

const products = {
    work: [
        {
            id: 'work-1',
            name: 'Sổ Kế Hoạch Công Việc Hàng Ngày',
            description: 'Tổ chức công việc hiệu quả với theo dõi nhiệm vụ và quản lý ưu tiên hàng ngày.',
            image: '/images/work-planner-1.jpg',
        },
        {
            id: 'work-2',
            name: 'Sổ Kế Hoạch Dự Án',
            description: 'Theo dõi nhiều dự án và thời hạn một cách hiệu quả.',
            image: '/images/work-planner-2.jpg',
        },
    ],
    study: [
        {
            id: 'study-1',
            name: 'Sổ Kế Hoạch Học Tập Hàng Tuần',
            description: 'Tổ chức lịch học, bài tập và các buổi học tập của bạn.',
            image: '/images/study-planner-1.jpg',
        },
        {
            id: 'study-2',
            name: 'Sổ Kế Hoạch Ôn Thi',
            description: 'Lên kế hoạch ôn thi với lịch học tập có cấu trúc.',
            image: '/images/study-planner-2.jpg',
        },
    ],
    plan: [
        {
            id: 'plan-1',
            name: 'Sổ Kế Hoạch Mục Tiêu Cuộc Sống',
            description: 'Thiết lập và theo dõi mục tiêu và thói quen cá nhân.',
            image: '/images/life-planner-1.jpg',
        },
        {
            id: 'plan-2',
            name: 'Sổ Kế Hoạch Sức Khỏe',
            description: 'Theo dõi sức khỏe, thể dục và thói quen chăm sóc bản thân.',
            image: '/images/life-planner-2.jpg',
        },
    ],
}

const categories = [
    { name: 'Sổ kế hoạch', href: '/notebooks/plan', category: 'plan' },
    { name: 'Sổ học tập', href: '/notebooks/study', category: 'study' },
    { name: 'Sổ công việc', href: '/notebooks/work', category: 'work' }
]

const categoryTitles = {
    work: 'Sổ Công Việc',
    study: 'Sổ Học Tập',
    plan: 'Sổ Kế Hoạch',
}

const Notebooks = () => {
    const { category } = useParams()
    const categoryProducts = category ? products[category] : null

    const breadcrumbItems = [
        { label: 'Trang Chủ', link: '/' },
        { label: 'Sổ tay', link: '/notebooks' },
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
                            Tìm sổ kế hoạch hoàn hảo để tối ưu {category === 'work' ? 'công việc' : category === 'study' ? 'học tập' : 'cuộc sống'} của bạn
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
                // Main notebooks page
                <>
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Sổ tay</h1>
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

export default Notebooks 