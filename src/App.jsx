import Home from "./sections/Home";
import { Analytics } from "@vercel/analytics/react";
import WorkExperience from "./sections/WorkExperience";
import TechStack from "./sections/TechStack";
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Home />
        <WorkExperience />
        <TechStack />
      </Layout>
      <Analytics />
    </ThemeProvider>
  );
}

export default App;
