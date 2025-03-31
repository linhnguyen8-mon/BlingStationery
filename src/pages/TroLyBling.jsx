import { useState } from 'react'
import Calendar from '../assets/icons/notePlan.png'
import Briefcase from '../assets/icons/noteWork.png'
import BookOpen from '../assets/icons/noteStudy.png'
import { Copy, Check } from 'lucide-react'

const categories = [
    {
        id: 'plan',
        name: 'Kế Hoạch',
        icon: Calendar,
        contexts: [
            {
                id: 'weekly-plan',
                name: '📅 Lập kế hoạch tuần',
                template: `🏆 Bạn là chuyên gia quản lý thời gian xuất sắc. Hãy giúp tôi lập kế hoạch tuần tới để đạt mục tiêu: {topic}
Yêu cầu kế hoạch:
🔹 3-5 mục tiêu quan trọng nhất tuần này.
🔹 Thời gian phân bổ rõ ràng cho từng mục tiêu.
🔹 Các nhiệm vụ cụ thể, theo thứ tự ưu tiên.
🔹 Nguồn lực cần sử dụng.
🔹 Rủi ro có thể gặp phải và giải pháp xử lý.

📌 Trình bày dưới dạng bảng đơn giản, dễ theo dõi.
🚀 Tập trung tối ưu hóa, đơn giản nhưng hiệu quả cao.`
            },
            {
                id: 'monthly-plan',
                name: '🗓️ Lập kế hoạch tháng',
                template: `🏆 Bạn là chuyên gia hoạch định chiến lược dài hạn. Tôi cần kế hoạch trong {month} tháng để hoàn thành mục tiêu: {topic}

Yêu cầu kế hoạch tháng:
🔹 3-5 mục tiêu chính trong tháng.
🔹 Chia nhỏ mục tiêu theo từng tuần.
🔹 Các dự án quan trọng cần thực hiện.
🔹 Nguồn lực hỗ trợ cần thiết.
🔹 Rủi ro và phương án phòng tránh.
📌 Xuất kết quả dưới dạng bảng trực quan, giúp tôi dễ dàng theo dõi & thực hiện.

🚀 Tập trung vào chiến lược tối ưu, đơn giản hóa nhưng đảm bảo hiệu suất cao nhất!`
            },
            {
                id: 'habit-building',
                name: '💪 Xây dựng thói quen',
                template: `🏆 Bạn là chuyên gia phát triển thói quen hiệu quả. Tôi muốn hình thành thói quen: {topic}

Yêu cầu kế hoạch xây dựng thói quen:
🔹 Xác định cụ thể mục tiêu thói quen.
🔹 Lộ trình chi tiết trong 21 ngày.
🔹 Thời điểm lý tưởng để thực hiện mỗi ngày.
🔹 Công cụ, môi trường hỗ trợ.
🔹 Khó khăn dự kiến và cách khắc phục.

📌 Trình bày bảng dễ theo dõi.
🚀 Đơn giản, tối ưu và duy trì bền vững.`
            },
            {
                id: 'project-plan',
                name: '📁 Lập kế hoạch dự án',
                template: `🏆 Bạn là chuyên gia quản lý dự án chuyên nghiệp. Tôi cần kế hoạch rõ ràng để thực hiện dự án: {topic}


Yêu cầu kế hoạch dự án:
🔑 Nội dung chính thảo luận:
- 
- 
- 

✅ Quyết định chính:
- 

📌 Việc cần làm tiếp theo:
- Công việc | Người phụ trách | Deadline

🚀 Trình bày bảng ngắn gọn, trực quan, dễ áp dụng.`
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
                name: '📝 Quản lý công việc',
                template: `🏆 Bạn là chuyên gia quản lý và sắp xếp công việc. Tôi cần quản lý hiệu quả cho: {topic}

Yêu cầu kế hoạch:
🔹 Danh sách công việc theo mức ưu tiên.
🔹 Thời hạn hoàn thành cụ thể.
🔹 Người chịu trách nhiệm.
🔹 Trạng thái theo dõi tiến độ.

📌 Trình bày dưới dạng bảng dễ sử dụng.
🚀 Tối giản nhưng rõ ràng, hiệu quả.`
            },
            {
                id: 'meeting-notes',
                name: '📋 Ghi chú cuộc họp',
                template: `🏆 Bạn là chuyên gia tổng hợp thông tin hiệu quả. Hãy giúp tôi ghi chú cuộc họp về: {topic}

    Yêu cầu ghi chú:
    🔹 Nội dung chính sẽ thảo luận.
    🔹 Công việc cần triển khai.
    
    📌 Trình bày dạng bảng rõ ràng, dễ theo dõi.
    🚀 Tối giản thông tin, tập trung vào trọng tâm.`
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
                name: '📚 Lập kế hoạch ôn tập',
                template: `🏆 Bạn là chuyên gia chiến lược học tập. Tôi cần kế hoạch ôn tập hiệu quả về: {topic}

Yêu cầu:
🔹 Chủ đề cần ôn tập, phân chia rõ ràng.
🔹 Thời gian hợp lý từng phần.
🔹 Phương pháp học tối ưu.
🔹 Tài liệu chính tham khảo.
🔹 Bài tập thực hành củng cố.

📌 Bảng dễ theo dõi và thực hiện.
🚀 Hiệu quả, dễ nhớ, dễ áp dụng.`
            },
            {
                id: 'lecture-notes',
                name: '🖍️ Ghi chú bài giảng',
                template: `📚 Bạn là chuyên gia ghi chú bài giảng hiệu quả. Giúp tôi ghi chú bài giảng về: {topic}

Yêu cầu ghi chú:
🔹 Chủ đề bài giảng & mục tiêu học tập.
🔹 Các ý chính và nội dung quan trọng.
🔹 Các khái niệm then chốt, định nghĩa dễ hiểu.
🔹 Ví dụ cụ thể minh họa kiến thức.
🔹 Các bài tập củng cố kiến thức.

📌 Trình bày dạng bảng ngắn gọn, rõ ràng.
🚀 Tập trung hiệu quả, dễ hiểu và dễ ghi nhớ.`
            },
            {
                id: 'question-answering',
                name: '❓ Giải đáp câu hỏi',
                template: `❓ Bạn là chuyên gia phân tích và giải đáp câu hỏi học tập. Tôi cần giải đáp câu hỏi về: {topic}

    Yêu cầu phân tích:
    🔹 Xác định rõ yêu cầu & từ khóa câu hỏi.
    🔹 Kiến thức nền tảng liên quan cần nhớ.
    🔹 Quy trình từng bước giải đáp vấn đề.
    🔹 Ví dụ thực tế minh họa rõ ràng.
    🔹 Câu hỏi tương tự để tự thực hành.
    
    📌 Xuất bảng trực quan, dễ hiểu.
    🚀 Ngắn gọn, đơn giản nhưng đầy đủ.`
            },
            {
                id: 'mind-mapping',
                name: '🧠 Lập sơ đồ tư duy',
                template: `🧠 Bạn là chuyên gia tổ chức thông tin bằng sơ đồ tư duy. Hãy giúp tôi tạo sơ đồ tư duy cho chủ đề: {topic}

    Yêu cầu sơ đồ:
    🔹 Chủ đề chính đặt tại trung tâm.
    🔹 Các nhánh lớn đại diện các nội dung chính.
    🔹 Chi tiết rõ ràng từng nhánh con.
    🔹 Mối liên kết giữa các nội dung.
    🔹 Ví dụ minh họa cụ thể.
    
    📌 Trình bày trực quan, dễ nhớ.
    🚀 Đơn giản, dễ áp dụng, hiệu quả cao.`
            },
            {
                id: 'active recall',
                name: '💡 Gợi nhớ chủ động',
                template: `💡 Bạn là chuyên gia Active Recall. Giúp tôi kiểm tra kiến thức chủ động về: {topic}

    Yêu cầu bài kiểm tra:
    🔹 Câu hỏi cơ bản giúp nhớ kiến thức chính.
    🔹 Câu hỏi phân tích để hiểu sâu.
    🔹 Câu hỏi ứng dụng vào thực tế.
    🔹 Câu hỏi tổng hợp thử thách khả năng tư duy.
    
    📌 Sau mỗi câu hỏi, gợi ý nhẹ nhàng nếu chưa trả lời được ngay.
    🚀 Tối giản, dễ áp dụng, nâng cao hiệu quả học tập.`
            },
            {
                id: 'study-preparation',
                name: '📖 Chuẩn bị học bài',
                template: `📖 Bạn là chuyên gia hướng dẫn học tập hiệu quả. Tôi chuẩn bị học về: {topic}

Giúp tôi xây dựng một kế hoạch chuẩn bị trước khi học gồm:
🔹 Tổng quan ngắn gọn về chủ đề.
🔹 Các thuật ngữ quan trọng cần biết.
🔹 Ứng dụng và liên hệ thực tế của chủ đề.
🔹 Các câu hỏi tư duy gợi mở trước khi bắt đầu học.

📌 Trình bày bảng tóm tắt rõ ràng, giúp tôi dễ dàng nắm bắt trước kiến thức.
🚀 Hiệu quả, dễ hiểu và tối ưu quá trình học.`
            },
            {
                id: 'language',
                name: '📘 Học từ mới',
                template: `🏆 Bạn là chuyên gia ngôn ngữ xuất sắc. Giúp tôi học nhanh và hiệu quả từ/cụm từ: {word/phrase}
Yêu cầu chi tiết:
🔹 Định nghĩa dễ hiểu và ngắn gọn.
🔹 Các ngữ cảnh thường gặp trong giao tiếp.
🔹 Ví dụ cụ thể giúp ghi nhớ tốt hơn.
🔹 Các từ đồng nghĩa, trái nghĩa và cụm từ liên quan.
🔹 Phương pháp ghi nhớ hiệu quả và nhanh chóng.
🔹 Bài tập thực hành ngắn để củng cố kiến thức.

📌 Trình bày bảng rõ ràng, trực quan, dễ nhớ.
🚀 Tối giản thông tin nhưng hiệu quả tối đa.`
            },
            {
                id: 'conversation-roleplay',
                name: '💬 Luyện đối thoại',
                template: `🗣️ Bạn là đối tác giao tiếp trong cuộc hội thoại roleplay về chủ đề: {topic}  
nói chuyên tất cả bằng ngôn ngữ anh

Yêu cầu thực hành:  
🔹 Bắt đầu hội thoại, hãy đề xuất:  
  • Một outline các nội dung chính xoay quanh topic.  
  • Danh sách từ vựng, collocation và mẫu câu phổ biến phù hợp với topic + bối cảnh.  
🔹 Bước 2: Tiến hành hội thoại thực tế, chia thành từng lượt qua lại ngắn gọn, giống như đang nói chuyện với giáo viên bản xứ.  
  • Bạn đưa ra từng câu thoại và gợi ý để mình trả lời.  
  • Nếu mình trả lời sai hoặc chưa tự nhiên, hãy sửa lỗi (ngữ pháp, từ vựng, phát âm) và đề xuất câu trả lời tốt hơn.  
🔹 Bước 3: Kết thúc cuộc hội thoại, hãy:  
  • Tổng kết các lỗi mình thường gặp.  
  • Gợi ý các điểm cần cải thiện.  
  • Gợi ý một số bài tập hoặc cách luyện tập thêm với chủ đề này.

📌 Hội thoại thực tế, ngắn gọn, dễ áp dụng ngay.  
🚀 Hướng dẫn rõ ràng, tối ưu kỹ năng giao tiếp thực tế.
`
            }
        ]
    }
]

const TroLyBling = () => {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedContext, setSelectedContext] = useState(null)
    const [customInput, setCustomInput] = useState('')
    const [monthInput, setMonthInput] = useState('')
    const [showToast, setShowToast] = useState(false)
    const [copied, setCopied] = useState(false)

    const handleCategorySelect = (category) => {
        setSelectedCategory(category)
        setSelectedContext(null)
        setCustomInput('')
        setMonthInput('')
    }

    const handleContextSelect = (context) => {
        setSelectedContext(context)
        setCustomInput('')
    }

    const handleInputChange = (e) => {
        setCustomInput(e.target.value)
    }

    const generatePrompt = () => {
        if (!selectedContext) return '';

        let prompt = selectedContext.template;

        if (prompt.includes('{topic}')) {
            prompt = prompt.replace(
                '{topic}',
                `<span class="bg-primary px-2 py-1 rounded font-medium text-white">${customInput}</span>`
            );
        }

        if (prompt.includes('{word/phrase}')) {
            prompt = prompt.replace(
                '{word/phrase}',
                `<span class="bg-primary px-2 py-1 rounded font-medium text-white">${customInput}</span>`
            );
        }

        if (prompt.includes('{month}')) {
            prompt = prompt.replace(
                '{month}',
                `<span class="bg-secondary px-2 py-1 rounded font-medium text-white">${monthInput}</span>`
            );
        }

        return prompt;
    };

    const handleCopy = async (text) => {
        try {
            await navigator.clipboard.writeText(text)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy text: ', err)
        }
    }

    return (
        <div className="max-w-4xl mx-auto p-6">

            {/* Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => handleCategorySelect(category)}
                        className={`relative flex flex-col gap-4 items-center justify-center transition-colors `}
                    >
                        <img
                            src={category.icon}
                            alt={category.name}
                            className={`h-40 w-40 mr-2 rounded-full transition-all duration-300 ${selectedCategory?.id === category.id
                                ? 'ring-2 ring-primary'
                                : ''
                                }`}
                        />
                        <span className={`absolute bottom-3 text-sm text-primary font-medium ${selectedCategory?.id === category.id
                            ? 'font-bold'
                            : 'text-primary/50'
                            }`}>{category.name}</span>
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
                    {/* Input tháng (chỉ xuất hiện khi cần) */}
                    {selectedContext?.template.includes('{month}') && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 mt-4">
                                Số tháng
                            </label>
                            <input
                                type="text"
                                value={monthInput}
                                onChange={(e) => setMonthInput(e.target.value)}
                                placeholder="Ví dụ: 1/3/6/12 tháng"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary"
                            />
                        </div>
                    )}
                    {/* Input chung */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Thông tin
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
                                onClick={() => handleCopy(generatePrompt())}
                                className="flex items-center px-4 py-2 bg-white text-primary rounded-md hover:bg-gray-50 transition-colors"
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