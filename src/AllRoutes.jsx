import App from './App'
import Error from './pages/Error';
import HomePage from './pages/HomePage';
import ArticleDetail from './pages/ArticleDetail';
import Favorites from './pages/Favorites';

export const AllRoutes = [
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/article/:url",
                element: (<ArticleDetail />),
            },
            {
                path: "/favorites",
                element: <Favorites />,
            }
        ]
    },
]