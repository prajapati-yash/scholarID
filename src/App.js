import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Scholarships from "./pages/Scholarships";
import ScholarshipInfo from "./components/scholarships/ScholarshipInfo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Scholarships />}></Route>
          <Route
            path="/scholarship-details"
            element={<ScholarshipInfo />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
