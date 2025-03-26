import { useState } from 'react'
import { Download } from 'lucide-react'

const freebies = [
    {
        id: 1,
        name: 'Daily Planner Template',
        description: 'A simple but effective daily planning template to help you stay organized.',
        category: 'template',
        thumbnail: '/images/daily-template-thumb.jpg',
        downloadUrl: '/downloads/daily-planner-template.pdf',
    },
    {
        id: 2,
        name: 'Productivity Stickers',
        description: 'Colorful stickers to make your planner more fun and engaging.',
        category: 'sticker',
        thumbnail: '/images/stickers-thumb.jpg',
        downloadUrl: '/downloads/productivity-stickers.pdf',
    },
    {
        id: 3,
        name: 'Habit Tracker',
        description: 'Track your daily habits and build consistency with this template.',
        category: 'template',
        thumbnail: '/images/habit-tracker-thumb.jpg',
        downloadUrl: '/downloads/habit-tracker.pdf',
    },
    // Add more freebies
]

const categories = [
    { name: 'All', value: 'all' },
    { name: 'Templates', value: 'template' },
    { name: 'Stickers', value: 'sticker' },
]

const Freebies = () => {
    const [selectedCategory, setSelectedCategory] = useState('all')

    const filteredFreebies = freebies.filter(
        (freebie) => selectedCategory === 'all' || freebie.category === selectedCategory
    )

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Free Downloads
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-gray-500">
                    Download free templates, stickers, and other resources to enhance your planning experience
                </p>
            </div>

            {/* Category Filter */}
            <div className="flex justify-center space-x-4 mb-8">
                {categories.map((category) => (
                    <button
                        key={category.value}
                        onClick={() => setSelectedCategory(category.value)}
                        className={`px-4 py-2 rounded-md ${selectedCategory === category.value
                            ? 'bg-primary text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            {/* Freebies Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredFreebies.map((freebie) => (
                    <div
                        key={freebie.id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                        <div className="aspect-w-3 aspect-h-2">
                            <img
                                src={freebie.thumbnail}
                                alt={freebie.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-900">{freebie.name}</h3>
                            <p className="mt-2 text-gray-500">{freebie.description}</p>
                            <a
                                href={freebie.downloadUrl}
                                download
                                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark"
                            >
                                <Download className="h-5 w-5 mr-2" />
                                Download
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Freebies 