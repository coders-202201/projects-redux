const Project = ({ project: { id, name, group }, onDelete }) => {
  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <li>
      <h3>{name}</h3>
      <p>Group: {group}</p>
      <button onClick={onClickDelete}>delete</button>
    </li>
  );
};

export default Project;
