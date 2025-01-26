import { Outlet } from "react-router-dom";
import Footer from "../Components/Common/Footer/Footer";

const HomeLayout = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
