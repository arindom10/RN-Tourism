import { FaCalendarAlt, FaComment, FaUser } from "react-icons/fa";

const CulinaryExcellenceSection = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-6xl f text-[#33100D]">
          Master the Art of Culinary <br /> Excellence
        </h1>
        <div className="flex items-center justify-center space-x-4 text-[#CD9B2F] mt-8">
          {/* Icon 1: Author */}
          <span className="flex items-center space-x-1">
            <FaUser className="text-sm text-[#CD9B2F]" /> {/* React Icon */}
            <span className="text-sm">Md. Tarif Al-Mozahed</span>
          </span>

          {/* Divider */}
          <span className="text-sm">•</span>

          {/* Icon 2: Date */}
          <span className="flex items-center space-x-1">
            <FaCalendarAlt className="text-sm text-[#CD9B2F]" />{" "}
            {/* React Icon */}
            <span className="text-sm">August 2, 2023</span>
          </span>

          {/* Divider */}
          <span className="text-sm">•</span>

          {/* Icon 3: Comments */}
          <span className="flex items-center space-x-1">
            <FaComment className="text-sm text-[#CD9B2F]" /> {/* React Icon */}
            <span className="text-sm">No Comment</span>
          </span>
        </div>
      </div>

      <div className="text-center mb-12">
        <img
          className="mx-auto w-full  object-cover rounded-lg"
          src="https://i.ibb.co.com/zNTJM1t/Frame-74-1.png"
          alt="Banner"
        />
      </div>
      <div className="container mx-auto px-4 py-8 flex flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-7/10 pr-4">
          <p className="text-gray-600 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ex
            urna. Morbi vitae ex eget erat condimentum suscipit at nec libero.
            Nam suscipit finibus quam eu vehicula. Proin eget sodales lorem.
          </p>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#993128] mb-4">
              Unleash Your Inner Chef
            </h2>
            <p className="text-gray-600 mb-4">
              Nunc dui libero, laoreet ut enim at, scelerisque placerat nunc.
              Nunc vel libero vehicula, commodo velit id, accumsan orci. Integer
              porta maximus mi eu dignissim. Ut bibendum mauris sit amet metus
              vestibulum faucibus. Nam commodo sit amet ligula mattis
              sollicitudin. Pellentesque molestie ultrices tortor.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://i.ibb.co.com/c6shXPx/4667-1.png"
                alt="Chef Cooking Small"
                className="rounded-lg object-cover w-full"
              />
              <img
                src="https://i.ibb.co.com/c6shXPx/4667-1.png"
                alt="Chef Cooking Small"
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#993128] mb-4">
              Master the art of cooking
            </h2>
            <p className="text-gray-600 mb-4">
              Aliquam enim purus, ultrices sit amet lacinia ac, ullamcorper eget
              nunc. Sed mollis elit quis feugiat hendrerit. Quisque eleifend
              metus ac vehicula faucibus. Aliquam sollicitudin semper lacinia.
              Cras vestibulum posuere porttitor. Donec tincidunt erat non ante
              pellentesque hendrerit. Cras ultricies nisl in luctus
              pellentesque. Integer non eros sit amet eros varius pellentesque.
              Suspendisse lacinia odio vitae efficitur accumsan.
            </p>
            <h2 className="text-2xl font-bold text-[#993128] mb-4">
              Mastering knife skills
            </h2>
            <p className="text-gray-600 mb-4">
              Sed nec ipsum rhoncus, venenatis est a, venenatis libero.
              Suspendisse metus metus, pellentesque vitae accumsan nec, pharetra
              in magna. Nullam sed ullamcorper felis. Morbi non purus non purus
              pharetra ultrices. Pellentesque lacus lacus, egestas in sapien
              vel, eleifend tristique leo. Aenean a purus eu enim dignissim
              bibendum eu ac mi. Nulla tortor tortor, maximus sit amet auctor
              ut, lobortis ac diam.
            </p>
          </div>

          <div className="mt-8 flex items-center p-4 bg-[#F9F9F9] rounded-lg shadow">
            <img
              src="https://i.ibb.co.com/yq2rbMx/handsome-african-american-male-wears-apron-cooks-UEK5-RDA-jpg.png"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover mr-4"
            />

            <div>
              <h3 className="text-lg font-bold text-[#993128] mb-2">
                Md. Tarif Al-Mozahed
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Suspendisse potenti. Nam sem tortor, dapibus et hendrerit eu,
                ornare vitae arcu. Nunc porta libero.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-3/10 mt-8 lg:mt-0">
          <div className="bg-[#F9F9F9] p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-[#33100D] mb-6">
              Latest Post
            </h3>
            <ul className="space-y-6">
              <li>
                <div className="flex items-center space-x-2">
                  <span className="text-[#993128] text-xl"></span>
                  <span className="text-sm text-gray-400">August 2, 2023</span>
                </div>
                <p className="text-gray-600 mt-2">
                  Sustainable Dining: The Future of Food & Beverage
                </p>
              </li>
              <li>
                <div className="flex items-center space-x-2">
                  <span className="text-[#993128] text-xl"></span>
                  <span className="text-sm text-gray-400">August 2, 2023</span>
                </div>
                <p className="text-gray-600 mt-2">
                  Breaking Down the IELTS Speaking Module
                </p>
              </li>
              <li>
                <div className="flex items-center space-x-2">
                  <span className="text-[#993128] text-xl"></span>
                  <span className="text-sm text-gray-400">August 2, 2023</span>
                </div>
                <p className="text-gray-600 mt-2">
                  Explore Fusion Cuisine Like Never Before
                </p>
              </li>
              <li>
                <div className="flex items-center space-x-2">
                  <span className="text-[#993128] text-xl"></span>
                  <span className="text-sm text-gray-400">August 2, 2023</span>
                </div>
                <p className="text-gray-600 mt-2">
                  How to Create a Study Plan for IELTS Success
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulinaryExcellenceSection;
