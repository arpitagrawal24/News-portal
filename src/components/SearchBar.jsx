import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/articlesSlice';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(query));
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center m-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border border-gray-300  rounded-l"
        placeholder="Search articles..."
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-r"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
