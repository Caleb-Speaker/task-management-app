import { useParams, Link } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';

const TaskDetails = () => {
  const { id } = useParams();
  const { tasks } = useTasks();
  const task = tasks.find(t => t.id === id);

  if (!task) return <p>Task not found</p>;

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Due: {task.dueDate}</p>
      <p>Status: {task.completed ? 'Completed' : 'Incomplete'}</p>
      <Link to={`/task/${task.id}/edit`}>Edit</Link>
    </div>
  );
};

export default TaskDetails;