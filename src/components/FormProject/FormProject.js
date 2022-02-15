import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProjectThunk } from "../../redux/thunks/projectsThunks";

const groups = [
  "API Coders",
  "Preventdefaulteaos",
  "WeeklyMenuIng",
  "StarFighters",
  "It's a sync",
  "kebab-case",
  "Los panas del Trivial",
];

const FormProject = () => {
  const blankForm = {
    name: "",
    group: "",
  };

  const [formData, setFormData] = useState(blankForm);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        Create
      </button>
    </form>
  );
};

export default FormProject;
