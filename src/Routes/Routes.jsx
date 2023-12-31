import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Course from "../Pages/Course";
import Contact from "../Pages/Contact";
import Details from "../Components/Layout/DetailsPage/Details";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import UserDashboard from "../Dashboard/UserDashboard";
import UserHome from "../Dashboard/UserHome";
import UserProfile from "../Dashboard/UserProfile";
import NotFound from "../Components/Layout/NotFound/NotFound";

 
 const router = createBrowserRouter([
    {
        path : '/',
        element : <Root/>,
        errorElement : <NotFound/>,
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
                path : 'register',
                element : <Register/>
            },
            {
                path : 'details/:id',
                element : <Details/>,
                loader: ({ params }) => fetch(`https://intership-server-a.vercel.app/course/${params.id}`),
            },
        ]
        
    },
    {
        path : '/userdashboard',
        element : <UserDashboard/>,
        children : [
            {
                path : 'userHome',
                element : <UserHome/>
            },
            {
                path : 'userProfile',
                element : <UserProfile/>
            },
        ]
        
    }
 ])
 export default router