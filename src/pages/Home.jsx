import { Link } from 'react-router-dom'
import { Briefcase, BookOpen, Calendar, Brain } from 'lucide-react'

const categories = [
    {
        title: 'Work Planners',
        description: 'Stay organized and boost your productivity with our work planners.',
        icon: Briefcase,
        href: '/planner/work',
        color: 'bg-blue-500',
    },
    {
        title: 'Study Planners',
        description: 'Achieve your academic goals with our study planning tools.',
        icon: BookOpen,
        href: '/planner/study',
        color: 'bg-purple-500',
    },
    {
        title: 'Life Planners',
        description: 'Balance your life and track your personal goals effectively.',
        icon: Calendar,
        href: '/planner/plan',
        color: 'bg-pink-500',
    },
]

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative bg-primary">
                <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                            Plan Your Success
                        </h1>
                        <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
                            Beautiful planners designed to help you organize your work, study, and life goals.
                        </p>
                        <div className="mt-10">
                            <Link
                                to="/planner/work"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Category Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {categories.map((category) => (
                        <Link
                            key={category.title}
                            to={category.href}
                            className="relative group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className={`${category.color} h-24 flex items-center justify-center`}>
                                <category.icon className="h-12 w-12 text-white" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                                <p className="mt-2 text-gray-500">{category.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Learning Style Test Banner */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div>
                            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                                Discover Your Learning Style
                            </h2>
                            <p className="mt-3 max-w-3xl text-lg text-purple-100">
                                Take our quick learning style assessment to understand how you learn best and get personalized study tips.
                            </p>
                            <div className="mt-8 sm:flex">
                                <div className="rounded-md shadow">
                                    <Link
                                        to="/learning-style-test"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50 md:py-4 md:text-lg md:px-10"
                                    >
                                        Take the Test
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                            <div className="col-span-1 flex justify-center py-8 px-8 bg-purple-500">
                                <Brain className="max-h-12 w-auto text-white" />
                            </div>
                            <div className="col-span-1 flex justify-center py-8 px-8 bg-purple-600">
                                <BookOpen className="max-h-12 w-auto text-white" />
                            </div>
                            <div className="col-span-1 flex justify-center py-8 px-8 bg-purple-700">
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