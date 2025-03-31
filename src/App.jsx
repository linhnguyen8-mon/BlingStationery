import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import AiPrompt from './pages/AiPrompt'
import LearningStyleTest from './pages/LearningStyleTest'
import LearningChallenges from './pages/LearningChallenges'
import Becoming from './pages/Becoming'
import StudyTechniquesLibrary from './pages/StudyTechniques'
import TroLyBling from './pages/TroLyBling'

function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/product/:id" element={<ProductDetail />} />
                        <Route path="/ai-prompts" element={<AiPrompt />} />
                        <Route path="/ai-prompts/prompts" element={<TroLyBling />} />
                        <Route path="/ai-prompts/learning-challenges" element={<LearningChallenges />} />
                        <Route path="/ai-prompts/becoming" element={<Becoming />} />
                        <Route path="/ai-prompts/study-techniques" element={<StudyTechniquesLibrary />} />
                        <Route path="/learning-type-test" element={<LearningStyleTest />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App 