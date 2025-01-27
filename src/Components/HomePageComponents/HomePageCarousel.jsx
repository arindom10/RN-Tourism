import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const HomePageCarousel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const images = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    "https://virtuzone.com/wp-content/uploads/2024/04/restaurant-business-plan-template.jpg",
    "https://lesroches.edu/wp-content/uploads/2022/08/Restaurant_business_plan_main.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative  h-screen">
      <div className="absolute top-4 left-4 z-10">
        <button
          className="text-white text-2xl"
          onClick={() => setIsVisible(!isVisible)}
        >
          <GiHamburgerMenu />
        </button>
        {isVisible ? (
          <div id="menu" className="top-12 left-10 text-white w-48">
            <ul className="flex flex-col space-y-2 p-4">
              <li>
                <Link href="/" className="hover:text-yellow-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-500">
                  About
                </Link>
              </li>
              <li>
                <Link to="/program" className="hover:text-yellow-500">
                  Program
                </Link>
              </li>
              <li>
                <Link to="/faculty" className="hover:text-yellow-500">
                  Our Faculty
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-yellow-500">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/verify-certificate"
                  className="hover:text-yellow-500"
                >
                  Verify Certificate
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="relative h-screen flex items-center justify-center ">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-screen object-cover"
        />
        <div className="absolute bottom-16 left-40 bg-yellow-100 bg-opacity-90 p-6 rounded-md shadow-lg hidden md:block">
          <h2 className="text-gray-900 font-bold text-xl mb-2">
            Let’s Create Your Dream Space
          </h2>
          <div className="flex items-center space-x-8 mb-4">
            <div className="flex space-x-4">
              <h3 className="text-xl font-bold text-gray-800">2.5k+</h3>
              <p className="text-sm text-gray-600">Certifications Done</p>
            </div>
            <div className="flex space-x-4">
              <h3 className="text-xl font-bold text-gray-800">100+</h3>
              <p className="text-sm text-gray-600">Partners Worldwide</p>
            </div>
            <p className="text-sm text-gray-600">Tell Us About Your Mind</p>
            <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
              Get Quote
            </button>
          </div>
        </div>
        <div className="absolute bottom-16 right-80 p-4 hidden md:block">
          <img
            className="w-3/4 h-3/4"
            src="https://i.ibb.co.com/tC6yBPX/Frame-5.png"
            alt=""
          />
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 text-white text-2xl bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-gray-700"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 text-white text-2xl bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-gray-700"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HomePageCarousel;
