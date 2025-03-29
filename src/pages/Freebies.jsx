import { useState } from 'react'
import { Brain, Award, BookOpen, Lightbulb, Target, ExternalLink, Table2, Map, Mic, FileText, ClipboardList, HandMetal, Footprints, GitCompare, BrainCircuit, Palette, Image, MessageSquare, ChevronRight, ChevronLeft } from 'lucide-react'

const learningStyles = [
    { id: 'visual', name: 'Thị giác', icon: Brain, description: 'Học tốt nhất qua hình ảnh và không gian' },
    { id: 'auditory', name: 'Thính giác', icon: Award, description: 'Học tốt nhất qua âm thanh và lời nói' },
    { id: 'reading', name: 'Đọc/Viết', icon: BookOpen, description: 'Học tốt nhất qua đọc và viết' },
    { id: 'kinesthetic', name: 'Vận động', icon: Target, description: 'Học tốt nhất qua hoạt động thực tế' },
    { id: 'logical', name: 'Logic', icon: Lightbulb, description: 'Học tốt nhất qua lý luận và hệ thống' },
]

const studyTechniques = [
    // Visual Techniques
    {
        id: 1,
        name: 'Sơ Đồ Tư Duy',
        description: 'Tạo sơ đồ trực quan để kết nối các khái niệm',
        learningStyle: 'visual',
        icon: Map,
        steps: [
            {
                label: 'Chọn chủ đề',
                description: 'Xác định chủ đề chính và viết ở trung tâm tờ giấy'
            },
            {
                label: 'Vẽ nhánh',
                description: 'Vẽ 5-7 nhánh chính từ chủ đề trung tâm'
            },
            {
                label: 'Thêm chi tiết',
                description: 'Bổ sung thông tin chi tiết và biểu tượng trực quan'
            },
            {
                label: 'Màu sắc',
                description: 'Phân biệt các nhánh bằng màu sắc khác nhau'
            }
        ],
        aiPrompt: 'Tạo sơ đồ tư duy về [chủ đề] với ít nhất 5 nhánh chính, mỗi nhánh có một từ khóa quan trọng và một biểu tượng đi kèm. Đảm bảo các nhánh được kết nối logic và dễ hiểu.',
        recommendedProduct: 'Mind Map Planner'
    },
    {
        id: 2,
        name: 'Màu Sắc Phân Loại',
        description: 'Sử dụng màu sắc để phân loại thông tin',
        learningStyle: 'visual',
        icon: Palette,
        steps: [
            {
                label: 'Chọn màu',
                description: 'Xác định 4-5 màu chính để phân loại thông tin'
            },
            {
                label: 'Đánh dấu',
                description: 'Sử dụng màu sắc để đánh dấu các phần quan trọng'
            },
            {
                label: 'Chú thích',
                description: 'Viết chú thích để giải thích ý nghĩa của từng màu'
            },
            {
                label: 'Ôn tập',
                description: 'Học và ghi nhớ thông tin theo nhóm màu'
            }
        ],
        aiPrompt: 'Tạo hệ thống mã màu cho [chủ đề] với 4 nhóm thông tin',
        recommendedProduct: 'Color-Coding Study Kit'
    },
    {
        id: 3,
        name: 'Ký Hiệu Hình Ảnh',
        description: 'Sử dụng biểu tượng trực quan để ghi nhớ thông tin',
        learningStyle: 'visual',
        icon: Image,
        steps: [
            {
                label: 'Từ khóa',
                description: 'Liệt kê các từ khóa chính cần ghi nhớ'
            },
            {
                label: 'Biểu tượng',
                description: 'Vẽ hoặc chọn biểu tượng cho từng từ khóa'
            },
            {
                label: 'Áp dụng',
                description: 'Thay thế chữ viết bằng biểu tượng trong ghi chú'
            },
            {
                label: 'Luyện tập',
                description: 'Luyện tập ghi nhớ thông qua biểu tượng'
            }
        ],
        aiPrompt: 'Tạo hệ thống ký hiệu hình ảnh giúp ghi nhớ [chủ đề] với ít nhất 6 biểu tượng',
        recommendedProduct: 'Icon Memory Flashcards'
    },
    // Auditory Techniques
    {
        id: 4,
        name: 'Tự giải thích và dạy cho bản thân',
        description: 'Đọc và diễn đạt thông tin thành tiếng',
        learningStyle: 'auditory',
        icon: MessageSquare,
        steps: [
            {
                label: 'Chọn nội dung',
                description: 'Chọn phần nội dung cần học'
            },
            {
                label: 'Đọc to',
                description: 'Đọc to rõ ràng từng câu'
            },
            {
                label: 'Nhấn mạnh',
                description: 'Nhấn mạnh các từ quan trọng khi đọc'
            },
            {
                label: 'Lặp lại',
                description: 'Ôn tập bằng cách đọc lại nhiều lần'
            }
        ],
        aiPrompt: 'Tạo kịch bản đọc thành tiếng cho [chủ đề]',
        recommendedProduct: 'Audio Study Guide'
    },
    {
        id: 5,
        name: 'Ghi Âm & Nghe',
        description: 'Ghi âm và nghe lại bài học',
        learningStyle: 'auditory',
        icon: Mic,
        steps: [
            {
                label: 'Ghi âm',
                description: 'Ghi âm nội dung cần học'
            },
            {
                label: 'Ghi chú',
                description: 'Ghi chú các điểm quan trọng khi nghe'
            },
            {
                label: 'Nghe lại',
                description: 'Nghe và lặp lại nội dung'
            },
            {
                label: 'Tóm tắt',
                description: 'Tóm tắt nội dung bằng lời nói'
            }
        ],
        aiPrompt: 'Tạo kế hoạch ghi âm cho [chủ đề]',
        recommendedProduct: 'Voice Recorder Pro'
    },
    // Reading/Writing Techniques
    {
        id: 6,
        name: 'Viết Tóm Tắt',
        description: 'Tóm tắt thông tin bằng văn bản',
        learningStyle: 'reading',
        icon: FileText,
        steps: [
            {
                label: 'Đọc kỹ',
                description: 'Đọc và hiểu kỹ nội dung cần tóm tắt'
            },
            {
                label: 'Ghi chú',
                description: 'Ghi lại các ý chính và từ khóa'
            },
            {
                label: 'Viết lại',
                description: 'Viết lại nội dung theo cách hiểu của mình'
            },
            {
                label: 'Kiểm tra',
                description: 'Rà soát và hoàn thiện bài tóm tắt'
            }
        ],
        aiPrompt: 'Tạo dàn ý tóm tắt cho [chủ đề]',
        recommendedProduct: 'Summary Writing Guide'
    },
    {
        id: 7,
        name: 'Tạo Hướng Dẫn Học',
        description: 'Biên soạn tài liệu học tập',
        learningStyle: 'reading',
        icon: ClipboardList,
        steps: [
            {
                label: 'Thu thập',
                description: 'Tập hợp tất cả tài liệu liên quan'
            },
            {
                label: 'Sắp xếp',
                description: 'Phân loại và sắp xếp thông tin'
            },
            {
                label: 'Bổ sung',
                description: 'Thêm ví dụ và bài tập thực hành'
            },
            {
                label: 'Mục lục',
                description: 'Tổ chức nội dung theo mục lục'
            }
        ],
        aiPrompt: 'Tạo cấu trúc hướng dẫn học cho [chủ đề]',
        recommendedProduct: 'Study Guide Creator'
    },
    // Kinesthetic Techniques
    {
        id: 8,
        name: 'Hoạt Động Thực Hành',
        description: 'Học qua các hoạt động thực tế',
        learningStyle: 'kinesthetic',
        icon: HandMetal,
        steps: [
            {
                label: 'Chọn hoạt động',
                description: 'Xác định hoạt động thực hành phù hợp'
            },
            {
                label: 'Chuẩn bị',
                description: 'Chuẩn bị các dụng cụ cần thiết'
            },
            {
                label: 'Thực hiện',
                description: 'Thực hành theo các bước hướng dẫn'
            },
            {
                label: 'Ghi nhận',
                description: 'Ghi lại kết quả và rút kinh nghiệm'
            }
        ],
        aiPrompt: 'Tạo kế hoạch hoạt động thực hành cho [chủ đề]',
        recommendedProduct: 'Hands-On Learning Kit'
    },
    {
        id: 9,
        name: 'Đi Bộ & Học',
        description: 'Kết hợp vận động với học tập',
        learningStyle: 'kinesthetic',
        icon: Footprints,
        steps: [
            {
                label: 'Chuẩn bị',
                description: 'Chuẩn bị tài liệu học tập cần thiết'
            },
            {
                label: 'Chọn địa điểm',
                description: 'Chọn địa điểm yên tĩnh để học'
            },
            {
                label: 'Học tập',
                description: 'Học trong khi đi bộ'
            },
            {
                label: 'Ghi nhớ',
                description: 'Luyện tập ghi nhớ thông tin'
            }
        ],
        aiPrompt: 'Tạo lộ trình học tập kết hợp đi bộ cho [chủ đề] với 5 checkpoint, mỗi checkpoint tương ứng với một câu hỏi tự kiểm tra.',
        recommendedProduct: 'Active Learning Tracker'
    },
    // Logical Techniques
    {
        id: 10,
        name: 'Phân Tích Mẫu',
        description: 'Tìm mối liên hệ giữa các khái niệm',
        learningStyle: 'logical',
        icon: GitCompare,
        steps: [
            {
                label: 'Khái niệm',
                description: 'Liệt kê các khái niệm cần phân tích'
            },
            {
                label: 'Tìm mẫu',
                description: 'Phát hiện các mẫu và quy luật'
            },
            {
                label: 'Phân loại',
                description: 'Sắp xếp thông tin theo nhóm'
            },
            {
                label: 'Sơ đồ',
                description: 'Vẽ sơ đồ thể hiện mối quan hệ'
            }
        ],
        aiPrompt: 'Tạo hệ thống phân tích mẫu cho [chủ đề]',
        recommendedProduct: 'Pattern Analysis Tool'
    },
    {
        id: 11,
        name: 'Giải Quyết Vấn Đề',
        description: 'Áp dụng tư duy logic để giải quyết',
        learningStyle: 'logical',
        icon: BrainCircuit,
        steps: [
            {
                label: 'Vấn đề',
                description: 'Nêu rõ vấn đề cần giải quyết'
            },
            {
                label: 'Thu thập',
                description: 'Tập hợp thông tin liên quan'
            },
            {
                label: 'Phân tích',
                description: 'Phân tích các yếu tố ảnh hưởng'
            },
            {
                label: 'Giải pháp',
                description: 'Đưa ra các giải pháp khả thi'
            }
        ],
        aiPrompt: 'Tạo bài tập giải quyết vấn đề cho [chủ đề]',
        recommendedProduct: 'Problem-Solving Workbook'
    },
    {
        id: 12,
        name: 'Lập Bảng So Sánh',
        description: 'So sánh và phân tích thông tin một cách hệ thống',
        learningStyle: 'logical',
        icon: Table2,
        steps: [
            {
                label: 'Tiêu chí',
                description: 'Liệt kê các tiêu chí quan trọng cần so sánh'
            },
            {
                label: 'Tạo bảng',
                description: 'Thiết kế bảng với các cột là tiêu chí và hàng là đối tượng'
            },
            {
                label: 'Điền thông tin',
                description: 'Phân tích và điền thông tin vào từng ô'
            },
            {
                label: 'Kết luận',
                description: 'So sánh và đánh giá dựa trên bảng đã lập'
            }
        ],
        aiPrompt: 'Tạo bảng so sánh cho [chủ đề] với 4-5 tiêu chí quan trọng. Mỗi tiêu chí cần có định nghĩa rõ ràng và thang đánh giá từ 1-5. Thêm cột ghi chú để giải thích chi tiết.',
        recommendedProduct: 'Comparison Matrix Tool'
    }
]

const CustomStepper = ({ steps }) => {
    return (
        <div className="space-y-4">
            {steps.map((step, index) => (
                <div key={index} className="relative">
                    {/* Step Line */}
                    {index < steps.length - 1 && (
                        <div className="absolute left-4 top-8 w-0.5 h-full bg-gray-200" />
                    )}

                    {/* Step Content */}
                    <div className="flex items-start">
                        {/* Step Circle */}
                        <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border-2 border-gray-200 bg-white text-gray-400">
                            {index + 1}
                        </div>

                        {/* Step Details */}
                        <div className="ml-4 flex-grow">
                            <div className="font-medium text-gray-900">
                                {step.label}
                            </div>
                            <div className="mt-1 text-sm text-gray-600">
                                {step.description}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

const StudyTechniquesLibrary = () => {
    const [selectedStyle, setSelectedStyle] = useState(null)

    const filteredTechniques = selectedStyle
        ? studyTechniques.filter(technique => technique.learningStyle === selectedStyle)
        : studyTechniques

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Thư Viện Phương Pháp Học Tập
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-gray-500">
                    Khám phá phương pháp học tập phù hợp với phong cách của bạn
                </p>
            </div>

            {/* Learning Style Selection */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5 mb-12 bg-slate-100 p-2  rounded-xl">
                {learningStyles.map((style) => {
                    const Icon = style.icon
                    return (
                        <button
                            key={style.id}
                            onClick={() => setSelectedStyle(style.id)}
                            className={`p-4 rounded-lg  transition-all ${selectedStyle === style.id
                                ? ' bg-white'
                                : ' hover:bg-slate-200'
                                }`}
                        >
                            <Icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                            <h3 className={`text-base font-semibold ${selectedStyle === style.id
                                ? ' font-bold'
                                : '  text-gray-600/80'
                                }`}>{style.name}</h3>
                            <p className="mt-1 text-xs text-gray-500">{style.description}</p>
                        </button>
                    )
                })}
            </div>

            {/* Study Techniques Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredTechniques.map((technique) => {
                    const TechniqueIcon = technique.icon
                    return (
                        <div
                            key={technique.id}
                            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                        >
                            <div className="p-6">
                                <div className="flex items-center gap-2">
                                    <TechniqueIcon className="h-6 w-6 text-primary" />
                                    <h3 className="text-lg font-semibold text-gray-900">{technique.name}</h3>
                                </div>
                                <p className="mt-2 text-gray-500">{technique.description}</p>

                                {/* Steps */}
                                <div className="mt-4">
                                    <h4 className="font-medium text-gray-900">Các bước:</h4>
                                    <div className="mt-2">
                                        <CustomStepper steps={technique.steps} />
                                    </div>
                                </div>

                                {/* AI Prompt */}
                                <div className="mt-4">
                                    <h4 className="font-medium text-gray-900">Gợi ý AI:</h4>
                                    <p className="mt-2 text-sm text-gray-600">{technique.aiPrompt}</p>
                                </div>

                                {/* Recommended Product */}
                                <div className="mt-4">
                                    <h4 className="font-medium text-gray-900">Sản phẩm đề xuất:</h4>
                                    <a
                                        href="#"
                                        className="mt-2 inline-flex items-center text-sm text-primary hover:text-primary-dark"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {technique.recommendedProduct}
                                        <ExternalLink className="h-4 w-4 ml-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default StudyTechniquesLibrary 