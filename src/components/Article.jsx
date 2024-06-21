import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({ article, favorites, handleFavorite }) => {

    const { title, description, author, publishedAt, url, urlToImage } = article;

    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            {urlToImage ? <img className="w-full h-64 object-cover" src={urlToImage} alt={title} /> :
                <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
                    <p className="text-gray-500">No image available</p>
                </div>
            }
            <div className="p-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-gray-500 text-sm">By {author} - {new Date(publishedAt).toDateString()}</p>
                <p className="mt-2">{description}</p>
                <div className="mt-4 flex justify-between items-center">
                    <Link to={`/article/${encodeURIComponent(url)}`} className="text-blue-500 hover:underline">Read more</Link>
                    <button
                        onClick={() => handleFavorite(article)}
                        className={`text-white py-1 px-2 rounded ${favorites.find((fav) => fav.url === article.url) ? 'bg-red-500' : 'bg-blue-500'}`}
                    >
                        {favorites.find((fav) => fav.url === article.url) ? 'Remove' : 'Add to Favorites'}
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Article;
