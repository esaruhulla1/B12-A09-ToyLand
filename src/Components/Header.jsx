import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  

  //  Logout Handler
  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("Logged out successfully!");
    } catch (error) {
      toast.error("Logout failed!");
      console.error(error);
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-sm fixed top-0 w-full z-50 " >
      {/* Left: Logo */}

      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
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

          {/* Dropdown Menu */}

          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/allproduct">All Product</NavLink></li>
            <li><NavLink to="/profile">My Profile</NavLink></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl font-bold text-[#00c1a6]">
          🧸ToyLand
        </Link>
      </div>

      {/* Center: Nav links */}

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/allproduct">All Product</NavLink></li>
          <li><NavLink to="/profile">My Profile</NavLink></li>
        </ul>
      </div>

      {/* Right: User section */}

      <div className="navbar-end flex items-center gap-3">
        {user ? (
          <>
            {/* Tooltip on hover */}

            <div className="tooltip tooltip-bottom" data-tip={user.displayName || "User"}>
              <img
                src={user.photoURL || "https://i.ibb.co/MBtjqXQ/default-avatar.png"}
                alt="User Avatar"
                className="w-10 h-10 rounded-full border-2 border-gray-400 cursor-pointer"
              />
            </div>

            <button
              onClick={handleLogout}
              className=" btn btn-sm bg-[#00c1a6] text-white pb-0.5 rounded-lg border-0 hover:bg-[#00a88f]"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="btn btn-sm bg-[#00c1a6] text-white border-0 rounded-lg hover:bg-[#00a88f]"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
