import { Link } from "react-router-dom";

const OtherRelatedCourse = () => {
  const courses = [
    {
      id: 1,
      title: "PROFESSIONAL FOOD & BEVERAGE CHEF COURSE",
      description:
        "For those who want to build a better career at home and abroad as an international standard in restaurants or hotels.",
      details: [
        "Duration: 1 Year",
        "Certified by City & Guilds of London Institute, UK",
        "6 Months In-House Training",
        "3/6 Months Hotel Internship Included",
      ],
      experience: "02+",
      experienceText: "Years of Experience",
      image: "https://i.ibb.co/7KMjgJR/Frame-75-1.png",
    },
    {
      id: 2,
      title: "PROFESSIONAL FOOD & BEVERAGE CHEF COURSE",
      description:
        "For those who want to build a better career at home and abroad as an international standard in restaurants or hotels.",
      details: [
        "Duration: 1 Year",
        "Certified by City & Guilds of London Institute, UK",
        "6 Months In-House Training",
        "3/6 Months Hotel Internship Included",
      ],
      experience: "02+",
      experienceText: "Years of Experience",
      image: "https://i.ibb.co/7KMjgJR/Frame-75-1.png",
    },
    {
      id: 3,
      title: "PROFESSIONAL FOOD & BEVERAGE CHEF COURSE",
      description:
        "For those who want to build a better career at home and abroad as an international standard in restaurants or hotels.",
      details: [
        "Duration: 1 Year",
        "Certified by City & Guilds of London Institute, UK",
        "6 Months In-House Training",
        "3/6 Months Hotel Internship Included",
      ],
      experience: "02+",
      experienceText: "Years of Experience",
      image: "https://i.ibb.co/7KMjgJR/Frame-75-1.png",
    },
    {
      id: 4,
      title: "PROFESSIONAL FOOD & BEVERAGE CHEF COURSE",
      description:
        "For those who want to build a better career at home and abroad as an international standard in restaurants or hotels.",
      details: [
        "Duration: 1 Year",
        "Certified by City & Guilds of London Institute, UK",
        "6 Months In-House Training",
        "3/6 Months Hotel Internship Included",
      ],
      experience: "02+",
      experienceText: "Years of Experience",
      image: "https://i.ibb.co/7KMjgJR/Frame-75-1.png",
    },
  ];

  return (
    <div className="text-white">
      {courses.map((course) => (
        <div
          key={course.id}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-2 bg-gray-900 p-3"
        >
          <div>
            <h1 className="text-4xl font-bold mb-4 leading-tight">
              {course.title}
            </h1>
            <p className="text-lg mb-6">{course.description}</p>
            <ul className="mb-6 space-y-2">
              {course.details.map((detail, index) => (
                <li key={index}>
                  <span className="text-yellow-500 font-bold">*</span> {detail}
                </li>
              ))}
            </ul>
            <Link to="*">
              <button className="mt-6 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">
                View Program
              </button>
            </Link>
          </div>

          <div className="relative">
            <img
              src={course.image}
              alt="Chef Training"
              className="rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-gray-800 bg-opacity-80 text-yellow-500 p-4 rounded-lg">
              <h2 className="text-4xl font-bold">{course.experience}</h2>
              <p className="text-sm">{course.experienceText}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OtherRelatedCourse;
