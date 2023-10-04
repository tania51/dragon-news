import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsDetails from "../components/HomeMainNews/NewsDetails";
import Private from "../components/Private/Private";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/news/:id',
                element: <Private><NewsDetails></NewsDetails></Private>,
                loader: () => fetch('/news.json')
            }
        ]
    }
])

export default router;