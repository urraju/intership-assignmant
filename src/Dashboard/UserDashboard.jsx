import { AiFillHome, AiFillProfile, AiOutlineMenu } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../Components/Hooks/useAuth";
import { MdHome } from "react-icons/md";

const UserDashboard = () => {
    const {user} = useAuth()
  return (
    <div className="">
      <div className="flex md:gap-20">
        <div className=" lg:drawer-open ">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className=" lg:hidden cursor-pointer ml-5 mt-3"
            >
              <AiOutlineMenu className="text-xl text-white bg-sky-500 rounded-full h-8 w-8 p-2"/>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 gap-3 min-h-full backdrop-blur bg-white/40 text-base-content">
              {/* Sidebar content here */}
              <div className="flex items-center gap-3">
                <img className="border p-2 rounded-full" src={user?.photoURL} alt="" />
                 <p className="text-xl font-bold text-sky-800">{user?.displayName}</p>
              </div>
               <Link to='/userdashboard/userHome' className=" border rounded-lg uppercase font-lexend px-3  py-1 flex text-lg  items-center gap-2"><AiFillHome className="text-2xl text-sky-500"/>User Home</Link>
               <Link to='/userdashboard/userProfile' className=" border rounded-lg uppercase font-semibold  px-3 py-1 flex text-lg items-center gap-2"><AiFillProfile className="text-2xl text-sky-500"/>Profile</Link>
               <Link to='/' className=" border rounded-lg uppercase font-semibold  px-3 py-1 flex text-lg items-center gap-2"><MdHome className="text-2xl text-sky-500"/>back Home</Link>
              
            </ul>
          </div>
        </div>
        {/* second side var */}
        <div className="mt-10 flex justify-center w-full md:w-8/12 lg:w-7/12">
            
            <Outlet/>
        </div>
      </div>
    </div>
  );
};
export default UserDashboard;
