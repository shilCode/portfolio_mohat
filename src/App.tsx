import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectPage from "./components/ProjectPage";
import Home from "./components/Home";
import WorkExperience from "./components/WorkExperience";
import TechStack from "./components/TechStack";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <Home />
        <WorkExperience />
        <TechStack />
        <ProjectPage />
        <Footer />
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
