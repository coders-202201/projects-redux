import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";

function App() {
  return (
    <>
      <Navigation />
      <h1>Projects App</h1>
      <Routes>
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/" element={<Navigate to="/projects" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
