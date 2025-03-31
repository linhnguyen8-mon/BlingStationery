import { useState } from 'react'
import { Heart, Target, Copy, Check } from 'lucide-react'
import becoming from '../assets/image/becoming.png'
import becoming1 from '../assets/image/becoming(1).png'

const Becoming = () => {
    const [manifestation, setManifestation] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [userDream, setUserDream] = useState('')
    const [finalPrompt, setFinalPrompt] = useState('')
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(finalPrompt)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy text: ', err)
        }
    }

    const generateManifestation = async () => {
        if (!userDream.trim()) return

        setIsLoading(true)
        setTimeout(() => {
            const personalizedDescription = `Hãy tưởng tượng một ngày hoàn hảo, nơi bạn đang sống cuộc sống như bạn mơ ước: "${userDream}". Mọi điều đều đúng như bạn mong muốn.`

            const response = {
                dreamLife: {
                    title: "Một ngày trong cuộc sống mơ ước của bạn",
                    description: personalizedDescription
                },
                steps: [
                    {
                        title: "Tư duy (Thought)",
                        description: "Mọi thứ bắt đầu từ việc biết rõ mình thực sự muốn gì...",
                        actions: [
                            "✍️ Viết nhật ký",
                            "🎨 Tạo bảng tầm nhìn (Vision Board)",
                            "🧘‍♂️ Thiền định và tưởng tượng",
                            "📚 Đọc sách phát triển bản thân"
                        ]
                    },
                    {
                        title: "Niềm tin (Belief)",
                        description: "Tin rằng mình làm được là bước đầu tiên...",
                        actions: [
                            "💪 Khẳng định tích cực",
                            "🔍 Tìm cảm hứng từ câu chuyện thành công",
                            "👥 Môi trường tích cực",
                            "👯 Cộng đồng hỗ trợ"
                        ]
                    },
                    {
                        title: "Hành động (Action)",
                        description: "Ước mơ chỉ thành hiện thực khi bạn hành động...",
                        actions: [
                            "🗓️ Lập kế hoạch nhỏ",
                            "🌿 Thói quen tốt",
                            "🎓 Học tập liên tục",
                            "💪 Kiên trì không bỏ cuộc"
                        ]
                    }
                ]
            }

            const fullPrompt = `Tôi muốn manifesting điều sau: "${userDream}". Hãy hướng dẫn tôi từng bước từ tư duy, niềm tin đến hành động để biến điều này thành hiện thực.`

            setManifestation(response)
            setFinalPrompt(`${fullPrompt}\n\n${JSON.stringify(response, null, 2)}`)
            setIsLoading(false)
        }, 1500)
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Ticket style section */}
            <div className="relative bg-white mb-8 overflow-hidden border border-gray-200 flex flex-col sm:flex-row rounded-xl shadow-lg">
                <div className="sm:w-1/2 w-full">
                    <img src={becoming} alt="Becoming" className="w-full h-auto object-cover" />
                </div>
                <div className="sm:w-1/2 w-full flex flex-col justify-between p-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">🎟️ Becoming - Hiện Thực Hóa Ước Mơ</h2>
                        <p className="text-gray-600 text-sm mb-4">
                            Khám phá tiềm năng vô hạn của bạn và học cách biến ước mơ thành hiện thực.
                        </p>
                        <input
                            type="text"
                            placeholder="Nhập mong muốn hoặc ước mơ của bạn..."
                            value={userDream}
                            onChange={(e) => setUserDream(e.target.value)}
                            className="mb-4 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-primary focus:border-primary"
                        />
                    </div>
                    <button
                        onClick={generateManifestation}
                        disabled={isLoading}
                        className="mt-auto w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                        {isLoading ? 'Đang tạo...' : 'Bắt đầu manifesting'}
                    </button>
                </div>
            </div>

            {/* Prompt output */}
            {finalPrompt && (
                <div className="bg-white rounded-lg shadow  space-y-4 mb-4">
                    <img src={becoming1} alt="Becoming" className="w-full h-80 object-cover object-[90%_50%]
 " />
                    <div className='p-6'>
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-gray-800">🎯 Prompt để gửi AI</h2>
                            <button
                                onClick={handleCopy}
                                className="rounded-md flex items-center text-sm p-3 text-primary hover:bg-primary/10"
                            >
                                {copied ? (
                                    <>
                                        <Check className="h-4 w-4 mr-2 text-green-500" />
                                        Đã sao chép
                                    </>
                                ) : (
                                    <>
                                        <Copy className="h-4 w-4 mr-2" />
                                        Sao chép
                                    </>
                                )}
                            </button>
                        </div>
                        {/* Manifestation steps */}
                        {manifestation && (
                            <div className="space-y-8">
                                {/* Dream Life */}
                                <div className="bg-white rounded-lg shadow p-6">
                                    <div className="flex items-center mb-4">
                                        <Heart className="h-6 w-6 text-primary mr-2" />
                                        <h2 className="text-xl font-semibold text-gray-900">{manifestation.dreamLife.title}</h2>
                                    </div>
                                    <p className="text-gray-600">{manifestation.dreamLife.description}</p>
                                </div>

                                {/* Steps */}
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
                                                    <li key={actionIndex} className="text-gray-600">{action}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-gray-700 whitespace-pre-wrap">{finalPrompt}</div>
                            </div>
                        )}
                    </div>
                </div>
            )}


        </div>
    )
}

export default Becoming
