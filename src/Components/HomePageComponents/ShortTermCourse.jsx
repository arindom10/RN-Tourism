import { Link } from "react-router-dom";

const Card = ({ course }) => (
  <div className={`bg-${course.bgColor} border border-gray-300   p-5 mt-4`}>
    {/* Image Section */}
    <div>
      <img
        className="w-full h-full rounded-t-lg"
        src={course.image}
        alt={course.title}
      />
    </div>

    {/* Content Section */}
    <div className="p-6">
      {/* Title */}
      <h3 className={`text-2xl font-semibold ${course.textColor} mb-2`}>
        {course.title}
      </h3>
      {/* Description */}
      <p className={`text-${course.descColor} text-sm mb-4`}>
        {course.description}
        <span className={`text-${course.linkColor} cursor-pointer`}>
          {" "}
          See More
        </span>
      </p>

      {/* Details */}
      <ul className={`text-${course.detailsColor} text-sm mb-6 space-y-1`}>
        <li>
          <strong>Duration:</strong> {course.duration}
        </li>
        <li>
          <strong>Details:</strong> {course.details}
        </li>
        <li>
          <strong>Fees:</strong> {course.fees}
        </li>
        <li>
          <strong>Note:</strong> {course.note}
        </li>
      </ul>

      {/* Footer Section */}
      <div className="flex items-center justify-between">
        {/* Mentor Info */}
        <div className="flex items-center">
          <img
            className="w-12 h-12 object-cover"
            src={course.mentorImage}
            alt={course.mentor}
          />
          <div className="ml-3">
            <p className="text-gray-800 font-semibold text-sm">
              {course.mentor}
            </p>
            <p className="text-gray-500 text-xs">{course.mentorRole}</p>
          </div>
        </div>

        {/* Action Button */}
        <Link to="*">
          <button className="mt-6 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">
            View Program
          </button>
        </Link>
      </div>
    </div>
  </div>
);

const ShortTermCourse = () => {
  const courses = [
    {
      bgColor: "yellow-500",
      title: "Short Term Chef Course",
      image:
        "https://i.ibb.co.com/tKPC71X/young-chef-university-professor-is-passing-on-the-L3-PX8-BD-jpg-1.png",
      textColor: "gray-800",
      descColor: "gray-600",
      linkColor: "red-600",
      detailsColor: "gray-700",
      description:
        "For those who have completed their tourist visa or other visas or are in the process of visa processing and want to...",
      duration: "3 months",
      details: "F&B Production-Cooking-level 3 under NSDA",
      fees: "6000 BDT (Registration Fee), 175 Pounds (UK Registration Fee)",
      note: "Hotel Internship Not Included",
      mentor: "Steven Harris",
      mentorRole: "Chef Mentor",
      mentorImage:
        "https://i.ibb.co.com/3dvQmpC/handsome-african-american-male-wears-apron-cooks-UEK5-RDA-jpg-1.png",
    },
    {
      bgColor: "black",
      title: "Japanese Sushi Making Course",
      image:
        "https://i.ibb.co.com/LQc5S0F/cooking-course-senior-male-chef-in-cook-uniform-7-Z4-AH78-jpg.png",
      textColor: "white",
      descColor: "gray-400",
      linkColor: "red-500",
      detailsColor: "gray-300",
      description:
        "For those who have completed their tourist visa or other visas or are in the process of visa processing and want to...",
      duration: "3 months",
      details: "F&B Production-Cooking-level 3 under NSDA",
      fees: "6000 BDT (Registration Fee), 175 Pounds (UK Registration Fee)",
      note: "Hotel Internship Not Included",
      mentor: "Emma Johnson",
      mentorRole: "Chef Mentor",
      mentorImage:
        "https://i.ibb.co.com/JF7qnSz/confident-female-chef-F4-C8-T9-H-jpg.png",
    },
    {
      bgColor: "yellow-500",
      title: "Short Term Chef Course",
      image:
        "https://i.ibb.co.com/tKPC71X/young-chef-university-professor-is-passing-on-the-L3-PX8-BD-jpg-1.png",
      textColor: "gray-800",
      descColor: "gray-600",
      linkColor: "red-600",
      detailsColor: "gray-700",
      description:
        "For those who have completed their tourist visa or other visas or are in the process of visa processing and want to...",
      duration: "3 months",
      details: "F&B Production-Cooking-level 3 under NSDA",
      fees: "6000 BDT (Registration Fee), 175 Pounds (UK Registration Fee)",
      note: "Hotel Internship Not Included",
      mentor: "Steven Harris",
      mentorRole: "Chef Mentor",
      mentorImage:
        "https://i.ibb.co.com/3dvQmpC/handsome-african-american-male-wears-apron-cooks-UEK5-RDA-jpg-1.png",
    },
    {
      bgColor: "black",
      title: "Japanese Sushi Making Course",
      image:
        "https://i.ibb.co.com/LQc5S0F/cooking-course-senior-male-chef-in-cook-uniform-7-Z4-AH78-jpg.png",
      textColor: "white",
      descColor: "gray-400",
      linkColor: "red-500",
      detailsColor: "gray-300",
      description:
        "For those who have completed their tourist visa or other visas or are in the process of visa processing and want to...",
      duration: "3 months",
      details: "F&B Production-Cooking-level 3 under NSDA",
      fees: "6000 BDT (Registration Fee), 175 Pounds (UK Registration Fee)",
      note: "Hotel Internship Not Included",
      mentor: "Emma Johnson",
      mentorRole: "Chef Mentor",
      mentorImage:
        "https://i.ibb.co.com/JF7qnSz/confident-female-chef-F4-C8-T9-H-jpg.png",
    },
    {
      bgColor: "yellow-500",
      title: "Short Term Chef Course",
      image:
        "https://i.ibb.co.com/tKPC71X/young-chef-university-professor-is-passing-on-the-L3-PX8-BD-jpg-1.png",
      textColor: "gray-800",
      descColor: "gray-600",
      linkColor: "red-600",
      detailsColor: "gray-700",
      description:
        "For those who have completed their tourist visa or other visas or are in the process of visa processing and want to...",
      duration: "3 months",
      details: "F&B Production-Cooking-level 3 under NSDA",
      fees: "6000 BDT (Registration Fee), 175 Pounds (UK Registration Fee)",
      note: "Hotel Internship Not Included",
      mentor: "Steven Harris",
      mentorRole: "Chef Mentor",
      mentorImage:
        "https://i.ibb.co.com/3dvQmpC/handsome-african-american-male-wears-apron-cooks-UEK5-RDA-jpg-1.png",
    },
    {
      bgColor: "black",
      title: "Japanese Sushi Making Course",
      image:
        "https://i.ibb.co.com/LQc5S0F/cooking-course-senior-male-chef-in-cook-uniform-7-Z4-AH78-jpg.png",
      textColor: "white",
      descColor: "gray-400",
      linkColor: "red-500",
      detailsColor: "gray-300",
      description:
        "For those who have completed their tourist visa or other visas or are in the process of visa processing and want to...",
      duration: "3 months",
      details: "F&B Production-Cooking-level 3 under NSDA",
      fees: "6000 BDT (Registration Fee), 175 Pounds (UK Registration Fee)",
      note: "Hotel Internship Not Included",
      mentor: "Emma Johnson",
      mentorRole: "Chef Mentor",
      mentorImage:
        "https://i.ibb.co.com/JF7qnSz/confident-female-chef-F4-C8-T9-H-jpg.png",
    },
  ];

  return (
    <div>
      {/* Top Section */}
      <div className="bg-black text-white rounded-lg shadow-lg mx-auto flex">
        {/* Text Section */}
        <div className="p-8 flex-1">
          <p className="text-yellow-400 uppercase text-sm font-medium mb-2">
            Special Categories
          </p>
          <h2 className="text-4xl font-bold text-red-500 mb-4">
            Professional Barista Training Program
          </h2>
          <p className="text-gray-400 text-sm mb-6">
            For those who want to build a better career at home and abroad as a
            barista with international standards in cafes, restaurants, and
            coffee shops.
          </p>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>• Comprehensive Curriculum</li>
            <li>• Hands-On Training</li>
            <li>• Qualified Trainers</li>
            <li>• Small Batches</li>
            <li>• Career Advancement Assured</li>
          </ul>
          <Link to="*">
            <button className="mt-6 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">
              View Program
            </button>
          </Link>
        </div>
        {/* Image Section */}
        <div className="flex-1">
          <img
            className="w-full h-full object-cover rounded-r-lg"
            src="https://i.ibb.co.com/m8PS8Yd/Background-Border-4.png"
            alt="Barista Training"
          />
        </div>
      </div>

      {/* Course Cards Section */}
      <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
          {courses.map((course, index) => (
            <Card key={index} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShortTermCourse;
