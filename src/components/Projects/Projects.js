import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProjectThunk,
  loadProjectsThunk,
} from "../../redux/thunks/projectsThunks";
import Project from "../Project/Project";

const Projects = () => {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  const deleteProject = (id) => {
    dispatch(deleteProjectThunk(id));
  };

  useEffect(() => {
    dispatch(loadProjectsThunk);
  }, [dispatch]);

  return (
    <ul>
      {projects.map((project) => (
        <Project key={project.id} project={project} onDelete={deleteProject} />
      ))}
    </ul>
  );
};

export default Projects;
