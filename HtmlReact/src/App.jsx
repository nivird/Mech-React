import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header /> {/* Include Header at the top */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        
      </Routes>

      <Footer /> {/* Include Footer at the bottom */}
    </Router>
  );
}

export default App;
