import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getArticles } from '../redux/articlesSlice';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import ArticleList from '../components/ArticleList';
import CategoryFilter from '../components/CategoryFilter';

const HomePage = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.articles);
  const status = useSelector((state) => state.articles.status);
  const category = useSelector((state) => state.articles.category);
  const page = useSelector((state) => state.articles.page);
  const searchQuery = useSelector((state) => state.articles.searchQuery); 
  const error = useSelector((state) => state.articles.error);

  useEffect(() => {
    dispatch(getArticles({ category, page, searchQuery }));
  }, [dispatch, category, page, searchQuery]);

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
        <div className="flex justify-between items-center mb-4">
          <SearchBar />
          <CategoryFilter />
        </div>

        {status === 'loading' && (
          <div className="flex justify-center items-center h-32">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-10 w-10"></div>
          </div>
        )}

        {status === 'failed' && (
          <p className="text-center text-red-500 mt-4">
            Failed to load data. {error}
          </p>
        )}

        {status === 'succeeded' && (
          <>
            <ArticleList articles={articles} />
            <Pagination />
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
