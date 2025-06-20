import { useParams, useNavigate } from 'react-router-dom';
import { useTaskContext } from '../context/TaskContext';
import { useState, useEffect } from 'react';

const TaskForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, addTask, updateTask } = useTaskContext();

  const editing = Boolean(id);
  const existing = editing ? tasks.find(t => t.id === id) : undefined;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (editing && existing) {
      setTitle(existing.title);
      setDescription(existing.description);
      setDueDate(existing.dueDate || '');
      setCompleted(existing.completed);
    }
  }, [editing, existing]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      setError('Title is required');
      return;
    }

    const taskData = {
      title,
      description,
      dueDate,
      completed,
    };

    if (editing && existing) {
      updateTask(existing.id, { ...taskData, id: existing.id });
    } else {
      addTask(taskData); // ID is generated in context
    }

    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editing ? 'Edit Task' : 'Create Task'}</h2>
      {error && <p className="text-danger">{error}</p>}

      <div className="mb-3">
        <label className="form-label">Title</label>
        <input className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
      </div>

      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
      </div>

      <div className="mb-3">
        <label className="form-label">Due Date</label>
        <input type="date" className="form-control" value={dueDate} onChange={e => setDueDate(e.target.value)} />
      </div>

      <div className="form-check mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="completedCheck"
          checked={completed}
          onChange={e => setCompleted(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="completedCheck">
          Mark as Completed
        </label>
      </div>

      <button className="btn btn-success" type="submit">
        {editing ? 'Update Task' : 'Create Task'}
      </button>
    </form>
  );
};

export default TaskForm;