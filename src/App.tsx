import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import ProjectPage from "./pages/ProjectPage";
import Home from "./components/Home";
import WorkExperience from "./components/WorkExperience";
import TechStack from "./components/TechStack";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/tech-stack" element={<TechStack />} />
        </Routes>
        {/* <div className="min-h-screen bg-background text-foreground"> */}
          <Home />
          <WorkExperience />
          <TechStack />
          <Footer />
          <Analytics />
        {/* </div> */}

      </div>
    </Router>
  );
}

export default App;
