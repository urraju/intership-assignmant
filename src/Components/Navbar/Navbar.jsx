import { Link, NavLink } from "react-router-dom";
import {} from "react-icons/";
import logo from "../../assets/logo/logo.png";
import userIcon from "../../assets/user/user.svg";
import { BiMenu } from "react-icons/bi";
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
          isActive ? "underline text-sky-500" : ""
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "underline text-sky-500" : ""
        }
        to="/course"
      >
        Course
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "underline text-sky-500" : ""
        }
        to="/myCourse"
      >
        My Course
      </NavLink>
      {user?.email ? (
        <NavLink
          onClick={handleLogOut}
          className={({ isActive }) =>
            isActive ? "underline text-sky-500" : ""
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
    <div className="w-full sticky top-0 left-0 z-30 px-6 md:px-10   ">
      <div className="md:max-w-screen-2xl w-full  mx-auto   px-3">
        <div className="navbar   md:max-w-screen-2xl mx-auto  backdrop-blur  rounded-xl bg-white/30">
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn text-sky-500  border border-sky-500 btn-circle  mr-5  lg:hidden"
              >
                <BiMenu className="text-3xl"/>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 absolute p-5 shadow  bg-gradient-to-t to-blue-700 from-black w-52 rounded border border-gradient-to-tr  border-gray-600 font-normal uppercase font-roboto gap-5  text-white md:text-white lg:text-white "
              >
                {nav}
              </ul>
            </div>
            <NavLink to="/" className=" flex items-center ">
              <img className="w-20 hidden md:block" src={logo} alt="" />
              <div>
                <h1 className="text-2xl font-bold uppercase text-sky-500">Career</h1>
                <h1 className="tracking-widest text-center  uppercase">Develop</h1>
              </div>
            </NavLink>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu font-bold menu-horizontal px-1  uppercase  gap-5 ">
              {nav}
            </ul>
          </div>

          <div className="navbar-end  flex gap-2 items-center">
            
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
