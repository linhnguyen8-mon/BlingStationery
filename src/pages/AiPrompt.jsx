import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Target, GraduationCap, Rocket } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'

const features = [
    {
        name: 'AI Prompt',
        href: '/ai-prompts/prompts',
        icon: Sparkles,
        color: 'bg-blue-50 hover:bg-blue-100',
        description: 'Khám phá các prompt AI thông minh để tối ưu việc học tập của bạn'
    },
    {
        name: 'Thử thách học tập',
        href: '/ai-prompts/learning-challenges',
        icon: Target,
        color: 'bg-green-50 hover:bg-green-100',
        description: 'Tham gia các thử thách học tập được thiết kế bởi AI'
    },
    {
        name: 'Phương pháp học tập',
        href: '/ai-prompts/study-techniques',
        icon: GraduationCap,
        color: 'bg-purple-50 hover:bg-purple-100',
        description: 'Khám phá các phương pháp học tập hiệu quả được đề xuất bởi AI'
    },
    {
        name: 'Becoming',
        href: '/ai-prompts/becoming',
        icon: Rocket,
        color: 'bg-orange-50 hover:bg-orange-100',
        description: 'Hành trình phát triển bản thân với sự hỗ trợ của AI'
    }
]

const AiPrompt = () => {
    const [activeFeature, setActiveFeature] = useState(null)

    const breadcrumbItems = [
        { label: 'Trang Chủ', link: '/' },
        { label: 'AI Prompt' }
    ]

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Breadcrumb items={breadcrumbItems} />

            <div className="text-center mb-12">
                <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    AI Prompt
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-gray-500">
                    Khám phá các công cụ AI thông minh để tối ưu việc học tập của bạn
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature) => (
                    <Link
                        key={feature.name}
                        to={feature.href}
                        className={`flex items-start gap-4 p-6 rounded-lg ${feature.color} transition-colors duration-200`}
                        onMouseEnter={() => setActiveFeature(feature.name)}
                        onMouseLeave={() => setActiveFeature(null)}
                    >
                        <div className="flex-shrink-0">
                            <feature.icon className="h-6 w-6 text-gray-700" />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                            <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default AiPrompt 