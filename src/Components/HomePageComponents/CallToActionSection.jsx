const CallToActionSection = () => {
  return (
    <section className=" py-12">
      <div className="container bg-yellow-100 mx-auto px-6 flex flex-col items-center text-center">
        {/* Logo */}
        <img
          src="https://i.ibb.co/WfxX1MZ/0e7a6f48deab82829323eddb5ea76650.png"
          alt="Logo"
          className="w-20 md:w-24 mb-4"
        />

        {/* Text */}
        <p className="text-sm font-medium text-red-800 tracking-wider uppercase mb-2">
          Get Started
        </p>
        <h2 className="text-3xl font-serif font-bold text-red-900 leading-tight mb-6">
          Ready to Sharpen Your <br />
          Culinary Skills?
        </h2>

        {/* Button */}
        <button className="bg-red-700 text-white px-8 py-3 text-base font-semibold rounded-md shadow hover:bg-red-800 transition duration-300">
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default CallToActionSection;
