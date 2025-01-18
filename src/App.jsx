import Footer from "./Components/Common/Footer/Footer";
import Navbar from "./Components/Common/Navbar/Navbar";
import AppRoutes from "./Routes/AppRoutes";

const App = () => (
  <div className="app">
    <Navbar />
    <AppRoutes />
    <Footer />
  </div>
);

export default App;
