import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsAndArticle = () => {
  const articles = [
    {
      title: "Top 5 Benefits of Learning IELTS for Your Career",
      date: "August 2, 2023",
      description:
        "An IELTS certification opens doors to global opportunities. From higher education to immigration and...",
      image: "https://i.ibb.co/6Fkf0hN/Frame-75-1.png",
    },
    {
      title: "Top 5 Benefits of Learning IELTS for Your Career",
      date: "August 2, 2023",
      description:
        "An IELTS certification opens doors to global opportunities. From higher education to immigration and...",
      image: "https://i.ibb.co/6Fkf0hN/Frame-75-1.png",
    },
    {
      title: "Top 5 Benefits of Learning IELTS for Your Career",
      date: "August 2, 2023",
      description:
        "An IELTS certification opens doors to global opportunities. From higher education to immigration and...",
      image: "https://i.ibb.co/6Fkf0hN/Frame-75-1.png",
    },
  ];

  return (
    <section className="container mx-auto py-10">
      <p className="text-[#CD9B2F]">CONTINUE READING</p>
      <h2 className="text-7xl font-bold text-[#993128] mb-6">NEWS & ARTICLE</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
          >
            <img
              src={article.image}
              alt="Article Thumbnail"
              className="w-full h-96 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <FaCalendarAlt className="text-[#993128] mr-2" />
                <span>{article.date}</span>
              </div>
              <p className="text-gray-700 text-sm mb-2">
                {article.description}
              </p>
              <Link
                href="*"
                className="text-[#993128] text-sm font-medium hover:underline"
              >
                See More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsAndArticle;
