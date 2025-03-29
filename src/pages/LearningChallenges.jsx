import { useState } from 'react'
import { Brain, Target, Clock, BookOpen } from 'lucide-react'

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

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const generateChallenge = () => {
        // Here you would typically make an API call to generate the challenge
        // For now, we'll create a template-based challenge
        const challenge = {
            title: `Thử thách học tập ${formData.subject}`,
            description: `Dựa trên phong cách học tập ${formData.learningType} của bạn, đây là thử thách được đề xuất:`,
            steps: [
                `Xác định mục tiêu cụ thể cho ${formData.duration}`,
                `Tạo kế hoạch học tập chi tiết`,
                `Thiết lập thời gian học tập cố định mỗi ngày`,
                `Theo dõi tiến độ và điều chỉnh khi cần`,
                `Chia sẻ và thảo luận với bạn bè`
            ],
            tips: [
                `Sử dụng phương pháp học tập phù hợp với phong cách ${formData.learningType}`,
                `Đặt mục tiêu nhỏ và đạt được từng bước`,
                `Tạo môi trường học tập tối ưu`,
                `Ghi chép và tổ chức kiến thức hiệu quả`,
                `Tự đánh giá và điều chỉnh phương pháp học tập`
            ]
        }

        setGeneratedChallenge(challenge)
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Thử Thách Học Tập</h1>
                <p className="text-lg text-gray-600">
                    Tạo thử thách học tập được cá nhân hóa dựa trên sở thích và mục tiêu của bạn
                </p>
            </div>

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

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Mục tiêu
                        </label>
                        <select
                            name="goal"
                            value={formData.goal}
                            onChange={handleChange}
                            className="w-full h-12 p-3 rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                        >
                            <option value="">Chọn mục tiêu</option>
                            {goals.map(goal => (
                                <option key={goal} value={goal}>{goal}</option>
                            ))}
                        </select>
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
                        <Brain className="h-8 w-8 text-primary" />
                    </div>

                    <p className="text-gray-600 mb-6">{generatedChallenge.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                <Target className="h-5 w-5 text-primary mr-2" />
                                Các bước thực hiện
                            </h3>
                            <ul className="space-y-3">
                                {generatedChallenge.steps.map((step, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-2">
                                            {index + 1}
                                        </span>
                                        <span className="text-gray-600">{step}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                <BookOpen className="h-5 w-5 text-primary mr-2" />
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