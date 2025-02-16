// //import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/tcmc_128.png";
// import { useAuth } from "../context/UseAuth";

// //interface Props {}

// const Navbar = (/*props: Props*/) => {
//   const { isLoggedIn, user, logout } = useAuth();
//   return (
//     <nav className="relative container mx-auto p-6">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center space-x-20">
//           <Link to="/">
//             <img src={logo} width="40" height="40" alt="" />
//           </Link>
//           <div className="font-bold lg:flex">
//             <Link to="/qr-generator" className="text-black hover:text-darkBlue">
//               QR Gen
//             </Link>
//           </div>
//           <div className="font-bold lg:flex">
//             <Link to="/qr-scanner" className="text-black hover:text-darkBlue">
//               QR Scanner
//             </Link>
//           </div>
//           <div className="font-bold lg:flex">
//             <Link
//               to="/kid-checkin-out"
//               className="text-black hover:text-darkBlue"
//             >
//               Kid Check In/Out
//             </Link>
//           </div>
//         </div>
//         {isLoggedIn() ? (
//           <div className="hidden lg:flex items-center space-x-6 text-back">
//             <div className="hover:text-darkBlue">Welcome, {user?.userName}</div>
//             <a
//               onClick={logout}
//               className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
//             >
//               Logout
//             </a>
//             <div className="font-bold lg:flex">
//               <Link to="/qr-scanner" className="text-black hover:text-darkBlue">
//                 QR Scanner
//               </Link>
//             </div>
//           </div>
//         ) : (
//           <div className=" lg:flex items-center space-x-6 text-back">
//             <Link to="/login" className="hover:text-darkBlue">
//               Login
//             </Link>
//             {/* <Link
//               to="/register"
//               className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
//             >
//               Signup
//             </Link> */}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/UseAuth";
import logo from "../assets/tcmc_128.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { isLoggedIn, user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} width="40" height="40" alt="Logo" />
        </Link>

        {/* Hamburger Menu */}
        <button
          className="lg:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navbar Links */}
        <div className="hidden lg:flex space-x-6 font-bold">
          <Link to="/qr-generator" className="text-black hover:text-darkBlue">
            QR Gen
          </Link>
          <Link to="/qr-scanner" className="text-black hover:text-darkBlue">
            QR Scanner
          </Link>
          <Link
            to="/kid-checkin-out"
            className="text-black hover:text-darkBlue"
          >
            Kid Check In/Out
          </Link>
        </div>

        {/* Auth Links */}
        {isLoggedIn() ? (
          <div className="hidden lg:flex items-center space-x-6 text-black">
            <span className="hover:text-darkBlue">
              Welcome, {user?.userName}
            </span>
            <button
              onClick={logout}
              className="px-4 py-2 font-bold rounded text-white bg-lightGreen hover:opacity-70"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="hidden lg:flex items-center space-x-6 text-black">
            <Link to="/login" className="hover:text-darkBlue">
              Login
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col space-y-4 font-bold">
          <Link
            to="/qr-generator"
            className="text-black hover:text-darkBlue"
            onClick={() => setIsOpen(false)}
          >
            QR Gen
          </Link>
          <Link
            to="/qr-scanner"
            className="text-black hover:text-darkBlue"
            onClick={() => setIsOpen(false)}
          >
            QR Scanner
          </Link>
          <Link
            to="/kid-checkin-out"
            className="text-black hover:text-darkBlue"
            onClick={() => setIsOpen(false)}
          >
            Kid Check In/Out
          </Link>
          {isLoggedIn() ? (
            <>
              <span className="text-black hover:text-darkBlue">
                Welcome, {user?.userName}
              </span>
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="px-4 py-2 font-bold rounded text-white bg-lightGreen hover:opacity-70"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="hover:text-darkBlue"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
