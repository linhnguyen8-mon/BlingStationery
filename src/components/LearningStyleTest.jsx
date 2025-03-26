import { useState } from 'react'
import { Brain, Circle } from 'lucide-react'

const questions = [
    {
        id: 1,
        text: "Tôi thích học thông qua các công cụ trực quan như biểu đồ, đồ thị và sơ đồ.",
        category: "visual"
    },
    {
        id: 2,
        text: "Tôi thích giải đố và các vấn đề logic.",
        category: "logical"
    },
    {
        id: 3,
        text: "Tôi học tốt nhất bằng cách đọc và ghi chép.",
        category: "verbal"
    },
    {
        id: 4,
        text: "Tôi nhớ thông tin tốt hơn khi nghe được phát âm.",
        category: "aural"
    },
    {
        id: 5,
        text: "Tôi thích các hoạt động thực hành và trải nghiệm thực tế.",
        category: "physical"
    },
    {
        id: 6,
        text: "Tôi học hiệu quả trong các cuộc thảo luận nhóm và môi trường hợp tác.",
        category: "social"
    },
    {
        id: 7,
        text: "Tôi sử dụng sơ đồ tư duy và các công cụ tổ chức trực quan để hiểu khái niệm.",
        category: "visual"
    },
    {
        id: 8,
        text: "Tôi thích phân tích các mẫu và mối quan hệ giữa các ý tưởng.",
        category: "logical"
    },
    {
        id: 9,
        text: "Tôi học tốt từ việc đọc sách giáo khoa và tài liệu viết.",
        category: "verbal"
    },
    {
        id: 10,
        text: "Tôi thích nghe ghi âm và giải thích bằng lời nói.",
        category: "aural"
    },
    {
        id: 11,
        text: "Tôi học bằng cách thực hành và luyện tập các hoạt động thể chất.",
        category: "physical"
    },
    {
        id: 12,
        text: "Tôi thích dạy người khác và giải thích khái niệm cho bạn bè.",
        category: "social"
    }
]

const ratingLabels = [
    { value: 1, label: 'Hiếm khi' },
    { value: 2, label: 'Thỉnh thoảng' },
    { value: 3, label: 'Thường xuyên' },
    { value: 4, label: 'Thường xuyên' },
    { value: 5, label: 'Luôn luôn' }
]

const learningStyles = {
    visual: {
        name: 'Người học trực quan',
        description: 'Bạn học tốt nhất thông qua các công cụ trực quan như biểu đồ, đồ thị và sơ đồ.',
        tips: [
            'Sử dụng sơ đồ tư duy và công cụ tổ chức trực quan',
            'Xem video giáo dục',
            'Tạo thẻ ghi nhớ với hình ảnh',
            'Sử dụng mã màu trong ghi chép',
            'Vẽ sơ đồ để giải thích khái niệm'
        ]
    },
    logical: {
        name: 'Người học logic',
        description: 'Bạn giỏi về lý luận, nhận biết mẫu và phân tích mối quan hệ.',
        tips: [
            'Tạo hệ thống và phân loại',
            'Sử dụng câu đố logic và trò chơi',
            'Phân tích vấn đề phức tạp',
            'Tạo quy trình từng bước',
            'Sử dụng phương pháp toán học'
        ]
    },
    verbal: {
        name: 'Người học ngôn ngữ',
        description: 'Bạn học tốt nhất thông qua từ ngữ, cả viết và nói.',
        tips: [
            'Đọc sách giáo khoa và bài báo',
            'Viết ghi chép chi tiết',
            'Sử dụng liên tưởng từ ngữ',
            'Tạo từ viết tắt và kỹ thuật ghi nhớ',
            'Luyện tập viết tóm tắt'
        ]
    },
    aural: {
        name: 'Người học thính giác',
        description: 'Bạn học tốt nhất thông qua âm thanh và âm nhạc.',
        tips: [
            'Nghe bản ghi âm',
            'Sử dụng vần điệu và bài hát',
            'Ghi âm giọng đọc ghi chép',
            'Tham gia thảo luận',
            'Nghe nhạc nền khi học'
        ]
    },
    physical: {
        name: 'Người học vận động',
        description: 'Bạn học tốt nhất thông qua các hoạt động thể chất và trải nghiệm thực tế.',
        tips: [
            'Sử dụng thí nghiệm thực hành',
            'Nghỉ giải lao thường xuyên',
            'Sử dụng vật thể để học',
            'Luyện tập đóng vai',
            'Tạo mô hình vật lý'
        ]
    },
    social: {
        name: 'Người học xã hội',
        description: 'Bạn học tốt nhất trong nhóm và thông qua tương tác với người khác.',
        tips: [
            'Tham gia nhóm học tập',
            'Tham gia thảo luận',
            'Dạy người khác',
            'Làm việc nhóm',
            'Sử dụng phản hồi từ bạn bè'
        ]
    }
}

const LearningStyleTest = () => {
    const [answers, setAnswers] = useState({})
    const [showResults, setShowResults] = useState(false)

    const handleAnswer = (questionId, value) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: value
        }))
    }

    const calculateResults = () => {
        const scores = {
            visual: 0,
            logical: 0,
            verbal: 0,
            aural: 0,
            physical: 0,
            social: 0
        }

        Object.entries(answers).forEach(([questionId, value]) => {
            const question = questions.find(q => q.id === parseInt(questionId))
            if (question) {
                scores[question.category] += value
            }
        })

        // Convert scores to percentages
        const totalQuestions = Object.keys(answers).length
        const maxPossibleScore = totalQuestions * 5
        const percentages = Object.entries(scores).map(([style, score]) => ({
            style,
            percentage: Math.round((score / maxPossibleScore) * 100)
        }))

        // Sort by percentage to find primary and secondary styles
        percentages.sort((a, b) => b.percentage - a.percentage)
        return {
            scores: percentages,
            primary: percentages[0],
            secondary: percentages[1]
        }
    }

    const progress = (Object.keys(answers).length / questions.length) * 100

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg font-medium text-gray-900">Tiến độ</h2>
                    <span className="text-sm text-gray-500">
                        {Object.keys(answers).length} trên {questions.length} câu hỏi đã trả lời
                    </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                        className="bg-primary h-2.5 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

            {!showResults ? (
                <div className="space-y-8">
                    {questions.map((question) => (
                        <div key={question.id} className="bg-white p-6 rounded-lg shadow">
                            <p className="text-lg font-medium text-gray-900 mb-4">{question.text}</p>
                            <div className="flex flex-col items-center">
                                <div className="flex justify-between w-full max-w-md mb-2">
                                    {ratingLabels.map((rating) => (
                                        <button
                                            key={rating.value}
                                            onClick={() => handleAnswer(question.id, rating.value)}
                                            className="flex flex-col items-center group"
                                        >
                                            <Circle
                                                className={`h-8 w-8 transition-colors ${answers[question.id] === rating.value
                                                    ? 'text-primary fill-primary'
                                                    : 'text-gray-300 group-hover:text-primary'
                                                    }`}
                                            />
                                            <span className="text-xs text-gray-500 mt-1">{rating.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="flex justify-end">
                        <button
                            onClick={() => setShowResults(true)}
                            disabled={Object.keys(answers).length !== questions.length}
                            className={`px-6 py-3 rounded-md text-white font-medium transition-colors ${Object.keys(answers).length === questions.length
                                ? 'bg-primary hover:bg-primary/90'
                                : 'bg-gray-300 cursor-not-allowed'
                                }`}
                        >
                            Xem Kết Quả
                        </button>
                    </div>
                </div>
            ) : (
                <div className="bg-white p-8 rounded-lg shadow">
                    <div className="text-center mb-8">
                        <Brain className="mx-auto h-12 w-12 text-primary mb-4" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Kết Quả Phong Cách Học Tập</h2>
                        <p className="text-gray-600">
                            Dựa trên câu trả lời của bạn, đây là cách bạn học tốt nhất
                        </p>
                    </div>

                    {(() => {
                        const results = calculateResults()
                        return (
                            <>
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Phong Cách Học Tập Chính</h3>
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <h4 className="text-lg font-medium text-primary mb-2">
                                            {learningStyles[results.primary.style].name}
                                        </h4>
                                        <p className="text-gray-600 mb-4">
                                            {learningStyles[results.primary.style].description}
                                        </p>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div
                                                className="bg-primary h-2.5 rounded-full"
                                                style={{ width: `${results.primary.percentage}%` }}
                                            ></div>
                                        </div>
                                        <p className="text-sm text-gray-500 mt-2">
                                            {results.primary.percentage}% phù hợp
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Phong Cách Học Tập Phụ</h3>
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <h4 className="text-lg font-medium text-primary mb-2">
                                            {learningStyles[results.secondary.style].name}
                                        </h4>
                                        <p className="text-gray-600 mb-4">
                                            {learningStyles[results.secondary.style].description}
                                        </p>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div
                                                className="bg-primary h-2.5 rounded-full"
                                                style={{ width: `${results.secondary.percentage}%` }}
                                            ></div>
                                        </div>
                                        <p className="text-sm text-gray-500 mt-2">
                                            {results.secondary.percentage}% phù hợp
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Lời Khuyên Cá Nhân</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {learningStyles[results.primary.style].tips.map((tip, index) => (
                                            <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                                <p className="text-gray-700">{tip}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-8 flex justify-center">
                                    <button
                                        onClick={() => {
                                            setAnswers({})
                                            setShowResults(false)
                                        }}
                                        className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                                    >
                                        Làm Bài Kiểm Tra Lại
                                    </button>
                                </div>
                            </>
                        )
                    })()}
                </div>
            )}
        </div>
    )
}

export default LearningStyleTest 