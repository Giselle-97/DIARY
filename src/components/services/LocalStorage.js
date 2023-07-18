import { useEffect } from 'react';

const LocalStorage = ({ tasks, setTasks }) => {
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, [setTasks]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return null;
};

export default LocalStorage;
