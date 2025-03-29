import LearningStyleTest from '../components/LearningStyleTest'

const LearningStyleTestPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                        Khám Phá Phong Cách Học Tập Của Bạn
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Hiểu cách bạn học tập hiệu quả nhất và nhận được những lời khuyên cá nhân hóa.
                    </p>
                </div>
                <LearningStyleTest />
            </div>
        </div>
    )
}

export default LearningStyleTestPage 