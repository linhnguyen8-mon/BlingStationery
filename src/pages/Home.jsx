import { Link } from 'react-router-dom'
import { Calendar, BookOpen, Sticker, Eraser, Grid, ClipboardList, Briefcase, FileEdit, StickyNote } from 'lucide-react'
import { useState } from 'react'
import { products } from '../data/products'
import { GridIcon, PlannerIcon, StudyIcon, WorkIcon, ErasableIcon, StickerIcon } from '../assets/icons'

const categories = [

    {
        title: 'SỔ KẾ HOẠCH',
        category: 'planners',
        icon: PlannerIcon,
        description: 'Sổ kế hoạch với thiết kế tối ưu'
    },
    {
        title: 'SỔ HỌC TẬP',
        category: 'study',
        icon: StudyIcon,
        description: 'Notepad với giấy chất lượng cao'
    },
    {
        title: 'SỔ LÀM VIỆC',
        category: 'work',
        icon: WorkIcon,
        description: 'Notepad với giấy chất lượng cao'
    },
    {
        title: 'SỔ XÓA ĐƯỢC',
        category: 'erasable',
        icon: ErasableIcon,
        description: 'Sổ xóa được với bề mặt đặc biệt'
    },
    {
        title: 'STICKER',
        category: 'stickers',
        icon: StickerIcon,
        description: 'Sticker với thiết kế đa dạng'
    }
]

const featuredProducts = [
    {
        id: 'planner-monthly-1',
        name: 'SỔ KẾ HOẠCH THÁNG',
        image: '/images/planner-monthly.jpg',
        category: 'planners',
        price: '199.000đ',
        description: 'Sổ kế hoạch tháng với thiết kế tối ưu, giúp bạn quản lý thời gian hiệu quả.',
        rating: 4.8,
        reviewCount: 128,
        inStock: true
    },
    {
        id: 'planner-2-month',
        name: 'Sổ Tay Planner Bling',
        image: '/images/planner-2-month.jpg',
        category: 'planners',
        price: '249.000đ',
        description: 'Sổ Planner 2 tháng giúp bạn lập kế hoạch khoa học, bám sát mục tiêu & hoàn thành mọi công việc đúng hạn!',
        rating: 4.9,
        reviewCount: 156,
        inStock: true
    },
    {
        id: 'weekly-planner-12-month',
        name: 'Sổ Tay Weekly Planner 12 Tháng',
        image: '/images/weekly-planner-12.jpg',
        category: 'planners',
        price: '299.000đ',
        description: 'Weekly Planner 12 tháng giúp bạn sắp xếp thời gian hợp lý, theo dõi tiến độ & hoàn thành mọi mục tiêu đúng hạn!',
        rating: 4.9,
        reviewCount: 189,
        inStock: true
    },
    {
        id: 'reading-journal',
        name: 'Sổ Nhật Ký Đọc Sách',
        image: '/images/reading-journal.jpg',
        category: 'study',
        price: '179.000đ',
        description: 'Sổ Nhật Ký Đọc Sách sẽ giúp bạn biến từng cuốn sách thành tài sản tri thức thực sự!',
        rating: 4.8,
        reviewCount: 145,
        inStock: true
    },
    {
        id: 'workday-8-month',
        name: 'Sổ Workday 8 Tháng',
        image: '/images/workday.jpg',
        category: 'work',
        price: '199.000đ',
        description: 'Sổ tay Workday 8 Tháng giúp bạn quản lý thời gian & công việc một cách tối ưu, phù hợp cho dân văn phòng, freelancer & bất kỳ ai muốn tối đa hóa năng suất!',
        rating: 4.7,
        reviewCount: 167,
        inStock: true
    }
]

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('all')

    const filteredProducts = selectedCategory === 'all'
        ? featuredProducts
        : featuredProducts.filter(product => product.category === selectedCategory)

    return (
        <div className="min-h-screen bg-[#FFFDF9]">
            {/* Hero Section */}
            <div className="relative bg-[#EAEFF4] overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
                        <main className="flex items-center justify-between mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="w-1/2">
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block text-primary">Bling Stationery
                                    </span>
                                </h1>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
                                    Cùng bạn biến việc học và làm việc thành niềm vui mỗi ngày.

                                </p>
                            </div>
                            <div className="w-1/2 relative">
                                <img
                                    src="/src/assets/image/header.png"
                                    alt="Hero Image"
                                    className="w-[120%] h-auto object-contain"
                                />
                            </div>
                        </main>
                    </div>
                </div>
            </div>

            {/* Category Toggle System */}
            <div className="bg-[#EAEFF4]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between overflow-x-auto py-8 mx-40">
                        {categories.map((category) => {
                            const Icon = category.icon
                            const isSelected = selectedCategory === category.category
                            return (
                                <button
                                    key={category.title}
                                    onClick={() => setSelectedCategory(category.category)}
                                    className={`flex items-center justify-center whitespace-nowrap py-2  font-medium text-sm transition-colors duration-200`}
                                    title={category.title}
                                >
                                    <Icon className={`h-6 w-6 ${isSelected ? 'text-primary' : 'text-gray-400'}`} />
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Category Name Heading */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                <h1 className="text-2xl font-bold text-primary">
                    {categories.find(cat => cat.category === selectedCategory)?.title}
                </h1>
            </div>

            {/* Product Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredProducts.map((product) => (

                        <Link
                            key={product.id}
                            to={`/product/${product.id}`}
                            className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="relative w-full pb-[100%] bg-gray-100 rounded-t-lg overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-300"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary transition-colors duration-300">
                                    {product.name}
                                </h3>
                                <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                                    {product.description}
                                </p>
                                <div className="mt-3 flex items-center justify-between">
                                    <p className="text-lg font-semibold text-primary">
                                        {product.price}
                                    </p>
                                    <div className="flex items-center">

                                        <span className="ml-1 text-sm text-gray-500">
                                            ({product.reviewCount})
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home 