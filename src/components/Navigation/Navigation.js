import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <nav title="Main navigation">
        <ul>
          <li>
            <Link to="projects">Projects list</Link>
          </li>
          <li>
            <Link to="new">New project</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
