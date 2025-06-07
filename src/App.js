import Home from "./components/Home";
import { Analytics } from "@vercel/analytics/react";
import WorkExperience from "./components/WorkExperience";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-[1200px] mx-auto">
        <Header />
        <Home />
        <WorkExperience />
        <TechStack />
        <Footer />
        <Analytics />
      </div>
    </div>
  );
}

export default App;
