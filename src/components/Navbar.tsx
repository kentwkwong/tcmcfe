import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/qr_center_icon.png";
import { useAuth } from "../context/UseAuth";

interface Props {}

const Navbar = (props: Props) => {
  const { isLoggedIn, user, logout } = useAuth();
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Link to="/">
            <img src={logo} width="40" height="40" alt="" />
          </Link>
          <div className="font-bold lg:flex">
            <Link to="/qr-generator" className="text-black hover:text-darkBlue">
              QR Gen
            </Link>
          </div>
          <div className="font-bold lg:flex">
            <Link to="/qr-scanner" className="text-black hover:text-darkBlue">
              QR Scanner
            </Link>
          </div>
          <div className="font-bold lg:flex">
            <Link
              to="/kid-checkin-out"
              className="text-black hover:text-darkBlue"
            >
              Kid Check In/Out
            </Link>
          </div>
        </div>
        {isLoggedIn() ? (
          <div className="hidden lg:flex items-center space-x-6 text-back">
            <div className="hover:text-darkBlue">Welcome, {user?.userName}</div>
            <a
              onClick={logout}
              className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
            >
              Logout
            </a>
            <div className="font-bold lg:flex">
              <Link to="/qr-scanner" className="text-black hover:text-darkBlue">
                QR Scanner
              </Link>
            </div>
          </div>
        ) : (
          <div className=" lg:flex items-center space-x-6 text-back">
            <Link to="/login" className="hover:text-darkBlue">
              Login
            </Link>
            {/* <Link
              to="/register"
              className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
            >
              Signup
            </Link> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
