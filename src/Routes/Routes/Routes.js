import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import ServiceDetail from "../../Pages/ServiceDetail/ServiceDetail/ServiceDetail";

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
                path: '/detail/:id',
                element: <ServiceDetail></ServiceDetail>,
                loader: ({params})=> fetch(`http://localhost:5000/places/${params.id}`)
            }
            
        ]
    }
])