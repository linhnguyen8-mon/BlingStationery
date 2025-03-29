import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'

// Dữ liệu sản phẩm mẫu - trong ứng dụng thực tế, dữ liệu này sẽ đến từ API
const productDetails = {
    'work-1': {
        name: 'Sổ Kế Hoạch Công Việc Hàng Ngày',
        description: 'Giữ tổ chức với việc theo dõi công việc hàng ngày và quản lý ưu tiên.',
        features: [
            'Lịch trình hàng ngày với các khung thời gian',
            'Quản lý công việc ưu tiên',
            'Phần ghi chú cuộc họp',
            'Theo dõi mục tiêu',
            'Tổng quan hàng tháng',
        ],
        images: [
            '/images/work-planner-1.jpg',
            '/images/work-planner-1-2.jpg',
            '/images/work-planner-1-3.jpg',
        ],
        templates: [
            { name: 'Lịch Trình Hàng Ngày', link: '#' },
            { name: 'Tổng Quan Hàng Tuần', link: '#' },
            { name: 'Theo Dõi Dự Án', link: '#' },
        ],
    },
    // Thêm chi tiết sản phẩm khác
}

const ProductDetail = () => {
    const { id } = useParams()
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const product = productDetails[id]
    if (!product) return <div>Không tìm thấy sản phẩm</div>

    // Determine category from product ID
    const category = id.split('-')[0]
    const categoryTitle = {
        work: 'Sổ Công Việc',
        study: 'Sổ Học Tập',
        plan: 'Sổ Kế Hoạch'
    }[category]

    const breadcrumbItems = [
        { label: 'Trang Chủ', link: '/' },
        { label: categoryTitle, link: `/${category}` },
        { label: product.name }
    ]

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === product.images.length - 1 ? 0 : prev + 1
        )
    }

    const previousImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? product.images.length - 1 : prev - 1
        )
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Breadcrumb items={breadcrumbItems} />
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
                {/* Thư viện hình ảnh */}
                <div className="relative">
                    <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden">
                        <img
                            src={product.images[currentImageIndex]}
                            alt={product.name}
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                    {product.images.length > 1 && (
                        <div className="absolute inset-0 flex items-center justify-between p-4">
                            <button
                                onClick={previousImage}
                                className="p-2 rounded-full bg-white bg-opacity-75 text-gray-900 hover:bg-opacity-100"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </button>
                            <button
                                onClick={nextImage}
                                className="p-2 rounded-full bg-white bg-opacity-75 text-gray-900 hover:bg-opacity-100"
                            >
                                <ChevronRight className="h-6 w-6" />
                            </button>
                        </div>
                    )}
                </div>

                {/* Thông tin sản phẩm */}
                <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        {product.name}
                    </h1>
                    <div className="mt-6">
                        <h3 className="sr-only">Mô tả</h3>
                        <div className="text-base text-gray-700">{product.description}</div>
                    </div>

                    {/* Tính năng */}
                    <div className="mt-10">
                        <h3 className="text-sm font-medium text-gray-900">Tính năng</h3>
                        <div className="mt-4">
                            <ul className="pl-4 list-disc space-y-2">
                                {product.features.map((feature) => (
                                    <li key={feature} className="text-gray-600">
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ProductDetail 