import { useParams, useNavigate } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';
import { useState, useEffect } from 'react';
import { Task } from '../types/task';

const TaskForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, addTask, updateTask } = useTasks();

  const existingTask = tasks.find(t => t.id === id);
  const [formData, setFormData] = useState<Omit<Task, 'id'>>({
    title: '',
    description: '',
    dueDate: '',
    completed: false,
  });

  useEffect(() => {
    if (existingTask) {
      const { id, ...rest } = existingTask;
      setFormData(rest);
    }
  }, [existingTask]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id && existingTask) {
      updateTask(id, { ...formData, id });
    } else {
      addTask(formData);
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={formData.title}
        onChange={e => setFormData({ ...formData, title: e.target.value })}
        placeholder="Title"
        required
      />
      <textarea
        value={formData.description}
        onChange={e => setFormData({ ...formData, description: e.target.value })}
        placeholder="Description"
      />
      <input
        type="date"
        value={formData.dueDate}
        onChange={e => setFormData({ ...formData, dueDate: e.target.value })}
      />
      <label>
        Completed:
        <input
          type="checkbox"
          checked={formData.completed}
          onChange={e => setFormData({ ...formData, completed: e.target.checked })}
        />
      </label>
      <button type="submit">{id ? 'Update' : 'Create'} Task</button>
    </form>
  );
};

export default TaskForm;