import { Link, NavLink } from "react-router-dom";
import {} from "react-icons/";
import logo from "../../assets/logo/logo.png";
import userIcon from "../../assets/user/user.svg";
import { BiMenu } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import DarkMode from "../Layout/DarkMode";
import useAuth from "../Hooks/useAuth";
const Navbar = () => {
  const { user, signout } = useAuth();
  const handleLogOut = () => {
    signout().then().catch();
  };

  const nav = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "underline text-rose-500" : ""
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "underline text-rose-500" : ""
        }
        to="/course"
      >
        Course
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "underline text-rose-500" : ""
        }
        to="/login"
      >
        Login
      </NavLink>
      {user?.email ? (
        <NavLink
          onClick={handleLogOut}
          className={({ isActive }) =>
            isActive ? "underline text-rose-500" : ""
          }
          to="/login"
        >
          logout
        </NavLink>
      ) : (
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline text-rose-500" : ""
          }
          to="/login"
        >
          login
        </NavLink>
      )}
    </>
  );

  return (
    <div className="w-full px-6 md:px-10   ">
      <div className=" max-w-7xl mx-auto  px-3">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn text-rose-500  border border-rose-500 btn-circle  mr-5  lg:hidden"
              >
                <BiMenu className="text-3xl" />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 absolute p-5 shadow  bg-gradient-to-t to-blue-700 from-black w-52 rounded border border-gradient-to-tr  border-gray-600 font-normal uppercase font-roboto gap-5  text-white md:text-white lg:text-white "
              >
                {nav}
              </ul>
            </div>
            <NavLink to="/" className="  ">
              <img className="w-24  " src={logo} alt="" />
            </NavLink>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu font-bold menu-horizontal px-1  uppercase  gap-5 ">
              {nav}
            </ul>
          </div>

          <div className="navbar-end  flex gap-2 items-center">
            <div className="flex items-center opacity-0 md:opacity-100   gap-1 border px-3 py-1 rounded-full border-gray-200">
              <input
                className="bg-transparent   outline-none"
                type="text"
                placeholder="Search"
              />
              <BsSearch className="text-gray-400" />
            </div>

            <div>
              <DarkMode />
            </div>

            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user ? user.photoURL : userIcon} alt="" />
                </div>
              </label>

              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-4 shadow menu menu-sm dropdown-content bg-black text-white  w-56 rounded-lg"
              >
                <li>{user ? user.displayName : ""}</li>
                <li>{user ? user.email : ""}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
