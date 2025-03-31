import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Target, GraduationCap, Rocket } from 'lucide-react'
import TroLyBling from './TroLyBling'
import StudyTechniques from './StudyTechniques'
import LearningChallenges from './LearningChallenges'
import Becoming from './Becoming'

const features = [
    {
        name: 'AI Prompt',
        component: TroLyBling,
        icon: Sparkles,
        color: 'text-blue-600',
        description: 'Khám phá các prompt AI thông minh để tối ưu việc học tập của bạn'
    },
    {
        name: 'Thử thách học tập',
        component: LearningChallenges,
        icon: Target,
        color: 'text-green-600',
        description: 'Tham gia các thử thách học tập được thiết kế bởi AI'
    },
    {
        name: 'Phương pháp học tập',
        component: StudyTechniques,
        icon: GraduationCap,
        color: 'text-purple-600',
        description: 'Khám phá các phương pháp học tập hiệu quả được đề xuất bởi AI'
    },
    {
        name: 'Becoming',
        component: Becoming,
        icon: Rocket,
        color: 'text-orange-600',
        description: 'Hành trình phát triển bản thân với sự hỗ trợ của AI'
    }
]

const AiPrompt = () => {
    const [selectedFeature, setSelectedFeature] = useState('AI Prompt')

    const SelectedComponent = features.find(f => f.name === selectedFeature)?.component

    return (
        <div className="min-h-screen bg-[#FFFDF9]">
            {/* Hero Section */}
            <div className="relative bg-[#EAEFF4] overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
                        <main className="flex items-center justify-between mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="w-1/2">
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block text-primary">AI Prompt
                                    </span>
                                </h1>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
                                    Khám phá các công cụ AI thông minh để tối ưu việc học tập của bạn
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

            {/* Feature Toggle System */}
            <div className="bg-[#EAEFF4]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between overflow-x-auto py-8 mx-40">
                        {features.map((feature) => {
                            const Icon = feature.icon
                            const isSelected = selectedFeature === feature.name
                            return (
                                <button
                                    key={feature.name}
                                    onClick={() => setSelectedFeature(feature.name)}
                                    className={`flex gap-3 items-center justify-center whitespace-nowrap py-2 font-medium text-sm transition-colors duration-200`}
                                    title={feature.name}
                                >
                                    <Icon className={`h-6 w-6 ${isSelected ? feature.color : 'text-gray-400'}`} />
                                    <span className={` ${isSelected ? 'font-bold text-primary' : 'text-gray-400'}`} >{feature.name}</span>
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Feature Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {SelectedComponent && <SelectedComponent />}
            </div>
        </div>
    )
}

export default AiPrompt 