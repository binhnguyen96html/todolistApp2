import Task from "./Task";

const List = ({ tasks, onEdit, onDelete }) => {
  const renderedTasks = tasks.map((task) => {
    return <Task key={task.id} task={task} onEdit={onEdit} onDelete={onDelete}/>;
  });
  return (
    <div>
      {renderedTasks}
    </div>
  );
};

export default List;
