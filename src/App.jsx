import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Planner from './pages/Planner'
import ProductDetail from './pages/ProductDetail'
import AiPrompt from './pages/AiPrompt'
import Freebies from './pages/Freebies'
import LearningStyleTest from './pages/LearningStyleTest'

function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/planner/:category" element={<Planner />} />
                        <Route path="/product/:id" element={<ProductDetail />} />
                        <Route path="/ai-prompts" element={<AiPrompt />} />
                        <Route path="/freebies" element={<Freebies />} />
                        <Route path="/learning-style-test" element={<LearningStyleTest />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App 