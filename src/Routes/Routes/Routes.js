import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ServiceDetail from "../../Pages/ServiceDetail/ServiceDetail/ServiceDetail";
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
                loader: ({params})=> fetch(`http://localhost:5000/places/${params.id}`)
            }
            
        ]
    }
])