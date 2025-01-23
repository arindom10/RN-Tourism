import React from "react";

const CallToActionSection = () => {
  return (
    <section className="  ">
      <div className="max-w-5xl mx-auto px-6 bg-yellow-100 container py-16">
        <img
          src="https://i.ibb.co/WfxX1MZ/0e7a6f48deab82829323eddb5ea76650.png"
          alt="Logo"
          className="w-24 mb-4"
        />

        <div className="text-left">
          <p className="text-sm font-medium text-red-800 tracking-wider uppercase mb-2">
            Get Started
          </p>

          <h2 className="text-7xl   text-red-900 leading-tight mb-6">
            READY TO SHARPEN YOUR
            <br />
            CULINARY SKILLS?
          </h2>

          <button className="bg-[#993128] text-white px-8 py-3 text-lg font-semibold rounded shadow-md hover:bg-red-800 transition-all duration-300">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
