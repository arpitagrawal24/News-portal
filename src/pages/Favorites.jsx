import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(savedFavorites);
    }, []);

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
            <h1 className="text-2xl font-bold m-4">Favorites</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
                {favorites.map((article) => (
                    <div key={article.url} className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-bold">{article.title}</h2>
                        <p>{article.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Favorites;
