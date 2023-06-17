import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import ChangePage from "./components/ChangePage.jsx";
import PersonalInfo from "./pages/PersonalInfo.jsx";
import SelectPlan from "./pages/SelectPlan.jsx";
import Addons from "./pages/Addons.jsx";
import FinishingUp from "./pages/FinishingUp.jsx";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route path="/select-plan" element={<SelectPlan />} />
        <Route path="/addons" element={<Addons />} />
        <Route path="/finishing-up" element={<FinishingUp />} />
      </Routes>
      <ChangePage />
      <Footer />
    </Router>
  );
}

export default App;
