import { useState, useRef } from 'react'
import { Target, Clock, Copy, Check } from 'lucide-react'

const subjects = [
    'Toán học',
    'Vật lý',
    'Hóa học',
    'Sinh học',
    'Lịch sử',
    'Địa lý',
    'Văn học',
    'Ngoại ngữ',
    'Tin học',
    'Khác'
]

const learningTypes = [
    'Trực quan',
    'Thính giác',
    'Đọc/Viết',
    'Vận động',
    'Logic',
    'Xã hội',
]

const goals = [
    'Nắm vững kiến thức cơ bản',
    'Cải thiện điểm số',
    'Chuẩn bị cho kỳ thi',
    'Nâng cao kỹ năng',
    'Thực hiện dự án',
    'Nghiên cứu chuyên sâu'
]

const durations = [
    '1 tuần',
    '2 tuần',
    '1 tháng',
    '2 tháng',
    '3 tháng',
    '6 tháng',
    '1 năm'
]

const LearningChallenges = () => {
    const [formData, setFormData] = useState({
        subject: '',
        learningType: '',
        goal: '',
        duration: ''
    })

    const [generatedChallenge, setGeneratedChallenge] = useState(null)
    const [showGoalSuggestions, setShowGoalSuggestions] = useState(false)
    const [copied, setCopied] = useState(false)
    const goalInputRef = useRef(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleGoalFocus = () => {
        setShowGoalSuggestions(true)
    }

    const handleGoalBlur = () => {
        // Delay hiding suggestions to allow clicking on them
        setTimeout(() => {
            setShowGoalSuggestions(false)
        }, 200)
    }

    const selectGoal = (goal) => {
        setFormData(prev => ({
            ...prev,
            goal: goal
        }))
        setShowGoalSuggestions(false)
        goalInputRef.current?.blur()
    }

    const copyToClipboard = () => {
        if (!generatedChallenge) return

        const textToCopy = `
${generatedChallenge.title}

${generatedChallenge.description}

Các bước thực hiện:
${generatedChallenge.tasks.map((task, index) => `
${index + 1}. ${task.step}
Mục tiêu: ${task.goal}
Các hành động:
${task.actions.map(action => `- ${action}`).join('\n')}
`).join('\n')}

Lời khuyên:
${generatedChallenge.tips.map((tip, index) => `${index + 1}. ${tip}`).join('\n')}

Thời gian dự kiến: ${formData.duration}
`

        navigator.clipboard.writeText(textToCopy)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const generateChallenge = () => {
        const challenge = {
            title: `Thử thách học tập ${formData.subject}`,
            description: `Dựa trên phong cách học tập ${formData.learningType} của bạn, dưới đây là thử thách chi tiết trong vòng ${formData.duration}:`,
            timeline: formData.duration,
            tasks: [
                {
                    step: "Bước 1: Xác định mục tiêu cụ thể",
                    goal: `Thiết lập mục tiêu rõ ràng cho ${formData.duration.toLowerCase()}`,
                    actions: [
                        "Chia nhỏ mục tiêu chính thành từng tuần hoặc từng ngày",
                        "Viết ra mục tiêu ra giấy hoặc lưu vào app nhắc nhở",
                        "Đặt deadline và tiêu chí đo lường kết quả"
                    ]
                },
                {
                    step: "Bước 2: Tạo kế hoạch học tập chi tiết",
                    goal: "Lên lịch các hoạt động học mỗi ngày theo phong cách học của bạn",
                    actions: [
                        `Phân bổ nội dung học theo từng ngày phù hợp với phong cách ${formData.learningType}`,
                        "Chuẩn bị tài liệu, dụng cụ cần thiết trước mỗi buổi học",
                        "Gắn mỗi hoạt động với một khung giờ và không gian cụ thể"
                    ]
                },
                {
                    step: "Bước 3: Thiết lập thời gian học tập cố định",
                    goal: "Biến học tập thành thói quen đều đặn",
                    actions: [
                        "Chọn một hoặc hai khung giờ cố định mỗi ngày",
                        "Thiết lập báo thức hoặc lời nhắc để duy trì kỷ luật",
                        "Tập trung 100% khi học, không làm việc khác"
                    ]
                },
                {
                    step: "Bước 4: Theo dõi tiến độ và điều chỉnh khi cần",
                    goal: "Hiểu rõ mình đang học đến đâu và cần cải thiện gì",
                    actions: [
                        "Dùng bảng theo dõi hoặc ứng dụng để đánh dấu tiến độ",
                        "Tự kiểm tra sau mỗi phần đã học",
                        "Ghi chú những phần chưa hiểu rõ để ôn lại"
                    ]
                },
                {
                    step: "Bước 5: Chia sẻ và thảo luận với bạn bè",
                    goal: "Tăng sự gắn kết và học hỏi lẫn nhau",
                    actions: [
                        "Tham gia nhóm học tập hoặc mời một người bạn cùng học",
                        "Chia sẻ tiến độ hoặc thành quả mỗi tuần",
                        "Thảo luận những phần khó để mở rộng hiểu biết"
                    ]
                }
            ],
            tips: [
                `Ưu tiên dùng phương pháp phù hợp với phong cách ${formData.learningType}, ví dụ: học khi vận động nếu bạn là người học qua vận động.`,
                "Chia nhỏ mục tiêu lớn thành từng bước rõ ràng và dễ đạt được",
                "Chọn không gian học gọn gàng, thoải mái và không bị phân tâm",
                "Dùng sổ tay, ứng dụng ghi chú hoặc mindmap để ghi và tổ chức kiến thức",
                "Cuối mỗi tuần, tự đánh giá lại quá trình học và điều chỉnh nếu cần"
            ]
        };


        setGeneratedChallenge(challenge)
    }

    return (
        <div className="max-w-4xl mx-auto p-6">


            {/* Form */}
            <div className="bg-white rounded-lg shadow p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Môn học
                        </label>
                        <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full h-12 p-3 rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring-primary"

                        >

                            <option value="">Chọn môn học</option>
                            {subjects.map(subject => (
                                <option key={subject} value={subject}>{subject}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phong cách học tập
                        </label>
                        <select
                            name="learningType"
                            value={formData.learningType}
                            onChange={handleChange}
                            className="w-full h-12 p-3 rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                        >
                            <option value="">Chọn phong cách học tập</option>
                            {learningTypes.map(type => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>

                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Mục tiêu
                        </label>
                        <div className="relative">
                            <input
                                ref={goalInputRef}
                                type="text"
                                name="goal"
                                value={formData.goal}
                                onChange={handleChange}
                                onFocus={handleGoalFocus}
                                onBlur={handleGoalBlur}
                                placeholder="Nhập mục tiêu của bạn"
                                className="w-full h-12 p-3 rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                            />
                            {showGoalSuggestions && (
                                <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg border border-gray-200">
                                    <div className="p-2 text-sm text-gray-500">Đề xuất:</div>
                                    <ul className="max-h-60 overflow-auto">
                                        {goals.map((goal, index) => (
                                            <li
                                                key={index}
                                                onClick={() => selectGoal(goal)}
                                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                            >
                                                {goal}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Thời gian
                        </label>
                        <select
                            name="duration"
                            value={formData.duration}
                            onChange={handleChange}
                            className="w-full h-12 p-3 rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                        >
                            <option value="">Chọn thời gian</option>
                            {durations.map(duration => (
                                <option key={duration} value={duration}>{duration}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <button
                        onClick={generateChallenge}
                        disabled={!formData.subject || !formData.learningType || !formData.goal || !formData.duration}
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Tạo Thử Thách
                    </button>
                </div>
            </div>

            {/* Generated Challenge */}
            {generatedChallenge && (
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">{generatedChallenge.title}</h2>
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={copyToClipboard}
                                className="flex items-center px-4 py-2 bg-white text-primary rounded-md hover:bg-gray-50 transition-colors"
                            >
                                {copied ? (
                                    <>
                                        <Check className="h-4 w-4 mr-2 text-green-500" />
                                        Đã sao chép
                                    </>
                                ) : (
                                    <>
                                        <Copy className="h-4 w-4 mr-2 font-bold" />
                                        Sao chép
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    <p className="text-gray-600 mb-6">{generatedChallenge.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                <Target className="h-5 w-5 text-primary mr-2" />
                                Các bước thực hiện
                            </h3>
                            <ul className="space-y-3">
                                {generatedChallenge.tasks.map((task, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-2">
                                            {index + 1}
                                        </span>
                                        <div>
                                            <span className="font-medium text-gray-900">{task.step}</span>
                                            <p className="text-sm text-gray-600 mt-1">{task.goal}</p>
                                            <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
                                                {task.actions.map((action, actionIndex) => (
                                                    <li key={actionIndex}>{action}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                <Clock className="h-5 w-5 text-primary mr-2" />
                                Lời khuyên
                            </h3>
                            <ul className="space-y-3">
                                {generatedChallenge.tips.map((tip, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-2">
                                            {index + 1}
                                        </span>
                                        <span className="text-gray-600">{tip}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                        <div className="flex items-center text-primary">
                            <Clock className="h-5 w-5 mr-2" />
                            <span className="font-medium">Thời gian dự kiến: {formData.duration}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default LearningChallenges 