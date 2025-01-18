const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-screen-md bg-white shadow-lg rounded-lg p-6 md:p-10">
        <h1 className="text-3xl font-bold text-[#a12326] text-center mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Have any questions? We'd love to hear from you! Fill out the form
          below, and we'll get back to you as soon as possible.
        </p>

        <form className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a12326] focus:border-transparent"
              placeholder="Enter your name"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a12326] focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a12326] focus:border-transparent"
              placeholder="Enter subject"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a12326] focus:border-transparent"
              placeholder="Write your message here"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-[#a12326] text-white font-medium text-sm uppercase rounded-md hover:bg-[#871d1f] transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Contact Information */}
        <div className="mt-8">
          <h2 className="text-lg font-bold text-gray-700 mb-2">
            Our Contact Information
          </h2>
          <ul className="text-gray-600 space-y-1">
            <li>📍 Address: 123 Street, City, Country</li>
            <li>📞 Phone: +123 456 789</li>
            <li>📧 Email: info@example.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
