import React, { useState } from "react";

const HomePageCarousel = () => {
  const images = [
    "https://i.ibb.co/bs9VBwc/Untitled-design-1.png",
    "https://i.ibb.co/mTY1QNJ/file-10-3-1.png",
    "https://i.ibb.co/KyYJbKG/file-10-3.png",
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
    <div className="relative bg-gray-900 h-screen">
      {/* Navbar */}
      <div className="absolute top-4 left-4 z-10">
        <button
          className="text-white text-2xl"
          onClick={() =>
            document.getElementById("menu").classList.toggle("hidden")
          }
        >
          <i className="fas fa-bars"></i>
        </button>
        <div
          id="menu"
          className="hidden absolute top-12 left-0 bg-gray-800 text-white w-48 rounded shadow-lg"
        >
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <a href="#" className="hover:text-yellow-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="absolute top-4 right-4 z-10 flex space-x-4">
        <a href="#" className="text-white hover:text-yellow-500">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-white hover:text-yellow-500">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-white hover:text-yellow-500">
          <i className="fab fa-youtube"></i>
        </a>
      </div>

      {/* Carousel */}
      <div className="relative h-screen flex items-center justify-center">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-screen object-cover"
        />
        <div className="absolute bottom-16 left-8 bg-yellow-100 bg-opacity-90 p-6 rounded-md shadow-lg max-w-sm">
          <h2 className="text-gray-900 font-bold text-xl mb-2">
            Let’s Create Your Dream Space
          </h2>
          <div className="flex items-center space-x-8 mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-800">2.5k+</h3>
              <p className="text-sm text-gray-600">Certifications Done</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">100+</h3>
              <p className="text-sm text-gray-600">Partners Worldwide</p>
            </div>
          </div>
          <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
            Get Quote
          </button>
        </div>
        <div className="absolute bottom-16 right-8 bg-red-500 text-white p-4 rounded-full w-32 h-32 flex items-center justify-center shadow-lg">
          <span className="text-center">
            Explore <br />
            Services
          </span>
        </div>
        {/* Controls */}
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

      {/* Dots */}
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
