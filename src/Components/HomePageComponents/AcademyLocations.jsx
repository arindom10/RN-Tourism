import React from "react";

const AcademyLocations = () => {
  const locations = [
    {
      name: "DHAKA",
      address:
        "21/A, Road-2, Block-A, Jharnal Islam City, Rampura Bridge, Dhaka-1212",
      email: "mkhbd@gmail.com",
      phone: "+88-015-52478007",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8485897260066!2d90.41251831445699!3d23.75097339469247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85fc47c7d3b%3A0x545121807a9d1425!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1617259757027!5m2!1sen!2sus", // Embed Google Maps URL for Dhaka
    },
    {
      name: "CHITTAGONG",
      address:
        "RN Tourism & Hospitality Management Institute, South Khulshi, Chittagong, Bangladesh",
      email: "mkhbd@gmail.com",
      phone: "+88-015-52478007",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.183062029512!2d91.80807441445345!3d22.356851446801918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd888764e47e3%3A0x4ec84d34b14463d7!2sChittagong!5e0!3m2!1sen!2sus!4v1617259886217!5m2!1sen!2sus", // Embed Google Maps URL for Chittagong
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-96">
          <p className="text-yellow-500 font-medium">VISIT US</p>
          <h2 className="text-4xl font-bold text-red-900 font-serif">
            Explore Our Academy Locations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="relative bg-yellow-100 rounded-lg shadow-lg p-6 pt-12 flex flex-col items-center"
            >
              <div className="absolute -top-80">
                <img
                  src="https://i.ibb.co/SQ3XVmG/vecteezy-doodle-freehand-drawing-of-bangladesh-map-18754370-1.png"
                  alt={`Map of ${location.name}`}
                  className="w-72 h-full"
                />
              </div>

              <h3 className="text-2xl font-bold text-red-900 mt-12">
                {location.name}
              </h3>
              <p className="text-center text-gray-800 mb-2">
                {location.address}
              </p>
              <p className="text-center text-gray-600 mb-1">{location.email}</p>
              <p className="text-center text-gray-600 mb-4">{location.phone}</p>

              <div className="w-full h-80 mb-4">
                <iframe
                  src={location.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title={`Google Map of ${location.name}`}
                ></iframe>
              </div>

              <a
                href={location.mapEmbedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-red-700"
              >
                Get the Location
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademyLocations;
