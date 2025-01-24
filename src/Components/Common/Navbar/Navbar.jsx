import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isProgramOpen, setIsProgramOpen] = useState(false);

  return (
    <nav className="bg-[#f3e09a] shadow-lg container mx-auto relative">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <Link to="/">
            <div className="flex items-center space-x-4">
              <img
                src="https://i.ibb.co/WfxX1MZ/0e7a6f48deab82829323eddb5ea76650.png"
                alt="Logo"
                className="h-[108px]"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6 mr-60">
            <Link
              to="/"
              className="text-sm font-medium text-gray-800 hover:text-gray-600"
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-gray-800 hover:text-gray-600"
            >
              ABOUT
            </Link>

            <Link
              to="/program"
              className="relative text-sm font-medium text-gray-800 hover:text-gray-600"
              onClick={() => setIsProgramOpen(!isProgramOpen)}
              aria-haspopup="true"
              aria-expanded={isProgramOpen}
            >
              PROGRAM
            </Link>

            <Link
              to="/faculty"
              className="text-sm font-medium text-gray-800 hover:text-gray-600"
            >
              OUR FACULTY
            </Link>
            <Link
              to="/blogs"
              className="text-sm font-medium text-gray-800 hover:text-gray-600"
            >
              BLOGS
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-gray-800 hover:text-gray-600"
            >
              CONTACT
            </Link>
            <Link
              to="/verify-certificate"
              className="text-sm font-medium text-gray-800 hover:text-gray-600"
            >
              VERIFY CERTIFICATE
            </Link>
          </div>

          <div className="bg-[#33090a] absolute right-10 ">
            <div className="hidden md:block relative right-1 bottom-1">
              <Link
                to="/apply-now"
                className="bg-[#a12326] text-white px-4 py-2 text-sm font-medium  flex items-center hover:bg-[#871d1f]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 mr-2 bg-[#FFC036]"
                >
                  <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24 11.37 11.37 0 003.58.57 1 1 0 011 1v3.6a1 1 0 01-1 1A19.93 19.93 0 014 4a1 1 0 011-1h3.6a1 1 0 011 1 11.37 11.37 0 00.57 3.58 1 1 0 01-.24 1.05z" />
                </svg>
                APPLY NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
