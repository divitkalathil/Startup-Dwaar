import React from "react";
import NavigationBar from "./components/Navigation/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Founder from "./components/Screens/Founder";
import Incubator from "./components/Screens/Incubator";
import Investor from "./components/Screens/Investor";
import Mentor from "./components/Screens/Mentor";
import JobSeeker from "./components/Screens/JobSeeker";
import Home from "./components/Screens/Home/Home";
import Footer from "./components/Screens/Footer/Footer";
import PreSignup from "./components/Screens/SignupPages/Signup";
import SignupForm from "./components/Screens/SignupPages/SignupForm";
import FounderDetails from "./components/Screens/SignupPages/FounderDetails";
import StartupDetails from "./components/Screens/SignupPages/StartupDetails";

const App = () => {
  return (
    <div className="bg-secondary">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/founder" element={<Founder />} />
          <Route path="/investor" element={<Investor />} />
          <Route path="/incubator" element={<Incubator />} />
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/job-seeker" element={<JobSeeker />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<PreSignup />} />
          <Route path="signup/:user" element={<SignupForm />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
