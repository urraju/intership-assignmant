import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Course from "../Pages/Course";
import Contact from "../Pages/Contact";
import Details from "../Components/Layout/DetailsPage/Details";
import Login from "../Pages/Login";

 
 const router = createBrowserRouter([
    {
        path : '/',
        element : <Root/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : 'contact',
                element : <Contact/>
            },
            {
                path : 'course',
                element : <Course/>
            },
            {
                path : 'login',
                element : <Login/>
            },
            {
                path : 'details/:id',
                element : <Details/>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`),
            },
        ]
    }
 ])
 export default router