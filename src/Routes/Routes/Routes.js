import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import BlogPage from "../../Pages/BlogPage/BlogPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Review from "../../Pages/Review/Review";
import ReviewEdit from "../../Pages/ReviewPage/ReviewEdit";
import ReviewPage from "../../Pages/ReviewPage/ReviewPage";
import ServiceDetail from "../../Pages/ServiceDetail/ServiceDetail/ServiceDetail";
import ServicePage from "../../Pages/ServicePage/ServicePage";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <ServicePage></ServicePage>
            },
            {
                path: '/blog',
                element: <BlogPage></BlogPage>
            },
            {
                path: '/login', 
                element: <Login></Login>
            },
            {
                path: '/signup', 
                element: <SignUp></SignUp>
            },
            {
                path: '/detail/:id',
                element: <PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>,
                loader: ({params})=> fetch(`https://bangladesh-travel-server.vercel.app/places/${params.id}`)
            },
            {
                path: '/review/:id',
                element: <PrivateRoute><Review></Review></PrivateRoute>,
                loader: ({params})=> fetch(`https://bangladesh-travel-server.vercel.app/places/${params.id}`)
            },
            {
                path: '/reviewPage', 
                element: <ReviewPage></ReviewPage>
            },
            {
                path: '/reviewedit/:id', 
                element: <ReviewEdit></ReviewEdit>
            },  
            {
                path: '/*', 
                element: <NotFound></NotFound>
            }      
        ]
    }
])