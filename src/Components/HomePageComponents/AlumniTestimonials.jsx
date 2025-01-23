const AlumniTestimonials = () => {
  const testimonials = [
    {
      name: "Daud Hossain Supto",
      title: "Culinary Graduate",
      message:
        "Thanks to Chefaca, I've transformed my love for cooking into a career. The experience was both challenging and rewarding.",
      image: "https://i.ibb.co.com/G2w1R70/Img.png",
    },
    {
      name: "Mahabub Jamil",
      title: "Restaurant Owner",
      message:
        "Chefaca's curriculum is comprehensive and well-structured, offering a perfect blend of theory and practical experience.",
      image: "https://i.ibb.co.com/njmgq8H/Img-1.png",
    },
    {
      name: "Hasibur Rahman",
      title: "Food Entrepreneur",
      message:
        "The networking opportunities at Chefaca opened doors for me in the culinary world. I made lifelong connections and friendships.",
      image: "https://i.ibb.co.com/y6yqxGt/Img-2.png",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-yellow-500 font-medium">GET INSPIRED</p>
            <h2 className="text-4xl font-bold text-red-900 font-serif">
              CHEFACA ALUMNI TESTIMOBIALS
            </h2>
          </div>
          <a
            href="*"
            className="text-white bg-red-900 px-4 py-2 rounded hover:bg-red-700"
          >
            View All Testimonials
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="relative ">
            <img
              src="https://i.ibb.co.com/ftcf2pJ/Background-Border-3.png"
              alt="Alumni"
              className="w-full h-full object-cover rounded-lg shadow"
            />
            <div className="absolute bottom-4 left-4 bg-red-900 text-white px-4 py-2 rounded shadow">
              <h3 className="font-bold text-lg">Tariq Al-Mozahhed</h3>
              <p className="text-sm">Aspiring Chef</p>
            </div>
            <div className="absolute inset-0 flex justify-center items-center">
              <button className="bg-yellow-500 p-4 rounded-full shadow-lg hover:scale-105 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-6.586-4.421A1 1 0 007 7.999v8.002a1 1 0 001.166.99l6.586-1.178a1 1 0 00.638-.99v-4.654a1 1 0 00-.638-.989z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="bg-[#CD9B2F] p-6 rounded-lg shadow">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="mb-6">
                <p className="text-gray-800 italic mb-4">
                  &quot;{testimonial.message}&quot;
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12  mr-4"
                  />
                  <div>
                    <h4 className="text-red-900 font-bold">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniTestimonials;
