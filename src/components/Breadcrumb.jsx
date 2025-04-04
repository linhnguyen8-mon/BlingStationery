import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const Breadcrumb = ({ items }) => {
    return (
        <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2">
                {items.map((item, index) => (
                    <li key={index} className="inline-flex items-center">
                        {index > 0 && (
                            <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
                        )}
                        {item.link ? (
                            <Link
                                to={item.link}
                                className="text-sm font-medium text-gray-500 hover:text-gray-700"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-sm font-medium text-gray-900">
                                {item.label}
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    )
}

export default Breadcrumb 