const AboutJourney = () => {
  return (
    <section className="bg-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Image */}
        <div>
          <img
            src="https://i.ibb.co/0Cnvxgr/Frame-1261155500.png"
            alt="Chefs team"
            className="w-full rounded shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <img
                src="https://i.ibb.co/Twx4sRM/Section.png"
                alt="Chef at work"
                className="rounded shadow-lg"
              />
            </div>

            <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-800">OUR CONTACT</h3>
              <p className="text-gray-700">
                21/A, Road - 2, Block A, Artha Nagar (Beside East West
                University), Merul Badda, Dhaka, Bangladesh, 1212
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> 8801552-478007
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> rnthmi@gmail.com
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-red-700">
              A LITTLE STORY ABOUT OUR JOURNEY
            </h2>
            <p className="text-gray-600 text-justify">
              RN Tourism and Hospitality Management Institute (RNTHMI) is an
              approved center from the City and Guilds of London Institute, UK,
              and nationally affiliated with BTEB and NSDA of Bangladesh.
              Located in Artha Nagar, Dhaka, and South Khulshi, Chittagong, we
              offer comprehensive courses in tourism and hospitality management,
              including food preparation and culinary arts. Join us to embark on
              a journey of excellence and innovation in the hospitality
              industry.
            </p>
            <div>
              <img
                src="https://i.ibb.co/fCCSYyK/Section-male-chef-with-assistant-standing-in-a-kitchen-preparing-food-in-a-luxury-restaurant-e169176.png"
                alt="Chefs in the kitchen"
                className="rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutJourney;
