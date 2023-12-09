import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Scholarships from "./pages/Scholarships";
import ScholarshipInfo from "./components/scholarships/ScholarshipInfo";
import ScholarshipApplicants from "./components/dashboard/ScholarshipApplicants";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Scholarships />}></Route>
          <Route path="/admin-dashboard/*" element={<Admin />}></Route>
          <Route
            path="/scholarship-details"
            element={<ScholarshipInfo />}
          ></Route>
          <Route
            path="/admin-dashboard/scholarship-applicants"
            element={<ScholarshipApplicants />}
          ></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
