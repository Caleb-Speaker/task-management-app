import { useParams } from 'react-router-dom';
import { useTaskContext } from '../context/TaskContext';

const TaskDetails = () => {
  const { id } = useParams();
  const { tasks } = useTaskContext();
  const task = tasks.find(t => t.id === id);

  if (!task) return <p>Task not found.</p>;

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.completed ? "Completed" : "Pending"}</p>
      {task.dueDate && <p>Due Date: {task.dueDate}</p>}
    </div>
  );
};

export default TaskDetails;