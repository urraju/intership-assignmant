import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Course from "../Pages/Course";
import Contact from "../Pages/Contact";

 
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
        ]
    }
 ])
 export default router