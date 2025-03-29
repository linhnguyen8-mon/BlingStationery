import { useState } from 'react'
import { Copy, Calendar, Briefcase, BookOpen } from 'lucide-react'

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
            },
            {
                id: 'retrieval strategy',
                name: 'Chiến lược truy xuất',
                template: `🏆 Bạn là một chuyên gia về ghi nhớ và truy xuất thông tin.  
Tôi cần kiểm tra lại kiến thức về: {topic}  

Hãy giúp tôi tạo một bài kiểm tra để kiểm tra khả năng ghi nhớ của mình. Cấu trúc bài kiểm tra gồm:  

🔹 Câu hỏi ngắn: Để kiểm tra khả năng nhớ chi tiết.  
🔹 Câu hỏi tự luận: Để kiểm tra khả năng diễn đạt và ứng dụng.  
🔹 Câu hỏi liên kết: So sánh hoặc kết nối thông tin mới với kiến thức cũ.  
🔹 Phản hồi & đánh giá: Chỉ ra lỗ hổng kiến thức và đề xuất cách cải thiện.  

📌 Xuất kết quả dưới dạng bảng để tôi có thể tự kiểm tra và học lại nếu cần! 🚀  
`
            },
            {
                id: 'active recall',
                name: 'Gợi nhớ chủ động',
                template: `🏆 Bạn là một gia sư chuyên giúp học viên ghi nhớ thông tin bằng phương pháp Active Recall.  
Tôi muốn kiểm tra lại kiến thức về: {topic}  

Hãy đặt cho tôi các câu hỏi để tôi tự trả lời, theo cấu trúc:  

🔹 Câu hỏi đơn giản: Nhớ lại thông tin cơ bản.  
🔹 Câu hỏi phân tích: Yêu cầu diễn giải hoặc giải thích sâu hơn.  
🔹 Câu hỏi ứng dụng: Yêu cầu sử dụng kiến thức vào tình huống thực tế.  
🔹 Câu hỏi thử thách: Kiểm tra khả năng tổng hợp và kết nối kiến thức.  

📌 Sau mỗi câu hỏi, nếu tôi không trả lời được, hãy gợi ý một chút nhưng không đưa ra đáp án ngay! 🚀  
`
            },
            {
                id: 'pre-study',
                name: 'Tiền nghiên cứu',
                template: `🏆 Bạn là một chuyên gia về chiến lược học tập nhanh. Tôi đang chuẩn bị học về: {topic}  

Hãy giúp tôi xây dựng một kế hoạch tiền nghiên cứu để tăng tốc độ tiếp thu kiến thức, gồm:  

🔹 Tóm tắt nhanh: Những điểm chính cần nắm trước khi học sâu.  
🔹 Từ khóa quan trọng: Những thuật ngữ cần hiểu.  
🔹 Bối cảnh & ứng dụng: Cách chủ đề này liên quan đến các lĩnh vực khác.  
🔹 Câu hỏi gợi mở: Những câu hỏi cần tự đặt ra để kích thích tư duy trước khi học.  

📌 Hãy tạo bảng tổng hợp thông tin giúp tôi dễ dàng tiếp cận kiến thức mới nhanh hơn! 🚀  
`
            },
            {
                id: 'language',
                name: 'Học ngoại ngữ',
                template: `🏆 Bạn là chuyên gia ngôn ngữ, giúp tôi thành thạo từ/cụm từ: {word/phrase} một cách sâu sắc và dễ nhớ nhất. 

🔹 Giải nghĩa đơn giản:Giải thích dễ hiểu, không dùng từ điển khô khan.
🔹 Ngữ cảnh & sắc thái
🔹 Ví dụ thực tế:3 câu ví dụ ở các bối cảnh khác nhau
🔹 Cách dùng mở rộng: Các cụm từ đi kèm (collocations), từ đồng nghĩa/trái nghĩa.  
🔹 Mẹo nhớ nhanh:Gợi hình hoặc câu chuyện giúp liên tưởng dễ dàng.
🔹 Bài tập ngắn:Trắc nghiệm/điền từ/chỉnh lỗi sai/đặt câu mới.
`
            }
        ]
    }
]

const TroLyBling = () => {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedContext, setSelectedContext] = useState(null)
    const [customInput, setCustomInput] = useState('')
    const [savedPrompts, setSavedPrompts] = useState([])
    const [showToast, setShowToast] = useState(false)

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
        return selectedContext.template.replace('{topic}', `<span class="bg-primary px-2 py-1 rounded font-medium text-white">${customInput}</span>`)
    }

    const handleCopy = () => {
        const plainText = generatePrompt().replace(/<[^>]*>/g, '')
        navigator.clipboard.writeText(plainText)
        setShowToast(true)
        setTimeout(() => setShowToast(false), 3000)
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
                            placeholder="Phần nhập nội dung"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        />
                    </div>

                    <div className="bg-white border border-gray-200 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg font-medium text-gray-900">Xem trước Prompt</h3>
                            <button
                                onClick={handleCopy}
                                className="flex items-center px-4 py-2 bg-white text-primary rounded-md hover:bg-gray-50 transition-colors"
                            >
                                <Copy className="h-4 w-4 mr-2" />
                                Sao chép
                            </button>
                        </div>
                        <div
                            className="whitespace-pre-wrap text-gray-700 prose prose-sm max-w-none"
                            dangerouslySetInnerHTML={{ __html: generatePrompt() }}
                        />
                    </div>

                    <div className="flex gap-4">
                    </div>
                </div>
            )}

            {/* Toast Message */}
            {showToast && (
                <div className="fixed bottom-4 left-4 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg transition-opacity duration-300">
                    Sao chép thành công
                </div>
            )}
        </div>
    )
}

export default TroLyBling 