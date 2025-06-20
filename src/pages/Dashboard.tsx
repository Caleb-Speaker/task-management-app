import { useTaskContext } from '../context/TaskContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { tasks, deleteTask } = useTaskContext();

  return (
    <div>
      <h2>Task Dashboard</h2>
      <Link to="/task/new" className="btn btn-primary mb-3">Create Task</Link>
      {tasks.map(task => (
        <div key={task.id} className="card mb-2">
          <div className="card-body">
            <h5>{task.title}</h5>
            <p>{task.description}</p>
            {task.dueDate && <p>Due: {task.dueDate}</p>}
            <p>Status: {task.completed ? '✅ Completed' : '🕓 Pending'}</p>
            <Link to={`/task/${task.id}`} className="btn btn-sm btn-info me-2">View</Link>
            <Link to={`/task/${task.id}/edit`} className="btn btn-sm btn-warning me-2">Edit</Link>
            <button onClick={() => deleteTask(task.id)} className="btn btn-sm btn-danger">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;