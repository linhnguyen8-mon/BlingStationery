import { useState, useEffect, useRef } from 'react'
import { Brain, Circle, Home } from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { useNavigate } from 'react-router-dom'

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
    { value: 4, label: 'Luôn luôn' }
]

const learningStyles = {
    visual: {
        name: 'Người học trực quan 🎨',
        description: 'Bạn tiếp thu tốt qua hình ảnh, sơ đồ và màu sắc.',
        tips: [
            '🧠 Sơ đồ tư duy để ghi nhớ',
            '🎬 Xem video minh họa',
            '🖍️ Ghi chú bằng màu sắc',
            '🃏 Dùng thẻ nhớ có hình ảnh',
            '📊 Vẽ sơ đồ, biểu đồ'
        ]
    },
    logical: {
        name: 'Người học logic 🧩',
        description: 'Bạn giỏi phân tích, nhận biết quy luật và tổ chức thông tin.',
        tips: [
            '📚 Sắp xếp kiến thức theo hệ thống',
            '📝 Giải bài tập logic',
            '🔢 Chia nhỏ thông tin theo quy trình',
            '📊 Phân tích bằng biểu đồ',
            '🧮 Ứng dụng công thức toán học'
        ]
    },
    verbal: {
        name: 'Người học ngôn ngữ 📝',
        description: 'Bạn học tốt qua đọc, viết và ngôn từ.',
        tips: [
            '📖 Đọc sách, tài liệu',
            '✍️ Viết ghi chú ngắn gọn',
            '🔑 Tóm tắt bằng từ khóa',
            '🗣️ Thảo luận để hiểu sâu',
            '📜 Viết blog hoặc nhật ký'
        ]
    },
    aural: {
        name: 'Người học thính giác 🎧',
        description: 'Bạn tiếp thu tốt qua âm thanh, giọng nói và nhịp điệu.',
        tips: [
            '🎙️ Nghe podcast, bài giảng',
            '🎵 Dùng nhạc để ghi nhớ',
            '🔊 Ghi âm và nghe lại',
            '🗣️ Học qua tranh luận nhóm',
            '🎶 Học với nền nhạc nhẹ'
        ]
    },
    physical: {
        name: 'Người học vận động 🏃',
        description: 'Bạn học hiệu quả qua thực hành và hoạt động thể chất.',
        tips: [
            '✋ Học bằng cách thực hành',
            '🚶 Di chuyển khi học',
            '🧩 Dùng mô hình, vật dụng',
            '🎭 Luyện tập đóng vai',
            '🖊️ Viết ra giấy hoặc bảng'
        ]
    },
    social: {
        name: 'Người học xã hội 🤝',
        description: 'Bạn học tốt nhất khi tương tác và làm việc nhóm.',
        tips: [
            '👥 Tham gia nhóm học tập',
            '🗣️ Tranh luận để củng cố kiến thức',
            '🎓 Dạy lại cho người khác',
            '📢 Nhận phản hồi từ bạn bè',
            '💬 Tham gia diễn đàn học tập'
        ]
    }
};

const LearningStyleTest = () => {
    const [answers, setAnswers] = useState({})
    const [showResults, setShowResults] = useState(false)
    const [showToast, setShowToast] = useState(false)
    const [unansweredQuestions, setUnansweredQuestions] = useState([])
    const [currentQuestionId, setCurrentQuestionId] = useState(1)
    const [isScrolled, setIsScrolled] = useState(false)
    const questionRefs = useRef({})
    const navigate = useNavigate()

    useEffect(() => {
        // Add scroll event listener to update current question and progress bar style
        const handleScroll = () => {
            const questionElements = Object.values(questionRefs.current)
            const scrollPosition = window.scrollY + 100 // Offset for better detection

            // Update current question
            for (let i = 0; i < questionElements.length; i++) {
                const element = questionElements[i]
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setCurrentQuestionId(i + 1)
                        break
                    }
                }
            }

            // Update progress bar style based on scroll
            setIsScrolled(window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleAnswer = (questionId, value) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: value
        }))
        setUnansweredQuestions(prev => prev.filter(id => id !== questionId))
    }

    const handleShowResults = () => {
        const unanswered = questions.filter(q => !answers[q.id]).map(q => q.id)
        if (unanswered.length > 0) {
            setUnansweredQuestions(unanswered)
            setShowToast(true)
            // Scroll to first unanswered question
            const firstUnanswered = unanswered[0]
            questionRefs.current[firstUnanswered]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
            setTimeout(() => setShowToast(false), 3000)
            return
        }
        setShowResults(true)
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

        // Calculate total possible score for each category
        const categoryCounts = {
            visual: 0,
            logical: 0,
            verbal: 0,
            aural: 0,
            physical: 0,
            social: 0
        }

        // Count questions per category
        questions.forEach(q => {
            categoryCounts[q.category]++
        })

        // Calculate scores
        Object.entries(answers).forEach(([questionId, value]) => {
            const question = questions.find(q => q.id === parseInt(questionId))
            if (question) {
                scores[question.category] += value
            }
        })

        // Convert scores to percentages
        const percentages = Object.entries(scores).map(([style, score]) => ({
            style,
            percentage: Math.round((score / (categoryCounts[style] * 4)) * 100) // 4 is max score per question
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

    const COLORS = ['#E63946', '#F4A261', '#C8C107', '#2A9D8F', '#3B82F6', '#8B5CF6'];

    return (
        <div className="max-w-4xl mx-auto p-6">
            {!showResults && (
                <div className={`sticky rounded-xl top-0 z-10 py-4 my-4 transition-all duration-300 ${isScrolled ? 'bg-primary text-white' : 'bg-white text-gray-900'
                    }`}>
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="flex items-center justify-between mb-2">
                            <h2 className={`text-lg font-medium ${isScrolled ? 'text-white' : 'text-gray-900'}`}>
                                Tiến độ
                            </h2>
                            <span className={`text-sm ${isScrolled ? 'text-white/80' : 'text-gray-500'}`}>
                                {Object.keys(answers).length} trên {questions.length} câu hỏi đã trả lời
                            </span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2.5">
                            <div
                                className={`h-2.5 rounded-full transition-all duration-300 ${isScrolled ? 'bg-white' : 'bg-primary'
                                    }`}
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            )}

            {!showResults ? (
                <div className="space-y-4">
                    {questions.map((question) => (
                        <div
                            key={question.id}
                            ref={el => questionRefs.current[question.id] = el}
                            className={`bg-white p-6 rounded-lg shadow transition-all duration-300 ${unansweredQuestions.includes(question.id) ? 'border-2 border-red-500' : ''
                                } ${currentQuestionId === question.id ? 'ring-2 ring-primary' : ''
                                }`}
                        >
                            <div className="flex flex-col items-start justify-between ">
                                <p className="text-lg font-medium text-gray-900 ">{question.text}</p>

                            </div>
                            <div className="flex flex-col items-center">
                                <div className="flex justify-between w-full max-w-md mb-2">
                                    {ratingLabels.map((rating, index) => (
                                        <button
                                            key={rating.value}
                                            onClick={() => handleAnswer(question.id, rating.value)}
                                            className="flex flex-col justify-center items-center group transform transition-all duration-300 hover:scale-110"
                                        >
                                            <Circle
                                                className={`transition-all duration-300 ${answers[question.id] === rating.value
                                                    ? 'text-primary fill-primary'
                                                    : 'text-gray-300 group-hover:text-primary'
                                                    }`}
                                                size={24 + (index * 6)} // Increasing size for each option
                                            />
                                            <span className="text-xs text-gray-500 mt-1">{rating.label}</span>
                                        </button>
                                    ))}
                                </div>

                            </div>
                            {unansweredQuestions.includes(question.id) && (
                                <span className="flex items-start text-red-500 text-sm ">Vui lòng trả lời câu hỏi này</span>
                            )}
                        </div>
                    ))}

                    <div className="flex justify-center mt-8">
                        <button
                            onClick={handleShowResults}
                            className="px-6 py-3 rounded-md text-white font-medium transition-all duration-300 bg-primary hover:bg-primary/90 hover:scale-105"
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
                        const chartData = results.scores.map(score => ({
                            name: learningStyles[score.style].name,
                            value: score.percentage
                        }))

                        return (
                            <>
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Biểu đồ phân bố</h3>
                                    <div className="w-full h-64">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <PieChart>
                                                <Pie
                                                    data={chartData}
                                                    cx="50%"
                                                    cy="50%"
                                                    labelLine={false}
                                                    outerRadius={80}
                                                    fill="#8884d8"
                                                    dataKey="value"
                                                    className='font-semibold'
                                                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                                >
                                                    {chartData.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                    ))}
                                                </Pie>
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Phong Cách Chính</h3>
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <h4 className="text-lg font-medium text-primary mb-2">
                                            {learningStyles[results.primary.style].name}
                                        </h4>
                                        <p className="text-gray-600">
                                            {learningStyles[results.primary.style].description}
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Phong Cách Phụ</h3>
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <h4 className="text-lg font-medium text-primary mb-2">
                                            {learningStyles[results.secondary.style].name}
                                        </h4>
                                        <p className="text-gray-600 ">
                                            {learningStyles[results.secondary.style].description}
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Lời Khuyên</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {learningStyles[results.primary.style].tips.map((tip, index) => (
                                            <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                                <p className="text-gray-700">{tip}</p>
                                            </div>
                                        ))}
                                        {learningStyles[results.secondary.style].tips.map((tip, index) => (
                                            <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                                <p className="text-gray-700">{tip}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-8 flex justify-center space-x-4">
                                    <button
                                        onClick={() => {
                                            setAnswers({})
                                            setShowResults(false)
                                        }}
                                        className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                                    >
                                        Làm Bài Kiểm Tra Lại
                                    </button>
                                    <button
                                        onClick={() => navigate('/')}
                                        className="px-6 py-3 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-all duration-300 hover:scale-105 flex items-center"
                                    >
                                        <Home className="w-5 h-5 mr-2" />
                                        Về Trang Chủ
                                    </button>
                                </div>
                            </>
                        )
                    })()}
                </div>
            )}

            {showToast && (
                <div className="fixed bottom-4 bg-primary left-4 text-white px-4 py-2 rounded-md shadow-lg transition-opacity duration-300">
                    Vui lòng hoàn thành tất cả câu hỏi trước khi xem kết quả
                </div>
            )}
        </div>
    )
}

export default LearningStyleTest 