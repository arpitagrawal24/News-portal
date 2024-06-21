import { useDispatch, useSelector } from 'react-redux';
import { setCategory, getArticles, setPage } from '../redux/articlesSlice';

const CategoryFilter = () => {
    const dispatch = useDispatch();
    const category = useSelector((state) => state.articles.category);

    const handleChange = (event) => {
        dispatch(setCategory(event.target.value));
        dispatch(setPage(1));
        dispatch(getArticles({ category: event.target.value, page: 1 }));
    };

    return (
        <select className="p-2 border rounded" value={category} onChange={handleChange}>
            <option value="">All</option>
            <option value="business">Business</option>
            <option value="technology">Technology</option>
            <option value="entertainment">Entertainment</option>
        </select>
    );
};

export default CategoryFilter;
