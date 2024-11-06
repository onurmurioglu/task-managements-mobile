import {useState, useCallback} from 'react';
import {Task} from '../types/Task';

const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Görev 1',
    description: 'Bu ilk görevin açıklamasıdır.',
    completed: false,
  },
  {
    id: '2',
    title: 'Görev 2',
    description: 'Bu ikinci görevin açıklamasıdır.',
    completed: true,
  },
];

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);

  const fetchTasks = useCallback(async () => {
    console.log('Fetching tasks (mock data)');
  }, []);

  const addTask = useCallback(async (task: Task) => {
    setTasks(prevTasks => [...prevTasks, task]);
  }, []);

  const updateTask = useCallback(async (updatedTask: Task) => {
    setTasks(prevTasks =>
      prevTasks.map(task => (task.id === updatedTask.id ? updatedTask : task)),
    );
  }, []);

  const deleteTask = useCallback(async (taskId: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  }, []);

  return {
    tasks,
    fetchTasks,
    addTask,
    updateTask,
    deleteTask,
  };
};
