import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

import Button from './Button/Button';

const TaskDetails = () => {
  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState({});
  const [error, setError] = useState(null);

  const params = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch(`http://localhost:5000/tasks/${params.id}`);
      const data = await res.json();

      if (res.status === 404) {
        navigate('/');
      }

      setTask(data);
      setLoading(false);
    };

    fetchTask();
  });

  return (
    <>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          <h3>Text: {task.text}</h3>
          <h3>Hours: {task.hours}</h3>
          <h3>Path: {pathname}</h3>
          <Button onClick={() => navigate('/')} text={'Go back'} />
        </div>
      )}
    </>
  );
};

export default TaskDetails;
