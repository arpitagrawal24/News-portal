import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ArticleDetail = () => {
    const { url } = useParams();
    const article = useSelector((state) =>
        state.articles.articles.find((article) => article.url === decodeURIComponent(url))
    );

    if (!article) {
        return <p className="text-center text-red-500 mt-4">Article not found</p>;
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-blue-500 text-white p-4">
                <div className="container mx-auto flex items-center justify-between">
                    <h1 className="text-2xl font-bold">News Portal</h1>
                    <nav>
                        <Link to="/" className="text-white hover:underline mx-2">Home</Link>
                        <Link to="/about" className="text-white hover:underline mx-2">About</Link>
                        <Link to="/contact" className="text-white hover:underline mx-2">Contact</Link>
                        <Link to="/favorites" className="text-white hover:underline mx-2">Favorites</Link>
                    </nav>
                </div>
            </header>
            <div className="container mx-auto py-8 px-4">
                <h2 className="text-3xl font-bold text-center mb-4">{article.title}</h2>
                <p className="text-sm text-gray-600 text-center mb-2">{new Date(article.publishedAt).toDateString()}</p>
                {article.urlToImage ? <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-1/2 h-96 object-cover rounded-lg shadow-lg mb-4 justify-center mx-auto"
                /> :
                    <div className="w-1/2 h-96 bg-gray-200 rounded-lg shadow-lg mb-4 justify-center mx-auto">
                        <p className="text-center text-2xl font-bold text-gray-500 pt-20">No Image</p>
                    </div>
                }
                <p className="text-lg leading-relaxed mb-4">{article.description}</p>
                <p className="text-lg leading-relaxed mb-4">{article.content}</p>
                <a
                    href={article.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 text-center"
                >
                    Read Full Article
                </a>
            </div>
        </div>
    );
};

export default ArticleDetail;
