import { useState } from "react";
import { Link } from "react-router-dom";

const ApplyNow = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    completionDate: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock form submission
    setTimeout(() => {
      setSuccessMessage(
        "Your application for a certificate has been successfully submitted!"
      );
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        course: "",
        completionDate: "",
      });
    }, 1000);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center px-4">
      <div className="max-w-screen-md w-full bg-white shadow-lg rounded-lg p-6 md:p-10">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-[#a12326] text-center mb-4">
          Apply for Certificate
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Fill in the form below to apply for your course completion
          certificate.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a12326] focus:border-transparent"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a12326] focus:border-transparent"
              placeholder="Enter your email address"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a12326] focus:border-transparent"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Course */}
          <div>
            <label
              htmlFor="course"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Course Name
            </label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a12326] focus:border-transparent"
              required
            >
              <option value="" disabled>
                Select your course
              </option>
              <option value="Web Development">Web Development</option>
              <option value="Data Science">Data Science</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
            </select>
          </div>

          {/* Completion Date */}
          <div>
            <label
              htmlFor="completionDate"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Course Completion Date
            </label>
            <input
              type="date"
              id="completionDate"
              name="completionDate"
              value={formData.completionDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a12326] focus:border-transparent"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-[#a12326] text-white font-medium text-sm uppercase rounded-md hover:bg-[#871d1f] transition duration-300"
            >
              Submit Application
            </button>
          </div>
        </form>

        {/* Success Message */}
        {successMessage && (
          <div className="mt-6 bg-green-100 text-green-700 p-4 rounded-md">
            ✅ {successMessage}
          </div>
        )}
      </div>

      {/* Additional Info */}
      <div className="mt-8 max-w-screen-md text-center text-gray-600">
        <p>
          If you have any issues applying for a certificate, please{" "}
          <Link
            to="/contact"
            className="text-[#a12326] font-medium hover:underline"
          >
            contact us
          </Link>{" "}
          for assistance.
        </p>
      </div>
    </div>
  );
};

export default ApplyNow;
