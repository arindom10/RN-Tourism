const CallToActionSection = () => {
  return (
    <section className="py-16">
      <div className="mx-auto px-6 bg-yellow-100 container py-16 mb-11">
        <img
          src="https://i.ibb.co/WfxX1MZ/0e7a6f48deab82829323eddb5ea76650.png"
          alt="Logo"
          className="w-24 mb-4 mx-auto lg:mx-0"
        />

        <div className="text-center lg:text-left">
          <p className="text-sm font-medium text-red-800 tracking-wider uppercase mb-2">
            Get Started
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-red-900 leading-tight mb-6">
            READY TO SHARPEN YOUR
            <br />
            CULINARY SKILLS?
          </h2>

          <div className="text-center lg:text-left">
            <button className="bg-[#993128] text-white px-8 py-3 text-lg sm:text-xl md:text-2xl font-semibold rounded shadow-md hover:bg-red-800 transition-all duration-300">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
