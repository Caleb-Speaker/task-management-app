import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TaskForm from './pages/TaskForm';
import TaskDetails from './pages/TaskDetails';
import AuthButtons from './components/AuthButtons';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading, isAuthenticated, user } = useAuth0();
  console.log("Auth0 State:", { isLoading, isAuthenticated, user });

  if (isLoading) {
    return <div style={{ padding: '2rem' }}>Loading...</div>;
  }

  return (
    <>
      <header style={{ padding: '1rem', background: '#f0f0f0', marginBottom: '1rem' }}>
        <h1>Task Management App</h1>
        <AuthButtons />
        {isAuthenticated && user && (
          <p style={{ marginTop: '0.5rem' }}>Welcome, {user.name}</p>
        )}
      </header>

      <main style={{ padding: '1rem' }}>
        <Routes>
          {isAuthenticated ? (
            <>
              <Route path="/" element={<Dashboard />} />
              <Route path="/task/new" element={<TaskForm />} />
              <Route path="/task/:id" element={<TaskDetails />} />
              <Route path="/task/:id/edit" element={<TaskForm />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              <Route
                path="/"
                element={
                  <div>
                    <h2>Please log in to access your tasks.</h2>
                  </div>
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </main>
    </>
  );
}

export default App;