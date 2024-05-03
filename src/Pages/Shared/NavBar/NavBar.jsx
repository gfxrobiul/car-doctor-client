import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { IoMdLogOut } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const NavBar = () => {
  const { logOut, user } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => {
        console.error(error);
      })
  }

  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 h-28 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img src={logo} alt="" />
        </Link>




      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-2">

        <button className="btn bg-transparent text-[#FF3811] border-[#FF3811] hover:bg-[#FF3811] hover:text-white
         hover:border-[#FF3811]"> Appointment</button>
        {
          user?.email ?
            <>

              <Link to='/bookings'><button className="flex te items-center gap-1 btn bg-[#FF3811] text-white border-[#FF3811]
         hover:bg-white hover:text-[#FF3811] hover:font-bold hover:border-[#FF3811]">My Bookings </button>
              </Link>

              <button onClick={handleLogOut} className="flex te items-center gap-1 btn bg-[#FF3811] text-white border-[#FF3811]
         hover:bg-white hover:text-[#FF3811] hover:font-bold hover:border-[#FF3811]"><IoMdLogOut /> Log Out</button>
            </>
            :

            <Link className="flex items-center gap-1 btn bg-[#FF3811] text-white border-[#FF3811] hover:bg-white
        hover:text-[#FF3811] hover:font-bold hover:border-[#FF3811]" to="/login"> <FaUser />Login</Link>

        }

      </div>
    </div>
  );
};

export default NavBar;
