import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RoutePaths from "./RoutePaths";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Program from "../Pages/Program/Program";
import Faculty from "../Pages/Faculty/Faculty";
import Blogs from "../Pages/Blogs/Blogs";
import Contact from "../Pages/Contact/Contact";
import Certificate from "../Pages/Certificate/Certificate";
import NotFound from "../Pages/NotFound/NotFound";
import ApplyNow from "../Pages/ApplyNow/ApplyNow";

import Navbar from "../Components/Common/Navbar/Navbar";
import Footer from "../Components/Common/Footer/Footer";

const AppRoutes = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path={RoutePaths.HOME} element={<Home />} />
      <Route path={RoutePaths.NotFound} element={<NotFound />} />
      <Route path={RoutePaths.ABOUT} element={<About />} />
      <Route path={RoutePaths.PROGRAM} element={<Program />} />
      <Route path={RoutePaths.FACULTY} element={<Faculty />} />
      <Route path={RoutePaths.BLOGS} element={<Blogs />} />
      <Route path={RoutePaths.CONTACT} element={<Contact />} />
      <Route path={RoutePaths.CERTIFICATE} element={<Certificate />} />
      <Route path={RoutePaths.ApplyNow} element={<ApplyNow />} />
    </Routes>
    <Footer />
  </Router>
);

export default AppRoutes;
