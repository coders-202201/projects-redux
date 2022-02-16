import { useParams } from "react-router-dom";
import FormProject from "../../components/FormProject/FormProject";

const FormPage = () => {
  const params = useParams();
  const isEditing = !!params.projectId;
  const title = isEditing ? "Edit project" : "New project";

  return (
    <>
      <h2>{title}</h2>
      <FormProject isEditing={isEditing} id={params.projectId} />
    </>
  );
};

export default FormPage;
