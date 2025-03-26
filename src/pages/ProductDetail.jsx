import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Mock product data - in a real app, this would come from an API
const productDetails = {
    'work-1': {
        name: 'Daily Work Planner',
        description: 'Stay organized with daily task tracking and priority management.',
        features: [
            'Daily schedule with time blocks',
            'Priority task management',
            'Meeting notes section',
            'Goal tracking',
            'Monthly overview',
        ],
        images: [
            '/images/work-planner-1.jpg',
            '/images/work-planner-1-2.jpg',
            '/images/work-planner-1-3.jpg',
        ],
        templates: [
            { name: 'Daily Schedule', link: '#' },
            { name: 'Weekly Overview', link: '#' },
            { name: 'Project Tracker', link: '#' },
        ],
    },
    // Add more product details
}

const ProductDetail = () => {
    const { id } = useParams()
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const product = productDetails[id]
    if (!product) return <div>Product not found</div>

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
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
                {/* Image gallery */}
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

                {/* Product info */}
                <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        {product.name}
                    </h1>
                    <div className="mt-6">
                        <h3 className="sr-only">Description</h3>
                        <div className="text-base text-gray-700">{product.description}</div>
                    </div>

                    {/* Features */}
                    <div className="mt-10">
                        <h3 className="text-sm font-medium text-gray-900">Features</h3>
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

                    {/* Templates */}
                    <div className="mt-10">
                        <h3 className="text-sm font-medium text-gray-900">Available Templates</h3>
                        <div className="mt-4 space-y-4">
                            {product.templates.map((template) => (
                                <a
                                    key={template.name}
                                    href={template.link}
                                    className="block px-4 py-2 bg-gray-50 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-md"
                                >
                                    {template.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail 