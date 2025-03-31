import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Gift } from 'lucide-react'
import { products } from '../data/products'

const ProductDetail = () => {
    const { id } = useParams()
    const product = products.find(p => p.id === id)

    if (!product) {
        return <div>Không tìm thấy sản phẩm</div>
    }

    const [selectedImage, setSelectedImage] = useState(0)

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Shipping & Gift Info Banner */}
            <div className="bg-primary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <div className="flex items-center space-x-4">
                        <Gift className="h-5 w-5" />
                        <span>Tặng sticker + hướng dẫn sử dụng với AI prompt</span>
                    </div>
                </div>
            </div>

            {/* Product Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
                    {/* Image Gallery */}
                    <div className="relative">
                        <div className="relative w-full pb-[100%] bg-gray-100 rounded-lg overflow-hidden">
                            <img
                                src={product.images[selectedImage]}
                                alt={product.name}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                        <div className="mt-4 grid grid-cols-3 gap-4">
                            {product.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`relative w-full pb-[100%] rounded-lg overflow-hidden ${selectedImage === index ? 'ring-2 ring-primary' : ''
                                        }`}
                                >
                                    <img
                                        src={image}
                                        alt={`${product.name} ${index + 1}`}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="mt-10 lg:mt-0">
                        <h1 className="text-3xl font-extrabold text-gray-900">{product.name}</h1>
                        <div className="mt-3 flex items-center">
                        </div>
                        <p className="mt-4 text-2xl font-bold text-primary">{product.price}</p>
                        <p className="mt-4 text-gray-500">{product.description}</p>
                    </div>
                </div>

                {/* Product Details */}
                <div className="mt-16">
                    <div className="border-t border-gray-200 pt-8">
                        <h2 className="text-2xl font-bold text-gray-900">Mô tả sản phẩm</h2>
                        <div className="mt-6 prose prose-sm text-gray-500">
                            {product.longDescription.split('\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    {/* Features */}
                    <div className="mt-16 border-t border-gray-200 pt-8">
                        <h2 className="text-2xl font-bold text-gray-900">Tính năng nổi bật</h2>
                        <ul className="mt-6 space-y-4">
                            {product.features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Specifications */}
                    <div className="mt-16 border-t border-gray-200 pt-8">
                        <h2 className="text-2xl font-bold text-gray-900">Thông số kỹ thuật</h2>
                        <dl className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                            {product.specifications.map((spec, index) => (
                                <div key={index}>
                                    <dt className="text-sm font-medium text-gray-500">{spec.name}</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{spec.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail 