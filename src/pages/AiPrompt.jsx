import { useState } from 'react'
import { Copy, Save, Edit2, Calendar, Briefcase, BookOpen } from 'lucide-react'

const categories = [
    {
        id: 'plan',
        name: 'Kế Hoạch',
        icon: Calendar,
        contexts: [
            {
                id: 'weekly-plan',
                name: 'Lập kế hoạch tuần',
                template: `🏆 Bạn là một chuyên gia quản lý thời gian và lập kế hoạch.
Tôi cần lập kế hoạch cho tuần tới với mục tiêu: {topic}

Hãy tạo một kế hoạch chi tiết, giúp tôi tối ưu thời gian và đạt hiệu quả cao nhất. Cấu trúc kế hoạch bao gồm:

🔹 Mục tiêu chính: Xác định 3-5 mục tiêu quan trọng nhất cần đạt được.
🔹 Phân bổ thời gian: Chia thời gian hợp lý cho từng mục tiêu.
🔹 Các nhiệm vụ cụ thể: Liệt kê các bước thực hiện chi tiết.
🔹 Nguồn lực cần thiết: Xác định các nguồn lực cần huy động.
🔹 Các rủi ro cần lưu ý: Dự đoán và đề xuất giải pháp phòng ngừa.

📌 Xuất kết quả dưới dạng bảng trực quan, giúp tôi dễ dàng theo dõi & thực hiện.

🚀 Tập trung vào chiến lược tối ưu, đơn giản hóa nhưng đảm bảo hiệu suất cao nhất!`
            },
            {
                id: 'monthly-plan',
                name: 'Lập kế hoạch tháng',
                template: `🏆 Bạn là một chuyên gia quản lý thời gian và lập kế hoạch dài hạn.
Tôi cần lập kế hoạch cho tháng tới với mục tiêu: {topic}

Hãy tạo một kế hoạch tháng chi tiết, giúp tôi đạt được các mục tiêu dài hạn. Cấu trúc kế hoạch bao gồm:

🔹 Mục tiêu tháng: Xác định 3-5 mục tiêu quan trọng nhất cần đạt được.
🔹 Phân bổ theo tuần: Chia nhỏ mục tiêu thành các nhiệm vụ hàng tuần.
🔹 Các dự án lớn: Liệt kê các dự án cần triển khai trong tháng.
🔹 Nguồn lực cần thiết: Xác định các nguồn lực cần huy động.
🔹 Các rủi ro cần lưu ý: Dự đoán và đề xuất giải pháp phòng ngừa.

📌 Xuất kết quả dưới dạng bảng trực quan, giúp tôi dễ dàng theo dõi & thực hiện.

🚀 Tập trung vào chiến lược tối ưu, đơn giản hóa nhưng đảm bảo hiệu suất cao nhất!`
            },
            {
                id: 'habit-building',
                name: 'Xây dựng thói quen',
                template: `🏆 Bạn là một chuyên gia xây dựng thói quen và phát triển bản thân.
Tôi muốn xây dựng thói quen: {topic}

Hãy tạo một kế hoạch chi tiết, giúp tôi xây dựng và duy trì thói quen này. Cấu trúc kế hoạch bao gồm:

🔹 Mục tiêu thói quen: Xác định rõ thói quen muốn xây dựng.
🔹 Lộ trình 21 ngày: Chia nhỏ thành các bước thực hiện.
🔹 Thời gian thực hiện: Đề xuất thời điểm phù hợp trong ngày.
🔹 Các yếu tố hỗ trợ: Liệt kê các công cụ và môi trường cần thiết.
🔹 Các thách thức: Dự đoán và đề xuất giải pháp vượt qua.

📌 Xuất kết quả dưới dạng bảng trực quan, giúp tôi dễ dàng theo dõi & thực hiện.

🚀 Tập trung vào chiến lược tối ưu, đơn giản hóa nhưng đảm bảo hiệu suất cao nhất!`
            },
            {
                id: 'project-plan',
                name: 'Lập kế hoạch dự án',
                template: `🏆 Bạn là một chuyên gia quản lý dự án.
Tôi cần lập kế hoạch cho dự án: {topic}

Hãy tạo một kế hoạch dự án chi tiết, giúp tôi triển khai hiệu quả. Cấu trúc kế hoạch bao gồm:

🔹 Phạm vi dự án: Xác định rõ các mục tiêu và giới hạn.
🔹 Các mốc thời gian: Chia dự án thành các giai đoạn có thể đo lường.
🔹 Nguồn lực cần thiết: Liệt kê các nguồn lực cần huy động.
🔹 Các bên liên quan: Xác định và phân công trách nhiệm.
🔹 Kế hoạch triển khai: Chi tiết các bước thực hiện.

📌 Xuất kết quả dưới dạng bảng trực quan, giúp tôi dễ dàng theo dõi & thực hiện.

🚀 Tập trung vào chiến lược tối ưu, đơn giản hóa nhưng đảm bảo hiệu suất cao nhất!`
            }
        ]
    },
    {
        id: 'work',
        name: 'Công Việc',
        icon: Briefcase,
        contexts: [
            {
                id: 'task-management',
                name: 'Quản lý công việc',
                template: `🏆 Bạn là một chuyên gia quản lý công việc.
Tôi cần quản lý công việc cho: {topic}

Hãy tạo một kế hoạch quản lý công việc chi tiết, giúp tôi tối ưu hiệu suất. Cấu trúc kế hoạch bao gồm:

🔹 Danh sách công việc: Phân loại và sắp xếp theo ưu tiên.
🔹 Độ ưu tiên: Xác định mức độ quan trọng và khẩn cấp.
🔹 Thời hạn: Đề xuất thời gian hoàn thành hợp lý.
🔹 Người phụ trách: Phân công trách nhiệm rõ ràng.
🔹 Trạng thái: Theo dõi tiến độ thực hiện.

📌 Xuất kết quả dưới dạng bảng trực quan, giúp tôi dễ dàng theo dõi & thực hiện.

🚀 Tập trung vào chiến lược tối ưu, đơn giản hóa nhưng đảm bảo hiệu suất cao nhất!`
            },
            {
                id: 'meeting-notes',
                name: 'Ghi chú cuộc họp',
                template: `🏆 Bạn là một chuyên gia ghi chú và tổng hợp thông tin.
Tôi cần ghi chú cuộc họp về: {topic}

Hãy tạo một mẫu ghi chú cuộc họp chi tiết, giúp tôi nắm bắt thông tin hiệu quả. Cấu trúc ghi chú bao gồm:

🔹 Thông tin cuộc họp: Thời gian, địa điểm, thành phần.
🔹 Thành phần tham dự: Danh sách và vai trò của người tham gia.
🔹 Nội dung thảo luận: Tóm tắt các vấn đề chính.
🔹 Quyết định: Các quyết định quan trọng đã thống nhất.
🔹 Các việc cần làm: Phân công và thời hạn thực hiện.

📌 Xuất kết quả dưới dạng bảng trực quan, giúp tôi dễ dàng theo dõi & thực hiện.

🚀 Tập trung vào chiến lược tối ưu, đơn giản hóa nhưng đảm bảo hiệu suất cao nhất!`
            }
        ]
    },
    {
        id: 'study',
        name: 'Học Tập',
        icon: BookOpen,
        contexts: [
            {
                id: 'review-plan',
                name: 'Lập kế hoạch ôn tập',
                template: `🏆 Bạn là một chuyên gia học tập và ôn thi.
Tôi cần lập kế hoạch ôn tập cho: {topic}

Hãy tạo một kế hoạch ôn tập chi tiết, giúp tôi học tập hiệu quả. Cấu trúc kế hoạch bao gồm:

🔹 Nội dung cần ôn tập: Chia nhỏ thành các chủ đề.
🔹 Thời gian ôn tập: Phân bổ thời gian hợp lý.
🔹 Phương pháp học: Đề xuất các phương pháp hiệu quả.
🔹 Tài liệu tham khảo: Danh sách tài liệu cần thiết.
🔹 Bài tập thực hành: Các bài tập để củng cố kiến thức.

📌 Xuất kết quả dưới dạng bảng trực quan, giúp tôi dễ dàng theo dõi & thực hiện.

🚀 Tập trung vào chiến lược tối ưu, đơn giản hóa nhưng đảm bảo hiệu suất cao nhất!`
            },
            {
                id: 'lecture-notes',
                name: 'Ghi chú bài giảng',
                template: `🏆 Bạn là một chuyên gia ghi chú bài giảng.
Tôi cần ghi chú bài giảng về: {topic}

Hãy tạo một mẫu ghi chú bài giảng chi tiết, giúp tôi nắm bắt kiến thức hiệu quả. Cấu trúc ghi chú bao gồm:

🔹 Tên bài học: Chủ đề và mục tiêu học tập.
🔹 Tóm tắt nội dung: Các điểm chính cần nắm vững.
🔹 Khái niệm quan trọng: Định nghĩa và giải thích.
🔹 Ví dụ minh họa: Các ví dụ thực tế.
🔹 Bài tập thực hành: Các bài tập để củng cố.

📌 Xuất kết quả dưới dạng bảng trực quan, giúp tôi dễ dàng theo dõi & thực hiện.

🚀 Tập trung vào chiến lược tối ưu, đơn giản hóa nhưng đảm bảo hiệu suất cao nhất!`
            },
            {
                id: 'question-answering',
                name: 'Giải đáp câu hỏi',
                template: `🏆 Bạn là một chuyên gia giải đáp thắc mắc và phân tích vấn đề.
Tôi cần giải đáp câu hỏi về: {topic}

Hãy tạo một cấu trúc phân tích chi tiết, giúp tôi hiểu rõ vấn đề. Cấu trúc phân tích bao gồm:

🔹 Phân tích câu hỏi: Xác định các từ khóa và yêu cầu chính.
🔹 Kiến thức liên quan: Liệt kê các khái niệm cần nắm vững.
🔹 Phương pháp giải quyết: Đề xuất các bước phân tích.
🔹 Ví dụ minh họa: Các ví dụ thực tế để hiểu rõ hơn.
🔹 Bài tập thực hành: Các câu hỏi tương tự để luyện tập.

📌 Xuất kết quả dưới dạng bảng trực quan, giúp tôi dễ dàng theo dõi & thực hiện.

🚀 Tập trung vào chiến lược tối ưu, đơn giản hóa nhưng đảm bảo hiệu suất cao nhất!`
            },
            {
                id: 'mind-mapping',
                name: 'Lập sơ đồ tư duy',
                template: `🏆 Bạn là một chuyên gia về sơ đồ tư duy và tổ chức thông tin.
Tôi cần lập sơ đồ tư duy cho: {topic}

Hãy tạo một cấu trúc sơ đồ tư duy chi tiết, giúp tôi tổ chức thông tin hiệu quả. Cấu trúc sơ đồ bao gồm:

🔹 Chủ đề trung tâm: Xác định chủ đề chính cần triển khai.
🔹 Các nhánh chính: Liệt kê các khía cạnh quan trọng.
🔹 Chi tiết từng nhánh: Phân tích sâu từng khía cạnh.
🔹 Mối liên hệ: Xác định các kết nối giữa các nhánh.
🔹 Ví dụ minh họa: Các ví dụ thực tế để hiểu rõ hơn.

📌 Xuất kết quả dưới dạng bảng trực quan, giúp tôi dễ dàng theo dõi & thực hiện.

🚀 Tập trung vào chiến lược tối ưu, đơn giản hóa nhưng đảm bảo hiệu suất cao nhất!`
            }
        ]
    }
]

const AiPrompt = () => {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedContext, setSelectedContext] = useState(null)
    const [customInput, setCustomInput] = useState('')
    const [savedPrompts, setSavedPrompts] = useState([])

    const handleCategorySelect = (category) => {
        setSelectedCategory(category)
        setSelectedContext(null)
        setCustomInput('')
    }

    const handleContextSelect = (context) => {
        setSelectedContext(context)
        setCustomInput('')
    }

    const handleInputChange = (e) => {
        setCustomInput(e.target.value)
    }

    const generatePrompt = () => {
        if (!selectedContext) return ''
        return selectedContext.template.replace('{topic}', `<span class="bg-yellow-100 px-2 py-1 rounded font-medium">${customInput}</span>`)
    }

    const handleCopy = () => {
        const plainText = generatePrompt().replace(/<[^>]*>/g, '')
        navigator.clipboard.writeText(plainText)
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Tạo Prompt AI</h1>

            {/* Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => handleCategorySelect(category)}
                        className={`flex items-center justify-center p-4 rounded-lg border-2 transition-colors ${selectedCategory?.id === category.id
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-200 hover:border-primary/50'
                            }`}
                    >
                        <category.icon className="h-6 w-6 mr-2 text-primary" />
                        <span className="font-medium">{category.name}</span>
                    </button>
                ))}
            </div>

            {/* Contexts */}
            {selectedCategory && (
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Chọn bối cảnh</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedCategory.contexts.map((context) => (
                            <button
                                key={context.id}
                                onClick={() => handleContextSelect(context)}
                                className={`p-4 rounded-lg border-2 transition-colors ${selectedContext?.id === context.id
                                    ? 'border-primary bg-primary/5'
                                    : 'border-gray-200 hover:border-primary/50'
                                    }`}
                            >
                                <span className="font-medium">{context.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Prompt Generator */}
            {selectedContext && (
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nhập thông tin
                        </label>
                        <input
                            type="text"
                            value={customInput}
                            onChange={handleInputChange}
                            placeholder="Nhập thông tin cần điền vào prompt..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        />
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Xem trước Prompt</h3>
                        <div
                            className="whitespace-pre-wrap text-gray-700 prose prose-sm max-w-none"
                            dangerouslySetInnerHTML={{ __html: generatePrompt() }}
                        />
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={handleCopy}
                            className="flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                        >
                            <Copy className="h-4 w-4 mr-2" />
                            Sao chép
                        </button>
                    </div>
                </div>
            )}

            {/* Saved Prompts */}
            {savedPrompts.length > 0 && (
                <div className="mt-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Prompt đã lưu</h2>
                    <div className="space-y-4">
                        {savedPrompts.map((prompt) => (
                            <div key={prompt.id} className="bg-white p-4 rounded-lg border border-gray-200">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <span className="font-medium">{prompt.category} - {prompt.context}</span>
                                    </div>
                                    <button
                                        onClick={() => navigator.clipboard.writeText(prompt.prompt)}
                                        className="text-primary hover:text-primary/80"
                                    >
                                        <Copy className="h-4 w-4" />
                                    </button>
                                </div>
                                <pre className="whitespace-pre-wrap text-sm text-gray-600">{prompt.prompt}</pre>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default AiPrompt 