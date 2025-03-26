import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Eye } from 'lucide-react'

const products = {
    work: [
        {
            id: 'work-1',
            name: 'Daily Work Planner',
            description: 'Stay organized with daily task tracking and priority management.',
            image: '/images/work-planner-1.jpg',
        },
        {
            id: 'work-2',
            name: 'Project Planner',
            description: 'Track multiple projects and deadlines effectively.',
            image: '/images/work-planner-2.jpg',
        },
        // Add more work planners
    ],
    study: [
        {
            id: 'study-1',
            name: 'Student Weekly Planner',
            description: 'Organize your classes, assignments, and study sessions.',
            image: '/images/study-planner-1.jpg',
        },
        {
            id: 'study-2',
            name: 'Exam Prep Planner',
            description: 'Plan your exam preparation with structured study schedules.',
            image: '/images/study-planner-2.jpg',
        },
        // Add more study planners
    ],
    plan: [
        {
            id: 'plan-1',
            name: 'Life Goals Planner',
            description: 'Set and track your personal goals and habits.',
            image: '/images/life-planner-1.jpg',
        },
        {
            id: 'plan-2',
            name: 'Wellness Planner',
            description: 'Track your health, fitness, and self-care routines.',
            image: '/images/life-planner-2.jpg',
        },
        // Add more life planners
    ],
}

const categoryTitles = {
    work: 'Work Planners',
    study: 'Study Planners',
    plan: 'Life Planners',
}

const Planner = () => {
    const { category } = useParams()
    const categoryProducts = products[category] || []

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    {categoryTitles[category]}
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-gray-500">
                    Find the perfect planner to organize your {category} life
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {categoryProducts.map((product) => (
                    <div
                        key={product.id}
                        className="group relative bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                        {/* Product Image */}
                        <div className="relative h-64 w-full overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover object-center"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                                <Link
                                    to={`/product/${product.id}`}
                                    className="opacity-0 group-hover:opacity-100 bg-white text-primary px-4 py-2 rounded-md flex items-center space-x-2 transition-opacity duration-300"
                                >
                                    <Eye className="h-5 w-5" />
                                    <span>View Details</span>
                                </Link>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                            <p className="mt-2 text-gray-500">{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Planner 