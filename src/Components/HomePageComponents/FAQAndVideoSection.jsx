import { useState } from "react";

const FAQAndVideoSection = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqs = [
    {
      question: "What programs and courses do you offer?",
      answer:
        "We offer a range of courses, including culinary arts, hospitality management, and online cooking classes.",
    },
    {
      question: "How do I apply to the Chef Academy?",
      answer:
        "You can apply online through our website or visit the academy for in-person assistance.",
    },
    {
      question: "Do you offer financial aid or scholarships?",
      answer:
        "Yes, we provide various financial aid options and scholarships for eligible students.",
    },
    {
      question: "What is the class size for your courses?",
      answer:
        "Our courses are designed for small groups to ensure personalized attention, with class sizes ranging from 10-15 students.",
    },
    {
      question: "Do you offer online cooking courses?",
      answer:
        "Yes, we offer a variety of online cooking courses for students who prefer remote learning.",
    },
    {
      question: "How long do the programs take to complete?",
      answer:
        "Program durations vary, ranging from short-term courses of a few weeks to diploma programs lasting several months.",
    },
    {
      question: "What facilities are available at the academy?",
      answer:
        "Our academy is equipped with state-of-the-art kitchens, a library, and student lounges.",
    },
    {
      question: "Can I visit the academy before applying?",
      answer:
        "Yes, we encourage prospective students to schedule a visit to explore our facilities and meet our instructors.",
    },
  ];

  const toggleQuestion = (index) => {
    setActiveQuestion(index === activeQuestion ? null : index);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-4xl font-bold text-red-900 font-serif">
              Frequently Asked Questions
            </h2>
            <a
              href="*"
              className="text-white bg-red-900 px-4 py-2 rounded hover:bg-red-700"
            >
              View All Questions
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white shadow p-4 rounded border-l-4 border-yellow-500"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleQuestion(index)}
                >
                  <h3>{faq.question}</h3>
                  <span className="text-gray-500">
                    {activeQuestion === index ? "-" : "+"}
                  </span>
                </div>
                {activeQuestion === index && (
                  <p className="mt-3 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img
            src="https://i.ibb.co/r5mFrLd/Image.png"
            alt="Video Thumbnail"
            className="w-full h-full object-cover rounded-lg shadow"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <button className="bg-white text-red-900 p-4 rounded-full shadow-lg hover:scale-105 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-6.586-4.421A1 1 0 007 7.999v8.002a1 1 0 001.166.99l6.586-1.178a1 1 0 00.638-.99v-4.654a1 1 0 00-.638-.989z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQAndVideoSection;
