import { useState, useEffect } from 'react';
import Article from './Article';

const ArticleList = ({ articles }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(savedFavorites);
    }, []);

    const handleFavorite = (article) => {
        const existing = favorites.find((fav) => fav.url === article.url);
        if (existing) {
            const newFavorites = favorites.filter((fav) => fav.url !== article.url);
            setFavorites(newFavorites);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
        } else {
            const newFavorites = [...favorites, article];
            setFavorites(newFavorites);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
        }
    };

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4  p-4">
            {articles.map((article) => (
                <Article
                    key={article.url}
                    article={article} favorites={favorites}
                    handleFavorite={handleFavorite}
                    setFavorites={setFavorites}
                />
            ))}
        </div>
    );
};

export default ArticleList;
