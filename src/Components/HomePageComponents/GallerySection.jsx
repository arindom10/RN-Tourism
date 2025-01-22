const GallerySection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Image */}
          <div className="h-auto">
            <img
              src="https://i.ibb.co.com/0ZKk0GV/Rectangle-9.png"
              alt="Gallery 1"
              className="rounded-lg w-full h-full object-cover shadow-md"
            />
          </div>

          {/* Middle Text Section */}
          <div className="text-center lg:mx-6 relative">
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">
              Gallery
            </p>
            <h2 className="text-3xl font-bold text-red-800 mt-2">
              A Glimpse of Excellence
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Step into our world of culinary artistry through our gallery,
              showcasing vibrant moments of learning, creativity, and passion.
              Experience the journey of our students and faculty in action!
            </p>
            <button className="mt-6 px-8 py-2 bg-red-700 text-white text-sm font-semibold rounded hover:bg-red-800 transition duration-300">
              View More
            </button>

            {/* Images 3 and 4 below the text */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="h-40">
                <img
                  src="https://i.ibb.co.com/vjB7bqw/Rectangle-11.png"
                  alt="Gallery 3"
                  className="rounded-lg shadow-md w-full h-full object-cover"
                />
              </div>
              <div className="h-40">
                <img
                  src="https://i.ibb.co.com/G9hsTtg/Rectangle-12.png"
                  alt="Gallery 4"
                  className="rounded-lg shadow-md w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="h-auto">
            <img
              src="https://i.ibb.co.com/brwshG4/Rectangle-10.png"
              alt="Gallery 2"
              className="rounded-lg w-full h-full object-cover shadow-md"
            />
          </div>
        </div>

        {/* Full-Width Image */}
        <div className="mt-12">
          <img
            src="https://i.ibb.co.com/LPDLrqF/Rectangle-15.png"
            alt="Gallery 5"
            className="rounded-lg w-full h-full object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
