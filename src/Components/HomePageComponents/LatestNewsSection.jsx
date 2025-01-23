const LatestNewsSection = () => {
  const articles = [
    {
      title: "Master the Art of Culinary Excellence",
      date: "August 2, 2023",
      description:
        "Elevate your cooking skills with our Professional Food & Beverage Chef Course...",
      image: "https://i.ibb.co/hZLqRK6/Frame-74.png",
      link: "#",
    },
    {
      title: "Top 5 Benefits of Learning IELTS for Your Career",
      date: "August 2, 2023",
      description:
        "An IELTS certification opens doors to global opportunities. From higher education to immigration and...",
      image: "https://i.ibb.co/gFMbLTW/Frame-75.png",
      link: "#",
    },
  ];

  const sideArticles = [
    {
      title: "Sustainable Dining: The Future of Food & Beverage",
      date: "August 2, 2023",
      link: "#",
    },
    {
      title: "Breaking Down the IELTS Speaking Module",
      date: "August 2, 2023",
      link: "#",
    },
    {
      title: "Explore Fusion Cuisine Like Never Before",
      date: "August 2, 2023",
      link: "#",
    },
    {
      title: "How to Create a Study Plan for IELTS Success",
      date: "August 2, 2023",
      link: "#",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left mb-8 flex justify-between gap-20">
          <h2 className="text-4xl font-serif font-bold text-red-900 mb-4">
            Latest News & Article
          </h2>
          <p className="text-gray-700 text-lg">
            In today’s fast-paced world, staying informed is key to staying
            competitive. Whether you're in technology, education, or the
            culinary arts, keeping up with the latest news and articles in your
            field ensures you stay ahead.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-white shadow rounded overflow-hidden"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-2">
                    <span className="inline-block mr-2">📅</span>
                    {article.date}
                  </p>
                  <h3 className="text-xl font-bold text-red-900 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">
                    {article.description}
                  </p>
                  <a
                    href={article.link}
                    className="text-red-700 font-semibold hover:underline"
                  >
                    See More
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div>
            {sideArticles.map((article, index) => (
              <div key={index} className="mb-6">
                <p className="text-sm text-gray-500 mb-1">
                  <span className="inline-block mr-2">📅</span>
                  {article.date}
                </p>
                <a
                  href={article.link}
                  className="text-lg font-semibold text-red-900 hover:underline"
                >
                  {article.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection;
