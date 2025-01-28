import { useState } from "react";
import ShortTermCourse from "./ShortTermCourse";
import DiplomaCourse from "./DiplomaCourse";
import OtherRelatedCourse from "./OtherRelatedCourse";

const ProfessionalPrograms = () => {
  const [activeTab, setActiveTab] = useState("diploma");

  return (
    <section className="bg-white px-4 py-12 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-[#993128] text-center mb-4">
          PROFESSIONAL PROGRAMS
        </h2>

        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          Our Basic Course provides essential knowledge and skills for a career
          in tourism and hospitality management, focusing on foundational
          concepts and industry practices.
        </p>

        <div className="flex justify-center overflow-x-auto space-x-2 md:space-x-4 mt-8">
          <button
            className={`px-4 md:px-6 py-2 text-xs md:text-sm font-medium rounded-t-lg transition-all duration-300 ${
              activeTab === "diploma"
                ? "bg-[#993128] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab("diploma")}
          >
            Diploma Course
          </button>
          <button
            className={`px-4 md:px-6 py-2 text-xs md:text-sm font-medium rounded-t-lg transition-all duration-300 ${
              activeTab === "short-term"
                ? "bg-[#993128] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab("short-term")}
          >
            Short Term Course
          </button>
          <button
            className={`px-4 md:px-6 py-2 text-xs md:text-sm font-medium rounded-t-lg transition-all duration-300 ${
              activeTab === "other-related"
                ? "bg-[#993128] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab("other-related")}
          >
            Other Related Course
          </button>
        </div>

        <div className="mt-4 p-4 md:p-6 bg-gray-100 rounded-lg shadow-md">
          {activeTab === "diploma" && <DiplomaCourse />}
          {activeTab === "short-term" && <ShortTermCourse />}
          {activeTab === "other-related" && <OtherRelatedCourse />}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalPrograms;
