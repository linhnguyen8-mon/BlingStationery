import { Link } from 'react-router-dom'
import { Briefcase, BookOpen, Calendar, Brain } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const categories = [
    {
        title: 'SỔ TAY KẾ HOẠCH',
        category: 'plan',
        href: '/notebooks/plan',
        icon: Calendar
    },
    {
        title: 'SỔ TAY HỌC TẬP',
        category: 'study',
        href: '/notebooks/study',
        icon: BookOpen
    },
    {
        title: 'SỔ TAY CÔNG VIỆC',
        category: 'work',
        href: '/notebooks/work',
        icon: Briefcase
    },
    {
        title: 'NOTEPAD',
        category: 'notepad',
        href: '/notepads',
        icon: BookOpen
    },
    {
        title: 'STICKER',
        category: 'sticker',
        href: '/stickers',
        icon: BookOpen
    },
    {
        title: 'SỔ XÓA ĐƯỢC',
        category: 'erasable',
        href: '/erasable',
        icon: BookOpen
    }
]

const featuredProducts = [
    {
        id: 1,
        name: 'SỔ KẾ HOẠCH THÁNG',
        image: '/images/planner-monthly.jpg',
        category: 'plan',
        price: '199.000đ',
        description: 'Sổ kế hoạch tháng với thiết kế tối ưu, giúp bạn quản lý thời gian hiệu quả.'
    },
    {
        id: 2,
        name: 'SỔ KẾ HOẠCH NĂM',
        image: '/images/planner-yearly.jpg',
        category: 'plan',
        price: '299.000đ',
        description: 'Sổ kế hoạch năm với tầm nhìn dài hạn, giúp bạn đạt được mục tiêu lớn.'
    },
    {
        id: 3,
        name: 'SỔ KẾ HOẠCH TUẦN',
        image: '/images/planner-weekly.jpg',
        category: 'plan',
        price: '149.000đ',
        description: 'Sổ kế hoạch tuần với thiết kế chi tiết, phù hợp cho việc lên kế hoạch ngắn hạn.'
    },
    {
        id: 4,
        name: 'SỔ GHI CHÉP HỌC TẬP',
        image: '/images/study-notes.jpg',
        category: 'study',
        price: '129.000đ',
        description: 'Sổ ghi chép học tập với giấy chất lượng cao, phù hợp cho việc ghi chú bài học.'
    },
    {
        id: 5,
        name: 'SỔ LỊCH HỌC',
        image: '/images/study-schedule.jpg',
        category: 'study',
        price: '159.000đ',
        description: 'Sổ lịch học với thiết kế thông minh, giúp bạn quản lý thời gian học tập hiệu quả.'
    },
    {
        id: 6,
        name: 'SỔ GHI CHÉP BÀI GIẢNG',
        image: '/images/study-lecture.jpg',
        category: 'study',
        price: '139.000đ',
        description: 'Sổ ghi chép bài giảng với định dạng tối ưu cho việc ghi chú trong lớp học.'
    },
    {
        id: 7,
        name: 'SỔ CÔNG VIỆC HÀNG NGÀY',
        image: '/images/work-daily.jpg',
        category: 'work',
        price: '179.000đ',
        description: 'Sổ công việc hàng ngày với thiết kế chuyên nghiệp, phù hợp cho môi trường công sở.'
    },
    {
        id: 8,
        name: 'SỔ DỰ ÁN',
        image: '/images/work-project.jpg',
        category: 'work',
        price: '249.000đ',
        description: 'Sổ dự án với cấu trúc chi tiết, giúp bạn quản lý dự án hiệu quả.'
    },
    {
        id: 9,
        name: 'SỔ HỌP',
        image: '/images/work-meeting.jpg',
        category: 'work',
        price: '169.000đ',
        description: 'Sổ họp với thiết kế tối ưu cho việc ghi chép trong các cuộc họp.'
    },
    {
        id: 10,
        name: 'NOTEPAD CÓ LỚP',
        image: '/images/notepad-lined.jpg',
        category: 'notepad',
        price: '49.000đ',
        description: 'Notepad có lớp với giấy chất lượng cao, phù hợp cho việc ghi chú nhanh.'
    },
    {
        id: 11,
        name: 'NOTEPAD TRẮNG',
        image: '/images/notepad-blank.jpg',
        category: 'notepad',
        price: '39.000đ',
        description: 'Notepad trắng với thiết kế đơn giản, phù hợp cho việc vẽ và sáng tạo.'
    },
    {
        id: 12,
        name: 'STICKER MÀU SẮC',
        image: '/images/sticker-colorful.jpg',
        category: 'sticker',
        price: '29.000đ',
        description: 'Sticker màu sắc với thiết kế đa dạng, giúp trang trí sổ tay thêm sinh động.'
    },
    {
        id: 13,
        name: 'STICKER HỌC TẬP',
        image: '/images/sticker-study.jpg',
        category: 'sticker',
        price: '39.000đ',
        description: 'Sticker học tập với các biểu tượng hữu ích cho việc ghi chú bài học.'
    },
    {
        id: 14,
        name: 'SỔ XÓA ĐƯỢC A5',
        image: '/images/erasable-a5.jpg',
        category: 'erasable',
        price: '199.000đ',
        description: 'Sổ xóa được khổ A5, phù hợp cho việc ghi chú và vẽ phác thảo.'
    },
    {
        id: 15,
        name: 'SỔ XÓA ĐƯỢC A4',
        image: '/images/erasable-a4.jpg',
        category: 'erasable',
        price: '299.000đ',
        description: 'Sổ xóa được khổ A4, phù hợp cho việc ghi chú và vẽ chi tiết.'
    },
    {
        id: 16,
        name: 'SỔ XÓA ĐƯỢC MINI',
        image: '/images/erasable-mini.jpg',
        category: 'erasable',
        price: '99.000đ',
        description: 'Sổ xóa được mini, tiện lợi để mang theo mọi lúc.'
    }
]

const Home = () => {
    const location = useLocation()
    const [selectedCategory, setSelectedCategory] = useState('plan')

    useEffect(() => {
        // Update selected category based on URL
        const path = location.pathname
        const category = categories.find(cat => path.startsWith(cat.href))
        if (category) {
            setSelectedCategory(category.category)
        }
    }, [location])

    const filteredProducts = featuredProducts.filter(product => product.category === selectedCategory)

    return (
        <div>
            {/* Hero Section */}
            <div className="relative bg-white">
                <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-xl font-medium text-primary mb-4">
                            Bling Stationery
                        </h2>
                        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            Sổ tay thông minh tối ưu học tập
                        </h1>
                    </div>
                </div>
            </div>

            {/* Category Tabs */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {categories.map((category) => {
                        const Icon = category.icon
                        return (
                            <Link
                                key={category.title}
                                to={category.href}
                                className={`text-center p-4 rounded-lg transition-colors duration-300 ${selectedCategory === category.category
                                    ? 'bg-primary text-white'
                                    : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                                    }`}
                                onClick={() => setSelectedCategory(category.category)}
                            >
                                <Icon className="h-6 w-6 mx-auto mb-2" />
                                <span className="text-sm font-medium block">{category.title}</span>
                            </Link>
                        )
                    })}
                </div>
            </div>

            {/* Featured Products */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredProducts.map((product) => (
                        <Link
                            key={product.id}
                            to={`/product/${product.id}`}
                            className="group"
                        >
                            <div className="relative w-full pb-[100%] bg-gray-200 rounded-lg overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-300"
                                />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                                <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                                <p className="mt-2 text-sm font-medium text-primary">{product.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Learning Style Test Banner */}
            <div className="bg-primary">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div>
                            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                                Khám Phá Phong Cách Học Tập Của Bạn
                            </h2>
                            <p className="mt-3 max-w-3xl text-lg text-white">
                                Thực hiện bài kiểm tra nhanh để hiểu rõ cách học tốt nhất của bạn và nhận được những lời khuyên học tập được cá nhân hóa.
                            </p>
                            <div className="mt-8 sm:flex">
                                <div className="rounded-md shadow">
                                    <Link
                                        to="/smart-tools/learning-type-test"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                                    >
                                        Làm Bài Kiểm Tra
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                            <div className="col-span-1 flex justify-center py-8 px-8 bg-primary/90">
                                <Brain className="max-h-12 w-auto text-white" />
                            </div>
                            <div className="col-span-1 flex justify-center py-8 px-8 bg-primary/80">
                                <BookOpen className="max-h-12 w-auto text-white" />
                            </div>
                            <div className="col-span-1 flex justify-center py-8 px-8 bg-primary/70">
                                <Calendar className="max-h-12 w-auto text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home 