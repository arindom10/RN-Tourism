import CallToActionSection from "../HomePageComponents/CallToActionSection";
import BlogPageStarting from "./BlogPageStarting";
import CulinaryExcellenceSection from "./CulinaryExcellenceSection";
import NewsAndArticle from "./NewsAndArticle";

const BlogPageOverView = () => {
  return (
    <div>
      <BlogPageStarting />
      <CulinaryExcellenceSection />
      <NewsAndArticle />
      <CallToActionSection />
    </div>
  );
};

export default BlogPageOverView;
