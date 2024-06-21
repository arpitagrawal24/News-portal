import { useDispatch, useSelector } from 'react-redux';
import { setPage, getArticles } from '../redux/articlesSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.articles.page);
  const category = useSelector((state) => state.articles.category);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
    dispatch(getArticles({ category, page: newPage }));
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        className="p-2 m-1 bg-blue-500 text-white rounded disabled:bg-gray-400"
        disabled={page === 1}
        onClick={() => handlePageChange(page - 1)}
      >
        Previous
      </button>
      <span className="p-2 m-1">Page {page}</span>
      <button
        className="p-2 m-1 bg-blue-500 text-white rounded"
        onClick={() => handlePageChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
