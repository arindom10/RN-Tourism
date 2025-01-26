import Navbar from "../Components/Common/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Common/Footer/Footer";

const OtherPageLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default OtherPageLayout;
