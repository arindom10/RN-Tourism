const AboutUsBanner = () => {
  return (
    <div className="container mx-auto space-y-12">
      <div className="text-center py-16">
        <p className="text-sm font-light text-gray-500">
          A LEGACY OF CULINARY EXCELLENCE
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#993128] mt-4">
          ABOUT US
        </h1>
        <div className="mt-8">
          <img
            className="w-full object-cover h-64 sm:h-80 md:h-[500px] lg:h-screen rounded-lg"
            src="https://i.ibb.co.com/72KXGL3/Section-male-chef-with-assistant-standing-in-a-kitchen-preparing-food-in-a-luxury-restaurant-e169176.png"
            alt="Culinary Excellence"
          />
        </div>
      </div>

      <div className="py-8 text-center sm:text-left">
        <p className="text-sm font-light text-[#CD9B2F]">
          Chef Academy & Cooking School
        </p>
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-[#993128] mt-4">
          GREETINGS FROM THE INSTITUTE OF CULINARY EDUCATION
        </h2>
      </div>

      <div className="text-gray-800 text-lg sm:text-xl md:text-2xl px-6 md:px-12">
        <p>
          RN Tourism and Hospitality Management Institute (RNTHMI) is an
          approved center from the City and Guilds of London Institute, UK, and
          nationally affiliated with BTEB and NSDA of Bangladesh. Located in
          Aftab Nagar, Dhaka, and South Khulshi, Chittagong, we offer
          comprehensive courses in tourism and hospitality management, including
          food preparation and culinary arts. Join us to embark on a journey of
          excellence and innovation in the hospitality industry.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center px-6 py-12 space-y-8 lg:space-y-0">
        <div className="w-full lg:w-2/5">
          <img
            className="w-full h-auto max-h-[700px] object-cover rounded-lg"
            src="https://i.ibb.co.com/YB1XZ4b/1234.png"
            alt="Culinary"
          />
        </div>

        <div className="w-full lg:w-3/5 lg:pl-12 uppercase">
          <div className="space-y-6">
            <h3 className="text-sm text-[#CD9B2F]">ABOUT RNTHI</h3>
            <h4 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#993128] mb-8">
              MASTERS AT CULINARY ARTS
            </h4>
            <p className="text-gray-600 mb-8 ">
              RN Tourism and Hospitality Management Institute (RNTHMI), approved
              by City and Guilds, UK, and affiliated with BTEB and NSDA, offers
              premier tourism, hospitality, and culinary courses in Dhaka and
              Chittagong.
            </p>
            <div>
              <h5 className="text-2xl sm:text-3xl font-semibold text-[#33100D] mb-6">
                Our Mission
              </h5>
              <p className="text-gray-600 mb-8 ">
                To inspire and equip individuals with the culinary skills and
                knowledge to pursue successful careers in the food industry.
              </p>
              <h5 className="text-2xl sm:text-3xl font-semibold text-[#33100D] mb-6">
                Our Vision
              </h5>
              <p className="text-gray-600 mb-8">
                To be the leading culinary academy, recognized for excellence in
                education, innovation, and producing world-class chefs.
              </p>
              <h5 className="text-2xl sm:text-3xl font-semibold text-[#33100D] mb-6">
                Our Values
              </h5>
              <p className="text-gray-600 mb-8">
                We strive for the highest standards of education and training,
                providing a rigorous and enriching learning experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
