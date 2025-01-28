import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isProgramOpen, setIsProgramOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#f3e09a] shadow-lg">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center py-3">
          <Link to="/">
            <img
              src="https://i.ibb.co/WfxX1MZ/0e7a6f48deab82829323eddb5ea76650.png"
              alt="Logo"
              className="h-16 md:h-[108px]"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="nav-link">
              HOME
            </Link>
            <Link to="/about" className="nav-link">
              ABOUT
            </Link>
            <Link
              to="/program"
              className="nav-link"
              onClick={() => setIsProgramOpen(!isProgramOpen)}
            >
              PROGRAM
            </Link>
            <Link to="/faculty" className="nav-link">
              OUR FACULTY
            </Link>
            <Link to="/blogs" className="nav-link">
              BLOGS
            </Link>
            <Link to="/contact" className="nav-link">
              CONTACT
            </Link>
            <Link to="/verify-certificate" className="nav-link">
              VERIFY CERTIFICATE
            </Link>
          </div>

          <div className="bg-[#33090a] ">
            <div className="hidden md:block">
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

          <button
            className="md:hidden text-gray-800 text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#f3e09a] shadow-md p-6 space-y-4">
            <Link
              to="/"
              className="block mobile-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="block mobile-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              to="/program"
              className="block mobile-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              PROGRAM
            </Link>
            <Link
              to="/faculty"
              className="block mobile-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              OUR FACULTY
            </Link>
            <Link
              to="/blogs"
              className="block mobile-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              BLOGS
            </Link>
            <Link
              to="/contact"
              className="block mobile-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT
            </Link>
            <Link
              to="/verify-certificate"
              className="block mobile-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              VERIFY CERTIFICATE
            </Link>

            <Link
              to="/apply-now"
              className="apply-btn block text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              APPLY NOW
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
