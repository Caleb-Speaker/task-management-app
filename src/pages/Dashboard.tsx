import { Link } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';

const Dashboard = () => {
  const { tasks, deleteTask } = useTasks();

  return (
    <div>
      <h1>Task Dashboard</h1>
      <Link to="/task/new">Create New Task</Link>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <Link to={`/task/${task.id}`}>{task.title}</Link>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <Link to={`/task/${task.id}/edit`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;