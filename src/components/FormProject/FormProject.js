import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createProjectThunk,
  loadCurrentProjectThunk,
} from "../../redux/thunks/projectsThunks";

const groups = [
  "API Coders",
  "Preventdefaulteaos",
  "WeeklyMenuIng",
  "StarFighters",
  "It's a sync",
  "kebab-case",
  "Los panas del Trivial",
];

const FormProject = ({ isEditing, id }) => {
  const blankForm = {
    name: "",
    group: "",
  };

  const [formData, setFormData] = useState(blankForm);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentProject = useSelector((state) => state.currentProject);

  const buttonText = isEditing ? "Update" : "Create";

  const changeData = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(createProjectThunk(formData));
    navigate("/projects");
  };

  const isFormInvalid = formData.name === "" || formData.group === "";

  useEffect(() => {
    if (isEditing) {
      dispatch(loadCurrentProjectThunk(id));
    }
  }, [dispatch, isEditing, id]);

  useEffect(() => {
    if (currentProject.name) {
      setFormData(currentProject);
    }
  }, [currentProject]);

  return (
    <form noValidate autoComplete="off" onSubmit={submitForm}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>{" "}
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={changeData}
        />
      </div>
      <div className="form-group">
        <label htmlFor="group">Group:</label>{" "}
        <select id="group" value={formData.group} onChange={changeData}>
          <option value="">Select group</option>
          {groups.map((group) => (
            <option key={group} value={group}>
              {group}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" disabled={isFormInvalid}>
        {buttonText}
      </button>
    </form>
  );
};

export default FormProject;
