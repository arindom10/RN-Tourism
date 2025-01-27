import { useState } from "react";
import ShortTermCourse from "./ShortTermCourse";
import DiplomaCourse from "./DiplomaCourse";
import OtherRelatedCourse from "./OtherRelatedCourse";

const ProfessionalPrograms = () => {
  const [activeTab, setActiveTab] = useState("diploma");

  return (
    <section className="bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-[#993128] text-center mb-6">
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
              <DiplomaCourse />
            </div>
          )}
          {activeTab === "short-term" && (
            <div>
              <ShortTermCourse />
            </div>
          )}
          {activeTab === "other-related" && (
            <div>
              <OtherRelatedCourse />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalPrograms;
