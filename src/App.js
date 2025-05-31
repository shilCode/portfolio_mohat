import Home from "./components/Home";
import { Analytics } from "@vercel/analytics/react";
import WorkExperience from "./components/WorkExperience";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Home />
      <WorkExperience />
      <TechStack />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
