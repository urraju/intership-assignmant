import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import toast, { Toaster } from 'react-hot-toast';
const Root = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register') || location.pathname.includes('details') 
    return(
        <div>
        <Toaster/>
        {noHeaderFooter ||  <Navbar/>}
         <Outlet/>
        {noHeaderFooter || <Footer/>}
    </div>
    )}
export default Root;