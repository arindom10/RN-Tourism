import { useState } from "react";

const ProfessionalPrograms = () => {
  const [activeTab, setActiveTab] = useState("diploma");

  return (
    <section className="bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#993128] text-center mb-6">
          PROFESSIONAL PROGRAMS
        </h2>
        <p className="text-gray-600 text-center ">
          Our Basic Course provides essential knowledge and skills for a career
          in tourism and
        </p>
        <p className="text-gray-600 text-center mb-8">
          hospitality management, focusing on foundational concepts and industry
          practices.
        </p>

        <div className="flex justify-center space-x-4 mb-6">
          <button
            className={`px-6 py-2 rounded-t-lg text-sm font-medium ${
              activeTab === "diploma"
                ? "bg-[#993128] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("diploma")}
          >
            Diploma Course
          </button>
          <button
            className={`px-6 py-2 rounded-t-lg text-sm font-medium ${
              activeTab === "short-term"
                ? "bg-[#993128] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("short-term")}
          >
            Short Term Course
          </button>
          <button
            className={`px-6 py-2 rounded-t-lg text-sm font-medium ${
              activeTab === "other-related"
                ? "bg-[#993128] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("other-related")}
          >
            Other Related Course
          </button>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          {activeTab === "diploma" && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Diploma Course
              </h3>
              <p className="text-gray-600">
                Our Diploma Course is a comprehensive program designed to equip
                students with advanced knowledge and practical skills in tourism
                and hospitality management. This course focuses on
                industry-specific practices, career development, and leadership
                skills.
              </p>
            </div>
          )}
          {activeTab === "short-term" && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Short Term Course
              </h3>
              <p className="text-gray-600">
                The Short Term Course is perfect for individuals seeking quick
                and targeted learning opportunities in specific areas of tourism
                and hospitality. It is designed to provide fast-track skills
                needed to enter the industry.
              </p>
            </div>
          )}
          {activeTab === "other-related" && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Other Related Courses
              </h3>
              <p className="text-gray-600">
                Explore our other related courses that cater to various aspects
                of the tourism and hospitality industry, such as culinary arts,
                event management, and travel consultancy.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalPrograms;
