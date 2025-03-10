import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RoutePaths from "./RoutePaths";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Program from "../Pages/Program";
import Faculty from "../Pages/Faculty";
import Blogs from "../Pages/Blogs";
import Contact from "../Pages/Contact";
import Certificate from "../Pages/Certificate";
import NotFound from "../Pages/NotFound";
import ApplyNow from "../Pages/ApplyNow";

import HomeLayout from "../Layouts/HomeLayout";
import OtherPageLayout from "../Layouts/OtherPageLayout";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path={RoutePaths.HOME} element={<Home />} />
      </Route>
      <Route path="/" element={<OtherPageLayout />}>
        <Route path={RoutePaths.NotFound} element={<NotFound />} />
        <Route path={RoutePaths.ABOUT} element={<About />} />
        <Route path={RoutePaths.PROGRAM} element={<Program />} />
        <Route path={RoutePaths.FACULTY} element={<Faculty />} />
        <Route path={RoutePaths.BLOGS} element={<Blogs />} />
        <Route path={RoutePaths.CONTACT} element={<Contact />} />
        <Route path={RoutePaths.CERTIFICATE} element={<Certificate />} />
        <Route path={RoutePaths.ApplyNow} element={<ApplyNow />} />
      </Route>
    </Routes>
  </Router>
);

export default AppRoutes;
