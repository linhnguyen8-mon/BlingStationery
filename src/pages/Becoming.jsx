import { useState } from 'react'
import { Sparkles, Brain, Heart, Target } from 'lucide-react'

const Becoming = () => {
    const [manifestation, setManifestation] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const generateManifestation = async () => {
        setIsLoading(true)
        // Here you would typically make an API call to generate the manifestation
        // For now, we'll use a template-based response
        setTimeout(() => {
            const response = {
                dreamLife: {
                    title: "Một ngày trong cuộc sống mơ ước của bạn",
                    description: "Hãy tưởng tượng một ngày hoàn hảo trong tương lai của bạn, nơi mọi thứ đều diễn ra như mong muốn. Bạn thức dậy trong một căn nhà đẹp, được bao quanh bởi những người thân yêu. Công việc của bạn đang phát triển tốt đẹp, và bạn có đủ thời gian để theo đuổi những sở thích cá nhân. Bạn cảm thấy hài lòng, hạnh phúc và biết ơn vì tất cả những gì mình đã đạt được."
                },
                steps: [
                    {
                        title: "Tư duy (Thought)",
                        description: "Mọi thứ bắt đầu từ việc biết rõ mình thực sự muốn gì. Hãy dành thời gian hình dung về cuộc sống mơ ước của bạn – không chỉ là những thứ bạn muốn có, mà còn cả cảm giác, trải nghiệm bạn muốn tận hưởng mỗi ngày.",
                        actions: [
                            "✍️ Viết nhật ký",
                            "🎨 Tạo bảng tầm nhìn (Vision Board)",
                            "🧘‍♂️ Thực hành thiền định và tưởng tượng",
                            "📚 Đọc sách về phát triển cá nhân"
                        ]
                    },
                    {
                        title: "Niềm tin (Belief)",
                        description: "Tin rằng mình làm được là bước đầu tiên để thực sự làm được. Đừng để những suy nghĩ tiêu cực kéo bạn xuống. Nếu có những hoài nghi, hãy thay thế chúng bằng niềm tin tích cực.",
                        actions: [
                            "💪 Thực hành khẳng định tích cực",
                            "🔍 Tìm kiếm những câu chuyện thành công",
                            "👥 Xây dựng môi trường tích cực",
                            "👯 Tham gia các cộng đồng hỗ trợ"
                        ]
                    },
                    {
                        title: "Hành động (Action)",
                        description: "Ước mơ chỉ trở thành hiện thực khi bạn bắt tay vào làm. Đừng đợi đến lúc sẵn sàng, vì thật ra chẳng ai hoàn toàn sẵn sàng cả.",
                        actions: [
                            "🗓️ Lập kế hoạch nhỏ, dễ làm",
                            "🌿 Tạo thói quen tốt",
                            "🎓 Không ngừng học hỏi",
                            "💪 Kiên trì, đừng bỏ cuộc"
                        ]
                    }
                ]
            }
            setManifestation(response)
            setIsLoading(false)
        }, 1500)
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="text-center mb-12">
                <div className="flex justify-center mb-4">
                    <Sparkles className="h-12 w-12 text-primary" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Becoming - Hiện Thực Hóa Ước Mơ</h1>
                <p className="text-lg text-gray-600">
                    Khám phá tiềm năng vô hạn của bạn và học cách biến ước mơ thành hiện thực
                </p>
            </div>

            {/* AI Prompt Section */}
            <div className="bg-white rounded-lg shadow p-6 mb-8">
                <div className="flex items-center mb-4">
                    <Brain className="h-6 w-6 text-primary mr-2" />
                    <h2 className="text-xl font-semibold text-gray-900">AI Manifestation Prompt</h2>
                </div>
                <p className="text-gray-600 mb-6">
                    Hãy để AI giúp bạn hình dung rõ ràng về cuộc sống mơ ước và các bước để đạt được nó.
                </p>
                <button
                    onClick={generateManifestation}
                    disabled={isLoading}
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ? 'Đang tạo...' : 'Tạo Manifestation Prompt'}
                </button>
            </div>

            {/* Generated Manifestation */}
            {manifestation && (
                <div className="space-y-8">
                    {/* Dream Life Section */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center mb-4">
                            <Heart className="h-6 w-6 text-primary mr-2" />
                            <h2 className="text-xl font-semibold text-gray-900">{manifestation.dreamLife.title}</h2>
                        </div>
                        <p className="text-gray-600">{manifestation.dreamLife.description}</p>
                    </div>

                    {/* Steps Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {manifestation.steps.map((step, index) => (
                            <div key={index} className="bg-white rounded-lg shadow p-6">
                                <div className="flex items-center mb-4">
                                    <Target className="h-6 w-6 text-primary mr-2" />
                                    <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                                </div>
                                <p className="text-gray-600 mb-4">{step.description}</p>
                                <ul className="space-y-2">
                                    {step.actions.map((action, actionIndex) => (
                                        <li key={actionIndex} className="flex items-start">

                                            <span className="text-gray-600">{action}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Becoming 