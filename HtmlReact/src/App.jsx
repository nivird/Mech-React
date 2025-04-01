import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/Services";
import Booking from "./components/Booking";
import Customerlogin from "./pages/Customerlogin";
import Customersignup from "./pages/Customersignup";
import Mechaniclogin from "./pages/Mechaniclogin";
import Mechanicsignup from "./pages/Mechanicsignup";
import Customerintakeform from "./components/Customerintakeform";



function App() {
  const location= useLocation();
  const backgrounds = {
    "/":"url('/assets/images/Logo-sky.jpg)",
    "/about":"url('/assets/images/Logocozy-office.jpg')",
    "/contact":"url('/assets/images/Logocozy-office.jpg')",
  };
  return (
    <div
    style={{
      backgroundImage: backgrounds[location.pathname] || "none",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
    }}
  >
    <Router>
      <Header /> {/* Include Header at the top */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/customerlogin" element={<Customerlogin />} />
        <Route path="/customersignup" element={<Customersignup />} />
        <Route path="/mechaniclogin" element={<Mechaniclogin />} />
        <Route path="/mechanicsignup" element={<Mechanicsignup />} />
        <Route path="/customerintakeform" element={<Customerintakeform />} />
      </Routes>

      <Footer /> {/* Include Footer at the bottom */}
    </Router>
    </div>
  );
}

export default App;
