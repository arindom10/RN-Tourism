import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white py-10 ">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link to="/">
            <img
              src="https://i.ibb.co/WfxX1MZ/0e7a6f48deab82829323eddb5ea76650.png"
              alt="Logo"
              className="h-16"
            />
          </Link>
          <p className="text-sm">
            Your Gateway to a World-Class Culinary and Hospitality Education
          </p>
          <div className="flex space-x-4 text-gray-400">
            <Link to="*" className="hover:text-white transition ">
              <FaFacebookF />
            </Link>
            <Link to="*" className="hover:text-white transition">
              <FaYoutube />
            </Link>
            <Link to="*" className="hover:text-white transition">
              <FaInstagram />
            </Link>
            <Link to="*" className="hover:text-white transition">
              <FaWhatsapp />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">CONTACT INFO</h3>
          <hr className="border-gray-600 mb-4" />
          <p className="text-sm mb-2">
            21/A, Road-2, Block-A, Jahurul Islam City, Rampura Bridge, Dhaka
            1212
          </p>
          <p className="text-sm flex items-center space-x-2 mb-2">
            <FaPhone />
            <span>+88 - 015-52478007</span>
          </p>
          <p className="text-sm flex items-center space-x-2">
            <FaEnvelope />
            <span>mhb@gmail.com</span>
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">HELP CENTER</h3>
          <hr className="border-gray-600 mb-4" />
          <ul className="text-sm space-y-2">
            <li>
              <Link to="*" className="hover:text-gray-300 transition">
                Admission
              </Link>
            </li>
            <li>
              <Link to="*" className="hover:text-gray-300 transition">
                Customer Support
              </Link>
            </li>
            <li>
              <Link to="*" className="hover:text-gray-300 transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="*" className="hover:text-gray-300 transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">QUICK LINKS</h3>
          <hr className="border-gray-600 mb-4" />
          <ul className="text-sm space-y-2">
            <li>
              <Link to="*" className="hover:text-gray-300 transition">
                Classes
              </Link>
            </li>
            <li>
              <Link to="*" className="hover:text-gray-300 transition">
                Teachers
              </Link>
            </li>
            <li>
              <Link to="*" className="hover:text-gray-300 transition">
                Events
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 flex justify-center items-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>
            Design by Goinnovior Limited. All rights reserved.{" "}
            <Link to="*" className="text-blue-500 hover:underline">
              360D Soul Limited
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
