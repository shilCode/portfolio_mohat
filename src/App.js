import { Analytics } from "@vercel/analytics/react";
import Layout from "./components/Layout";
import { Home, WorkExperience, TechStack } from "./sections";

function App() {
  return (
    <Layout>
      <Home />
      <WorkExperience />
      <TechStack />
      <Analytics />
    </Layout>
  );
}

export default App;
